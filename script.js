(() => {
const services = [
 {id:1,title:"Brand strategy sprint",category:"Strategy",points:420,match:94,provider:"Meriem B.",initials:"MB",rating:"4.9",description:"A focused strategy session to sharpen your positioning, brand story, and next steps.",icon:"✧",kind:"Offer"},
 {id:2,title:"MVP quality audit",category:"Technology",points:260,match:88,provider:"Yacine K.",initials:"YK",rating:"4.8",description:"Practical feedback on flows, usability, and quality risks before your next release.",icon:"⌘",kind:"Request"},
 {id:3,title:"University research mentor",category:"Education",points:180,match:82,provider:"Nour A.",initials:"NA",rating:"5.0",description:"Get structured guidance for research questions, methodology, and study planning.",icon:"⌁",kind:"Offer"},
 {id:4,title:"Visual identity starter",category:"Design",points:340,match:91,provider:"Lina S.",initials:"LS",rating:"4.9",description:"Build a coherent visual direction with colors, typography, and a practical starter guide.",icon:"◈",kind:"Offer"},
 {id:5,title:"Portfolio review",category:"Education",points:120,match:86,provider:"Amine D.",initials:"AD",rating:"4.7",description:"Get constructive advice to make your portfolio clearer, stronger, and easier to scan.",icon:"▤",kind:"Offer"},
 {id:6,title:"Landing page tune-up",category:"Technology",points:300,match:89,provider:"Salma R.",initials:"SR",rating:"4.8",description:"A review of your landing page content, clarity, responsiveness, and conversion flow.",icon:"↗",kind:"Request"},
 {id:7,title:"Arabic copy polish",category:"Writing",points:150,match:87,provider:"Aya M.",initials:"AM",rating:"4.9",description:"Improve Arabic web copy for clarity, tone, grammar, and a more natural reading flow.",icon:"آ",kind:"Offer"},
 {id:8,title:"Social content plan",category:"Marketing",points:220,match:84,provider:"Rania T.",initials:"RT",rating:"4.8",description:"A straightforward content calendar and campaign ideas tailored to your audience.",icon:"◎",kind:"Offer"},
 {id:9,title:"Dashboard data review",category:"Technology",points:280,match:85,provider:"Walid H.",initials:"WH",rating:"4.7",description:"Review KPI choices, chart readability, and the story your dashboard communicates.",icon:"▥",kind:"Request"}
];
const categories = [
 {key:"All",icon:"✦",en:"All skills",ar:"كل الخدمات",enSub:"Browse everything",arSub:"اكتشف كل الخدمات"},
 {key:"Technology",icon:"⌘",en:"Technology",ar:"التكنولوجيا",enSub:"Web & product",arSub:"الويب والمنتجات"},
 {key:"Design",icon:"◈",en:"Design",ar:"التصميم",enSub:"Visual & brand",arSub:"الهوية والتصميم"},
 {key:"Education",icon:"⌁",en:"Education",ar:"التعليم",enSub:"Learn together",arSub:"تعلّم وتطوّر"},
 {key:"Strategy",icon:"✧",en:"Strategy",ar:"الاستراتيجية",enSub:"Plan the next move",arSub:"خطّط لخطوتك"},
 {key:"Writing",icon:"آ",en:"Writing",ar:"الكتابة",enSub:"Words that work",arSub:"كلمات مؤثرة"},
 {key:"Marketing",icon:"◎",en:"Marketing",ar:"التسويق",enSub:"Reach your people",arSub:"تواصل مع جمهورك"}
];
const t = {
en:{
nav_market:"Marketplace",nav_categories:"Categories",nav_how:"How it works",nav_wallet:"Wallet",explore:"Explore services",offer:"Offer a service",
eyebrow:"SKILLS INTO OPPORTUNITIES",hero_title:'Your skills have value.<br><span>Make it count.</span>',hero_text:"Discover useful services, share what you do best, and exchange value with a community that believes opportunity works both ways.",trust_one:"Skills-led community",trust_two:"Exchange with clarity",trust_three:"Built around trust",preview:"COMMUNITY SNAPSHOT",panel_title:"Exchange command center",demo:"Demo workspace",wallet_balance:"Sample wallet",points:"points",active_requests:"Active requests",in_progress:"in progress",reputation:"Reputation",community:"community rating",match_title:"Find your next good match",match_text:"Browse services by skill, category, or points budget.",sample_notice:"Illustrative data only. No real account or points are connected.",eyebrow_small:"FIND YOUR FLOW",cat_title:"Explore by category",all_services:"All services ↗",market_label:"THE MARKETPLACE",market_title:"Good skills. Shared value.",market_text:"Discover the people and services that can move your next idea forward.",services_available:"services to explore",search_placeholder:"Search services, skills, or people…",sort_recommended:"Recommended",sort_low:"Fewest points",sort_high:"Most points",empty_title:"No services found",empty_text:"Try another search or category.",clear_filters:"Clear filters",how_label:"SIMPLE BY DESIGN",how_title:"A better way to exchange.",step1_title:"Find what you need",step1_text:"Explore useful services and choose a match that fits your needs and points budget.",step2_title:"Make a request",step2_text:"Review the details, agree on expectations, and submit a clear service request.",step3_title:"Complete the exchange",step3_text:"Mark the demo request complete and see how your sample activity updates.",wallet_label:"VALUE YOU CAN SEE",wallet_title:"Know where your points go.",wallet_text:"A clear wallet preview helps you think ahead, compare services, and make choices with confidence.",browse_with_budget:"Browse services",available_balance:"Available sample balance",recent_activity:"Recent demo activity",not_real:"DEMO ONLY",wallet_disclaimer:"This is a front-end demonstration. No money or real points are transferred.",join_label:"YOUR NEXT STEP",cta_title:"Have a skill worth sharing?",cta_text:"Every useful skill can open a new door. Start by exploring the community.",explore_now:"Explore MAQAM ↗",footer_text:"Skills into opportunities.",demo_footer:"· Demonstration experience",request:"Request service",details:"View details",requested:"Requested",request_sent:"Demo request created for",request_prompt:"Submit a demo request for",points_balance:"Current sample balance",points_after:"Remaining after request",insufficient:"Your sample balance is too low for this service.",request_confirm:"Confirm demo request",close:"Close",demo_warning:"Demo only: this does not contact a provider or save a real transaction.",offer_label:"CONTRIBUTE TO THE COMMUNITY",offer_modal_title:"Share a skill",offer_modal_text:"This concept demo doesn't publish real listings yet. Tell us what you would offer.",skill_name:"Service or skill",points_price:"Points requested",save_demo_offer:"Preview offer",offer_preview:"Preview ready:",offer_required:"Please enter a service name and a positive points amount.",request_type:"Service request",sample_charge:"Illustrative points cost",recent_request:"Demo request created",welcome_activity:"Welcome sample balance",cat_all:"All",cat_technology:"Technology",cat_design:"Design",cat_education:"Education",cat_strategy:"Strategy",cat_writing:"Writing",cat_marketing:"Marketing",provider:"Provider",rating:"rating",match:"match",point_unit:"points",kind_offer:"Offer",kind_request:"Request",offer_button:"Offer a service",active_filter:"Selected category"
},
ar:{
nav_market:"السوق",nav_categories:"التصنيفات",nav_how:"كيف يعمل",nav_wallet:"المحفظة",explore:"استكشف الخدمات",offer:"قدّم خدمة",
eyebrow:"المهارات إلى فرص",hero_title:'مهاراتك لها قيمة.<br><span>اجعلها تصنع الفرق.</span>',hero_text:"اكتشف خدمات مفيدة، وشارك مهاراتك، وتبادل القيمة مع مجتمع يؤمن أن الفرص تُبنى بالتعاون.",trust_one:"مجتمع قائم على المهارات",trust_two:"تبادل واضح",trust_three:"الثقة أساسنا",preview:"لمحة عن المجتمع",panel_title:"مركز التبادل",demo:"مساحة تجريبية",wallet_balance:"محفظة تجريبية",points:"نقطة",active_requests:"الطلبات النشطة",in_progress:"قيد التنفيذ",reputation:"السمعة",community:"تقييم المجتمع",match_title:"اعثر على الخدمة المناسبة",match_text:"تصفّح الخدمات حسب المهارة أو الفئة أو ميزانيتك من النقاط.",sample_notice:"بيانات توضيحية فقط. لا يوجد حساب أو رصيد حقيقي مرتبط.",eyebrow_small:"ابدأ اكتشافك",cat_title:"استكشف حسب الفئة",all_services:"كل الخدمات ↗",market_label:"سوق الخدمات",market_title:"مهارات جيدة. قيمة مشتركة.",market_text:"اكتشف أشخاصًا وخدمات تساعدك على التقدم في فكرتك القادمة.",services_available:"خدمات للاستكشاف",search_placeholder:"ابحث عن خدمة أو مهارة أو شخص...",sort_recommended:"المقترحة",sort_low:"الأقل نقاطًا",sort_high:"الأعلى نقاطًا",empty_title:"لم نعثر على خدمات",empty_text:"جرّب البحث أو فئة أخرى.",clear_filters:"مسح التصفية",how_label:"ببساطة ووضوح",how_title:"طريقة أفضل للتبادل.",step1_title:"اعثر على ما تحتاجه",step1_text:"اكتشف الخدمات واختر ما يناسب احتياجاتك وميزانيتك من النقاط.",step2_title:"أرسل طلبًا",step2_text:"راجع التفاصيل واتفق على التوقعات وأرسل طلب خدمة واضحًا.",step3_title:"أكمل التبادل",step3_text:"أكمل الطلب التجريبي وشاهد تحديث سجل النشاط التوضيحي.",wallet_label:"قيمة واضحة",wallet_title:"اعرف أين تذهب نقاطك.",wallet_text:"تساعدك معاينة المحفظة على التخطيط ومقارنة الخدمات واتخاذ قرارات أوضح.",browse_with_budget:"تصفّح الخدمات",available_balance:"الرصيد التجريبي المتاح",recent_activity:"آخر الأنشطة التجريبية",not_real:"تجريبي فقط",wallet_disclaimer:"هذا عرض للواجهة فقط. لا يتم تحويل أموال أو نقاط حقيقية.",join_label:"خطوتك التالية",cta_title:"هل لديك مهارة تستحق المشاركة؟",cta_text:"كل مهارة مفيدة قد تفتح بابًا جديدًا. ابدأ باستكشاف المجتمع.",explore_now:"استكشف مقام ↗",footer_text:"المهارات إلى فرص.",demo_footer:"· تجربة توضيحية",request:"اطلب الخدمة",details:"عرض التفاصيل",requested:"تم الطلب",request_sent:"تم إنشاء طلب تجريبي للخدمة",request_prompt:"إنشاء طلب تجريبي لخدمة",points_balance:"رصيدك التجريبي الحالي",points_after:"الرصيد المتبقي بعد الطلب",insufficient:"رصيدك التجريبي لا يكفي لهذه الخدمة.",request_confirm:"تأكيد الطلب التجريبي",close:"إغلاق",demo_warning:"تجريبي فقط: لن يتم التواصل مع مقدم الخدمة ولن تُحفظ معاملة حقيقية.",offer_label:"ساهم في المجتمع",offer_modal_title:"شارك مهارتك",offer_modal_text:"هذا نموذج تصوري ولا ينشر إعلانات حقيقية بعد. أخبرنا بما يمكنك تقديمه.",skill_name:"الخدمة أو المهارة",points_price:"النقاط المطلوبة",save_demo_offer:"معاينة العرض",offer_preview:"المعاينة جاهزة:",offer_required:"أدخل اسم الخدمة وعددًا موجبًا من النقاط.",request_type:"طلب خدمة",sample_charge:"تكلفة بالنقاط للتوضيح",recent_request:"إنشاء طلب تجريبي",welcome_activity:"الرصيد التجريبي الأولي",cat_all:"الكل",cat_technology:"التكنولوجيا",cat_design:"التصميم",cat_education:"التعليم",cat_strategy:"الاستراتيجية",cat_writing:"الكتابة",cat_marketing:"التسويق",provider:"مقدم الخدمة",rating:"التقييم",match:"التوافق",point_unit:"نقطة",kind_offer:"عرض",kind_request:"طلب",offer_button:"قدّم خدمة",active_filter:"الفئة المختارة"
}};
let lang="en", selectedCategory="All", searchTerm="", sortMode="recommended", balance=1250, requests=0, activities=[{title:"Welcome sample balance",detail:"Demo wallet initialized",amount:"+1,250",icon:"✦"}], createdOffers=[];
const $=id=>document.getElementById(id);
function tr(key){return (t[lang]&&t[lang][key])||t.en[key]||key}
function catLabel(key){const found=categories.find(c=>c.key===key);return found?(lang==="ar"?found.ar:found.en):key}
function formatNum(n){return new Intl.NumberFormat(lang==="ar"?"ar-DZ":"en-US").format(n)}
function showToast(text){const toast=$("toast");toast.textContent=text;toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),2900)}
function renderCategories(){
 const cats=$("categoryGrid");
 cats.innerHTML=categories.filter(c=>c.key!=="All").map(c=>{const count=services.filter(s=>s.category===c.key).length;return '<button class="category-card '+(selectedCategory===c.key?"active":"")+'" data-cat="'+c.key+'"><span class="category-icon">'+c.icon+'</span><b>'+ (lang==="ar"?c.ar:c.en)+'</b><small>'+ (lang==="ar"?c.arSub:c.enSub)+'</small></button>'}).join("");
 cats.querySelectorAll("[data-cat]").forEach(el=>el.addEventListener("click",()=>setCategory(el.dataset.cat)));
}
function renderFilters(){
 const row=$("filterRow");
 row.innerHTML=categories.map(c=>'<button type="button" class="filter-chip '+(selectedCategory===c.key?"active":"")+'" data-filter="'+c.key+'">'+(lang==="ar"?c.ar:c.en)+'</button>').join("");
 row.querySelectorAll("[data-filter]").forEach(el=>el.addEventListener("click",()=>setCategory(el.dataset.filter)));
}
function visibleServices(){
 let list=services.filter(s=>(selectedCategory==="All"||s.category===selectedCategory)&&((s.title+" "+s.category+" "+s.provider+" "+s.description).toLowerCase().includes(searchTerm.toLowerCase())));
 if(sortMode==="low")list.sort((a,b)=>a.points-b.points);
 if(sortMode==="high")list.sort((a,b)=>b.points-a.points);
 if(sortMode==="recommended")list.sort((a,b)=>b.match-a.match);
 return list;
}
function renderServices(){
 const list=visibleServices();$("resultCount").textContent=String(list.length).padStart(2,"0");
 $("emptyState").classList.toggle("hidden",list.length!==0);
 $("serviceGrid").classList.toggle("hidden",list.length===0);
 $("serviceGrid").innerHTML=list.map(s=>'<article class="service-card"><div class="service-top"><span class="service-category">'+catLabel(s.category)+'</span><span class="match-score">'+s.match+'% '+tr("match")+'</span></div><h3>'+s.title+'</h3><p class="service-description">'+s.description+'</p><div class="provider-row"><span class="avatar">'+s.initials+'</span><span class="provider-meta"><b>'+s.provider+'</b><small>★ '+s.rating+' · '+tr("provider")+'</small></span><span class="service-price"><strong>'+formatNum(s.points)+'</strong><small>'+tr("point_unit")+'</small></span></div><div class="card-actions"><button class="btn btn-primary" data-request="'+s.id+'">'+tr("request")+'</button><button class="btn btn-outline" data-details="'+s.id+'">'+tr("details")+'</button></div></article>').join("");
 $("serviceGrid").querySelectorAll("[data-request]").forEach(el=>el.addEventListener("click",()=>openRequest(+el.dataset.request)));
 $("serviceGrid").querySelectorAll("[data-details]").forEach(el=>el.addEventListener("click",()=>openDetails(+el.dataset.details)));
}
function renderActivity(){
 $("activityList").innerHTML=activities.slice(0,4).map(a=>'<div class="activity-item"><span class="activity-icon">'+a.icon+'</span><span class="activity-meta"><b>'+a.title+'</b><small>'+a.detail+'</small></span><span class="activity-amount">'+a.amount+'</span></div>').join("");
 $("walletBalance").textContent=formatNum(balance);$("walletBig").textContent=formatNum(balance);$("activeCount").textContent=String(Math.max(3-requests,0)).padStart(2,"0");
}
function setCategory(key){selectedCategory=key;renderCategories();renderFilters();renderServices();if(key!=="All")showToast(tr("active_filter")+": "+catLabel(key))}
function setLanguage(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";document.body.dir=lang==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-i18n]").forEach(el=>{const value=tr(el.dataset.i18n);if(el.tagName==="INPUT"||el.tagName==="TEXTAREA"){el.placeholder=value}else{el.innerHTML=value}});
 document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=tr(el.dataset.i18nPlaceholder));
 $("langToggle").textContent=lang==="en"?"عربي":"EN";$("langToggle").setAttribute("aria-label",lang==="en"?"التبديل إلى العربية":"Switch to English");
 renderCategories();renderFilters();renderServices();renderActivity();
}
function getService(id){return services.find(s=>s.id===id)}
function openRequest(id){
 const s=getService(id);if(!s)return;
 $("dialogContent").innerHTML='<span class="eyebrow">'+catLabel(s.category)+'</span><h2>'+tr("request_prompt")+'</h2><h3>'+s.title+'</h3><p>'+s.description+'</p><div class="modal-price">'+formatNum(s.points)+' '+tr("point_unit")+'</div><p><b>'+tr("points_balance")+':</b> '+formatNum(balance)+'<br><b>'+tr("points_after")+':</b> '+formatNum(balance-s.points)+'</p><p>'+tr("demo_warning")+'</p><button class="btn btn-primary full-btn" id="confirmRequest">'+tr("request_confirm")+'</button>';
 $("serviceDialog").showModal();
 $("confirmRequest").addEventListener("click",()=>{
   if(balance<s.points){showToast(tr("insufficient"));return}
   balance-=s.points;requests++;activities.unshift({title:s.title,detail:tr("recent_request"),amount:"−"+formatNum(s.points),icon:"↗"});
   $("serviceDialog").close();renderActivity();showToast(tr("request_sent")+" "+s.title);
 });
}
function openDetails(id){
 const s=getService(id);if(!s)return;
 $("dialogContent").innerHTML='<span class="eyebrow">'+catLabel(s.category)+'</span><h2>'+s.title+'</h2><p>'+s.description+'</p><p><b>'+tr("provider")+':</b> '+s.provider+' · ★ '+s.rating+'</p><div class="modal-price">'+formatNum(s.points)+' '+tr("point_unit")+'</div><p>'+tr("demo_warning")+'</p><button class="btn btn-primary full-btn" id="detailRequest">'+tr("request")+'</button>';
 $("serviceDialog").showModal();$("detailRequest").addEventListener("click",()=>{ $("serviceDialog").close();openRequest(id) });
}
$("langToggle").addEventListener("click",()=>{lang=lang==="en"?"ar":"en";setLanguage()});
$("themeToggle").addEventListener("click",()=>{document.body.classList.toggle("theme-dark");$("themeToggle").textContent=document.body.classList.contains("theme-dark")?"☀":"☾"});
$("searchInput").addEventListener("input",e=>{searchTerm=e.target.value;renderServices()});
$("sortSelect").addEventListener("change",e=>{sortMode=e.target.value;renderServices()});
$("clearFilters").addEventListener("click",()=>{selectedCategory="All";searchTerm="";$("searchInput").value="";setCategory("All")});
$("offerBtn").addEventListener("click",()=>{$("offerDialog").showModal();$("offerName").focus()});
$("submitOffer").addEventListener("click",()=>{
 const name=$("offerName").value.trim(),price=Number($("offerPrice").value);
 if(!name||!Number.isFinite(price)||price<1){$("offerResult").textContent=tr("offer_required");return}
 createdOffers.unshift({name,price});$("offerResult").textContent=tr("offer_preview")+" "+name+" — "+formatNum(price)+" "+tr("point_unit")+". "+tr("demo_warning");showToast(tr("offer_preview")+" "+name);
});
$("year").textContent=new Date().getFullYear();
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("searchInput").focus()}});
setLanguage();
})();