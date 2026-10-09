/* C-HUB language layer: English / हिन्दी / ଓଡ଼ିଆ. Add new strings to D as  "English text": ["हिन्दी","ଓଡ଼ିଆ"].
   Several English variants can share one entry: "A|B": [...]. Leading emoji/symbols are kept as they are. */
(function(){
"use strict";
if(window.chubT)return;
var KEY="chub_lang",LANGS=["en","hi","or"],cur="en",D={},busy=false;
var RAW={
"My Space":["मेरा स्पेस","ମୋ ସ୍ପେସ୍"],
"Study & Exams":["पढ़ाई और परीक्षा","ପାଠପଢ଼ା ଓ ପରୀକ୍ଷା"],
"Daily Planner":["डेली प्लानर","ଦୈନିକ ପ୍ଲାନର୍"],
"Files & Documents":["फ़ाइलें और दस्तावेज़","ଫାଇଲ୍ ଓ ଡକ୍ୟୁମେଣ୍ଟ"],
"Career & Skills":["करियर और स्किल्स","କ୍ୟାରିୟର୍ ଓ ସ୍କିଲ୍"],
"Help & Info":["मदद और जानकारी","ସହାୟତା ଓ ସୂଚନା"],
"App":["ऐप","ଆପ୍"],
"Dashboard|Student Dashboard|My Dashboard":["डैशबोर्ड","ଡ୍ୟାସବୋର୍ଡ"],
"Student System|Chandan Student System":["स्टूडेंट सिस्टम","ଛାତ୍ର ସିଷ୍ଟମ୍"],
"My Study Tools":["मेरे स्टडी टूल्स","ମୋ ପଢ଼ା ଟୁଲ୍"],
"Study Methods":["पढ़ने के तरीके","ପଢ଼ିବା ପଦ୍ଧତି"],
"90%+ Strategy|90%+ Exam Strategy":["90%+ रणनीति","90%+ ରଣନୀତି"],
"Commerce Corner":["कॉमर्स कॉर्नर","କମର୍ସ କର୍ଣ୍ଣର"],
"Formula Library|Student Formula Library":["फ़ॉर्मूला लाइब्रेरी","ଫର୍ମୁଲା ଲାଇବ୍ରେରୀ"],
"Calculators|Student Calculators":["कैलकुलेटर","କାଲକୁଲେଟର"],
"Notes Maker":["नोट्स मेकर","ନୋଟ୍ସ ମେକର୍"],
"Practice & Tests":["अभ्यास और टेस्ट","ଅଭ୍ୟାସ ଓ ଟେଷ୍ଟ"],
"AI Study Assistant|24×7 AI Study Assistant":["AI स्टडी असिस्टेंट","AI ଷ୍ଟଡି ଆସିଷ୍ଟାଣ୍ଟ"],
"Focus Timer":["फोकस टाइमर","ଫୋକସ୍ ଟାଇମର୍"],
"Quick Notes":["क्विक नोट्स","ତୁରନ୍ତ ନୋଟ୍ସ"],
"Homework & Attendance|Homework, Attendance & Syllabus":["होमवर्क और उपस्थिति","ହୋମୱର୍କ ଓ ଉପସ୍ଥିତି"],
"Timetable|My Timetable":["टाइमटेबल","ସମୟସାରଣୀ"],
"Marks Tracker":["अंक ट्रैकर","ମାର୍କ୍ସ ଟ୍ରାକର୍"],
"Exams & Reminders":["परीक्षा और रिमाइंडर","ପରୀକ୍ଷା ଓ ରିମାଇଣ୍ଡର୍"],
"PDF & Image Tools":["PDF और इमेज टूल्स","PDF ଓ ଇମେଜ୍ ଟୁଲ୍"],
"Resume Maker":["रिज़्यूमे मेकर","ରେଜ୍ୟୁମେ ମେକର୍"],
"Application Letters|Application Letter Maker":["आवेदन पत्र","ଆବେଦନ ପତ୍ର"],
"Invoice & Receipt|Invoice & Receipt Maker (for small business)":["इनवॉइस और रसीद","ଇନଭଏସ୍ ଓ ରସିଦ"],
"Government Links":["सरकारी लिंक","ସରକାରୀ ଲିଙ୍କ"],
"Career Explore":["करियर एक्सप्लोर","କ୍ୟାରିୟର୍ ଏକ୍ସପ୍ଲୋର୍"],
"Skills Tracker|My Skill Tracker":["स्किल ट्रैकर","ସ୍କିଲ୍ ଟ୍ରାକର୍"],
"Skills Worth Building":["बनाने लायक स्किल्स","ଗଢ଼ିବା ଯୋଗ୍ୟ ଦକ୍ଷତା"],
"Daily Boost|Daily Student Boost":["डेली मोटिवेशन","ଦୈନିକ ପ୍ରେରଣା"],
"WhatsApp Channel":["व्हाट्सऐप चैनल","ହ୍ୱାଟ୍ସଆପ୍ ଚ୍ୟାନେଲ୍"],
"About C-HUB":["C-HUB के बारे में","C-HUB ବିଷୟରେ"],
"FAQs":["सामान्य सवाल","ସାଧାରଣ ପ୍ରଶ୍ନ"],
"Privacy Policy":["प्राइवेसी पॉलिसी","ଗୋପନୀୟତା ନୀତି"],
"Terms & Conditions":["नियम और शर्तें","ନିୟମ ଓ ସର୍ତ୍ତାବଳୀ"],
"Menu":["मेनू","ମେନୁ"],"Close":["बंद करें","ବନ୍ଦ କରନ୍ତୁ"],
"Install as App":["ऐप इंस्टॉल करें","ଆପ୍ ଇନ୍‌ଷ୍ଟଲ୍ କରନ୍ତୁ"],
"Show tour":["टूर दिखाएं","ଟୁର୍ ଦେଖନ୍ତୁ"],
"Top Tools":["मुख्य टूल्स","ମୁଖ୍ୟ ଟୁଲ୍"],
"All tools":["सभी टूल्स","ସମସ୍ତ ଟୁଲ୍"],
"Free":["मुफ़्त","ମାଗଣା"],"No login":["लॉगिन नहीं","ଲଗ୍‌ଇନ୍ ଦରକାର ନାହିଁ"],
"Works offline":["ऑफलाइन भी काम करता है","ଅଫ୍‌ଲାଇନ୍‌ରେ ମଧ୍ୟ କାମ କରେ"],
"Mobile friendly":["मोबाइल के लिए अनुकूल","ମୋବାଇଲ୍‌ ପାଇଁ ଉପଯୁକ୍ତ"],
"Study Smarter. Build Skills. Become Future Ready.":["स्मार्ट तरीके से पढ़ें। स्किल्स बनाएं। भविष्य के लिए तैयार हों।","ସ୍ମାର୍ଟ ଭାବେ ପଢ଼ନ୍ତୁ। ଦକ୍ଷତା ବଢ଼ାନ୍ତୁ। ଭବିଷ୍ୟତ ପାଇଁ ପ୍ରସ୍ତୁତ ହୁଅନ୍ତୁ।"],
"A free digital hub for students: notes, PDF tools, planners, calculators, practice tests and government links in one place.":["विद्यार्थियों के लिए मुफ़्त डिजिटल हब: नोट्स, PDF टूल्स, प्लानर, कैलकुलेटर, टेस्ट और सरकारी लिंक एक जगह।","ଛାତ୍ରଛାତ୍ରୀଙ୍କ ପାଇଁ ମାଗଣା ଡିଜିଟାଲ୍ ହବ୍: ନୋଟ୍ସ, PDF ଟୁଲ୍, ପ୍ଲାନର୍, କାଲକୁଲେଟର୍, ଟେଷ୍ଟ ଓ ସରକାରୀ ଲିଙ୍କ୍ ଗୋଟିଏ ସ୍ଥାନରେ।"],
"Everything runs on your device and your files are not uploaded anywhere.":["सब कुछ आपके डिवाइस पर चलता है और आपकी फ़ाइलें कहीं अपलोड नहीं होतीं।","ସବୁକିଛି ଆପଣଙ୍କ ଡିଭାଇସ୍‌ରେ ଚାଲେ ଏବଂ ଆପଣଙ୍କ ଫାଇଲ୍ କେଉଁଠି ଅପଲୋଡ୍ ହୁଏ ନାହିଁ।"],
"Your most-used student tools, one tap away.":["आपके सबसे ज़्यादा इस्तेमाल होने वाले टूल्स, बस एक टैप दूर।","ଆପଣଙ୍କ ସବୁଠୁ ବ୍ୟବହୃତ ଟୁଲ୍, ଗୋଟିଏ ଟ୍ୟାପ୍‌ରେ।"],
"Your Shortcuts":["आपके शॉर्टकट","ଆପଣଙ୍କ ସର୍ଟକଟ୍"],
"Join Channel":["चैनल से जुड़ें","ଚ୍ୟାନେଲ୍‌ରେ ଯୋଗ ଦିଅନ୍ତୁ"],
"Back to top":["ऊपर जाएं","ଉପରକୁ ଯାଆନ୍ତୁ"],
"Language":["भाषा","ଭାଷା"],
"Search tools, formulas, topics…":["टूल्स, फ़ॉर्मूले, टॉपिक खोजें…","ଟୁଲ୍, ଫର୍ମୁଲା, ବିଷୟ ଖୋଜନ୍ତୁ…"],
"Open official site ↗":["आधिकारिक साइट खोलें ↗","ସରକାରୀ ସାଇଟ୍ ଖୋଲନ୍ତୁ ↗"],
"Subject":["विषय","ବିଷୟ"],"Class":["कक्षा","ଶ୍ରେଣୀ"],"Date":["तारीख़","ତାରିଖ"],"Your name":["आपका नाम","ଆପଣଙ୍କ ନାମ"],
"Clear":["साफ़ करें","ସଫା କରନ୍ତୁ"],
"No data yet":["अभी कोई डेटा नहीं","ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ତଥ୍ୟ ନାହିଁ"],
"No file chosen":["कोई फ़ाइल नहीं चुनी","କୌଣସି ଫାଇଲ୍ ବଛାଯାଇନାହିଁ"],
"No image chosen":["कोई इमेज नहीं चुनी","କୌଣସି ଇମେଜ୍ ବଛାଯାଇନାହିଁ"],
"Print / Save as PDF":["प्रिंट / PDF सेव करें","ପ୍ରିଣ୍ଟ / PDF ସେଭ୍ କରନ୍ତୁ"],
"Common starting point":["आम शुरुआती विकल्प","ସାଧାରଣ ଆରମ୍ଭ ବିନ୍ଦୁ"],
"Useful skills:":["उपयोगी स्किल्स:","ଉପଯୋଗୀ ଦକ୍ଷତା:"],
"Max marks":["अधिकतम अंक","ସର୍ବାଧିକ ମାର୍କ"],"Obtained":["प्राप्त अंक","ପ୍ରାପ୍ତ ମାର୍କ"],
"Amount (₹)":["राशि (₹)","ରାଶି (₹)"],
"Choose PDF":["PDF चुनें","PDF ବାଛନ୍ତୁ"],"Choose image|Choose images":["इमेज चुनें","ଇମେଜ୍ ବାଛନ୍ତୁ"],
"Sound on":["आवाज़ चालू","ସାଉଣ୍ଡ ଚାଲୁ"],
"Your dashboard, goals, streaks and flashcards in one place.":["आपका डैशबोर्ड, लक्ष्य, स्ट्रीक और फ्लैशकार्ड एक जगह।","ଆପଣଙ୍କ ଡ୍ୟାସବୋର୍ଡ, ଲକ୍ଷ୍ୟ, ଷ୍ଟ୍ରିକ୍ ଓ ଫ୍ଲାସକାର୍ଡ ଗୋଟିଏ ସ୍ଥାନରେ।"],
"Study methods, notes, formulas, practice tests and exam strategy.":["पढ़ने के तरीके, नोट्स, फ़ॉर्मूले, प्रैक्टिस टेस्ट और परीक्षा रणनीति।","ପଢ଼ିବା ପଦ୍ଧତି, ନୋଟ୍ସ, ଫର୍ମୁଲା, ଅଭ୍ୟାସ ଟେଷ୍ଟ ଓ ପରୀକ୍ଷା ରଣନୀତି।"],
"Timers, notes, homework, marks and reminders to stay on track.":["ट्रैक पर रहने के लिए टाइमर, नोट्स, होमवर्क, अंक और रिमाइंडर।","ଠିକ୍ ପଥରେ ରହିବା ପାଇଁ ଟାଇମର୍, ନୋଟ୍ସ, ହୋମୱର୍କ, ମାର୍କ୍ସ ଓ ରିମାଇଣ୍ଡର୍।"],
"PDF and image tools, resume, letters, bills and government websites.":["PDF और इमेज टूल्स, रिज़्यूमे, पत्र, बिल और सरकारी वेबसाइट।","PDF ଓ ଇମେଜ୍ ଟୁଲ୍, ରେଜ୍ୟୁମେ, ପତ୍ର, ବିଲ୍ ଓ ସରକାରୀ ୱେବସାଇଟ୍।"],
"Explore careers, build skills and get a daily boost.":["करियर एक्सप्लोर करें, स्किल्स बनाएं और रोज़ प्रेरणा पाएं।","କ୍ୟାରିୟର୍ ଖୋଜନ୍ତୁ, ଦକ୍ଷତା ବଢ଼ାନ୍ତୁ ଓ ଦୈନିକ ପ୍ରେରଣା ପାଆନ୍ତୁ।"],
"Updates, about C-HUB, FAQs and policies.":["अपडेट, C-HUB के बारे में, सामान्य सवाल और नीतियां।","ଅପଡେଟ୍, C-HUB ବିଷୟରେ, ସାଧାରଣ ପ୍ରଶ୍ନ ଓ ନୀତି।"],
"Tap ☆ next to any section title to pin it here.":["यहाँ पिन करने के लिए किसी भी सेक्शन के शीर्षक के पास ☆ दबाएं।","ଏଠାରେ ପିନ୍ କରିବାକୁ ଯେକୌଣସି ବିଭାଗ ଶିରୋନାମା ପାଖରେ ☆ ଦବାନ୍ତୁ।"],
"Marks Calculator":["मार्क्स कैलकुलेटर","ମାର୍କ୍ସ କାଲକୁଲେଟର"],
"Quiz and mock tests":["क्विज़ और मॉक टेस्ट","କୁଇଜ୍ ଓ ମକ୍ ଟେଷ୍ଟ"],
"Make quick notes":["जल्दी नोट्स बनाएं","ତୁରନ୍ତ ନୋଟ୍ସ ତିଆରି କରନ୍ତୁ"],
"Convert and compress":["कन्वर्ट और कंप्रेस करें","କନଭର୍ଟ ଓ କମ୍ପ୍ରେସ୍ କରନ୍ତୁ"],
"Study sessions":["पढ़ाई के सेशन","ପଢ଼ା ସେସନ୍"],
"Check percentage":["प्रतिशत जांचें","ପ୍ରତିଶତ ଯାଞ୍ଚ କରନ୍ତୁ"],
"Never miss a date":["कोई तारीख़ न चूकें","କୌଣସି ତାରିଖ ଛାଡ଼ନ୍ତୁ ନାହିଁ"],
"Fast revision":["तेज़ रिवीज़न","ଶୀଘ୍ର ପୁନରାବୃତ୍ତି"],
"Official portals":["आधिकारिक पोर्टल","ସରକାରୀ ପୋର୍ଟାଲ୍"],
"Install":["इंस्टॉल","ଇନ୍‌ଷ୍ଟଲ୍"],"Install C-HUB app":["C-HUB ऐप इंस्टॉल करें","C-HUB ଆପ୍ ଇନ୍‌ଷ୍ଟଲ୍ କରନ୍ତୁ"],
"Computer Learning Hub":["कंप्यूटर लर्निंग हब","କମ୍ପ୍ୟୁଟର୍ ଲର୍ଣ୍ଣିଂ ହବ୍"],
"Typing Lab":["टाइपिंग लैब","ଟାଇପିଂ ଲ୍ୟାବ୍"],"Coding Academy":["कोडिंग एकेडमी","କୋଡିଂ ଏକାଡେମୀ"],
"Computer Basics|Computer Fundamentals":["कंप्यूटर की बुनियादी बातें","କମ୍ପ୍ୟୁଟର୍ ମୌଳିକ ଜ୍ଞାନ"],
"Keyboard Shortcuts Master":["कीबोर्ड शॉर्टकट मास्टर","କୀବୋର୍ଡ ଶର୍ଟକଟ୍ ମାଷ୍ଟର"],
"Job Alerts":["जॉब अलर्ट","ଚାକିରି ଅଲର୍ଟ"],"Before you apply":["आवेदन से पहले","ଆବେଦନ ପୂର୍ବରୁ"],
"Quick quiz":["क्विक क्विज़","ତୁରନ୍ତ କୁଇଜ୍"],"Personal best:":["सर्वश्रेष्ठ स्कोर:","ସର୍ବୋତ୍ତମ ସ୍କୋର:"],
"Search C-HUB":["C-HUB में खोजें","C-HUB ରେ ଖୋଜନ୍ତୁ"],
"Nothing found. Try another word.":["कुछ नहीं मिला। कोई दूसरा शब्द आज़माएं।","କିଛି ମିଳିଲା ନାହିଁ। ଅନ୍ୟ ଶବ୍ଦ ଚେଷ୍ଟା କରନ୍ତୁ।"],
"New version ready. Tap to refresh.":["नया वर्शन तैयार है। रिफ़्रेश करने के लिए टैप करें।","ନୂଆ ସଂସ୍କରଣ ପ୍ରସ୍ତୁତ। ରିଫ୍ରେଶ୍ କରିବାକୁ ଟ୍ୟାପ୍ କରନ୍ତୁ।"]
};
Object.keys(RAW).forEach(function(k){k.split("|").forEach(function(e){D[e]=RAW[k]})});
var M={ /* messages used by index.html code: window.chubT(key) */
inst_done:["C-HUB is installed on this device. Open it from your home screen or app list.","C-HUB इस डिवाइस पर इंस्टॉल है। इसे होम स्क्रीन या ऐप लिस्ट से खोलें।","C-HUB ଏହି ଡିଭାଇସ୍‌ରେ ଇନ୍‌ଷ୍ଟଲ୍ ଅଛି। ହୋମ୍ ସ୍କ୍ରିନ୍ ବା ଆପ୍ ତାଲିକାରୁ ଖୋଲନ୍ତୁ।"],
inst_ios:["To install on iPhone/iPad: open this page in Safari, tap Share, then Add to Home Screen.","iPhone/iPad पर इंस्टॉल करने के लिए: इस पेज को Safari में खोलें, Share दबाएं, फिर Add to Home Screen चुनें।","iPhone/iPad ରେ ଇନ୍‌ଷ୍ଟଲ୍ କରିବାକୁ: ଏହି ପୃଷ୍ଠାକୁ Safari ରେ ଖୋଲନ୍ତୁ, Share ଦବାନ୍ତୁ, ତା'ପରେ Add to Home Screen ବାଛନ୍ତୁ।"],
inst_manual:["To install: in Chrome/Edge open the browser menu (⋮) and choose Install app or Add to Home screen. On desktop, use the install icon in the address bar. If it is not offered, the browser may not support installing or the app may already be installed.","इंस्टॉल करने के लिए: Chrome/Edge में ब्राउज़र मेनू (⋮) खोलें और Install app या Add to Home screen चुनें। डेस्कटॉप पर एड्रेस बार का इंस्टॉल आइकन इस्तेमाल करें। अगर विकल्प नहीं दिखे तो ब्राउज़र इंस्टॉल सपोर्ट नहीं करता या ऐप पहले से इंस्टॉल है।","ଇନ୍‌ଷ୍ଟଲ୍ କରିବାକୁ: Chrome/Edge ରେ ବ୍ରାଉଜର୍ ମେନୁ (⋮) ଖୋଲି Install app ବା Add to Home screen ବାଛନ୍ତୁ। ଡେସ୍କଟପ୍‌ରେ ଠିକଣା ବାର୍‌ର ଇନ୍‌ଷ୍ଟଲ୍ ଆଇକନ୍ ବ୍ୟବହାର କରନ୍ତୁ। ବିକଳ୍ପ ନ ଦେଖାଗଲେ ବ୍ରାଉଜର୍ ଇନ୍‌ଷ୍ଟଲ୍ ସମର୍ଥନ କରେ ନାହିଁ କିମ୍ବା ଆପ୍ ପୂର୍ବରୁ ଇନ୍‌ଷ୍ଟଲ୍ ଅଛି।"]
};
var AT=["placeholder","aria-label","title"],orig=new WeakMap(),wrote=new WeakMap();
function idx(){return Math.max(0,LANGS.indexOf(cur))}
function tr(s){ /* English -> current language; returns s when unknown */
  if(cur==="en")return s;
  var n=s.replace(/\s+/g," ").trim();if(!n)return s;
  var p=/^[^A-Za-z0-9]*/.exec(n)[0],c=n.slice(p.length);if(/^Part \d+$/.test(c))return p+["भाग ","ଭାଗ "][idx()-1]+c.slice(5);var e=D[c]||D[c.replace(/\s*:$/,"")];
  return e?p+e[idx()-1]:s}
function node(t){
  var pn=t.parentNode;if(pn&&pn.nodeName==="OPTION"&&!pn.hasAttribute("value"))return;
  var d=t.data,w=wrote.get(t);
  if(w!==undefined&&w===d){d=orig.get(t)}else{orig.set(t,d);wrote.delete(t)}
  var r=cur==="en"?d:tr(d);
  if(r!==t.data){wrote.set(t,r);t.data=r}else if(r===d)wrote.delete(t)}
function attrs(e){
  var o=e._co||(e._co={}),w=e._cw||(e._cw={});
  AT.forEach(function(a){var v=e.getAttribute(a);if(v==null)return;
    if(w[a]!==undefined&&w[a]===v)v=o[a];else{o[a]=v;delete w[a]}
    var r=cur==="en"?v:tr(v);if(r!==e.getAttribute(a)){w[a]=r;e.setAttribute(a,r)}})}
function walk(root){
  if(root.nodeType===3){if(root.parentNode&&!/^(SCRIPT|STYLE|TEXTAREA)$/.test(root.parentNode.nodeName))node(root);return}
  if(root.nodeType!==1||/^(SCRIPT|STYLE)$/.test(root.nodeName))return;
  attrs(root);
  for(var c=root.firstChild;c;c=c.nextSibling)walk(c)}
var mo=new MutationObserver(function(ms){
  if(busy)return;busy=true;
  try{ms.forEach(function(m){
    if(m.type==="characterData"){walk(m.target)}
    else if(m.type==="attributes"){if(m.target.nodeType===1)attrs(m.target)}
    else m.addedNodes.forEach(walk)})}finally{mo.takeRecords();busy=false}});
function apply(l){
  cur=LANGS.indexOf(l)<0?"en":l;
  busy=true;try{document.documentElement.lang=cur;walk(document.body);
    var s=document.getElementById("chub_lang");if(s)s.value=cur;
    var h=document.getElementById("mn_hint");if(h)h.textContent=""}finally{mo.takeRecords();busy=false}
  try{localStorage.setItem(KEY,cur)}catch(e){}}
window.chubT=function(k){var m=M[k];return m?m[idx()]:""};
window.chubLang=function(l){if(l)apply(l);return cur};
function init(){
  if(document.getElementById("chub_lang"))return;
  var nav=document.querySelector("nav"),s=document.createElement("select"),bar=document.createElement("div");
  s.id="chub_lang";s.setAttribute("aria-label","Language");s.className="chub-lang-sel";
  [["en","English"],["hi","हिन्दी"],["or","ଓଡ଼ିଆ"]].forEach(function(o){var x=document.createElement("option");x.value=o[0];x.textContent=o[1];x.lang=o[0];s.appendChild(x)});
  var st=document.createElement("style");
  st.textContent=".chub-langbar{display:flex;justify-content:flex-end;align-items:center;gap:8px;padding:0 0 6px;padding-right:58px}.chub-lang-sel{min-height:44px;padding:4px 10px;border-radius:999px;font:600 15px system-ui,sans-serif;max-width:140px}#chub-upd{position:fixed;left:12px;right:12px;bottom:calc(76px + env(safe-area-inset-bottom,0px));z-index:9998;max-width:420px;margin:0 auto;border-radius:14px}";
  document.head.appendChild(st);
  bar.className="chub-langbar";var ic=document.createElement("span");ic.textContent="🌐";ic.setAttribute("aria-hidden","true");bar.appendChild(ic);bar.appendChild(s);
  if(nav&&nav.parentNode)nav.parentNode.insertBefore(bar,nav.nextSibling);else document.body.prepend(bar);
  s.addEventListener("change",function(){apply(s.value)});
  var saved="en";try{saved=localStorage.getItem(KEY)||"en"}catch(e){}
  mo.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:AT});
  apply(saved)}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init()
})();
