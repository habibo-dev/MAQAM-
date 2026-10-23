-- MAQAM Supabase schema
-- Run this once in Supabase SQL Editor for a NEW project.
-- Do not run against an existing production database without reviewing it first.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  bio text not null default '',
  skills text[] not null default '{}',
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  provider_id uuid not null references public.profiles(id) on delete cascade,
  title text not null check (char_length(trim(title)) between 3 and 100),
  description text not null check (char_length(trim(description)) between 10 and 3000),
  category text not null check (char_length(trim(category)) between 2 and 50),
  points integer not null check (points between 1 and 1000000),
  status text not null default 'published' check (status in ('draft','published','paused','archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists services_status_category_idx on public.services(status, category);
create index if not exists services_provider_idx on public.services(provider_id);

create table if not exists public.service_requests (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references public.services(id) on delete restrict,
  requester_id uuid not null references public.profiles(id) on delete restrict,
  provider_id uuid not null references public.profiles(id) on delete restrict,
  points integer not null check (points > 0),
  status text not null default 'pending' check (status in ('pending','accepted','in_progress','completed','cancelled','rejected')),
  message text not null default '' check (char_length(message) <= 2000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (requester_id <> provider_id)
);

create index if not exists service_requests_requester_idx on public.service_requests(requester_id, created_at desc);
create index if not exists service_requests_provider_idx on public.service_requests(provider_id, created_at desc);

-- Ledger is append-only for regular users. Balance is computed from entries.
create table if not exists public.wallet_transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete restrict,
  request_id uuid references public.service_requests(id) on delete restrict,
  amount integer not null check (amount <> 0),
  transaction_type text not null check (transaction_type in ('initial_credit','escrow_hold','escrow_release','refund','admin_adjustment')),
  description text not null default '' check (char_length(description) <= 500),
  created_at timestamptz not null default now()
);

create index if not exists wallet_transactions_user_idx on public.wallet_transactions(user_id, created_at desc);
create unique index if not exists wallet_request_type_user_unique
  on public.wallet_transactions(request_id, user_id, transaction_type)
  where request_id is not null;

alter table public.profiles enable row level security;
alter table public.services enable row level security;
alter table public.service_requests enable row level security;
alter table public.wallet_transactions enable row level security;

drop policy if exists "Profiles are viewable by everyone" on public.profiles;
create policy "Profiles are viewable by everyone" on public.profiles for select using (true);
drop policy if exists "Users insert own profile" on public.profiles;
create policy "Users insert own profile" on public.profiles for insert to authenticated with check (auth.uid() = id);
drop policy if exists "Users update own profile" on public.profiles;
create policy "Users update own profile" on public.profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists "Published services are public" on public.services;
create policy "Published services are public" on public.services for select using (status = 'published' or auth.uid() = provider_id);
drop policy if exists "Users create own services" on public.services;
create policy "Users create own services" on public.services for insert to authenticated with check (auth.uid() = provider_id);
drop policy if exists "Users update own services" on public.services;
create policy "Users update own services" on public.services for update to authenticated using (auth.uid() = provider_id) with check (auth.uid() = provider_id);
drop policy if exists "Users delete own services" on public.services;
create policy "Users delete own services" on public.services for delete to authenticated using (auth.uid() = provider_id);

drop policy if exists "Participants can view requests" on public.service_requests;
create policy "Participants can view requests" on public.service_requests for select to authenticated using (auth.uid() = requester_id or auth.uid() = provider_id);
drop policy if exists "Requester can create own request" on public.service_requests;
create policy "Requester can create own request" on public.service_requests for insert to authenticated with check (auth.uid() = requester_id and auth.uid() <> provider_id);
drop policy if exists "Participants can update request status" on public.service_requests;
create policy "Participants can update request status" on public.service_requests for update to authenticated using (auth.uid() = requester_id or auth.uid() = provider_id) with check (auth.uid() = requester_id or auth.uid() = provider_id);

drop policy if exists "Users view own wallet transactions" on public.wallet_transactions;
create policy "Users view own wallet transactions" on public.wallet_transactions for select to authenticated using (auth.uid() = user_id);
-- No direct INSERT/UPDATE/DELETE policies on wallet_transactions by design.
-- Add audited SECURITY DEFINER RPCs or server-side functions before enabling real transfers.

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(nullif(trim(new.raw_user_meta_data ->> 'display_name'), ''), split_part(coalesce(new.email, 'member'), '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Intentionally no fake initial points, escrow RPC, or public admin permissions.
-- Configure email confirmation and password/security policies in Supabase Auth settings.
