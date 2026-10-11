/* C-HUB English Quest: offline Odia -> English game */
(function(){
"use strict";
const root=document.getElementById("english-quest");
if(!root)return;
const $=id=>document.getElementById(id);
const KEY="chub_english_quest_v1";
const today=()=>new Date().toISOString().slice(0,10);
function readState(){try{return JSON.parse(localStorage.getItem(KEY))||{};}catch(e){return {};}}
let state=readState();
state.xp=Number(state.xp)||0;
state.completed=Array.isArray(state.completed)?state.completed:[];
state.daily=state.daily&&state.daily.date===today()?state.daily:{date:today(),count:0};
let activeLevel=0, qIndex=0, right=0, gained=0, answered=false, selectedCategory="All";
const lessons=[
 {name:"Word Explorer",odName:"ଶବ୍ଦ ଅଭ୍ୟାସ",emoji:"🌱",desc:"Everyday words / ଦୈନନ୍ଦିନ ଶବ୍ଦ",questions:[
  {odia:"ମୁଁ ଖୁସି ଅଛି।",q:"Choose the correct English sentence.",options:["I am happy.","I is happy.","I are happy.","I happy am."],a:0,why:"ମୁଁ ଖୁସି ଅଛି = I am happy. Use “am” with “I”.",en:"I am happy."},
  {odia:"ଧନ୍ୟବାଦ।",q:"How do you say this in English?",options:["Good night.","Thank you.","Excuse me.","Welcome home."],a:1,why:"ଧନ୍ୟବାଦ = Thank you.",en:"Thank you."},
  {odia:"ପାଣି",q:"What does “ପାଣି” mean?",options:["Food","Book","Water","School"],a:2,why:"ପାଣି = water.",en:"Water"},
  {odia:"ମୋର ନାମ ରବି।",q:"Choose the correct translation.",options:["Your name is Ravi.","My name is Ravi.","I am going to Ravi.","Ravi is my book."],a:1,why:"ମୋର ନାମ ରବି = My name is Ravi.",en:"My name is Ravi."},
  {odia:"ଛୋଟ",q:"Choose the opposite of “big”.",options:["Small","Tall","Fast","Happy"],a:0,why:"ଛୋଟ = small. Small is the opposite of big.",en:"Small"}
 ]},
 {name:"Sentence Builder",odName:"ବାକ୍ୟ ଗଠନ",emoji:"🧩",desc:"Build useful sentences / ବାକ୍ୟ ଶିଖନ୍ତୁ",questions:[
  {odia:"ସେ ମୋର ଭଉଣୀ।",q:"Choose the correct English sentence.",options:["She are my sister.","She is my sister.","She am my sister.","She be my sister."],a:1,why:"ସେ ମୋର ଭଉଣୀ = She is my sister. Use “is” with she.",en:"She is my sister."},
  {odia:"ମୁଁ ସ୍କୁଲକୁ ଯାଉଛି।",q:"Translate this sentence.",options:["I go school yesterday.","I am going to school.","I school going am.","I goes to school."],a:1,why:"ମୁଁ ସ୍କୁଲକୁ ଯାଉଛି = I am going to school.",en:"I am going to school."},
  {odia:"ତୁମେ କେମିତି ଅଛ?",q:"What does this mean?",options:["Where are you?","What is your name?","How are you?","Who are you?"],a:2,why:"ତୁମେ କେମିତି ଅଛ? = How are you?",en:"How are you?"},
  {odia:"ସେମାନେ ଖେଳୁଛନ୍ତି।",q:"Choose the correct translation.",options:["They are playing.","They is playing.","They playing are.","They was play."],a:0,why:"ସେମାନେ ଖେଳୁଛନ୍ତି = They are playing.",en:"They are playing."},
  {odia:"ଦୟାକରି ମୋତେ ସାହାଯ୍ୟ କରନ୍ତୁ।",q:"Choose the polite English sentence.",options:["Help me now!","Please help me.","I helping you.","You help please me."],a:1,why:"ଦୟାକରି ମୋତେ ସାହାଯ୍ୟ କରନ୍ତୁ = Please help me.",en:"Please help me."}
 ]},
 {name:"Grammar Galaxy",odName:"ବ୍ୟାକରଣ ଗ୍ୟାଲାକ୍ସି",emoji:"🚀",desc:"Grammar and speaking / ବ୍ୟାକରଣ ଓ କଥାବାର୍ତ୍ତା",questions:[
  {odia:"ଏହା ଏକ ଆପଲ୍।",q:"Choose the correct translation.",options:["This are an apple.","This is an apple.","This is a apple.","These is apple."],a:1,why:"ଏହା ଏକ ଆପଲ୍ = This is an apple. Use “an” before a vowel sound.",en:"This is an apple."},
  {odia:"ମୁଁ ଗତକାଲି ବଜାରକୁ ଗଲି।",q:"Choose the correct past-tense sentence.",options:["I go to the market yesterday.","I went to the market yesterday.","I gone to the market yesterday.","I going market yesterday."],a:1,why:"ଗଲି = went, the past tense of go.",en:"I went to the market yesterday."},
  {odia:"ଆପଣଙ୍କ ନାମ କଣ?",q:"Choose the correct English question.",options:["What your name?","What is your name?","What are name you?","Your name what is?"],a:1,why:"ଆପଣଙ୍କ ନାମ କଣ? = What is your name?",en:"What is your name?"},
  {odia:"ମୁଁ ୨୦୨୦ ଠାରୁ ଏଠାରେ ରହୁଛି।",q:"Complete: I have lived here ___ 2020.",options:["for","since","at","by"],a:1,why:"Use “since” with a starting point in time, such as 2020.",en:"I have lived here since 2020."},
  {odia:"ମୁଁ ଇଂରାଜୀ ଶିଖିବାକୁ ଚାହେଁ।",q:"Choose the correct translation.",options:["I want to learn English.","I want learning English.","I wants learn English.","I am want English."],a:0,why:"ମୁଁ ଇଂରାଜୀ ଶିଖିବାକୁ ଚାହେଁ = I want to learn English.",en:"I want to learn English."}
 ]}
];
const phrases=[
 ["Greetings","ନମସ୍କାର","Hello / Greetings","Use when meeting someone."],
 ["Greetings","ସୁପ୍ରଭାତ","Good morning","A greeting in the morning."],
 ["Greetings","ଶୁଭ ରାତ୍ରି","Good night","Say this before going to sleep."],
 ["Greetings","ତୁମେ କେମିତି ଅଛ?","How are you?","A friendly question."],
 ["Greetings","ମୁଁ ଭଲ ଅଛି।","I am fine.","A common reply."],
 ["Polite","ଦୟାକରି","Please","Use to make a request polite."],
 ["Polite","ଧନ୍ୟବାଦ","Thank you","Say this to show gratitude."],
 ["Polite","କ୍ଷମା କରିବେ।","Excuse me / Sorry.","Meaning depends on the situation."],
 ["Polite","କିଛି ଅସୁବିଧା ନାହିଁ।","No problem.","A friendly response."],
 ["School","ମୁଁ ଜଣେ ଛାତ୍ର।","I am a student.","Use “student” for a learner."],
 ["School","ମୁଁ ସ୍କୁଲକୁ ଯାଉଛି।","I am going to school.","Present continuous sentence."],
 ["School","ଦୟାକରି ପୁଣି କୁହନ୍ତୁ।","Please say that again.","Useful when you do not understand."],
 ["School","ମୁଁ ବୁଝିପାରିଲି ନାହିଁ।","I did not understand.","Ask for an explanation."],
 ["School","ଏହାର ଅର୍ଥ କଣ?","What does this mean?","Useful for vocabulary learning."],
 ["Daily life","ମୋର ନାମ ଚନ୍ଦନ।","My name is Chandan.","Replace Chandan with your name."],
 ["Daily life","ମୋତେ ପାଣି ଦରକାର।","I need water.","“I need…” expresses a need."],
 ["Daily life","ମୁଁ ଘରକୁ ଯାଉଛି।","I am going home.","Everyday sentence."],
 ["Daily life","ଆପଣ କେଉଁଠି ରହୁଛନ୍ତି?","Where do you live?","A question about someone's home."],
 ["Daily life","ମୁଁ ଜାଣିନି।","I don't know.","A simple, honest response."],
 ["Daily life","ମୋତେ ସାହାଯ୍ୟ କରନ୍ତୁ।","Please help me.","A useful request."],
 ["Numbers","ଗୋଟିଏ","One","Number 1."],
 ["Numbers","ଦୁଇ","Two","Number 2."],
 ["Numbers","ତିନି","Three","Number 3."],
 ["Numbers","ଆଜି","Today","The current day."],
 ["Numbers","କାଲି","Tomorrow / Yesterday","In Odia, context determines whether this means tomorrow or yesterday."]
];
const cats=["All",...new Set(phrases.map(p=>p[0]))];
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}}
function renderStats(){
 $("eq-xp").textContent=state.xp;
 $("eq-level").textContent="Level "+(Math.min(3,1+Math.floor(state.xp/50)));
 $("eq-done").textContent=state.completed.length;
 $("eq-daily-text").textContent=Math.min(5,state.daily.count)+" of 5 questions answered today.";
 $("eq-daily-bar").style.width=Math.min(100,state.daily.count/5*100)+"%";
}
function renderLevels(){
 const box=$("eq-levels");box.textContent="";
 lessons.forEach((l,i)=>{
  const unlocked=i===0||state.completed.includes(i-1),done=state.completed.includes(i);
  const b=document.createElement("button");b.type="button";b.className="eq-level";b.disabled=!unlocked;
  b.innerHTML='<span class="eq-emoji">'+(unlocked?l.emoji:"🔒")+'</span><strong>'+l.name+'</strong><small>'+l.desc+'<br>'+(done?"✓ Completed":unlocked?"5 questions":"Finish previous level")+'</small><span class="eq-mini-progress"><span style="display:block;width:'+(done?100:0)+'%"></span></span>';
  b.addEventListener("click",()=>start(i));box.appendChild(b);
 });
}
function start(i){
 if(i>0&&!state.completed.includes(i-1)){return;}
 activeLevel=i;qIndex=0;right=0;gained=0;answered=false;
 $("eq-game-subtitle").textContent=lessons[i].name+" • "+lessons[i].odName;
 $("eq-game-badge").textContent=lessons[i].name.toUpperCase();
 renderQuestion();
 $("eq-game-card").scrollIntoView({behavior:"smooth",block:"start"});
}
function renderQuestion(){
 const l=lessons[activeLevel],q=l.questions[qIndex];
 answered=false;
 $("eq-progress-bar").style.width=(qIndex/l.questions.length*100)+"%";
 $("eq-quiz-area").innerHTML='<div class="eq-question-label">'+l.emoji+' '+l.name+' • QUESTION '+(qIndex+1)+' / '+l.questions.length+'</div>'+
 '<h3 class="eq-question">'+q.q+'</h3><p class="eq-odia-prompt">ଓଡ଼ିଆ: <b>'+q.odia+'</b></p><div class="eq-answers" id="eq-answers"></div><div id="eq-feedback"></div><div class="eq-actions"><span class="eq-muted">⚡ +10 XP for a correct answer</span><button type="button" class="eq-button" id="eq-next" disabled>'+(qIndex===l.questions.length-1?"Finish lesson":"Next question →")+'</button></div>';
 const answers=$("eq-answers");
 q.options.forEach((o,i)=>{const b=document.createElement("button");b.type="button";b.className="eq-answer";b.textContent=String.fromCharCode(65+i)+". "+o;b.addEventListener("click",()=>answer(i));answers.appendChild(b);});
 $("eq-next").addEventListener("click",next);
}
function answer(i){
 if(answered)return;answered=true;
 const q=lessons[activeLevel].questions[qIndex],ok=i===q.a;
 [...$("eq-answers").querySelectorAll("button")].forEach((b,j)=>{b.disabled=true;if(j===q.a)b.classList.add("correct");if(j===i&&j!==q.a)b.classList.add("wrong");});
 if(ok){right++;gained+=10;state.xp+=10;}
 state.daily.count++;save();renderStats();
 const f=$("eq-feedback");f.className="eq-feedback "+(ok?"good":"bad");
 f.innerHTML="<b>"+(ok?"✨ Correct! +10 XP":"💡 Keep going!")+"</b><p>"+q.why+"</p>";
 $("eq-next").disabled=false;$("eq-progress-bar").style.width=((qIndex+1)/lessons[activeLevel].questions.length*100)+"%";
}
function next(){
 if(!answered)return;
 if(qIndex<lessons[activeLevel].questions.length-1){qIndex++;renderQuestion();return;}
 const i=activeLevel;if(!state.completed.includes(i))state.completed.push(i);
 const t=today();if(state.lastStudy!==t){const yesterday=new Date(Date.now()-86400000).toISOString().slice(0,10);state.streak=state.lastStudy===yesterday?(state.streak||0)+1:1;state.lastStudy=t;}
 save();renderStats();renderLevels();
 $("eq-game-badge").textContent="COMPLETE";$("eq-progress-bar").style.width="100%";
 $("eq-quiz-area").innerHTML='<div class="eq-result"><div class="eq-trophy">'+(right>=4?"🏆":"🌟")+'</div><h3>'+(right>=4?"Brilliant work!":"Good effort!")+'</h3><p>You finished '+lessons[i].name+' / '+lessons[i].odName+'.</p><div class="eq-result-stats"><span><b>'+right+'/5</b>Correct answers</span><span><b>+'+gained+'</b>XP earned</span><span><b>'+state.xp+'</b>Total XP</span></div><button type="button" class="eq-button" id="eq-retry">Play this level again</button></div>';
 $("eq-retry").addEventListener("click",()=>start(i));
}
function renderCategories(){
 const box=$("eq-categories");box.textContent="";
 cats.forEach(c=>{const b=document.createElement("button");b.type="button";b.className="eq-cat"+(c===selectedCategory?" active":"");b.textContent=c;b.addEventListener("click",()=>{selectedCategory=c;renderCategories();renderPhrases();});box.appendChild(b);});
}
function speak(text){
 if(!("speechSynthesis" in window)){alert("Speech playback is not supported in this browser.");return;}
 const u=new SpeechSynthesisUtterance(text);u.lang="en-IN";window.speechSynthesis.cancel();window.speechSynthesis.speak(u);
}
function renderPhrases(){
 const q=$("eq-search").value.trim().toLowerCase(),box=$("eq-phrases");box.textContent="";
 const list=phrases.filter(p=>(selectedCategory==="All"||p[0]===selectedCategory)&&(!q||p.join(" ").toLowerCase().includes(q)));
 if(!list.length){box.textContent="No matching phrase yet. Try another word.";return;}
 list.forEach(p=>{
  const b=document.createElement("button");b.type="button";b.className="eq-phrase";
  b.innerHTML='<span class="eq-odia">'+p[1]+'</span><span class="eq-english">'+p[2]+'</span><span class="eq-hint">'+p[3]+'</span>';
  b.addEventListener("click",()=>speak(p[2]));box.appendChild(b);
 });
}
$("eq-search").addEventListener("input",renderPhrases);
$("eq-reset").addEventListener("click",()=>{
 if(!confirm("Reset XP, completed levels, and daily quest for English Quest?"))return;
 state={xp:0,completed:[],daily:{date:today(),count:0},streak:0,lastStudy:""};save();renderStats();renderLevels();
 $("eq-game-subtitle").textContent="Choose a level above to begin.";$("eq-game-badge").textContent="READY";$("eq-progress-bar").style.width="0%";
 $("eq-quiz-area").innerHTML='<div class="eq-welcome"><span>🦉</span><div><b>Progress reset.</b><p>Choose a lesson to start again.</p></div></div>';
});
renderStats();renderLevels();renderCategories();renderPhrases();
})();
