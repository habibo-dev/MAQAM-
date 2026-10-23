(() => {
  const byId = (id) => document.getElementById(id);
  const dialog = byId("authDialog");
  const form = byId("authForm");
  if (!dialog || !form) return;

  let mode = "signin";
  let client = null;
  let currentUser = null;

  const setMessage = (message, kind = "") => {
    const target = byId("authMessage");
    target.textContent = message;
    target.dataset.kind = kind;
  };
  const configured = () => {
    const config = window.MAQAM_SUPABASE_CONFIG;
    return Boolean(
      config &&
      /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(config.url || "") &&
      config.anonKey &&
      !config.anonKey.includes("YOUR_SUPABASE")
    );
  };
  const setMode = (nextMode) => {
    mode = nextMode;
    const signup = mode === "signup";
    byId("authTitle").textContent = signup ? "Create your MAQAM account" : "Welcome back";
    byId("authDescription").textContent = signup
      ? "Create an account to publish services and manage your profile."
      : "Sign in to continue to your MAQAM account.";
    byId("authName").hidden = !signup;
    byId("authName").required = signup;
    byId("authName").parentElement.hidden = !signup;
    byId("authPassword").autocomplete = signup ? "new-password" : "current-password";
    byId("authSubmitBtn").textContent = signup ? "Create account" : "Sign in";
    byId("authModeBtn").textContent = signup ? "I already have an account" : "Create a new account";
    setMessage("");
  };
  const openDialog = () => {
    if (currentUser) {
      setMode("signin");
      byId("authName").parentElement.hidden = true;
      byId("authEmail").parentElement.hidden = true;
      byId("authPassword").parentElement.hidden = true;
      byId("authSubmitBtn").hidden = true;
      byId("authModeBtn").hidden = true;
      byId("authTitle").textContent = "Your MAQAM account";
      byId("authDescription").textContent = currentUser.email || "You are signed in.";
      byId("authLogoutBtn").classList.remove("hidden");
      setMessage("You are signed in.", "success");
    } else {
      byId("authName").parentElement.hidden = mode !== "signup";
      byId("authEmail").parentElement.hidden = false;
      byId("authPassword").parentElement.hidden = false;
      byId("authSubmitBtn").hidden = false;
      byId("authModeBtn").hidden = false;
      byId("authLogoutBtn").classList.add("hidden");
      setMode(mode);
      if (!configured()) setMessage("Account setup is not connected yet. Add your Supabase project URL and public publishable/anon key in supabase-config.js, then redeploy.", "error");
    }
    if (!dialog.open) dialog.showModal();
  };
  const renderSession = (user) => {
    currentUser = user || null;
    const openBtn = byId("authOpenBtn");
    const label = byId("authUserLabel");
    if (currentUser) {
      openBtn.textContent = "My account";
      label.textContent = currentUser.email || "Signed in";
      label.classList.remove("hidden");
    } else {
      openBtn.textContent = "Sign in / Create account";
      label.textContent = "";
      label.classList.add("hidden");
    }
  };

  byId("authOpenBtn").addEventListener("click", openDialog);
  byId("authCloseBtn").addEventListener("click", () => dialog.close());
  byId("authModeBtn").addEventListener("click", () => setMode(mode === "signin" ? "signup" : "signin"));
  byId("authLogoutBtn").addEventListener("click", async () => {
    if (!client) return;
    const { error } = await client.auth.signOut();
    if (error) {
      setMessage(error.message, "error");
      return;
    }
    renderSession(null);
    dialog.close();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!configured() || !client) {
      setMessage("Supabase is not configured. Follow SUPABASE_SETUP.md, then reload the site.", "error");
      return;
    }
    const email = byId("authEmail").value.trim();
    const password = byId("authPassword").value;
    const name = byId("authName").value.trim();
    const submit = byId("authSubmitBtn");
    submit.disabled = true;
    setMessage(mode === "signup" ? "Creating your account…" : "Signing in…");
    try {
      if (mode === "signup") {
        const { data, error } = await client.auth.signUp({
          email,
          password,
          options: { data: { display_name: name } }
        });
        if (error) throw error;
        if (data.session) {
          renderSession(data.user);
          setMessage("Account created and signed in.", "success");
        } else {
          setMessage("Account created. Check your email to confirm it, then sign in.", "success");
        }
      } else {
        const { data, error } = await client.auth.signInWithPassword({ email, password });
        if (error) throw error;
        renderSession(data.user);
        setMessage("Signed in successfully.", "success");
        window.setTimeout(() => dialog.close(), 700);
      }
    } catch (error) {
      setMessage(error && error.message ? error.message : "Authentication failed. Please try again.", "error");
    } finally {
      submit.disabled = false;
    }
  });

  if (!configured()) {
    byId("authOpenBtn").title = "Set up Supabase to enable accounts";
    return;
  }
  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    byId("authOpenBtn").title = "Could not load the authentication library";
    return;
  }
  client = window.supabase.createClient(
    window.MAQAM_SUPABASE_CONFIG.url,
    window.MAQAM_SUPABASE_CONFIG.anonKey
  );
  client.auth.getSession().then(({ data, error }) => {
    if (!error) renderSession(data.session ? data.session.user : null);
  });
  client.auth.onAuthStateChange((_event, session) => renderSession(session ? session.user : null));
  setMode("signin");
})();
