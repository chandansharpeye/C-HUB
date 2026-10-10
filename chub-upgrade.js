/* C-HUB Upgrade Pack: global search, recently used, backup prompt, language UI, board filters.
   Add <script src="chub-upgrade.js" defer></script> before </body> in index.html.
*/
(() => {
  "use strict";
  const $ = (s, root=document) => root.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const tr = {
    en: {search:"Search tools, e.g. PDF merge, GST, timetable…",recent:"Recently used",language:"Language",backupTitle:"Keep your study data safe",backupText:"Your C-HUB data is stored in this browser. Export a backup so you can restore it if you change phones or clear browser data.",export:"Export backup",later:"Remind me later",board:"Board",class:"Class",open:"Open section",none:"No matching sections found."},
    hi: {search:"टूल खोजें, जैसे PDF merge, GST, टाइमटेबल…",recent:"हाल ही में इस्तेमाल किए",language:"भाषा",backupTitle:"अपना स्टडी डेटा सुरक्षित रखें",backupText:"आपका C-HUB डेटा इसी ब्राउज़र में सेव है। फोन बदलने या ब्राउज़र डेटा साफ़ करने से पहले बैकअप एक्सपोर्ट करें।",export:"बैकअप एक्सपोर्ट",later:"बाद में याद दिलाएँ",board:"बोर्ड",class:"कक्षा",open:"सेक्शन खोलें",none:"कोई मेल खाता सेक्शन नहीं मिला।"},
    or: {search:"ଟୁଲ୍ ଖୋଜନ୍ତୁ, ଯେପରି PDF merge, GST, ଟାଇମଟେବୁଲ୍…",recent:"ସମ୍ପ୍ରତି ବ୍ୟବହୃତ",language:"ଭାଷା",backupTitle:"ଆପଣଙ୍କ ଅଧ୍ୟୟନ ଡାଟା ସୁରକ୍ଷିତ ରଖନ୍ତୁ",backupText:"C-HUB ଡାଟା ଏହି ବ୍ରାଉଜରରେ ସେଭ୍ ହୋଇଛି। ଫୋନ୍ ବଦଳାଇବା କିମ୍ବା ଡାଟା ଡିଲିଟ୍ କରିବା ପୂର୍ବରୁ ବ୍ୟାକଅପ୍ ଏକ୍ସପୋର୍ଟ କରନ୍ତୁ।",export:"ବ୍ୟାକଅପ୍ ଏକ୍ସପୋର୍ଟ",later:"ପରେ ମନେ ପକାନ୍ତୁ",board:"ବୋର୍ଡ",class:"ଶ୍ରେଣୀ",open:"ସେକ୍ସନ୍ ଖୋଲନ୍ତୁ",none:"ମେଳ ଖାଉଥିବା ସେକ୍ସନ୍ ମିଳିଲା ନାହିଁ।"}
  };
  let lang = localStorage.getItem("chub_lang") || "en";
  const t = k => (tr[lang] || tr.en)[k] || tr.en[k] || k;
  const style = document.createElement("style");
  style.textContent = `
  #chub-global-search{position:sticky;top:0;z-index:50;background:var(--panel,#fff);border-bottom:1px solid var(--line,#ddd);padding:10px 14px;display:flex;gap:8px;align-items:center;flex-wrap:wrap}
  #chub-global-search input{flex:1;min-width:180px;padding:11px 13px;border:1px solid var(--line,#ddd);border-radius:12px;background:var(--bg,#fff);color:var(--ink,#111);font:inherit}
  #chub-global-search select{padding:9px;border-radius:10px;max-width:100%}
  #chub-search-results{display:none;padding:10px 14px;background:var(--panel,#fff);border-bottom:1px solid var(--line,#ddd)}
  #chub-search-results a{display:block;padding:9px;border-radius:8px;text-decoration:none}
  #chub-search-results a:hover{background:var(--bg,#f4f4f4)}
  #chub-upgrade-recent{display:flex;gap:6px;flex-wrap:wrap;margin-top:7px}
  #chub-upgrade-recent button{font-size:13px;padding:6px 10px}
  #chub-backup-dialog{position:fixed;inset:0;z-index:10000;background:#0008;display:grid;place-items:center;padding:18px}
  #chub-backup-dialog[hidden]{display:none}
  #chub-backup-dialog .card{max-width:440px;width:100%;background:var(--panel,#fff);color:var(--ink,#111);border-radius:20px;padding:22px;box-shadow:0 16px 50px #0004}
  #chub-backup-dialog .row{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}
  #chub-board-filter{padding:18px;margin:18px auto;max-width:960px;border:1px solid var(--line,#ddd);border-radius:16px;background:var(--panel,#fff)}
  #chub-board-filter .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
  #chub-board-filter select{min-width:130px}
  @media(max-width:540px){#chub-global-search{position:relative}#chub-global-search input{min-width:100%}}
  `;
  document.head.appendChild(style);

  // Search across real sections and their headings, while logging recently used sections.
  const bar = document.createElement("div");
  bar.id = "chub-global-search";
  bar.innerHTML = `<input id="chub-upgrade-q" type="search" aria-label="Search C-HUB" placeholder="${esc(t("search"))}"><select id="chub-upgrade-lang" aria-label="${esc(t("language"))}"><option value="en">English</option><option value="hi">हिन्दी</option><option value="or">ଓଡ଼ିଆ</option></select><div style="width:100%;font-size:13px;color:var(--mute,#666)">${esc(t("recent"))}<div id="chub-upgrade-recent"></div></div>`;
  document.body.insertBefore(bar, document.body.firstChild);
  const results = document.createElement("div"); results.id = "chub-search-results"; bar.after(results);
  const langSel = $("#chub-upgrade-lang"); langSel.value = lang;
  langSel.addEventListener("change", () => { lang = langSel.value; localStorage.setItem("chub_lang",lang); $("#chub-upgrade-q").placeholder=t("search"); $("#chub-global-search div").firstChild.textContent=t("recent"); renderRecent(); });
  const sections = [...document.querySelectorAll("section[id]")].map(s => ({id:s.id, title:(s.querySelector("h2")?.innerText || s.id).replace(/[☆★]/g,"").trim(), node:s}));
  let recent = [];
  try { recent = JSON.parse(localStorage.getItem("chub_recent") || "[]"); } catch (_) {}
  function renderRecent() {
    const holder=$("#chub-upgrade-recent"); holder.textContent="";
    recent.map(id=>sections.find(s=>s.id===id)).filter(Boolean).slice(0,5).forEach(s=>{
      const b=document.createElement("button"); b.type="button"; b.textContent=s.title;
      b.onclick=()=>{s.node.scrollIntoView({behavior:"smooth"});mark(s.id);}; holder.appendChild(b);
    });
  }
  function mark(id){recent=[id,...recent.filter(x=>x!==id)].slice(0,5);localStorage.setItem("chub_recent",JSON.stringify(recent));renderRecent();}
  sections.forEach(s=>{s.node.addEventListener("click",e=>{if(e.target.closest("a,button"))mark(s.id);});});
  $("#chub-upgrade-q").addEventListener("input", e=>{
    const q=e.target.value.trim().toLowerCase(); results.textContent="";
    if(!q){results.style.display="none";return;}
    const matches=sections.filter(s=>(s.title+" "+s.node.innerText).toLowerCase().includes(q)).slice(0,15);
    if(!matches.length){results.textContent=t("none");results.style.display="block";return;}
    matches.forEach(s=>{const a=document.createElement("a");a.href="#"+s.id;a.textContent="🔎 "+s.title;a.onclick=()=>{mark(s.id);results.style.display="none";};results.appendChild(a);});
    results.style.display="block";
  });
  renderRecent();

  // Backup reminder every 21 days. Export localStorage as JSON; no data is sent to a server.
  const lastPrompt=Number(localStorage.getItem("chub_backup_prompt_at")||0);
  if(Date.now()-lastPrompt > 21*24*60*60*1000 && Object.keys(localStorage).some(k=>k.startsWith("chub_"))) {
    setTimeout(()=>{
      const dlg=document.createElement("div");dlg.id="chub-backup-dialog";
      dlg.innerHTML=`<div class="card" role="dialog" aria-modal="true" aria-labelledby="chub-bk-title"><h2 id="chub-bk-title">${esc(t("backupTitle"))}</h2><p>${esc(t("backupText"))}</p><div class="row"><button id="chub-bk-export">${esc(t("export"))}</button><button id="chub-bk-later" class="alt">${esc(t("later"))}</button></div></div>`;
      document.body.appendChild(dlg);
      $("#chub-bk-later").onclick=()=>{localStorage.setItem("chub_backup_prompt_at",String(Date.now()));dlg.remove();};
      $("#chub-bk-export").onclick=()=>{
        const data={app:"C-HUB",exportedAt:new Date().toISOString(),localStorage:{}};
        for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);data.localStorage[k]=localStorage.getItem(k);}
        const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
        const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="chub-backup-"+new Date().toISOString().slice(0,10)+".json";a.click();URL.revokeObjectURL(a.href);
        localStorage.setItem("chub_backup_prompt_at",String(Date.now()));dlg.remove();
      };
    },1800);
  }

  // Board/class quick filter with verified official-site links; avoids inventing syllabus PDFs.
  const board=document.createElement("section");board.id="chub-board-filter";
  board.innerHTML=`<h2>Board-wise Study Resources</h2><p style="color:var(--mute,#666)">Choose your board and class to open official resources. Availability and syllabus can vary by year.</p><div class="row"><label>${esc(t("board"))} <select id="chub-board"><option value="bse">BSE Odisha</option><option value="chse">CHSE Odisha</option><option value="cbse">CBSE</option></select></label><label>${esc(t("class"))} <select id="chub-class"><option>10</option><option>9</option><option>12</option><option>11</option></select></label><button id="chub-board-open">${esc(t("open"))} ↗</button></div><p id="chub-board-note" aria-live="polite" style="margin-bottom:0"></p>`;
  const firstSection=document.querySelector("section[id]");
  if(firstSection) firstSection.parentNode.insertBefore(board,firstSection);
  const urls={bse:"https://bseodisha.ac.in/",chse:"https://chseodisha.nic.in/",cbse:"https://www.cbse.gov.in/"};
  $("#chub-board-open").onclick=()=>{
    const b=$("#chub-board").value, c=$("#chub-class").value;
    $("#chub-board-note").textContent=`Selected: ${b.toUpperCase()} • Class ${c}. The official board website will open; choose the current syllabus/sample paper there.`;
    window.open(urls[b],"_blank","noopener,noreferrer");
  };
})();
