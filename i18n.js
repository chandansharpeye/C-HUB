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
"School Study Library":["स्कूल स्टडी लाइब्रेरी","ସ୍କୁଲ୍ ଷ୍ଟଡି ଲାଇବ୍ରେରୀ"],
"School Study Library (Class 5–10)":["स्कूल स्टडी लाइब्रेरी (कक्षा 5–10)","ସ୍କୁଲ୍ ଷ୍ଟଡି ଲାଇବ୍ରେରୀ (ଶ୍ରେଣୀ ୫–୧୦)"],
"Classes 5–10 · BSE Odisha":["कक्षा 5–10 · BSE Odisha","ଶ୍ରେଣୀ ୫–୧୦ · BSE Odisha"],
"Computer Learning Hub":["कंप्यूटर लर्निंग हब","କମ୍ପ୍ୟୁଟର୍ ଲର୍ଣ୍ଣିଂ ହବ୍"],
"Typing Lab":["टाइपिंग लैब","ଟାଇପିଂ ଲ୍ୟାବ୍"],"Coding Academy":["कोडिंग एकेडमी","କୋଡିଂ ଏକାଡେମୀ"],
"Computer Basics|Computer Fundamentals":["कंप्यूटर की बुनियादी बातें","କମ୍ପ୍ୟୁଟର୍ ମୌଳିକ ଜ୍ଞାନ"],
"Keyboard Shortcuts Master":["कीबोर्ड शॉर्टकट मास्टर","କୀବୋର୍ଡ ଶର୍ଟକଟ୍ ମାଷ୍ଟର"],
"Job Alerts":["जॉब अलर्ट","ଚାକିରି ଅଲର୍ଟ"],"Before you apply":["आवेदन से पहले","ଆବେଦନ ପୂର୍ବରୁ"],
"Quick quiz":["क्विक क्विज़","ତୁରନ୍ତ କୁଇଜ୍"],"Personal best:":["सर्वश्रेष्ठ स्कोर:","ସର୍ବୋତ୍ତମ ସ୍କୋର:"],
"Search C-HUB":["C-HUB में खोजें","C-HUB ରେ ଖୋଜନ୍ତୁ"],
"Nothing found. Try another word.":["कुछ नहीं मिला। कोई दूसरा शब्द आज़माएं।","କିଛି ମିଳିଲା ନାହିଁ। ଅନ୍ୟ ଶବ୍ଦ ଚେଷ୍ଟା କରନ୍ତୁ।"],
"New version ready. Tap to refresh.":["नया वर्शन तैयार है। रिफ़्रेश करने के लिए टैप करें।","ନୂଆ ସଂସ୍କରଣ ପ୍ରସ୍ତୁତ। ରିଫ୍ରେଶ୍ କରିବାକୁ ଟ୍ୟାପ୍ କରନ୍ତୁ।"],
"Search tools, formulas, topics…":["टूल, फ़ॉर्मूले और विषय खोजें…","ଟୁଲ୍, ଫର୍ମୁଲା ଓ ବିଷୟ ଖୋଜନ୍ତୁ…"],
"Choose class":["कक्षा चुनें","ଶ୍ରେଣୀ ବାଛନ୍ତୁ"],"Chapter / topic (optional)":["अध्याय / विषय (वैकल्पिक)","ଅଧ୍ୟାୟ / ବିଷୟ (ଇଚ୍ଛାଧୀନ)"],
"Refresh selection":["चयन रीफ़्रेश करें","ଚୟନ ରିଫ୍ରେଶ୍ କରନ୍ତୁ"],"Search saved cards…":["सेव किए कार्ड खोजें…","ସେଭ୍ କାର୍ଡ୍ ଖୋଜନ୍ତୁ…"],"Import backup":["बैकअप इम्पोर्ट करें","ବ୍ୟାକଅପ୍ ଆମଦାନି କରନ୍ତୁ"],
"Study • Skills • Tools":["पढ़ाई • कौशल • टूल","ପାଠପଢ଼ା • ଦକ୍ଷତା • ଟୁଲ୍"],"Join WhatsApp Channel":["WhatsApp चैनल से जुड़ें","WhatsApp ଚ୍ୟାନେଲ୍‌ରେ ଯୋଗ ଦିଅନ୍ତୁ"],
"Visual lesson":["चित्रों के साथ पाठ","ଚିତ୍ର ସହିତ ପାଠ"],"Questions & answers":["प्रश्न और उत्तर","ପ୍ରଶ୍ନ ଓ ଉତ୍ତର"],"Exam revision":["परीक्षा दोहराव","ପରୀକ୍ଷା ପୁନରାବୃତ୍ତି"],
"Open a textbook file from your device":["अपने डिवाइस से पाठ्यपुस्तक खोलें","ଆପଣଙ୍କ ଡିଭାଇସ୍‌ରୁ ପାଠ୍ୟପୁସ୍ତକ ଖୋଲନ୍ତୁ"],"Print / Save as PDF":["प्रिंट / PDF के रूप में सेव करें","ପ୍ରିଣ୍ଟ / PDF ଭାବେ ସେଭ୍ କରନ୍ତୁ"]
};
/* Translation audit additions: common labels, dynamic dashboard text, forms and tool messages. */
var AUDIT={
"Ready • online":["तैयार • ऑनलाइन","ପ୍ରସ୍ତୁତ • ଅନଲାଇନ୍"],
"Your day at a glance.":["आपके दिन की एक झलक।","ଆପଣଙ୍କ ଦିନର ଏକ ଝଲକ।"],
"Built from what you save in the Student System, My Study Tools and Quiz Zone on this device.":["इस डिवाइस पर Student System, My Study Tools और Quiz Zone में सेव की गई जानकारी से तैयार।","ଏହି ଡିଭାଇସ୍‌ରେ Student System, My Study Tools ଓ Quiz Zone ରେ ସେଭ୍ କରିଥିବା ତଥ୍ୟରୁ ପ୍ରସ୍ତୁତ।"],
"🔥 Study streak":["🔥 लगातार पढ़ाई के दिन","🔥 ଲଗାତାର ପଢ଼ା ଦିନ"],
"0 days":["0 दिन","୦ ଦିନ"],"0 min today":["आज 0 मिनट","ଆଜି ୦ ମିନିଟ୍"],
"📋 Today's tasks":["📋 आज के काम","📋 ଆଜିର କାମ"],"done":["पूरा","ସମ୍ପୂର୍ଣ୍ଣ"],
"📖 Revision due":["📖 दोहराने का समय","📖 ପୁନରାବୃତ୍ତି ସମୟ"],"topics today":["आज के विषय","ଆଜିର ବିଷୟ"],
"📝 Quiz accuracy":["📝 क्विज़ की सटीकता","📝 କୁଇଜ୍ ସଠିକତା"],"overall":["कुल","ମୋଟ"],
"Overall progress":["कुल प्रगति","ମୋଟ ଅଗ୍ରଗତି"],
"Start using the tools to see your progress.":["अपनी प्रगति देखने के लिए टूल्स का इस्तेमाल शुरू करें।","ଆପଣଙ୍କ ଅଗ୍ରଗତି ଦେଖିବାକୁ ଟୁଲ୍‌ଗୁଡ଼ିକ ବ୍ୟବହାର କରିବା ଆରମ୍ଭ କରନ୍ତୁ।"],
"Study goals":["पढ़ाई के लक्ष्य","ପଢ଼ା ଲକ୍ଷ୍ୟ"],"Revisions done":["पूरी की गई पुनरावृत्तियाँ","ସମାପ୍ତ ପୁନରାବୃତ୍ତି"],"Mistakes mastered":["सुधारी गई गलतियाँ","ସୁଧାରିଥିବା ଭୁଲ୍"],"Quiz accuracy":["क्विज़ की सटीकता","କୁଇଜ୍ ସଠିକତା"],
"Today's tasks":["आज के काम","ଆଜିର କାମ"],
"No task planned for today. Make one in Study Goal → Daily Plan.":["आज के लिए कोई काम तय नहीं है। Study Goal → Daily Plan में एक योजना बनाएं।","ଆଜି ପାଇଁ କୌଣସି କାମ ଯୋଜନା ହୋଇନାହିଁ। Study Goal → Daily Plan ରେ ଯୋଜନା କରନ୍ତୁ।"],
"Revision due today":["आज दोहराने वाले विषय","ଆଜି ପୁନରାବୃତ୍ତି କରିବାକୁ ଥିବା ବିଷୟ"],
"No topics yet. Add one in Smart Revision.":["अभी कोई विषय नहीं है। Smart Revision में एक जोड़ें।","ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ବିଷୟ ନାହିଁ। Smart Revision ରେ ଗୋଟିଏ ଯୋଡ଼ନ୍ତୁ।"],
"Weak topics (from quizzes)":["कमज़ोर विषय (क्विज़ से)","ଦୁର୍ବଳ ବିଷୟ (କୁଇଜ୍‌ରୁ)"],
"No weak topics found yet. Take a quiz in Quiz Zone.":["अभी कोई कमज़ोर विषय नहीं मिला। Quiz Zone में क्विज़ दें।","ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ଦୁର୍ବଳ ବିଷୟ ମିଳିନାହିଁ। Quiz Zone ରେ କୁଇଜ୍ ଦିଅନ୍ତୁ।"],
"A simple system I designed to help students study smarter, track mistakes, and stay consistent.":["विद्यार्थियों को बेहतर पढ़ाई, गलतियों पर नज़र और नियमितता में मदद करने के लिए बनाया गया सरल सिस्टम।","ଛାତ୍ରଛାତ୍ରୀଙ୍କୁ ଭଲ ଭାବେ ପଢ଼ିବା, ଭୁଲ୍‌ର ହିସାବ ରଖିବା ଓ ନିୟମିତ ରହିବାରେ ସାହାଯ୍ୟ ପାଇଁ ତିଆରି ସରଳ ବ୍ୟବସ୍ଥା।"],
"Three tools, one routine: revise at the right time, break your goal into daily tasks, and learn from every mistake. Your data is saved on this device.":["तीन टूल्स, एक दिनचर्या: सही समय पर दोहराएं, लक्ष्य को रोज़ के कामों में बाँटें और हर गलती से सीखें। आपका डेटा इसी डिवाइस पर सेव होता है।","ତିନୋଟି ଟୁଲ୍, ଗୋଟିଏ ଦୈନିକ ଅଭ୍ୟାସ: ଠିକ୍ ସମୟରେ ପୁନରାବୃତ୍ତି କରନ୍ତୁ, ଲକ୍ଷ୍ୟକୁ ଦୈନିକ କାମରେ ବାଣ୍ଟନ୍ତୁ ଓ ପ୍ରତ୍ୟେକ ଭୁଲ୍‌ରୁ ଶିଖନ୍ତୁ। ଆପଣଙ୍କ ତଥ୍ୟ ଏହି ଡିଭାଇସ୍‌ରେ ସେଭ୍ ହୁଏ।"],
"📖 Smart Revision":["📖 स्मार्ट पुनरावृत्ति","📖 ସ୍ମାର୍ଟ ପୁନରାବୃତ୍ତି"],"🎯 Study Goal → Daily Plan":["🎯 पढ़ाई का लक्ष्य → दैनिक योजना","🎯 ପଢ଼ା ଲକ୍ଷ୍ୟ → ଦୈନିକ ଯୋଜନା"],"📝 Mistake Book":["📝 गलती पुस्तिका","📝 ଭୁଲ୍ ଖାତା"],
"Add a topic after you learn it. The system suggests dates for 1st Revision, 2nd Revision and Final Revision. Mark a topic as weak and it comes back sooner.":["कोई विषय सीखने के बाद जोड़ें। सिस्टम पहली, दूसरी और अंतिम पुनरावृत्ति की तारीखें सुझाता है। किसी विषय को कमज़ोर चिह्नित करें, तो वह जल्दी दोबारा दिखेगा।","କୌଣସି ବିଷୟ ଶିଖିବା ପରେ ଯୋଡ଼ନ୍ତୁ। ସିଷ୍ଟମ୍ ପ୍ରଥମ, ଦ୍ୱିତୀୟ ଓ ଶେଷ ପୁନରାବୃତ୍ତି ତାରିଖ ସୁପାରିଶ କରେ। ବିଷୟକୁ ଦୁର୍ବଳ ଭାବେ ଚିହ୍ନଟ କଲେ ଏହା ଶୀଘ୍ର ପୁଣି ଆସିବ।"],
"Topic you learned":["सीखा हुआ विषय","ଶିଖିଥିବା ବିଷୟ"],"Date learned":["सीखने की तारीख","ଶିଖିବା ତାରିଖ"],"This topic feels weak":["यह विषय कमज़ोर लगता है","ଏହି ବିଷୟଟି ଦୁର୍ବଳ ଲାଗୁଛି"],"Add topic":["विषय जोड़ें","ବିଷୟ ଯୋଡ଼ନ୍ତୁ"],
"No topics yet. Add the first thing you learned today.":["अभी कोई विषय नहीं है। आज जो पहली चीज़ सीखी है, उसे जोड़ें।","ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ବିଷୟ ନାହିଁ। ଆଜି ଶିଖିଥିବା ପ୍ରଥମ ବିଷୟଟି ଯୋଡ଼ନ୍ତୁ।"],
"Normal topics: 1st revision after 1 day, 2nd after 6 more days, final after 14 more days. Weak topics: 1, 3 and 7 days.":["सामान्य विषय: पहली पुनरावृत्ति 1 दिन बाद, दूसरी 6 दिन और बाद, अंतिम 14 दिन और बाद। कमज़ोर विषय: 1, 3 और 7 दिन बाद।","ସାଧାରଣ ବିଷୟ: ପ୍ରଥମ ପୁନରାବୃତ୍ତି ୧ ଦିନ ପରେ, ଦ୍ୱିତୀୟ ଆଉ ୬ ଦିନ ପରେ, ଶେଷଟି ଆଉ ୧୪ ଦିନ ପରେ। ଦୁର୍ବଳ ବିଷୟ: ୧, ୩ ଓ ୭ ଦିନ ପରେ।"],
"Write your goal and how many days you have. The system splits it into small daily tasks and shows your progress.":["अपना लक्ष्य और उपलब्ध दिनों की संख्या लिखें। सिस्टम इसे छोटे दैनिक कामों में बाँटकर प्रगति दिखाता है।","ଆପଣଙ୍କ ଲକ୍ଷ୍ୟ ଓ କେତେ ଦିନ ସମୟ ଅଛି ଲେଖନ୍ତୁ। ସିଷ୍ଟମ୍ ଏହାକୁ ଛୋଟ ଦୈନିକ କାମରେ ବାଣ୍ଟି ଅଗ୍ରଗତି ଦେଖାଏ।"],
"Your goal":["आपका लक्ष्य","ଆପଣଙ୍କ ଲକ୍ଷ୍ୟ"],"Finish in (days)":["कितने दिनों में पूरा करें","କେତେ ଦିନରେ ଶେଷ କରିବେ"],"Make my daily plan":["मेरी दैनिक योजना बनाएं","ମୋ ଦୈନିକ ଯୋଜନା ତିଆରି କରନ୍ତୁ"],
"No goals yet. Add one above, like “Accountancy Chapter 3” in 5 days.":["अभी कोई लक्ष्य नहीं है। ऊपर एक लक्ष्य जोड़ें, जैसे 5 दिनों में “Accountancy Chapter 3” पूरा करना।","ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ଲକ୍ଷ୍ୟ ନାହିଁ। ଉପରେ ଗୋଟିଏ ଯୋଡ଼ନ୍ତୁ, ଯେପରିକି ୫ ଦିନରେ “Accountancy Chapter 3”।"],
"Save the questions you got wrong, with the reason. Later, tap Revise My Mistakes to practise only those.":["ଭୁଲ୍ ହୋଇଥିବା ପ୍ରଶ୍ନ ଓ ଭୁଲ୍‌ର କାରଣ ସେଭ୍ କରନ୍ତୁ। ପରେ କେବଳ ସେଗୁଡ଼ିକ ଅଭ୍ୟାସ କରିବାକୁ Revise My Mistakes ଦବାନ୍ତୁ।","ଭୁଲ୍ ହୋଇଥିବା ପ୍ରଶ୍ନ ଓ କାରଣ ସେଭ୍ କରନ୍ତୁ। ପରେ କେବଳ ସେଗୁଡ଼ିକ ଅଭ୍ୟାସ ପାଇଁ Revise My Mistakes ଦବାନ୍ତୁ।"],
"Question or what went wrong":["प्रश्न या क्या गलती हुई","ପ୍ରଶ୍ନ କିମ୍ବା କ’ଣ ଭୁଲ୍ ହେଲା"],"Correct answer or right method":["सही उत्तर या सही तरीका","ସଠିକ୍ ଉତ୍ତର କିମ୍ବା ସଠିକ୍ ପଦ୍ଧତି"],"Mistake reason":["गलती का कारण","ଭୁଲ୍‌ର କାରଣ"],"Save mistake":["गलती सेव करें","ଭୁଲ୍ ସେଭ୍ କରନ୍ତୁ"],
"No mistakes saved yet. Every mistake you save is one you can stop repeating.":["अभी कोई गलती सेव नहीं है। हर सेव की गई गलती को समझकर आप उसे दोहराने से बच सकते हैं।","ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ଭୁଲ୍ ସେଭ୍ ହୋଇନାହିଁ। ସେଭ୍ କରିଥିବା ପ୍ରତ୍ୟେକ ଭୁଲ୍ ବୁଝିଲେ ତାହା ପୁଣି କରିବାରୁ ବଞ୍ଚିପାରିବେ।"],
"Revise My Mistakes (0)":["मेरी गलतियाँ दोहराएं (0)","ମୋ ଭୁଲ୍‌ଗୁଡ଼ିକ ପୁନରାବୃତ୍ତି କରନ୍ତୁ (୦)"],"Flashcards, study streak and your settings.":["फ्लैशकार्ड, पढ़ाई की निरंतरता और आपकी सेटिंग्स।","ଫ୍ଲାସକାର୍ଡ, ପଢ଼ାର ନିୟମିତତା ଓ ଆପଣଙ୍କ ସେଟିଂସ୍।"],
"Everything here is saved only on this device.":["यहाँ सब कुछ केवल इसी डिवाइस पर सेव होता है।","ଏଠାରେ ସବୁକିଛି କେବଳ ଏହି ଡିଭାଇସ୍‌ରେ ସେଭ୍ ହୁଏ।"],"🃏 Flashcards":["🃏 फ्लैशकार्ड","🃏 ଫ୍ଲାସକାର୍ଡ"],"🔥 Study Streak":["🔥 लगातार पढ़ाई","🔥 ଲଗାତାର ପଢ଼ା"],"⚙️ Settings":["⚙️ सेटिंग्स","⚙️ ସେଟିଂସ୍"],"Question":["प्रश्न","ପ୍ରଶ୍ନ"],"Answer":["उत्तर","ଉତ୍ତର"],"Save card":["कार्ड सेव करें","କାର୍ଡ ସେଭ୍ କରନ୍ତୁ"],"Practise cards":["कार्ड से अभ्यास करें","କାର୍ଡ ଅଭ୍ୟାସ କରନ୍ତୁ"],"No cards yet. Add a question and its answer above.":["अभी कोई कार्ड नहीं है। ऊपर प्रश्न और उत्तर जोड़ें।","ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି କାର୍ଡ ନାହିଁ। ଉପରେ ପ୍ରଶ୍ନ ଓ ଉତ୍ତର ଯୋଡ଼ନ୍ତୁ।"],
"Minutes studied today":["आज पढ़ाई के मिनट","ଆଜି ପଢ଼ିଥିବା ମିନିଟ୍"],"Add to today":["आज के समय में जोड़ें","ଆଜିର ସମୟରେ ଯୋଡ଼ନ୍ତୁ"],"Clear today":["आज का डेटा साफ़ करें","ଆଜିର ତଥ୍ୟ ସଫା କରନ୍ତୁ"],"Target percentage":["लक्ष्य प्रतिशत","ଲକ୍ଷ୍ୟ ପ୍ରତିଶତ"],"Theme":["थीम","ଥିମ୍"],"Export my data":["मेरा डेटा एक्सपोर्ट करें","ମୋ ତଥ୍ୟ ରପ୍ତାନି କରନ୍ତୁ"],"Reset all data":["सारा डेटा रीसेट करें","ସମସ୍ତ ତଥ୍ୟ ପୁନଃସେଟ୍ କରନ୍ତୁ"],
"English":["अंग्रेज़ी","ଇଂରାଜୀ"],"Hindi":["हिन्दी","ହିନ୍ଦୀ"],"Hinglish":["हिंग्लिश","ହିଙ୍ଗ୍ଲିଶ୍"],"Reset":["रीसेट करें","ପୁନଃସେଟ୍ କରନ୍ତୁ"],"Cancel edit":["संपादन रद्द करें","ସମ୍ପାଦନା ବାତିଲ୍ କରନ୍ତୁ"],"Add subject":["विषय जोड़ें","ବିଷୟ ଯୋଡ଼ନ୍ତୁ"],"Clear all":["सब साफ़ करें","ସବୁ ସଫା କରନ୍ତୁ"],"Time":["समय","ସମୟ"],"Phone":["फ़ोन","ଫୋନ୍"],"Number":["संख्या","ସଂଖ୍ୟା"],"Qty":["मात्रा","ପରିମାଣ"],"Rate (₹)":["दर (₹)","ଦର (₹)"],"All":["सभी","ସମସ୍ତ"],"Science":["विज्ञान","ବିଜ୍ଞାନ"],"Mathematics":["गणित","ଗଣିତ"],"Maths":["गणित","ଗଣିତ"],"Economics":["अर्थशास्त्र","ଅର୍ଥନୀତି"],"Accountancy":["लेखाशास्त्र","ହିସାବ ବିଜ୍ଞାନ"],"Business Studies":["व्यवसाय अध्ययन","ବ୍ୟବସାୟ ଅଧ୍ୟୟନ"],"Class 8":["कक्षा 8","ଶ୍ରେଣୀ ୮"],"Class 9":["कक्षा 9","ଶ୍ରେଣୀ ୯"],"Class 10":["कक्षा 10","ଶ୍ରେଣୀ ୧୦"],"Class 11":["कक्षा 11","ଶ୍ରେଣୀ ୧୧"],"Class 12":["कक्षा 12","ଶ୍ରେଣୀ ୧୨"],"Other":["अन्य","ଅନ୍ୟାନ୍ୟ"],"Windows":["विंडोज़","ୱିଣ୍ଡୋଜ୍"],"Most apps":["अधिकांश ऐप्स","ଅଧିକାଂଶ ଆପ୍"],"Most browsers":["अधिकांश ब्राउज़र","ଅଧିକାଂଶ ବ୍ରାଉଜର୍"],"Word / editors":["Word / एडिटर","Word / ଏଡିଟର୍"],"Windows / most apps":["विंडोज़ / अधिकांश ऐप्स","ୱିଣ୍ଡୋଜ୍ / ଅଧିକାଂଶ ଆପ୍"],"HTML":["HTML","HTML"],"CSS":["CSS","CSS"],"JavaScript":["JavaScript","JavaScript"],"RAM":["RAM","RAM"],"Excel":["Excel","Excel"],"GST":["GST","GST"],"Leadership":["नेतृत्व","ନେତୃତ୍ୱ"],"Doubt solving":["शंकाओं का समाधान","ସନ୍ଦେହ ସମାଧାନ"],"Revision support":["पुनरावृत्ति में सहायता","ପୁନରାବୃତ୍ତି ସହାୟତା"],"Copy prompt":["प्रॉम्प्ट कॉपी करें","ପ୍ରମ୍ପ୍ଟ କପି କରନ୍ତୁ"],"Task":["काम","କାମ"],"Contact":["संपर्क","ଯୋଗାଯୋଗ"],"Add your own document":["अपना दस्तावेज़ जोड़ें","ନିଜ ଡକ୍ୟୁମେଣ୍ଟ ଯୋଡ଼ନ୍ତୁ"],"Compress PDF":["PDF संपीड़ित करें","PDF ସଙ୍କୁଚିତ କରନ୍ତୁ"],"Start test":["टेस्ट शुरू करें","ପରୀକ୍ଷା ଆରମ୍ଭ କରନ୍ତୁ"],"Last updated: October 2026":["अंतिम अपडेट: अक्टूबर 2026","ଶେଷ ଅପଡେଟ୍: ଅକ୍ଟୋବର ୨୦୨୬"],"e.g. Depreciation":["जैसे, मूल्यह्रास","ଯେପରିକି ମୂଲ୍ୟହ୍ରାସ"],"e.g. Economics":["जैसे, अर्थशास्त्र","ଯେପରିକି ଅର୍ଥନୀତି"],"e.g. Explain depreciation with an example":["जैसे, उदाहरण सहित मूल्यह्रास समझाएं","ଯେପରିକି ଉଦାହରଣ ସହିତ ମୂଲ୍ୟହ୍ରାସ ବୁଝାନ୍ତୁ"],
"Open official site ↗ (opens official/external resource)":["आधिकारिक वेबसाइट खोलें ↗ (आधिकारिक/बाहरी स्रोत खुलेगा)","ସରକାରୀ ୱେବସାଇଟ୍ ଖୋଲନ୍ତୁ ↗ (ସରକାରୀ/ବାହ୍ୟ ଉତ୍ସ ଖୋଲିବ)"],"🔒 Files are processed on your device and are not uploaded.":["🔒 फ़ाइलें आपके डिवाइस पर प्रोसेस होती हैं और अपलोड नहीं की जातीं।","🔒 ଫାଇଲ୍‌ଗୁଡ଼ିକ ଆପଣଙ୍କ ଡିଭାଇସ୍‌ରେ ପ୍ରକ୍ରିୟାକରଣ ହୁଏ ଏବଂ ଅପଲୋଡ୍ ହୁଏ ନାହିଁ।"],
"📢 C-HUB • Study • Skills • Tools • Commerce • AI Tools • Calculators • Keep Learning 🚀":["📢 C-HUB • पढ़ाई • कौशल • टूल्स • कॉमर्स • AI टूल्स • कैलकुलेटर • सीखते रहें 🚀","📢 C-HUB • ପାଠପଢ଼ା • ଦକ୍ଷତା • ଟୁଲ୍ • କମର୍ସ • AI ଟୁଲ୍ • କାଲକୁଲେଟର୍ • ଶିଖୁଥାନ୍ତୁ 🚀"],
"Open official site ↗":["आधिकारिक वेबसाइट खोलें ↗","ସରକାରୀ ୱେବସାଇଟ୍ ଖୋଲନ୍ତୁ ↗"],"0 min":["0 मिनट","୦ ମିନିଟ୍"],"Chartered Accountant (CA)":["चार्टर्ड अकाउंटेंट (CA)","ଚାର୍ଟାର୍ଡ ଆକାଉଣ୍ଟାଣ୍ଟ (CA)"],"Accountant & Tax Consultant":["लेखाकार और कर सलाहकार","ହିସାବରକ୍ଷକ ଓ କର ପରାମର୍ଶଦାତା"],"Bank Officer / Clerk":["बैंक अधिकारी / क्लर्क","ବ୍ୟାଙ୍କ ଅଧିକାରୀ / କ୍ଲର୍କ"],"Financial Analyst":["वित्तीय विश्लेषक","ଆର୍ଥିକ ବିଶ୍ଳେଷକ"],"Business Manager":["व्यवसाय प्रबंधक","ବ୍ୟବସାୟ ପରିଚାଳକ"],"Entrepreneur":["उद्यमी","ଉଦ୍ୟୋଗୀ"],"Software Developer":["सॉफ़्टवेयर डेवलपर","ସଫ୍ଟୱେର୍ ଡେଭେଲପର୍"],"Data Analyst":["डेटा विश्लेषक","ଡାଟା ବିଶ୍ଳେଷକ"],"Lawyer":["वकील","ଓକିଲ"],"Civil Services Officer":["सिविल सेवा अधिकारी","ସିଭିଲ୍ ସେବା ଅଧିକାରୀ"],"Graphic / UI Designer":["ग्राफ़िक / UI डिज़ाइनर","ଗ୍ରାଫିକ୍ / UI ଡିଜାଇନର୍"],"Content Creator / Video Editor":["कंटेंट क्रिएटर / वीडियो एडिटर","କଣ୍ଟେଣ୍ଟ କ୍ରିଏଟର୍ / ଭିଡିଓ ଏଡିଟର୍"]
};
Object.assign(AUDIT,{
"Settings save automatically. Export gives you a backup file of everything saved on this device.":["सेटिंग्स अपने आप सेव होती हैं। एक्सपोर्ट करने पर इस डिवाइस पर सेव की गई सभी चीज़ों की बैकअप फ़ाइल मिलती है।","ସେଟିଂସ୍ ସ୍ୱୟଂଚାଳିତ ଭାବେ ସେଭ୍ ହୁଏ। ଏକ୍ସପୋର୍ଟ କଲେ ଏହି ଡିଭାଇସ୍‌ରେ ସେଭ୍ ହୋଇଥିବା ସମସ୍ତ ତଥ୍ୟର ବ୍ୟାକଅପ୍ ଫାଇଲ୍ ମିଳେ।"],
"Build practical digital skills with short lessons and hands-on practice. Your progress is saved only in this browser on this device.":["छोटे पाठों और अभ्यास से उपयोगी डिजिटल कौशल सीखें। आपकी प्रगति इसी डिवाइस के इस ब्राउज़र में सेव होती है।","ଛୋଟ ପାଠ ଓ ହାତକଳା ଅଭ୍ୟାସରେ ବ୍ୟବହାରିକ ଡିଜିଟାଲ୍ ଦକ୍ଷତା ଶିଖନ୍ତୁ। ଆପଣଙ୍କ ଅଗ୍ରଗତି ଏହି ଡିଭାଇସ୍‌ର ଏହି ବ୍ରାଉଜର୍‌ରେ ମାତ୍ର ସେଭ୍ ହୁଏ।"],
"⚡ Shortcuts":["⚡ शॉर्टकट","⚡ ଶର୍ଟକଟ୍"],"Choose a duration, type the sample text, then finish the test to save your WPM and accuracy.":["समय चुनें, नमूना टेक्स्ट टाइप करें और टेस्ट पूरा करके WPM व सटीकता सेव करें।","ସମୟ ବାଛନ୍ତୁ, ନମୁନା ଟେକ୍ସଟ୍ ଟାଇପ୍ କରନ୍ତୁ, ତାପରେ ଟେଷ୍ଟ ଶେଷ କରି WPM ଓ ସଠିକତା ସେଭ୍ କରନ୍ତୁ।"],
"Level":["स्तर","ସ୍ତର"],"Test duration":["टेस्ट की अवधि","ପରୀକ୍ଷା ଅବଧି"],"Type the passage below":["नीचे दिया गया अनुच्छेद टाइप करें","ତଳେ ଦିଆଯାଇଥିବା ଅନୁଚ୍ଛେଦ ଟାଇପ୍ କରନ୍ତୁ"],"Your typing":["आपकी टाइपिंग","ଆପଣଙ୍କ ଟାଇପିଂ"],"WPM: 0 · Accuracy: 100%":["WPM: 0 · सटीकता: 100%","WPM: ୦ · ସଠିକତା: ୧୦୦%"],"Finish & save":["पूरा करें और सेव करें","ଶେଷ କରନ୍ତୁ ଓ ସେଭ୍ କରନ୍ତୁ"],"No test yet":["अभी कोई टेस्ट नहीं","ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ପରୀକ୍ଷା ନାହିଁ"],"Recent tests will appear here.":["हाल के टेस्ट यहाँ दिखेंगे।","ସମ୍ପ୍ରତିର ପରୀକ୍ଷା ଏଠାରେ ଦେଖାଯିବ।"],
"Learn the basics, experiment in the editor, and preview HTML/CSS/JavaScript locally. The editor does not send your code to a server.":["बुनियादी बातें सीखें, एडिटर में प्रयोग करें और HTML/CSS/JavaScript का प्रीव्यू अपने डिवाइस पर देखें। एडिटर आपका कोड सर्वर पर नहीं भेजता।","ମୌଳିକ ବିଷୟ ଶିଖନ୍ତୁ, ଏଡିଟର୍‌ରେ ପରୀକ୍ଷା କରନ୍ତୁ ଓ HTML/CSS/JavaScript ପ୍ରିଭ୍ୟୁ ନିଜ ଡିଭାଇସ୍‌ରେ ଦେଖନ୍ତୁ। ଏଡିଟର୍ ଆପଣଙ୍କ କୋଡ୍ ସର୍ଭରକୁ ପଠାଏ ନାହିଁ।"],
"Choose a starter":["ଆରମ୍ଭ ପାଇଁ ଗୋଟିଏ ବାଛନ୍ତୁ","ଆରମ୍ଭ ପାଇଁ ଗୋଟିଏ ବାଛନ୍ତୁ"],"Load example":["उदाहरण लोड करें","ଉଦାହରଣ ଲୋଡ୍ କରନ୍ତୁ"],"▶ Run preview":["▶ प्रीव्यू चलाएं","▶ ପ୍ରିଭ୍ୟୁ ଚଲାନ୍ତୁ"],"Save project":["प्रोजेक्ट सेव करें","ପ୍ରୋଜେକ୍ଟ ସେଭ୍ କରନ୍ତୁ"],"Preview":["प्रीव्यू","ପ୍ରିଭ୍ୟୁ"],
"HTML lessons":["HTML पाठ","HTML ପାଠ"],"Structure, headings, links, images and forms.":["संरचना, शीर्षक, लिंक, इमेज और फ़ॉर्म।","ଗଠନ, ଶୀର୍ଷକ, ଲିଙ୍କ୍, ଛବି ଓ ଫର୍ମ।"],"Learn HTML on W3Schools ↗":["W3Schools पर HTML सीखें ↗","W3Schools ରେ HTML ଶିଖନ୍ତୁ ↗"],"CSS lessons":["CSS पाठ","CSS ପାଠ"],"Colours, spacing, layouts and responsive design.":["रंग, दूरी, लेआउट और रिस्पॉन्सिव डिज़ाइन।","ରଙ୍ଗ, ବ୍ୟବଧାନ, ଲେଆଉଟ୍ ଓ ରେସ୍ପନ୍ସିଭ୍ ଡିଜାଇନ୍।"],"Learn CSS on W3Schools ↗":["W3Schools पर CSS सीखें ↗","W3Schools ରେ CSS ଶିଖନ୍ତୁ ↗"],"JavaScript lessons":["JavaScript पाठ","JavaScript ପାଠ"],"Variables, conditions, functions and events.":["वेरिएबल, शर्तें, फ़ंक्शन और इवेंट।","ଭେରିଏବଲ୍, ସର୍ତ୍ତ, ଫଙ୍କସନ୍ ଓ ଇଭେଣ୍ଟ।"],"Learn JavaScript on W3Schools ↗":["W3Schools पर JavaScript सीखें ↗","W3Schools ରେ JavaScript ଶିଖନ୍ତୁ ↗"],"Python and SQL":["Python और SQL","Python ଓ SQL"],"Beginner tutorials and examples.":["शुरुआती लोगों के लिए ट्यूटोरियल और उदाहरण।","ନବଶିକ୍ଷୁଙ୍କ ପାଇଁ ଟ୍ୟୁଟୋରିଆଲ୍ ଓ ଉଦାହରଣ।"],"Python ↗":["Python ↗","Python ↗"],"SQL ↗":["SQL ↗","SQL ↗"],"Safety: preview runs in a sandbox. Avoid entering passwords, personal details or code you do not trust.":["सुरक्षा: प्रीव्यू अलग सुरक्षित वातावरण में चलता है। पासवर्ड, निजी जानकारी या अविश्वसनीय कोड न डालें।","ସୁରକ୍ଷା: ପ୍ରିଭ୍ୟୁ ଏକ ସ୍ୟାଣ୍ଡବକ୍ସରେ ଚାଲେ। ପାସୱାର୍ଡ, ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ କିମ୍ବା ଅବିଶ୍ୱସନୀୟ କୋଡ୍ ଦିଅନ୍ତୁ ନାହିଁ।"],
"Tap a topic to revise its key idea.":["मुख्य विचार दोहराने के लिए किसी विषय पर टैप करें।","ମୁଖ୍ୟ ଧାରଣା ପୁନରାବୃତ୍ତି ପାଇଁ ଏକ ବିଷୟ ଉପରେ ଟ୍ୟାପ୍ କରନ୍ତୁ।"],"Hardware vs software":["हार्डवेयर बनाम सॉफ़्टवेयर","ହାର୍ଡୱେର୍ ବନାମ ସଫ୍ଟୱେର୍"],"Hardware is the physical part of a computer. Software is the set of programs and instructions.":["हार्डवेयर कंप्यूटर का भौतिक हिस्सा है। सॉफ़्टवेयर प्रोग्राम और निर्देशों का समूह है।","ହାର୍ଡୱେର୍ ହେଉଛି କମ୍ପ୍ୟୁଟର୍‌ର ଭୌତିକ ଅଂଶ। ସଫ୍ଟୱେର୍ ହେଉଛି ପ୍ରୋଗ୍ରାମ୍ ଓ ନିର୍ଦ୍ଦେଶର ସମୂହ।"],"CPU":["CPU","CPU"],"The Central Processing Unit executes instructions and coordinates computer operations.":["Central Processing Unit ନିର୍ଦ୍ଦେଶଗୁଡ଼ିକ କାର୍ଯ୍ୟକାରୀ କରେ ଏବଂ କମ୍ପ୍ୟୁଟର୍‌ର କାମ ସମନ୍ୱୟ କରେ।","Central Processing Unit ନିର୍ଦ୍ଦେଶଗୁଡ଼ିକୁ କାର୍ଯ୍ୟକାରୀ କରି କମ୍ପ୍ୟୁଟର୍‌ର କାର୍ଯ୍ୟ ସମନ୍ୱୟ କରେ।"],"Storage: HDD / SSD":["स्टोरेज: HDD / SSD","ଷ୍ଟୋରେଜ୍: HDD / SSD"],"Storage keeps files for later use. SSDs are generally faster than hard disk drives.":["स्टोरेज फ़ाइलों को बाद में उपयोग के लिए रखता है। SSD आम तौर पर हार्ड डिस्क ड्राइव से तेज़ होते हैं।","ଷ୍ଟୋରେଜ୍ ଫାଇଲ୍‌ଗୁଡ଼ିକୁ ପରେ ବ୍ୟବହାର ପାଇଁ ରଖେ। SSD ସାଧାରଣତଃ ହାର୍ଡ ଡିସ୍କ ଡ୍ରାଇଭ୍‌ଠାରୁ ଦ୍ରୁତ।"],"Operating system":["ऑपरेटिंग सिस्टम","ଅପରେଟିଂ ସିଷ୍ଟମ୍"],"Windows, macOS, Linux and Android manage devices, files and apps.":["Windows, macOS, Linux और Android डिवाइस, फ़ाइलें और ऐप्स संभालते हैं।","Windows, macOS, Linux ଓ Android ଡିଭାଇସ୍, ଫାଇଲ୍ ଓ ଆପ୍ ପରିଚାଳନା କରନ୍ତି।"],"Files and folders":["फ़ाइलें और फ़ोल्डर","ଫାଇଲ୍ ଓ ଫୋଲ୍ଡର୍"],"Use clear names, folders and backups to keep documents organised.":["दस्तावेज़ व्यवस्थित रखने के लिए स्पष्ट नाम, फ़ोल्डर और बैकअप इस्तेमाल करें।","ଡକ୍ୟୁମେଣ୍ଟ ସୁସଂଗଠିତ ରଖିବାକୁ ସ୍ପଷ୍ଟ ନାମ, ଫୋଲ୍ଡର୍ ଓ ବ୍ୟାକଅପ୍ ବ୍ୟବହାର କରନ୍ତୁ।"],"Internet and browser":["इंटरनेट और ब्राउज़र","ଇଣ୍ଟରନେଟ୍ ଓ ବ୍ରାଉଜର୍"],"The internet connects networks; a browser opens websites. Check website addresses before sharing data.":["इंटरनेट नेटवर्कों को जोड़ता है; ब्राउज़र वेबसाइट खोलता है। डेटा साझा करने से पहले वेबसाइट का पता जाँचें।","ଇଣ୍ଟରନେଟ୍ ନେଟୱର୍କଗୁଡ଼ିକୁ ଯୋଡ଼େ; ବ୍ରାଉଜର୍ ୱେବସାଇଟ୍ ଖୋଲେ। ତଥ୍ୟ ସେୟାର୍ ପୂର୍ବରୁ ୱେବସାଇଟ୍ ଠିକଣା ଯାଞ୍ଚ କରନ୍ତୁ।"],"Email basics":["ईमेल की बुनियादी बातें","ଇମେଲ୍‌ର ମୌଳିକ ବିଷୟ"],"Use a clear subject, polite message, appropriate attachment and careful recipient check.":["स्पष्ट विषय, विनम्र संदेश और सही अटैचमेंट रखें; प्राप्तकर्ता का पता ध्यान से जाँचें।","ସ୍ପଷ୍ଟ ବିଷୟ, ଭଦ୍ର ସନ୍ଦେଶ ଓ ଉପଯୁକ୍ତ ଆଟାଚମେଣ୍ଟ ଦିଅନ୍ତୁ; ପ୍ରାପ୍ତକର୍ତ୍ତାଙ୍କ ଠିକଣା ଯାଞ୍ଚ କରନ୍ତୁ।"],"Word / Excel / PowerPoint":["Word / Excel / PowerPoint","Word / Excel / PowerPoint"],"Word creates documents, Excel organises and calculates data, and PowerPoint creates slide presentations.":["Word दस्तावेज़ बनाता है, Excel डेटा व्यवस्थित करके गणना करता है और PowerPoint स्लाइड प्रस्तुति बनाता है।","Word ଡକ୍ୟୁମେଣ୍ଟ ତିଆରି କରେ, Excel ତଥ୍ୟ ସଜାଇ ଗଣନା କରେ ଓ PowerPoint ସ୍ଲାଇଡ୍ ପ୍ରସ୍ତୁତି ତିଆରି କରେ।"],"Cybersecurity":["साइबर सुरक्षा","ସାଇବର୍ ସୁରକ୍ଷା"],"Use unique passwords, multi-factor authentication, updates and trusted downloads. Never share OTPs.":["अलग-अलग मज़बूत पासवर्ड, बहु-कारक प्रमाणीकरण, अपडेट और भरोसेमंद डाउनलोड इस्तेमाल करें। OTP कभी साझा न करें।","ଭିନ୍ନ ମଜବୁତ ପାସୱାର୍ଡ, ମଲ୍ଟି-ଫ୍ୟାକ୍ଟର୍ ପ୍ରମାଣୀକରଣ, ଅପଡେଟ୍ ଓ ବିଶ୍ୱସନୀୟ ଡାଉନଲୋଡ୍ ବ୍ୟବହାର କରନ୍ତୁ। OTP କେବେ ସେୟାର୍ କରନ୍ତୁ ନାହିଁ।"],
"Search common Windows, browser and document shortcuts.":["Windows, ब्राउज़र और दस्तावेज़ों के सामान्य शॉर्टकट खोजें।","Windows, ବ୍ରାଉଜର୍ ଓ ଡକ୍ୟୁମେଣ୍ଟର ସାଧାରଣ ଶର୍ଟକଟ୍ ଖୋଜନ୍ତୁ।"],"Copy":["कॉपी","କପି"],"Paste":["पेस्ट","ପେଷ୍ଟ"],"Cut":["कट","କଟ୍"],"Undo":["पूर्ववत करें","ପୂର୍ବବତ୍ କରନ୍ତୁ"],"Redo":["फिर से करें","ପୁଣି କରନ୍ତୁ"],"Save":["सेव करें","ସେଭ୍ କରନ୍ତୁ"],"Select all":["सब चुनें","ସବୁ ବାଛନ୍ତୁ"],"Find":["खोजें","ଖୋଜନ୍ତୁ"],"New tab":["नया टैब","ନୂଆ ଟ୍ୟାବ୍"],"Reopen closed tab":["बंद टैब फिर खोलें","ବନ୍ଦ ଟ୍ୟାବ୍ ପୁଣି ଖୋଲନ୍ତୁ"],"Switch apps":["ऐप बदलें","ଆପ୍ ବଦଳାନ୍ତୁ"],"Lock PC":["PC लॉक करें","PC ଲକ୍ କରନ୍ତୁ"],"File Explorer":["फ़ाइल एक्सप्लोरर","ଫାଇଲ୍ ଏକ୍ସପ୍ଲୋରର୍"],"Screenshot":["स्क्रीनशॉट","ସ୍କ୍ରିନ୍‌ସଟ୍"],"Task Manager":["टास्क मैनेजर","ଟାସ୍କ ମ୍ୟାନେଜର୍"],"Print":["प्रिंट करें","ପ୍ରିଣ୍ଟ କରନ୍ତୁ"],"Bold":["बोल्ड","ବୋଲ୍ଡ"],"Italic":["इटैलिक","ଇଟାଲିକ୍"],"Underline":["रेखांकित","ଅଣ୍ଡରଲାଇନ୍"],"Browser / documents":["ब्राउज़र / दस्तावेज़","ବ୍ରାଉଜର୍ / ଡକ୍ୟୁମେଣ୍ଟ"],"Many Windows apps":["कई Windows ऐप्स","ଅନେକ Windows ଆପ୍"],"New line in Excel cell":["Excel सेल में नई पंक्ति","Excel ସେଲ୍‌ରେ ନୂଆ ଧାଡ଼ି"],
"Explore job updates and opportunities on JobAlert.com. C-HUB is not affiliated with this external website.":["JobAlert.com पर नौकरी के अपडेट और अवसर देखें। C-HUB इस बाहरी वेबसाइट से संबद्ध नहीं है।","JobAlert.com ରେ ଚାକିରି ଅପଡେଟ୍ ଓ ସୁଯୋଗ ଦେଖନ୍ତୁ। C-HUB ଏହି ବାହ୍ୟ ୱେବସାଇଟ୍ ସହିତ ସଂଯୁକ୍ତ ନୁହେଁ।"],"Check eligibility, deadline and the official notification.":["पात्रता, अंतिम तिथि और आधिकारिक सूचना जाँचें।","ଯୋଗ୍ୟତା, ଶେଷ ତାରିଖ ଓ ସରକାରୀ ବିଜ୍ଞପ୍ତି ଯାଞ୍ଚ କରନ୍ତୁ।"],"Never pay an unknown person to guarantee a job.":["नौकरी की गारंटी के लिए किसी अनजान व्यक्ति को कभी पैसे न दें।","ଚାକିରି ନିଶ୍ଚିତ କରିବାକୁ କୌଣସି ଅଜଣା ବ୍ୟକ୍ତିଙ୍କୁ କେବେ ଟଙ୍କା ଦିଅନ୍ତୁ ନାହିଁ।"],"Do not share OTPs, passwords or banking PINs.":["OTP, पासवर्ड या बैंकिंग PIN साझा न करें।","OTP, ପାସୱାର୍ଡ କିମ୍ବା ବ୍ୟାଙ୍କିଂ PIN ସେୟାର୍ କରନ୍ତୁ ନାହିଁ।"],"Open JobAlert.com ↗":["JobAlert.com खोलें ↗","JobAlert.com ଖୋଲନ୍ତୁ ↗"],"Choose a subject and get practical methods you can use today.":["विषय चुनें और आज से इस्तेमाल करने योग्य व्यावहारिक तरीके पाएं।","ବିଷୟ ବାଛନ୍ତୁ ଓ ଆଜିଠାରୁ ବ୍ୟବହାର କରିପାରିବା ବ୍ୟବହାରିକ ପଦ୍ଧତି ପାଆନ୍ତୁ।"],"Computer":["कंप्यूटर","କମ୍ପ୍ୟୁଟର୍"],"Exams":["परीक्षाएँ","ପରୀକ୍ଷା"],"Know the paper":["प्रश्नपत्र को समझें","ପ୍ରଶ୍ନପତ୍ର ବୁଝନ୍ତୁ"],"Textbook first":["पहले पाठ्यपुस्तक","ପ୍ରଥମେ ପାଠ୍ୟପୁସ୍ତକ"],"Active recall":["सक्रिय स्मरण","ସକ୍ରିୟ ସ୍ମରଣ"],"Spaced revision":["अंतराल पर पुनरावृत्ति","ବ୍ୟବଧାନରେ ପୁନରାବୃତ୍ତି"],"Past papers":["पिछले प्रश्नपत्र","ପୂର୍ବ ପ୍ରଶ୍ନପତ୍ର"],"Error notebook":["गलतियों की नोटबुक","ଭୁଲ୍ ଖାତା"],"Write for marks":["अंक पाने के लिए लिखें","ମାର୍କ୍ସ ପାଇଁ ଲେଖନ୍ତୁ"],"Exam day":["परीक्षा का दिन","ପରୀକ୍ଷା ଦିନ"],"Body and mind":["शरीर और मन","ଶରୀର ଓ ମନ"],"Golden rules of accounting":["लेखांकन के सुनहरे नियम","ହିସାବର ସୁବର୍ଣ୍ଣ ନିୟମ"],"Three subjects, three questions":["तीन विषय, तीन सवाल","ତିନୋଟି ବିଷୟ, ତିନୋଟି ପ୍ରଶ୍ନ"],"Accounting":["लेखांकन","ହିସାବ"],"Tally":["टैली","ଟାଲି"],"Study Smarter. Build Skills. Become Future Ready.":["बेहतर पढ़ें। कौशल बढ़ाएं। भविष्य के लिए तैयार बनें।","ଭଲ ଭାବେ ପଢ଼ନ୍ତୁ। ଦକ୍ଷତା ବଢ଼ାନ୍ତୁ। ଭବିଷ୍ୟତ ପାଇଁ ପ୍ରସ୍ତୁତ ହୁଅନ୍ତୁ।"]
});
Object.keys(AUDIT).forEach(function(k){D[k]=AUDIT[k]});
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
  if(root.nodeType===3){if(root.parentNode&&root.parentNode.closest&&root.parentNode.closest("[data-no-i18n]"))return;if(root.parentNode&&!/^(SCRIPT|STYLE|TEXTAREA)$/.test(root.parentNode.nodeName))node(root);return}
  if(root.nodeType!==1||/^(SCRIPT|STYLE)$/.test(root.nodeName))return;
  if(root.closest&&root.closest("[data-no-i18n]"))return;
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
  var nav=document.querySelector("nav>div"),s=document.createElement("select"),bar=document.createElement("span");
  s.id="chub_lang";s.setAttribute("aria-label","Language");s.className="chub-lang-sel";
  [["en","English"],["hi","हिन्दी"],["or","ଓଡ଼ିଆ"]].forEach(function(o){var x=document.createElement("option");x.value=o[0];x.textContent=o[1];x.lang=o[0];s.appendChild(x)});
  var st=document.createElement("style");
  st.textContent="#chub-upd{position:fixed;left:12px;right:12px;bottom:calc(76px + env(safe-area-inset-bottom,0px));z-index:9998;max-width:420px;margin:0 auto;border-radius:14px}";
  document.head.appendChild(st);
  bar.className="chub-lang";var ic=document.createElement("span");ic.textContent="🌐";ic.setAttribute("aria-hidden","true");bar.appendChild(ic);bar.appendChild(s);
  var th=document.getElementById("th_btn");if(nav&&th&&th.parentNode===nav)nav.insertBefore(bar,th);else if(nav)nav.insertBefore(bar,nav.firstChild);else document.body.prepend(bar);
  s.addEventListener("change",function(){apply(s.value)});
  var saved="en";try{saved=localStorage.getItem(KEY)||"en"}catch(e){}
  mo.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:AT});
  apply(saved)}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init()
})();
