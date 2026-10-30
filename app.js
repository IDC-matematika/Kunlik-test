const LOGO = "data:image/png;base64,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";
/* ===== FIREBASE ===== */
const FB_CONFIG = { apiKey:"AIzaSyCZF3sgnr8mLev5iwPC0oAQ49l-Op7ZTIo", authDomain:"raqam-hujumi.firebaseapp.com", databaseURL:"https://raqam-hujumi-default-rtdb.firebaseio.com", projectId:"raqam-hujumi", storageBucket:"raqam-hujumi.firebasestorage.app", messagingSenderId:"729365767297", appId:"1:729365767297:web:211706400fe31689ec1980" };
const COOLDOWN_DEFAULT = 0;
const TEST = 10 * 60;
let fbdb=null,fbauth=null;
function initFirebase(){
  try{
    if(typeof firebase==="undefined"||!firebase.database){return false;}
    if(!FB_CONFIG.databaseURL){return false;}
    if(!firebase.apps||!firebase.apps.length){firebase.initializeApp(FB_CONFIG);}
    fbdb=firebase.database();
    if(!fbauth&&firebase.auth){fbauth=firebase.auth();authStart();}
    return true;
  }catch(e){fbdb=null;return false;}
}
/* ===== AUTH =====
   O'quvchilar — anonim kirish (reyting va o'z natijasini yozish uchun).
   Ustoz — email/parol; ustoz huquqi bazadagi admins/<uid> = true orqali beriladi. */
var auth={user:null,ready:false,admin:false,adminChecked:false,waiters:[]};
function authStart(){
  fbauth.onAuthStateChanged(function(u){
    auth.user=u||null;auth.admin=false;auth.adminChecked=false;
    if(!u){fbauth.signInAnonymously().catch(function(){authFlush();});return;}
    authFlush();
    if(u.isAnonymous){auth.adminChecked=true;authChanged();return;}
    fbdb.ref("admins/"+u.uid).once("value").then(function(s){auth.admin=s.val()===true;}).catch(function(){auth.admin=false;}).then(function(){auth.adminChecked=true;authChanged();});
  });
}
function authFlush(){auth.ready=true;var w=auth.waiters;auth.waiters=[];w.forEach(function(f){f(auth.user);});}
function whenAuth(){if(!fbauth||auth.ready)return Promise.resolve(auth.user);return new Promise(function(r){auth.waiters.push(r);setTimeout(function(){r(auth.user);},8000);});}
function authUid(){return auth.user?auth.user.uid:null;}
function isAdmin(){return !!(auth.user&&!auth.user.isAnonymous&&auth.admin);}
function authChanged(){if(typeof state!=="undefined"&&(state.phase==="admin"||state.phase==="adminLogin"))render();}
initFirebase();
function applyQRU(){BUILTIN.forEach(function(x,i){var r=QRU[i];if(r){if(r.q)x.q_ru=r.q;if(r.o)x.options_ru=r.o;if(r.s)x.solution_ru=r.s;}});}
var QBYQ=null;
function builtinByQ(){if(!QBYQ){QBYQ={};BUILTIN.forEach(function(x){QBYQ[x.q]=x;});}return QBYQ;}
function enrichBank(list){var m=builtinByQ();(list||[]).forEach(function(x){if(x&&!x.q_ru){var b=m[x.q];if(b){if(b.q_ru)x.q_ru=b.q_ru;if(b.options_ru)x.options_ru=b.options_ru;if(b.solution_ru)x.solution_ru=b.solution_ru;}}});return list;}
const UZ_MONTHS=["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"];
const UZ_WEEKDAYS=["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"];
const LETTERS=["A","B","C","D"];
const BRAND=["#a855f7","#22d3ee","#34d399","#fbbf24","#fb5b78","#818cf8","#f472b6","#2dd4bf"];
const FORMULAS=["a²+b²=c²","√x","πr²","∫f(x)dx","(a+b)²","∑","x²","30°","sinθ","y=kx+b","∞","ΔABC","≠","log","det"];
const K={profile:"idc:v3:profile",last:"idc:v3:last",attempt:"idc:v3:attempt",history:"idc:v3:history",mistakes:"idc:v3:mistakes",lang:"idc:v3:lang",theme:"idc:v3:theme",stats:"idc:v3:stats"};
const LS={get(k){try{var v=localStorage.getItem(k);return v?JSON.parse(v):null;}catch(e){return null;}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}},del(k){try{localStorage.removeItem(k);}catch(e){}}};
function todayInfo(){var n=new Date(),y=n.getFullYear(),m=n.getMonth(),d=n.getDate();return{key:y+"-"+String(m+1).padStart(2,"0")+"-"+String(d).padStart(2,"0"),label:d+"-"+UZ_MONTHS[m]+", "+y,weekday:UZ_WEEKDAYS[n.getDay()]};}
function shiftKey(key,delta){var a=key.split("-").map(Number);var dt=new Date(a[0],a[1]-1,a[2]+delta);return dt.getFullYear()+"-"+String(dt.getMonth()+1).padStart(2,"0")+"-"+String(dt.getDate()).padStart(2,"0");}
function weekKey(key){var a=key.split("-").map(Number);var dn=Math.floor(Date.UTC(a[0],a[1]-1,a[2])/864e5);return "W"+Math.floor((dn+3)/7);}
function genId(){return "u"+Math.random().toString(36).slice(2)+Date.now().toString(36);}
function fmt(s){s=Math.max(0,Math.round(s));return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");}
function levelInfo(xp){var lvl=1,need=100,total=0;while(lvl<999&&xp>=total+need){total+=need;lvl++;need=Math.round(need*1.32);}var into=xp-total;var rank=lvl>=10?"Daho":lvl>=6?"Usta":lvl>=3?"Bilimdon":"Boshlovchi";return{level:lvl,rank:rank,into:into,need:need,pct:Math.min(1,into/need)};}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>");}
function escAttr(v){return String(v).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function escTa(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function qLabel(v){return String(v).replace(/<svg[\s\S]*?<\/svg>/g," [chizma] ").replace(/<[^>]*>/g,"");}
function renderQ(s){
  s=String(s);
  if(s.indexOf("<svg")>=0){
    var end=s.indexOf("</svg>")+6;
    var before=s.slice(0,s.indexOf("<svg")).replace(/<br\s*\/?>(\s*)$/i,"");
    var svg=s.slice(s.indexOf("<svg"),end);
    var after=s.slice(end);
    return renderQ(before)+svg+(after?renderQ(after):"");
  }
  var allowed=[];
  var tmp=s.replace(/<(\/?)(br|span|b|i|sup|sub)([^>]*?)\/?>/gi,function(m){
    allowed.push(m); return ""+(allowed.length-1)+"";
  });
  tmp=esc(tmp);
  tmp=tmp.replace(/(\d+)/g,function(_,i){return allowed[+i];});
  return fracify(tmp);
}
function fracify(str){return String(str).replace(/(?<!\d)(\d{1,3})\/(\d{1,3})(?!\d)(?![^<]*>)/g,function(m,a,b){return '<span class="frac"><span class="fr-n">'+a+'</span><span class="fr-d">'+b+'</span></span>';});}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function lbPush(id,name,score,cls){if(!fbdb)return;whenAuth().then(function(){var uid=authUid();if(!uid)return;try{var ex=cls?{cls:cls}:{};fbdb.ref("lb/daily/"+today.key+"/"+id).update(Object.assign(ex,{name:name,uid:uid,ts:Date.now(),correct:firebase.database.ServerValue.increment(score),attempts:firebase.database.ServerValue.increment(1)})).catch(function(){});var wk=weekKey(today.key);fbdb.ref("lb/weekly/"+wk+"/"+id).update(Object.assign(cls?{cls:cls}:{},{name:name,uid:uid,ts:Date.now(),correct:firebase.database.ServerValue.increment(score)})).catch(function(){});}catch(e){}});}
function lbLoadDaily(){if(!fbdb)return Promise.resolve(null);return fbdb.ref("lb/daily/"+today.key).once("value").then(s=>{var o=s.val()||{};return Object.keys(o).map(k=>Object.assign({id:k},o[k]));}).catch(()=>null);}
function lbLoadWeekly(){if(!fbdb)return Promise.resolve(null);var wk=weekKey(today.key);return fbdb.ref("lb/weekly/"+wk).once("value").then(s=>{var o=s.val()||{};return Object.keys(o).map(k=>Object.assign({id:k},o[k]));}).catch(()=>null);}
function loadBank(){if(!fbdb)return Promise.resolve([]);return fbdb.ref("bank").once("value").then(s=>{var o=s.val()||{};return Object.keys(o).map(k=>Object.assign({id:k},o[k]));}).catch(()=>[]);}
function loadConfig(){if(!fbdb)return Promise.resolve(null);return fbdb.ref("config/cooldownMin").once("value").then(s=>s.val()).catch(()=>null);}
function loadSeeded(){if(!fbdb)return Promise.resolve(false);return fbdb.ref("config/seeded").once("value").then(function(s){return s.val()===true;}).catch(function(){return false;});}
/* Har bir test natijasi: results/<auth uid>/<push id> — ustoz hisoboti uchun (faqat o'zi yozadi, faqat ustoz o'qiydi) */
function resultPush(r,qs,sels){
  if(!fbdb)return;
  var tp={};(qs||[]).forEach(function(Q,i){if(!Q)return;var k=/^m\d+$/.test(Q.topic||"")?Q.topic:"aralash";var e=tp[k]||(tp[k]={c:0,t:0});e.t++;if(sels[i]===Q.correct)e.c++;});
  var rec={name:String(r.name||"Mehmon").slice(0,40),cls:String(r.cls||"").slice(0,12),date:today.key,ts:Date.now(),score:r.score,total:r.total,mode:r.mode,topics:tp};
  if(r.pid)rec.pid=String(r.pid).slice(0,40);if(r.room)rec.room=String(r.room);if(typeof r.elapsed==="number")rec.elapsed=r.elapsed;
  whenAuth().then(function(){var uid=authUid();if(!uid)return;try{fbdb.ref("results/"+uid).push(rec).catch(function(){});}catch(e){}});
}
function loadResults(){if(!fbdb)return Promise.resolve(null);return fbdb.ref("results").once("value").then(function(s){var o=s.val()||{},out=[];Object.keys(o).forEach(function(uid){var u=o[uid]||{};Object.keys(u).forEach(function(k){var r=u[k];if(r&&typeof r.score==="number")out.push(Object.assign({uid:uid,key:k},r));});});return out;}).catch(function(){return null;});}
function bankAdd(q){if(!fbdb)return Promise.resolve(false);return fbdb.ref("bank").push(q).then(()=>true).catch(()=>false);}
function bankDel(id){if(!fbdb)return Promise.resolve(false);return fbdb.ref("bank/"+id).remove().then(()=>true).catch(()=>false);}
function saveCooldown(n){if(!fbdb)return Promise.resolve(false);return fbdb.ref("config").update({cooldownMin:n}).then(()=>true).catch(()=>false);}
let _ac;function ac(){try{if(!_ac){var C=window.AudioContext||window.webkitAudioContext;if(C)_ac=new C();}if(_ac&&_ac.state==="suspended")_ac.resume();return _ac;}catch(e){return null;}}
function tone(f,dur,g,delay){g=g||0.05;delay=delay||0;var c=ac();if(!c)return;var t=c.currentTime+delay,o=c.createOscillator(),ga=c.createGain();o.type="sine";o.frequency.value=f;o.connect(ga);ga.connect(c.destination);ga.gain.setValueAtTime(0.0001,t);ga.gain.linearRampToValueAtTime(g,t+0.012);ga.gain.exponentialRampToValueAtTime(0.0001,t+dur);o.start(t);o.stop(t+dur+0.03);}
const sBlip=()=>tone(523,0.11,0.05);
const sFinish=()=>[523.25,659.25,783.99,1046.5].forEach((f,i)=>tone(f,0.34,0.05,i*0.12));
const sStart=()=>[660,880].forEach((f,i)=>tone(f,0.22,0.05,i*0.12));
const I={
 check:'<svg class="lic" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
 x:'<svg class="lic" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
 right:'<svg class="lic" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>',
 left:'<svg class="lic" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>',
 cal:'<svg class="lic" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
 list:'<svg class="lic" viewBox="0 0 24 24"><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><line x1="13" y1="6" x2="21" y2="6"/><line x1="13" y1="12" x2="21" y2="12"/><line x1="13" y1="18" x2="21" y2="18"/></svg>',
 timer:'<svg class="lic" viewBox="0 0 24 24"><line x1="10" y1="2" x2="14" y2="2"/><line x1="12" y1="14" x2="15" y2="11"/><circle cx="12" cy="14" r="8"/></svg>',
 bulb:'<svg class="lic" viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M2 12a8 8 0 0 1 16 0c0 2.5-1.5 4-2.5 5h-7C7.5 16 6 14.5 6 12"/></svg>',
 flame:'<svg class="lic" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
 star:'<svg class="lic" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
 bolt:'<svg class="lic" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
 trophy:'<svg class="lic" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
 bars:'<svg class="lic" viewBox="0 0 24 24"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
 filter:'<svg class="lic" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
 vol:'<svg class="lic" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
 mute:'<svg class="lic" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>',
 redo:'<svg class="lic" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
 trash:'<svg class="lic" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
 play:'<svg class="lic" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
 edit:'<svg class="lic" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
 gear:'<svg class="lic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
};
const today=todayInfo();
let timerInt=null,countInt=null;
const state={phase:"loading",profile:null,result:null,history:[],bank:[],cooldownMin:COOLDOWN_DEFAULT,
  variant:null,selections:Array(10).fill(null),current:0,startedAt:0,remaining:TEST,
  muted:false,counted:false,confetti:false,onlyMistakes:true,submitted:false,adminTab:"daily",topic:"all",mistakeMode:false,editId:null,editData:null,editKind:null,editKey:null,findText:"",ovr:{},seeded:false,openSecs:{},lang:"uz",adaptive:false,adaptiveRun:false,adaptLevel:2,adaptTarget:10,weakTopic:{}};
var RU={
"Yuklanmoqda…":"Загрузка…",
"Sozlamalar":"Настройки",
"Rejim":"Режим",
"Oddiy":"Обычный",
"⚡ Adaptiv":"⚡ Адаптивный",
"Adaptiv":"Адаптивный",
"⚡ Adaptiv · 10 savol":"⚡ Адаптивный · 10 вопросов",
"Qiyinlik javoblaringizga moslashadi, zaif mavzulardan ko'proq savol beriladi.":"Сложность подстраивается под ваши ответы, по слабым темам даётся больше вопросов.",
"Adaptiv natija":"Адаптивный результат",
"Erishilgan daraja":"Достигнутый уровень",
"Zaif mavzular":"Слабые темы",
"Qiyin daraja":"Сложный уровень",
"O'rta daraja":"Средний уровень",
"Oson daraja":"Лёгкий уровень",
"Ko'rinish":"Тема",
"Yorug' yoki tungi rejim":"Светлая или тёмная тема",
"Yorug'":"Светлая",
"Tungi":"Тёмная",
"Interfeys tili":"Язык интерфейса",
"Savol va menyu tili":"Язык вопросов и меню",
"Ovoz signallari":"Звуковые сигналы",
"Test paytidagi ovozlar":"Звуки во время теста",
"Ismni o'zgartirish":"Изменить имя",
"Ma'lumotlarni tozalash":"Очистить данные",
"Progress, tarix, xatolar va XP o'chiriladi":"Прогресс, история, ошибки и XP будут удалены",
"Hammasini tozalash":"Очистить всё",
"Saqlandi":"Сохранено",
"Tozalandi":"Очищено",
"Hamma ma'lumot (progress, XP, tarix, xatolar) o'chirilsinmi?":"Удалить все данные (прогресс, XP, историю, ошибки)?",
"Rejimni tanlang":"Выберите режим",
"Ustozlar uchun":"Для учителей",
"O'quvchilar uchun":"Для учеников",
"Yakka mashq (o'zim uchun)":"Самостоятельно",
"Yakka mashq":"Тренировка",
"Ustoz ismi":"Имя учителя",
"Xona yaratiladi va o'quvchilarga ulashish uchun kod beriladi.":"Будет создана комната и выдан код для учеников.",
"Xona yaratish":"Создать комнату",
"Testga kirish":"Вход в тест",
"Ustozingiz bergan kodni va ismingizni kiriting.":"Введите код учителя и своё имя.",
"Qo'shilish":"Войти",
"Ismingiz nima?":"Как вас зовут?",
"Bu ism natija va reytingda ko'rinadi.":"Это имя будет видно в результатах и рейтинге.",
"Davom etish":"Продолжить",
"Bugun yangi natijaga erishaylik":"Сегодня достигнем нового результата",
"kun ketma-ket":"дней подряд",
"jami XP":"всего XP",
"Mavzu":"Тема",
"Hammasi":"Все",
"Mashqni boshlash":"Начать тренировку",
"10 savol · 10 daqiqa":"10 вопросов · 10 минут",
"Xatolar daftari":"Тетрадь ошибок",
" ta xato savolni mashq qiling":" ошибочных вопросов для повтора",
"Salom, ":"Привет, ",
"Savol ":"Вопрос ",
" belgilandi":" отмечено",
"Keyingi savol":"Следующий вопрос",
"Yakunlash":"Завершить",
"Natija":"Результат",
"Ajoyib!":"Отлично!",
"Yaxshi ish!":"Хорошая работа!",
"O'rtacha — mashq qiling.":"Средне — тренируйтесь.",
"Yana urinib ko'ring.":"Попробуйте ещё раз.",
"Yangi variant":"Новый вариант",
"Tahlil":"Разбор",
"Xatolar":"Ошибки",
"Yechish usuli:":"Решение:",
"TO'G'RI":"ВЕРНО",
"SIZNING JAVOBINGIZ":"ВАШ ОТВЕТ",
"Taraqqiyot":"Прогресс",
"Kunlik jami to'g'ri javoblar":"Всего верных ответов за день",
"Birorta ham xato yo'q — barakalla! 🎉":"Ни одной ошибки — молодец! 🎉",
" kunlik streak!":" дней подряд!",
"Ajoyib izchillik!":"Отличная регулярность!",
"Bugun ":"Сегодня ",
"-urinish":"-я попытка",
"daraja":"уровень",
"urinish":"попыток",
"Ustoz xonasi":"Комната учителя",
"O'quvchilarga shu kodni ayting:":"Сообщите ученикам этот код:",
"Qo'shilgan o'quvchilar (":"Подключённые ученики (",
"Testni boshlash":"Начать тест",
"Jonli natijalar":"Результаты онлайн",
"O'quvchilar (":"Ученики (",
"Testni tugatish":"Завершить тест",
"Kutib turing…":"Подождите…",
"Ustoz testni boshlashini kuting.":"Ждите, пока учитель начнёт тест.",
"Xona kodi: ":"Код комнаты: ",
"Chiqish":"Выход",
"Bosh sahifa":"Главная",
"Natijangiz ustozga yuborildi.":"Ваш результат отправлен учителю.",
"Natijangiz":"Ваш результат",
"Hali o'quvchi qo'shilmagan…":"Пока нет учеников…",
"Ishlamoqda…":"Решает…",
"Tayyor":"Готов",
"Ustoz paneli":"Панель учителя",
"Haftalik":"Недельный",
"Kunlik":"Дневной",
"Savollar bazasi":"База вопросов",
"Oraliq vaqti":"Интервал",
"daqiqa":"минут",
"Saqlash":"Сохранить",
"Ko'p savol qo'shish (import)":"Добавить вопросы (импорт)",
"Import qilish":"Импортировать",
"Bitta savol qo'shish":"Добавить вопрос",
"Savolni tahrirlash":"Редактировать вопрос",
"Savol matni":"Текст вопроса",
"To'g'ri javob:":"Верный ответ:",
"To'g'ri:":"Верный:",
"Yechish usuli (izoh)":"Решение (пояснение)",
"Bazaga qo'shish":"Добавить в базу",
"Bazadagi savollar":"Вопросы в базе",
"Bekor":"Отмена",
"Boshqa mavzu":"Другая тема",
"jami to'g'ri javoblar bo'yicha":"по сумме верных ответов",
"Hozircha natija yo'q.":"Пока нет результатов.",
"Masalan: Aziz domla":"Например: Азиз домла",
"Masalan: Diyor":"Например: Диёр",
"Ismingiz":"Ваше имя",
"6 raqamli kod":"Код из 6 цифр",
"Savollarni shu yerga joylang…":"Вставьте вопросы сюда…",
"A varianti":"Вариант A","B varianti":"Вариант B","C varianti":"Вариант C","D varianti":"Вариант D",
"1. Natural sonlar":"1. Натуральные числа",
"2. Bo'linish, EKUB-EKUK":"2. Делимость, НОД-НОК",
"3. Oddiy kasrlar":"3. Обыкновенные дроби",
"4. O'nli kasrlar":"4. Десятичные дроби",
"5. Ratsional sonlar":"5. Рациональные числа",
"6. Daraja":"6. Степень",
"7. Qism va foiz":"7. Часть и процент",
"8. Perimetr va yuza":"8. Периметр и площадь",
"9. Fazoviy jismlar":"9. Пространственные тела",
"10. O'lchov birliklari":"10. Единицы измерения",
"11. Birhadlar":"11. Одночлены",
"12. Ko'phadlar":"12. Многочлены",
"13. Chiziqli tenglama":"13. Линейные уравнения",
"14. Tenglamalar sistemasi":"14. Системы уравнений",
"15. Matnli masalalar":"15. Текстовые задачи",
"16. Jadval va grafik":"16. Таблицы и графики",
"17. Burchak va masofa":"17. Углы и расстояния",
"18. Kombinatorika":"18. Комбинаторика"
};
Object.assign(RU,{"Mening statistikam":"Моя статистика","Mavzular, 7 kunlik progress va xatolar":"Темы, прогресс за 7 дней и ошибки","To'g'ri javoblar: ":"Правильные ответы: ","jami javob":"всего ответов","Oxirgi 7 kun":"Последние 7 дней","Mavzular bo'yicha":"По темам","Eng ko'p xato qilingan savollar":"Самые частые ошибки","Shu savollarni qayta ishlash":"Решить эти вопросы снова","Ko'proq mashq qiling: ":"Больше практики: ","Ustun balandligi — javoblar soni, to'q qismi — to'g'ri javoblar":"Высота столбца — число ответов, тёмная часть — правильные","Xato qilingan savollar yo'q 🎉":"Ошибок нет 🎉"});
var RU_KEYS=null;
function tr(s){
  if(state.lang!=="ru")return s;
  s=String(s);
  if(!RU_KEYS)RU_KEYS=Object.keys(RU).sort(function(a,b){return b.length-a.length;});
  for(var i=0;i<RU_KEYS.length;i++){var k=RU_KEYS[i];if(s.indexOf(k)>=0)s=s.split(k).join(RU[k]);}
  return s;
}
var RU_SVG={"O'quvchilar soni":"Кол-во","Yomg'irli kunlar":"Дождл. дни","Sotuv (mln)":"Продажи (млн)","Narx (so'm)":"Цена (сум)","Talabalar":"Студенты","Fakultet":"Факультет","Biologiya":"Биология","Velosiped":"Велосипед","Harorat":"Темп.","Payshanba":"Чт","Juma":"Пт","Shanba":"Сб","Yakshanba":"Вс","Ona tili":"Родной яз.","Tarix":"История","Apelsin":"Апельсин","Yanvar":"Янв.","Fevral":"Фев.","Iyun":"Июнь","hafta":"нед.","soat":"ч","kun":"день","oy":"мес.","Usul":"Способ","perimetri":"периметр","Oy":"Месяц","O'quvchilar":"Ученики","1 dona (so'm)":"1 шт (сум)","so'm/kg":"сум/кг","Min \u00b0C":"Мин \u00b0C","Max \u00b0C":"Макс \u00b0C","Dam olish":"Отдых","Oziq-ovqat":"Питание","Baho":"Балл","Mahsulot":"Товар","Soni":"Кол-во","Narx":"Цена","Miqdor":"Кол-во","Transport":"Транспорт","Avtobus":"Автобус","Mashina":"Машина","Piyoda":"Пешком","Kommunal":"Комм.","Uyqu":"Сон","Maktab":"Школа","Boshqa":"Другое","Matematika":"Матем.","Fizika":"Физика","Kimyo":"Химия","Futbol":"Футбол","Basketbol":"Баскет","Basket":"Баскет","Tennis":"Теннис","Suzish":"Плав.","Dushanba":"Пн","Seshanba":"Вт","Chorshanba":"Ср","Kun":"День","Olma":"Яблоко","Nok":"Груша","Uzum":"Виногр.","Anor":"Гранат","Pomidor":"Помидор","Baklajon":"Баклаж.","Bodring":"Огурец","Ruchka":"Ручка","Daftar":"Тетрадь","Kitob":"Книга","Mart":"Март","Aprel":"Апр.","May":"Май","Du":"Пн","Se":"Вт","Ch":"Ср","Pa":"Чт","Ju":"Пт","Sh":"Сб","Ya":"Вс","O'quvchi":"Ученик","Ball":"Балл"};
function trSvg(svg){if(state.lang!=="ru")return svg;return svg.replace(/(>)([^<>]+)(<\/text>)/g,function(m,a,tx,b){for(var k in RU_SVG){if(tx.indexOf(k)>=0)tx=tx.split(k).join(RU_SVG[k]);}return a+tx+b;});}
function LQ(x){if(state.lang==="ru"&&x.q_ru){var out=x.q_ru;var mi=x.q.indexOf("<svg");if(mi>=0&&out.indexOf("<svg")<0)out+="<br>"+trSvg(x.q.slice(mi));return out;}return x.q;}
function LO(x){return (state.lang==="ru"&&x.options_ru&&x.options_ru.length===x.options.length)?x.options_ru:x.options;}
function LSn(x){return (state.lang==="ru"&&x.solution_ru)?x.solution_ru:x.solution;}
function renderLang(){var el=document.getElementById("langsw");if(!el)return;el.innerHTML='<div class="langpill"><button class="'+(state.lang==="uz"?"on":"")+'" data-act="setLang" data-l="uz">UZ</button><button class="'+(state.lang==="ru"?"on":"")+'" data-act="setLang" data-l="ru">RU</button></div>';}
function questions(){if(state.phase==="result"&&state.result)return state.result.questions;return state.variant||[];}
function scoreMsg(s,total){total=total||10;var p=s/total;return p>=0.9?{t:"Ajoyib!",e:"🎉",c:"var(--green)"}:p>=0.7?{t:"Yaxshi ish!",e:"👏",c:"var(--blue)"}:p>=0.5?{t:"O'rtacha — mashq qiling.",e:"💪",c:"var(--blue)"}:{t:"Yana urinib ko'ring.",e:"📚",c:"var(--red)"};}
function nextAllowedTs(){return (state.result&&state.cooldownMin>0)?state.result.finishedAt+state.cooldownMin*60000:0;}
function todayAttempts(){var h=state.history.filter(x=>x.date===today.key)[0];return h?h.attempts:0;}
(function(){var fbg=document.getElementById("fbg");FORMULAS.forEach((f,i)=>{var s=document.createElement("span");s.textContent=f;s.style.top=((i*37+6)%94)+"%";s.style.left=((i*53+4)%90)+"%";s.style.transform="rotate("+(((i*47)%60)-30)+"deg)";s.style.fontSize=(13+(i%4)*5)+"px";s.className="disp";fbg.appendChild(s);});})();
function wordmark(scale,onDark){scale=scale||1;var c1=onDark?"#ffffff":"#0d1a25";var c2=onDark?"#c4b5fd":"var(--blue)";return '<div style="display:flex;align-items:center;gap:12px"><img src="'+LOGO+'" alt="IDC" style="height:'+(58*scale)+'px;width:auto;display:block"><div style="line-height:1.02"><div class="disp" style="font-weight:800;font-size:'+(21*scale)+'px;color:'+c1+'">MAJBURIY</div><div class="disp" style="font-weight:800;font-size:'+(21*scale)+'px;color:'+c2+'">MATEMATIKA</div></div></div>';}
const mute=()=>'<button class="icbtn" data-act="mute">'+(state.muted?I.mute:I.vol)+'</button>';
const gearBtn=()=>'<button class="icbtn" data-act="openSettings" aria-label="Sozlamalar">'+I.gear+'</button>';
function applyTheme(){try{document.body.classList.toggle("dark",state.theme==="dark");}catch(e){}}
/* Savol matnining qisqa xeshi (FNV-1a, 32-bit) — eskirgan nusxalarni aniqlash uchun */
function qHash(s){s=String(s||"");var h=0x811c9dc5;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0;}return ("0000000"+h.toString(16)).slice(-8);}
var RETIRED_SET=null;
function retiredSet(){if(!RETIRED_SET){RETIRED_SET={};(typeof RETIRED_Q!=="undefined"?RETIRED_Q:[]).forEach(function(h){RETIRED_SET[h]=1;});}return RETIRED_SET;}
/* Asosiy manba — BUILTIN (tekshirilgan, yangilangan savollar).
   Firebase bankidan faqat ustoz qo'shgan savollar olinadi: BUILTIN bilan bir xil
   yoki BUILTIN'ning eski (almashtirilgan) versiyasi bo'lgan yozuvlar tashlab yuboriladi. */
/* Ustoz tahrirlari: Firebase "overrides/<ID>" — asosiy savolning to'liq yangi nusxasi yoki {hidden:true} */
function loadOverrides(){if(!fbdb)return Promise.resolve({});return fbdb.ref("overrides").once("value").then(function(s){return s.val()||{};}).catch(function(){return {};});}
var OVR_FIELDS=["q","q_ru","options","options_ru","correct","solution","solution_ru","topic"];
function applyOvr(x){var o=(state.ovr||{})[x.id];if(!o)return x;var y={};for(var k in x)y[k]=x[k];OVR_FIELDS.forEach(function(f){if(o[f]!==undefined&&o[f]!==null)y[f]=o[f];});y.edited=OVR_FIELDS.some(function(f){return o[f]!=null;});y.hidden=!!o.hidden;return y;}
function isStaleCopy(x,have,ret){return !!(have[x.q]||ret[qHash(x.q)]);}
/* Firebase bankidagi ustoz qo'shgan savollar (asosiy savollarning eski nusxalarisiz) */
function customQs(){
  var bank=state.bank||[],have=builtinByQ(),ret=retiredSet();
  return bank.filter(function(x){return x&&x.q&&x.options&&!isStaleCopy(x,have,ret);}).map(function(x){var y={};for(var k in x)y[k]=x[k];y.key=x.id;y.id="U-"+String(x.id).slice(-5).toUpperCase();y.custom=true;return y;});
}
/* Barcha savollar (tahrirlar qo'llangan), yashirilganlari ham — ustoz paneli uchun */
function allQs(){return BUILTIN.map(applyOvr).concat(customQs());}
/* Asosiy manba — BUILTIN (ustoz tahrirlari bilan) + ustoz qo'shgan savollar; yashirilganlar chiqmaydi */
function pickPool(){return allQs().filter(function(x){return !x.hidden;});}
function findById(id){var n=normId(id);if(!n)return null;return allQs().filter(function(x){return x.id.toUpperCase()===n;})[0]||null;}
/* "8-14", "#8.14", "m8 14", "08-014", "u-abcde" -> "8-14" / "U-ABCDE" */
function normId(s){s=String(s||"").trim().replace(/^#/,"");var m=s.match(/^m?0*(\d{1,2})\s*[-.\/\s:]\s*0*(\d{1,4})$/i);if(m)return (+m[1])+"-"+(+m[2]);m=s.match(/^u\s*-?\s*([a-z0-9_-]{5})$/i);if(m)return "U-"+m[1].toUpperCase();return null;}
/* Variantlarni tasodifiy tartibga keltirib, to'g'ri javob indeksini qayta hisoblaydi (uz va ru birga) */
function toQuiz(x){
  var n=x.options.length,perm=shuffle(Array.from({length:n},function(_,i){return i;}));
  var ru=(x.options_ru&&x.options_ru.length===n)?x.options_ru:null;
  return {id:x.id||null,q:x.q,q_ru:x.q_ru||null,options:perm.map(function(i){return x.options[i];}),options_ru:ru?perm.map(function(i){return ru[i];}):null,correct:perm.indexOf(x.correct),solution:x.solution,solution_ru:x.solution_ru||null,topic:x.topic||"aralash"};
}
function qidTag(Q){return Q&&Q.id?'<span class="qid">ID '+esc(Q.id)+'</span>':'';}
var TOPICS={m1:"1. Natural sonlar",m2:"2. Bo'linish, EKUB-EKUK",m3:"3. Oddiy kasrlar",m4:"4. O'nli kasrlar",m5:"5. Ratsional sonlar",m6:"6. Daraja",m7:"7. Qism va foiz",m8:"8. Perimetr va yuza",m9:"9. Fazoviy jismlar",m10:"10. O'lchov birliklari",m11:"11. Birhadlar",m12:"12. Ko'phadlar",m13:"13. Chiziqli tenglama",m14:"14. Tenglamalar sistemasi",m15:"15. Matnli masalalar",m16:"16. Jadval va grafik",m17:"17. Burchak va masofa",m18:"18. Kombinatorika"};
var TOPIC_ICON={m1:"🔢",m2:"➗",m3:"🍕",m4:"🔟",m5:"➖",m6:"⬆️",m7:"％",m8:"⬛",m9:"🧊",m10:"📏",m11:"✖️",m12:"🧮",m13:"⚖️",m14:"🔗",m15:"📖",m16:"📊",m17:"📐",m18:"🎲"};
var TOPIC_COLOR={all:"#8b5cf6",m1:"#f43f5e",m2:"#f59e0b",m3:"#fb923c",m4:"#eab308",m5:"#84cc16",m6:"#22c55e",m7:"#10b981",m8:"#14b8a6",m9:"#06b6d4",m10:"#0ea5e9",m11:"#3b82f6",m12:"#6366f1",m13:"#8b5cf6",m14:"#a855f7",m15:"#d946ef",m16:"#ec4899",m17:"#f472b6",m18:"#fb7185"};
function tcStyle(k){var c=TOPIC_COLOR[k]||"#8b5cf6";var num=parseInt((k+"").replace(/\D/g,""),10)||0;return "--tc:"+c+";--tcg:"+c+"40;animation-delay:"+(num*0.05).toFixed(2)+"s";}
function topicCounts(){var c={};pickPool().forEach(function(q){var t=q.topic||"aralash";c[t]=(c[t]||0)+1;});return c;}
function qDiff(q){
  if(q.diff===1||q.diff===2||q.diff===3)return q.diff;
  var t=parseInt((q.topic||"").replace(/\D/g,""),10)||0;
  var base=t>=13?3:(t>=7?2:1);
  var sol=String(q.solution||"");
  var steps=(sol.match(/[\n=]/g)||[]).length;
  var len=sol.length;
  var score=base;
  if(steps>=6)score++; else if(steps<=1)score--;
  if(len>200)score++; else if(len<55)score--;
  if(/sistema|kvadrat|ildiz|kombinat|ehtimol/i.test(String(q.q||"")))score++;
  return Math.max(1,Math.min(3,Math.round(score)));
}
function adaptNext(){
  var seen={}; (state.variant||[]).forEach(function(x){seen[x.q]=1;});
  var pool=pickPool().filter(function(x){return !seen[x.q];});
  if(!pool.length)return null;
  var lvl=state.adaptLevel||2, wk=state.weakTopic||{};
  function sc(x){return -Math.abs(qDiff(x)-lvl)*3 + (wk[x.topic]||0)*2 + Math.random()*0.9;}
  var best=pool[0],bs=sc(best);
  for(var i=1;i<pool.length;i++){var s=sc(pool[i]);if(s>bs){bs=s;best=pool[i];}}
  return toQuiz(best);
}
function adaptAdvance(){
  var i=state.current, Q=state.variant[i]; if(!Q)return;
  var correct=state.selections[i]===Q.correct;
  if(correct)state.adaptLevel=Math.min(3,(state.adaptLevel||2)+1);
  else{state.adaptLevel=Math.max(1,(state.adaptLevel||2)-1);state.weakTopic[Q.topic]=(state.weakTopic[Q.topic]||0)+1;}
  var nq=adaptNext();
  if(nq){state.variant.push(nq);state.selections.push(null);}
}
function startAdaptive(){
  ac();state.submitted=false;state.counted=false;state.confetti=false;state.onlyMistakes=false;state.mistakeMode=false;
  state.adaptiveRun=true;state.adaptTarget=10;state.adaptLevel=2;state.weakTopic={};state.variant=[];
  var first=adaptNext();
  if(!first){flash("Savollar topilmadi");return;}
  state.variant=[first];state.selections=[null];state.current=0;state.startedAt=Date.now();state.remaining=TEST;
  persistAttempt();if(!state.muted)sStart();state.phase="quiz";render();
}
function pickPoolTopic(){
  var pool=pickPool();
  if(state.topic && state.topic!=="all"){
    var f=pool.filter(function(x){return (x.topic||"aralash")===state.topic;});
    if(f.length>=4) return f;
  }
  return pool;
}
function generateVariant(){
  var pool=pickPoolTopic();
  var lastQs=(state.result&&state.result.questions)?state.result.questions.map(function(x){return x.q;}):[];
  var filtered=pool.filter(function(x){return lastQs.indexOf(x.q)<0;});
  var need=Math.min(10,pool.length);
  var src=filtered.length>=need?filtered:pool;
  return shuffle(src).slice(0,need).map(toQuiz);
}
function generateMistakeVariant(){
  var mids=LS.get(K.mistakes)||[];
  var pool=pickPool().filter(function(x){return mids.indexOf(x.q)>=0;});
  if(pool.length===0) return [];
  return shuffle(pool).slice(0,Math.min(10,pool.length)).map(toQuiz);
}
/* ============================================================
   JONLI XONA (LIVE ROOM) — Ustoz & O'quvchi sinxron test
   ============================================================ */
var live = {
  role:null, code:null, name:null, uid:null, roomRef:null, roomData:null, unsub:[],
  qset:null, sel:Array(10).fill(null), cur:0, startedAt:0, timerInt:null, submitted:false
};
function liveGenCode(){ return String(Math.floor(100000 + Math.random()*900000)); }
function liveUid(){ var a=authUid(); if(a)return a; var u=LS.get("idc_uid"); if(!u){u="u"+Date.now().toString(36)+Math.random().toString(36).slice(2,6);LS.set("idc_uid",u);} return u; }
function liveCleanup(){ live.unsub.forEach(function(fn){try{fn();}catch(e){}}); live.unsub=[]; if(live.timerInt){clearInterval(live.timerInt);live.timerInt=null;} }
function liveTeacherCreate(){
  if(!fbdb){initFirebase();}
  if(!fbdb){flash("Internet aloqasi yo'q yoki Firebase yuklanmadi. Sahifani yangilang.");return;}
  if(fbauth&&!auth.ready){whenAuth().then(liveTeacherCreate);return;}
  live.role="teacher"; live.uid=liveUid();
  live.code=liveGenCode();
  live.qset=generateVariant();
  live.roomRef=fbdb.ref("rooms/"+live.code);
  var payload={
    code:live.code, status:"waiting", createdAt:Date.now(),
    teacher:live.name||"Ustoz", ownerUid:live.uid,
    questions:live.qset.map(function(q){return {id:q.id||null,q:q.q,q_ru:q.q_ru||null,options:q.options,options_ru:q.options_ru||null,correct:q.correct,solution:q.solution,solution_ru:q.solution_ru||null,topic:q.topic||null};}),
    students:{}, startedAt:0
  };
  live.roomRef.set(payload).then(function(){
    liveAttachRoom();
    state.phase="liveTeacherLobby"; render();
  }).catch(function(err){var c=(err&&(err.code||err.message))||String(err);flash("Xona yaratishda xato: "+c+(/permission|denied/i.test(c)?" (Firebase bazaga yozish ruxsati yopiq)":""));});
}
function liveStudentJoin(code,name){
  if(!fbdb){initFirebase();}
  if(!fbdb){flash("Internet aloqasi yo'q yoki Firebase yuklanmadi. Sahifani yangilang.");return;}
  code=(code||"").trim(); name=(name||"").trim();
  if(!/^\d{6}$/.test(code)){flash("Kod 6 ta raqam bo'lishi kerak");return;}
  if(!name){flash("Ismingizni yozing");return;}
  if(fbauth&&!auth.ready){whenAuth().then(function(){liveStudentJoin(code,name);});return;}
  live.role="student"; live.uid=liveUid(); live.name=name; live.code=code;
  live.roomRef=fbdb.ref("rooms/"+code);
  live.roomRef.once("value").then(function(snap){
    if(!snap.exists()){flash("Bunday xona topilmadi");return;}
    var d=snap.val();
    if(d.status==="finished"){flash("Bu test allaqachon tugagan");return;}
    var st={name:name,joinedAt:Date.now(),score:null,done:false};if(live.cls)st.cls=live.cls;
    live.roomRef.child("students/"+live.uid).set(st);
    liveAttachRoom();
    state.phase="liveStudentLobby"; render();
  }).catch(function(){flash("Ulanishda xato");});
}
function liveAttachRoom(){
  if(!live.roomRef)return;
  var cb=function(snap){
    var d=snap.val(); if(!d){return;}
    live.roomData=d;
    if(live.role==="student"){
      if(d.status==="running" && state.phase==="liveStudentLobby"){
        live.qset=d.questions.map(function(q){return {id:q.id||null,q:q.q,q_ru:q.q_ru||null,options:q.options,options_ru:q.options_ru||null,correct:q.correct,solution:q.solution,solution_ru:q.solution_ru||null,topic:q.topic||null};});
        live.sel=Array(live.qset.length).fill(null); live.cur=0; live.submitted=false;
        live.startedAt=d.startedAt||Date.now();
        state.phase="liveStudentQuiz"; render();
      }
    }
    if(live.role==="teacher"){
      if(state.phase==="liveTeacherLobby" || state.phase==="liveTeacherLive"){
        liveRenderTeacherStudents();
      }
    }
  };
  live.roomRef.on("value",cb);
  live.unsub.push(function(){live.roomRef.off("value",cb);});
}
function liveTeacherStart(){
  if(!live.roomRef)return;
  var st=(live.roomData&&live.roomData.students)||{};
  if(Object.keys(st).length===0){flash("Hali o'quvchi qo'shilmagan");return;}
  live.roomRef.update({status:"running",startedAt:Date.now()});
  live.finished=false;
  state.phase="liveTeacherLive"; render();
}
function liveTeacherFinish(){
  if(!live.roomRef)return;
  live.roomRef.update({status:"finished"});
  live.finished=true;
  flash("Test tugatildi");
  render();
}
function liveStartTimer(){
  if(live.timerInt)clearInterval(live.timerInt);
  live.timerInt=setInterval(function(){
    var rem=TEST-Math.floor((Date.now()-live.startedAt)/1000);
    var el=document.getElementById("tmr");var box=document.getElementById("tmrbox");
    if(el)el.textContent=fmt(rem);
    if(box)box.classList.toggle("danger",rem<=60);
    if(rem<=0){clearInterval(live.timerInt);live.timerInt=null;liveStudentSubmit();}
  },1000);
}
function liveChoose(i){ live.sel[live.cur]=i; render(); }
function liveNav(d){ var n=live.cur+d; if(n<0||n>=live.qset.length)return; live.cur=n; render(); }
function liveStudentSubmit(){
  if(live.submitted)return; live.submitted=true;
  if(live.timerInt){clearInterval(live.timerInt);live.timerInt=null;}
  var score=0; for(var i=0;i<live.qset.length;i++){ if(live.sel[i]===live.qset[i].correct)score++; }
  live.lastScore=score;
  recordStats(live.qset,live.sel);
  resultPush({name:live.name||"",cls:live.cls||"",score:score,total:live.qset.length,mode:"live",room:live.code||""},live.qset,live.sel);
  if(live.roomRef){ live.roomRef.child("students/"+live.uid).update({score:score,done:true,finishedAt:Date.now()}); }
  state.phase="liveStudentResult"; render();
}
function liveRenderTeacherStudents(){
  var box=document.getElementById("liveStudents"); if(!box)return;
  var st=(live.roomData&&live.roomData.students)||{};
  var arr=Object.keys(st).map(function(k){return st[k];});
  arr.sort(function(a,b){return (b.score==null?-1:b.score)-(a.score==null?-1:a.score);});
  var cnt=document.getElementById("liveCount"); if(cnt)cnt.textContent=arr.length;
  if(arr.length===0){box.innerHTML='<p style="color:var(--ink2);text-align:center;padding:20px">Hali o\'quvchi qo\'shilmagan…</p>';return;}
  var total=live.qset?live.qset.length:10;
  box.innerHTML=tr(arr.map(function(s,i){
    var status, col;
    if(s.done){status=s.score+"/"+total; col=s.score>=total*0.7?"var(--green)":s.score>=total*0.5?"var(--blue)":"var(--red)";}
    else if(live.roomData.status==="running"){status="Ishlamoqda…"; col="var(--blue)";}
    else {status="Tayyor"; col="var(--ink2)";}
    return '<div class="srow"><span style="flex:1;font-size:15px;font-weight:600">'+(i+1)+'. '+esc(s.name)+'</span><span style="color:'+col+';font-weight:700;font-size:15px">'+status+'</span></div>';
  }).join(""));
}
function viewRolePick(){
  return '<div class="fade" style="min-height:440px;display:flex;flex-direction:column;justify-content:center">'
  +'<div style="text-align:center;margin-bottom:26px"><div style="display:inline-flex">'+wordmark(1.1,1)+'</div></div>'
  +'<div class="card" style="padding:24px">'
  +'<h1 class="disp" style="font-size:23px;font-weight:800;margin:0 0 18px;text-align:center">Rejimni tanlang</h1>'
  +'<button class="btn btn-primary gbtn" data-act="goTeacher" style="width:100%;margin-bottom:12px;padding:16px;--gc:rgba(217,70,239,.6)">'+I.trophy+' Ustozlar uchun</button>'
  +'<button class="btn btn-green gbtn" data-act="goStudent" style="width:100%;margin-bottom:12px;padding:16px;--gc:rgba(16,201,138,.6);animation-delay:.35s">'+I.play+' O\'quvchilar uchun</button>'
  +'<button class="btn gbtn" data-act="goSolo" style="width:100%;padding:14px;background:linear-gradient(135deg,#fbbf24,#fb923c,#f97316);color:#fff;border:none;--gc:rgba(251,146,60,.7);animation-delay:.7s">Yakka mashq (o\'zim uchun)</button>'
  +'</div></div>';
}
function viewTeacherName(){
  return '<div class="fade" style="min-height:440px;display:flex;flex-direction:column;justify-content:center">'
  +'<div class="top"><button class="icbtn" data-act="backRole">'+I.left+'</button><span class="kicker">'+I.trophy+' Ustoz</span></div>'
  +'<div class="card" style="padding:24px">'
  +'<h1 class="disp" style="font-size:22px;font-weight:800;margin:0 0 6px">Ustoz ismi</h1>'
  +'<p style="color:var(--ink2);font-size:14px;margin-bottom:16px">Xona yaratiladi va o\'quvchilarga ulashish uchun kod beriladi.</p>'
  +'<input id="tName" class="input" placeholder="Masalan: Aziz domla" maxlength="28">'
  +'<button class="btn btn-primary" data-act="createRoom" style="width:100%;margin-top:16px">Xona yaratish '+I.right+'</button>'
  +'</div>'
  +'<button class="btn btn-ghost" data-act="goAdmin" style="width:100%;margin-top:14px">'+I.gear+' Ustoz paneli (kirish)</button>'
  +'</div>';
}
function viewTeacherLobby(){
  return '<div class="fade">'
  +'<div class="top"><span class="kicker">'+I.trophy+' Ustoz xonasi</span><button class="icbtn" data-act="exitLive">'+I.left+'</button></div>'
  +'<div class="card" style="padding:24px;text-align:center;margin-bottom:14px">'
  +'<p style="color:var(--ink2);font-size:14px;margin:0 0 8px">O\'quvchilarga shu kodni ayting:</p>'
  +'<div class="disp" style="font-size:46px;font-weight:800;letter-spacing:8px;color:var(--blue)">'+live.code+'</div>'
  +'</div>'
  +'<div class="card" style="padding:20px">'
  +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3 class="disp" style="font-size:18px;margin:0">Qo\'shilgan o\'quvchilar (<span id="liveCount">0</span>)</h3></div>'
  +'<div id="liveStudents"></div>'
  +'<button class="btn btn-green" data-act="startLive" style="width:100%;margin-top:16px;padding:16px">'+I.play+' Testni boshlash</button>'
  +'</div></div>';
}
function viewTeacherLive(){
  var fin=live.finished;
  return '<div class="fade">'
  +'<div class="top"><button class="icbtn" data-act="exitLive">'+I.left+'</button><span class="kicker">'+I.trophy+' Jonli natijalar</span><span class="chip">Kod: '+live.code+'</span></div>'
  +'<div class="card" style="padding:20px">'
  +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3 class="disp" style="font-size:18px;margin:0">O\'quvchilar (<span id="liveCount">0</span>)</h3></div>'
  +'<div id="liveStudents"></div>'
  +(fin
     ?'<div style="text-align:center;color:var(--green);font-weight:800;margin-top:14px">Test tugadi ✓</div><button class="btn btn-primary" data-act="exitLive" style="width:100%;margin-top:10px">'+I.left+' Bosh sahifa</button>'
     :'<button class="btn btn-primary" data-act="finishLive" style="width:100%;margin-top:16px">Testni tugatish</button>')
  +'</div></div>';
}
function viewStudentJoin(){
  return '<div class="fade" style="min-height:440px;display:flex;flex-direction:column;justify-content:center">'
  +'<div class="top"><button class="icbtn" data-act="backRole">'+I.left+'</button><span class="kicker">'+I.play+' O\'quvchi</span></div>'
  +'<div class="card" style="padding:24px">'
  +'<h1 class="disp" style="font-size:22px;font-weight:800;margin:0 0 6px">Testga kirish</h1>'
  +'<p style="color:var(--ink2);font-size:14px;margin-bottom:16px">Ustozingiz bergan kodni va ismingizni kiriting.</p>'
  +'<input id="sName" class="input" placeholder="Ismingiz" maxlength="24" style="margin-bottom:12px">'
  +'<input id="sCls" class="input" placeholder="Sinf (ixtiyoriy), masalan: 9-A" maxlength="12" style="margin-bottom:12px">'
  +'<input id="sCode" class="input" placeholder="6 raqamli kod" maxlength="6" inputmode="numeric" style="letter-spacing:4px;text-align:center;font-size:20px;font-weight:700">'
  +'<button class="btn btn-green" data-act="joinRoom" style="width:100%;margin-top:16px">Qo\'shilish '+I.right+'</button>'
  +'</div></div>';
}
function viewStudentLobby(){
  return '<div class="fade" style="min-height:440px;display:flex;flex-direction:column;justify-content:center">'
  +'<div class="card" style="padding:28px;text-align:center">'
  +'<div class="loader" style="margin:0 auto 18px"></div>'
  +'<h1 class="disp" style="font-size:22px;font-weight:800;margin:0 0 8px">Kutib turing…</h1>'
  +'<p style="color:var(--ink2);font-size:14.5px">Ustoz testni boshlashini kuting.<br>Xona kodi: <b style="color:var(--blue)">'+live.code+'</b></p>'
  +'<button class="btn btn-ghost" data-act="exitLive" style="margin-top:18px">Chiqish</button>'
  +'</div></div>';
}
function viewStudentQuiz(){
  var Q=live.qset[live.cur]; var sel=live.sel[live.cur]; var n=live.qset.length; var last=live.cur===n-1;
  var opts=LO(Q).map(function(o,i){return '<button class="opt'+(sel===i?' sel':'')+'" data-act="lchoose" data-val="'+i+'"><span class="badge">'+LETTERS[i]+'</span><span style="flex:1">'+renderQ(o)+'</span></button>';}).join("");
  var segs="";for(var i=0;i<n;i++)segs+='<i class="'+(i<=live.cur?'on':'')+'"></i>';
  var nav="";
  if(live.cur>0)nav+='<button class="btn btn-ghost" data-act="lprev">'+I.left+' Orqaga</button>';
  nav+=last?'<button class="btn btn-primary'+(!live.sel.some(function(s){return s===null;})?' nxtglow':'')+'" data-act="lsubmit" style="flex:1"'+(live.sel.some(function(s){return s===null;})?' disabled':'')+'>Yakunlash '+I.check+'</button>':'<button class="btn btn-primary'+(sel!==null?' nxtglow':'')+'" data-act="lnext" style="flex:1"'+(sel===null?' disabled':'')+'>Keyingi '+I.right+'</button>';
  var cnt=live.sel.filter(function(s){return s!==null;}).length;
  return '<div><div class="top"><span class="timer" id="tmrbox">'+I.timer+' <span id="tmr">'+fmt(TEST-Math.floor((Date.now()-live.startedAt)/1000))+'</span></span></div>'
  +'<div style="display:flex;justify-content:space-between;align-items:baseline;margin:14px 0 10px"><span class="disp" style="font-weight:800;font-size:17px;color:#fff">'+String(live.cur+1).padStart(2,"0")+'<span style="opacity:.75"> / '+n+'</span></span><span style="font-size:13.5px;color:rgba(255,255,255,.85)">'+cnt+' ta belgilandi</span></div>'
  +'<div class="seg">'+segs+'</div>'
  +'<div class="fade" style="margin-top:18px"><div class="card" style="padding:20px">'+qidTag(Q)+'<h2 class="disp" style="font-size:clamp(18px,5vw,24px);line-height:1.35;font-weight:700;margin:0">'+renderQ(LQ(Q))+'</h2></div>'
  +'<div style="display:flex;flex-direction:column;gap:11px;margin-top:14px">'+opts+'</div></div>'
  +'<div style="display:flex;gap:12px;margin-top:22px">'+nav+'</div></div>';
}
function viewStudentResult(){
  var total=live.qset.length; var s=live.lastScore||0;
  var m=scoreMsg(s,total);
  var analysis='';
  live.qset.forEach(function(Q,qi){
    var us=live.sel[qi]; var ok=us===Q.correct;
    var o=LO(Q).map(function(opt,oi){
      var cls="opt dis"; if(oi===Q.correct)cls+=" correct"; else if(oi===us)cls+=" wrong";
      var tag=""; if(oi===Q.correct)tag='<span style="font-size:12px;font-weight:800;color:var(--green)">TO\'G\'RI</span>'; else if(oi===us)tag='<span style="font-size:12px;font-weight:800;color:var(--red)">SIZNING JAVOBINGIZ</span>';
      return '<div class="'+cls+'" style="font-size:15.5px;padding:11px 13px"><span class="badge" style="width:28px;height:28px;font-size:13.5px">'+LETTERS[oi]+'</span><span style="flex:1">'+renderQ(opt)+'</span>'+tag+'</div>';
    }).join("");
    analysis+='<div class="card" style="padding:18px 18px 16px"><div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:13px"><span style="flex:0 0 auto;width:26px;height:26px;border-radius:8px;display:flex;align-items:center;justify-content:center;background:'+(ok?'var(--green)':'var(--red)')+';color:#fff">'+(ok?I.check:I.x)+'</span><div class="disp" style="font-weight:700;font-size:17px;line-height:1.32;padding-top:2px">'+qidTag(Q)+'<span style="color:var(--ink2)">'+(qi+1)+'.</span> '+renderQ(LQ(Q))+'</div></div><div style="display:flex;flex-direction:column;gap:8px">'+o+'</div><div class="sol">'+I.bulb+'<div style="font-size:14px;line-height:1.65"><b>Yechish usuli:</b><br>'+fracify(esc(LSn(Q)))+'</div></div></div>';
  });
  return '<div class="fade">'
  +'<div class="card" style="padding:28px;text-align:center;margin-bottom:14px">'
  +'<div style="font-size:46px;margin-bottom:6px">'+m.e+'</div>'
  +'<h1 class="disp" style="font-size:26px;font-weight:800;margin:0 0 6px;color:'+m.c+'">'+m.t+'</h1>'
  +'<p style="color:var(--ink2);margin-bottom:14px">Natijangiz</p>'
  +'<div class="disp" style="font-size:54px;font-weight:800;color:var(--blue)">'+s+'<span style="font-size:26px;color:var(--ink2)">/'+total+'</span></div>'
  +'<p style="color:var(--ink2);font-size:14px;margin-top:14px">Natijangiz ustozga yuborildi.</p>'
  +'</div>'
  +'<div class="sect-h"><span>'+I.bars+' '+tr("Tahlil")+'</span></div>'
  +'<div style="display:flex;flex-direction:column;gap:12px">'+analysis+'</div>'
  +'<button class="btn btn-ghost" data-act="exitLive" style="margin-top:18px;width:100%">Bosh sahifa</button>'
  +'</div>';
}
function exitLive(){ liveCleanup(); live.role=null; live.code=null; live.roomData=null; live.roomRef=null; live.finished=false; state.phase="rolePick"; render(); }
window.__fbReady=function(){
  try{Promise.all([loadConfig(),loadBank(),loadSeeded(),loadOverrides()]).then(function(r){var cm=r[0];if(typeof cm==="number"&&cm>=0)state.cooldownMin=cm;state.bank=enrichBank(r[1]||[]);state.seeded=r[2];state.ovr=r[3]||{};render();}).catch(function(){});}catch(e){}
};
function init(){
  state.lang=LS.get(K.lang)||"uz";
  state.theme=LS.get(K.theme)||"light"; applyTheme();
  applyQRU();
  try{var params=new URLSearchParams(location.search);if(params.has("admin")){state.phase="admin";state.adminTab="daily";render();return;}}catch(e){}
  render();
  Promise.all([loadConfig(),loadBank(),loadSeeded(),loadOverrides()]).then(function(r){var cm=r[0];if(typeof cm==="number"&&cm>=0)state.cooldownMin=cm;state.bank=enrichBank(r[1]||[]);state.seeded=r[2];state.ovr=r[3]||{};routeStudent();});
}
function routeStudent(){
  state.profile=LS.get(K.profile);state.history=LS.get(K.history)||[];
  var att=LS.get(K.attempt),last=LS.get(K.last);
  if(last)state.result=last;
  if(att&&att.date===today.key&&att.questions){state.variant=enrichBank(att.questions);state.selections=att.selections||Array(10).fill(null);state.current=att.current||0;state.startedAt=att.startedAt;state.submitted=false;state.adaptiveRun=!!att.adaptiveRun;state.adaptLevel=att.adaptLevel||2;state.adaptTarget=att.adaptTarget||10;state.weakTopic=att.weakTopic||{};state.adaptive=!!att.adaptiveRun;state.phase="quiz";render();return;}
  state.phase=(state.profile&&state.profile.name)?"intro":"rolePick";render();
}
function persistAttempt(){LS.set(K.attempt,{date:today.key,startedAt:state.startedAt,questions:state.variant,selections:state.selections,current:state.current,adaptiveRun:state.adaptiveRun,adaptLevel:state.adaptLevel,adaptTarget:state.adaptTarget,weakTopic:state.weakTopic});}
function normCls(v){return String(v||"").trim().replace(/\s+/g," ").toUpperCase().slice(0,12);}
function saveName(){var v=(document.getElementById("nameI").value||"").trim();var ce=document.getElementById("clsI");var p={id:genId(),name:v||"Mehmon",cls:normCls(ce&&ce.value),streak:0,bestStreak:0,lastDate:null,totalXP:0,freezes:1};state.profile=p;LS.set(K.profile,p);state.phase="intro";render();}
function startVariant(){
  if(state.result&&Date.now()<nextAllowedTs()){flash(tr("Keyingi variant")+": "+fmt(Math.ceil((nextAllowedTs()-Date.now())/1000)));return;}
  ac();state.submitted=false;state.counted=false;state.confetti=false;state.onlyMistakes=false;state.mistakeMode=false;state.adaptiveRun=false;
  state.variant=generateVariant();state.selections=Array(state.variant.length).fill(null);state.current=0;state.startedAt=Date.now();state.remaining=TEST;
  persistAttempt();if(!state.muted)sStart();state.phase="quiz";render();
}
function startMistakeQuiz(){
  var v=generateMistakeVariant();
  if(v.length===0){flash("Xatolar daftari bo'sh");return;}
  ac();state.submitted=false;state.counted=false;state.confetti=false;state.onlyMistakes=false;state.mistakeMode=true;state.adaptiveRun=false;
  state.variant=v;state.selections=Array(v.length).fill(null);state.current=0;state.startedAt=Date.now();state.remaining=TEST;
  persistAttempt();if(!state.muted)sStart();state.phase="quiz";render();
}
function choose(i){if(!state.muted)sBlip();else ac();state.selections[state.current]=i;persistAttempt();render();}
function nav(d){
  if(d>0&&state.adaptiveRun&&state.current===state.variant.length-1&&state.variant.length<state.adaptTarget){adaptAdvance();}
  state.current+=d;persistAttempt();render();
}
function submitQuiz(){
  if(state.submitted)return;state.submitted=true;if(timerInt)clearInterval(timerInt);
  var qs=state.variant;
  var score=state.selections.reduce(function(a,s,i){return a+(s===qs[i].correct?1:0);},0);
  var elapsed=state.startedAt?Math.min(TEST,Math.floor((Date.now()-state.startedAt)/1000)):0;
  var p=state.profile||{};
  var streak=p.streak||0,best=p.bestStreak||0,freezes=(p.freezes==null?1:p.freezes),freezeUsed=false,milestone=null;
  if(p.lastDate!==today.key){
    var yest=shiftKey(today.key,-1),two=shiftKey(today.key,-2);
    if(p.lastDate===yest)streak=streak+1;
    else if(p.lastDate===two&&freezes>0){streak=streak+1;freezes--;freezeUsed=true;}
    else streak=1;
    best=Math.max(best,streak);
    if(streak%7===0)freezes++;
    if([3,7,14,30,50,100].indexOf(streak)>=0)milestone=streak;
  }
  var xpEarned=score*10;
  var newProf=Object.assign({},p,{id:p.id||genId(),name:p.name||"Mehmon",lastDate:today.key,streak:streak,bestStreak:best,totalXP:(p.totalXP||0)+xpEarned,freezes:freezes});
  var result={questions:qs,selections:state.selections.slice(),score:score,elapsed:elapsed,finishedAt:Date.now(),date:today.key,xpEarned:xpEarned,streak:streak,freezeUsed:freezeUsed,milestone:milestone};
  state.profile=newProf;state.result=result;state.counted=false;state.confetti=(score>=qs.length*0.9||!!milestone);state.onlyMistakes=true;
  var hist=LS.get(K.history)||[];var h=hist.filter(x=>x.date===today.key)[0];
  if(h){h.correct+=score;h.attempts=(h.attempts||0)+1;}else{hist.push({date:today.key,correct:score,attempts:1});}
  hist=hist.slice(-60);state.history=hist;
  var mistakes=LS.get(K.mistakes)||[];
  qs.forEach(function(qq,i){
    var wrong=state.selections[i]!==qq.correct;
    var pos=mistakes.indexOf(qq.q);
    if(wrong){ if(pos<0)mistakes.push(qq.q); }
    else { if(pos>=0)mistakes.splice(pos,1); }
  });
  mistakes=mistakes.slice(-100);LS.set(K.mistakes,mistakes);
  recordStats(qs,state.selections);
  LS.set(K.profile,newProf);LS.set(K.last,result);LS.set(K.history,hist);LS.del(K.attempt);
  lbPush(newProf.id,newProf.name,score,newProf.cls);
  resultPush({name:newProf.name,cls:newProf.cls||"",pid:newProf.id,score:score,total:qs.length,elapsed:elapsed,mode:state.adaptiveRun?"adaptive":(state.mistakeMode?"mistakes":"solo")},qs,state.selections);
  if(!state.muted)sFinish();
  state.phase="result";render();
}
function goName(){state.phase="name";render();}
const app=document.getElementById("app");
function render(){
  if(timerInt){clearInterval(timerInt);timerInt=null;}
  if(countInt){clearInterval(countInt);countInt=null;}
  var html="";
  if(state.phase==="loading")html='<div class="fade" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:360px;gap:16px"><div class="loader"></div><p style="color:rgba(255,255,255,.85)">Yuklanmoqda…</p></div>';
  else if(state.phase==="name")html=viewName();
  else if(state.phase==="intro")html=viewIntro();
  else if(state.phase==="settings")html=viewSettings();
  else if(state.phase==="stats")html=viewStats();
  else if(state.phase==="quiz")html=viewQuiz();
  else if(state.phase==="result")html=viewResult();
  else if(state.phase==="admin"||state.phase==="adminLogin")html=isAdmin()?viewAdmin():viewAdminLogin();
  else if(state.phase==="rolePick")html=viewRolePick();
  else if(state.phase==="teacherName")html=viewTeacherName();
  else if(state.phase==="liveTeacherLobby")html=viewTeacherLobby();
  else if(state.phase==="liveTeacherLive")html=viewTeacherLive();
  else if(state.phase==="studentJoin")html=viewStudentJoin();
  else if(state.phase==="liveStudentLobby")html=viewStudentLobby();
  else if(state.phase==="liveStudentQuiz")html=viewStudentQuiz();
  else if(state.phase==="liveStudentResult")html=viewStudentResult();
  app.innerHTML=tr(html);renderLang();
  if(state.phase==="quiz")startTimer();
  if(state.phase==="result")afterResult();
  if(state.phase==="admin"&&isAdmin())fillAdmin();
  if(state.phase==="adminLogin"&&isAdmin()){state.phase="admin";render();return;}
  if(state.phase==="liveStudentQuiz")liveStartTimer();
  if(state.phase==="liveTeacherLobby"||state.phase==="liveTeacherLive")liveRenderTeacherStudents();
  if(state.phase==="name"){var el=document.getElementById("nameI");if(el)el.focus();}
  if(state.phase==="teacherName"){var el=document.getElementById("tName");if(el)el.focus();}
  if(state.phase==="studentJoin"){var el=document.getElementById("sName");if(el)el.focus();}
}
function viewName(){return '<div class="fade" style="min-height:440px;display:flex;flex-direction:column;justify-content:center">'
 +'<div class="top"><button class="icbtn" data-act="backRole">'+I.left+'</button><span class="kicker">Yakka mashq</span></div>'
 +'<div style="text-align:center;margin-bottom:22px"><div style="display:inline-flex">'+wordmark(1.1,1)+'</div></div>'
 +'<div class="card" style="padding:22px"><h1 class="disp" style="font-size:24px;font-weight:800;margin:0 0 6px">Ismingiz nima?</h1>'
 +'<p style="color:var(--ink2);font-size:14.5px;margin-bottom:18px">Bu ism natija va reytingda ko\'rinadi.</p>'
 +'<input id="nameI" class="input" placeholder="Masalan: Diyor" maxlength="24">'
 +'<input id="clsI" class="input" placeholder="Sinfingiz (ixtiyoriy), masalan: 9-A" maxlength="12" style="margin-top:10px">'
 +'<button class="btn btn-primary" data-act="saveName" style="width:100%;margin-top:18px">Davom etish '+I.right+'</button></div></div>';}
function viewIntro(){var lv=levelInfo(state.profile?state.profile.totalXP||0:0);var p=state.profile||{};
 var done=(state.history||[]).reduce(function(a,h){return a+(h.attempts||0);},0);
 var sel=state.topic||"all";
 var selName=sel==="all"?"Hammasi":(TOPICS[sel]||"Aralash");
 return '<div class="fade"><div class="top"><button class="icbtn" data-act="backRole">'+I.left+'</button><span class="kicker">'+I.cal+' Yakka mashq</span><span style="margin-left:auto;display:flex;gap:8px">'+mute()+gearBtn()+'</span></div>'
 +'<div class="hero">'
 +'<div class="hero-row"><div><div class="hero-hi">Salom, '+esc(p.name||"")+'! 👋</div><div class="hero-sub">Bugun yangi natijaga erishaylik</div></div>'
 +'<div class="hero-lvl"><div class="hero-lvl-n">'+lv.level+'</div><div class="hero-lvl-l">daraja</div></div></div>'
 +'<div class="hero-bar"><div class="hero-bar-f" style="width:'+(lv.pct*100)+'%"></div></div>'
 +'<div class="hero-stats">'
 +'<div class="hstat"><span class="hstat-n">'+I.flame+' '+(p.streak||0)+'</span><span class="hstat-l">kun ketma-ket</span></div>'
 +'<div class="hstat"><span class="hstat-n">'+I.bolt+' '+(p.totalXP||0)+'</span><span class="hstat-l">jami XP</span></div>'
 +'<div class="hstat"><span class="hstat-n">'+I.check+' '+done+'</span><span class="hstat-l">urinish</span></div>'
 +'</div></div>'
 +'<div class="sect-h"><span>'+I.bars+' Mavzu</span><span class="sect-tag">'+selName+'</span></div>'
 +topicChips()
 +mistakeCard()
 +statsCard()
 +'<button class="btn btn-primary startbtn" data-act="start">'+I.play+' Mashqni boshlash<span class="startbtn-sub">10 savol · 10 daqiqa</span></button>'
 +'</div>';}
function viewSettings(){
  var p=state.profile||{};
  return '<div class="fade"><div class="top"><button class="icbtn" data-act="backIntro">'+I.left+'</button><span class="kicker">'+I.gear+' '+tr("Sozlamalar")+'</span></div>'
  +'<div class="card" style="padding:8px 22px 14px;margin-bottom:14px">'
  +'<div class="setrow"><div><div class="setlbl">'+tr("Interfeys tili")+'</div><div class="setsub">'+tr("Savol va menyu tili")+'</div></div>'
  +'<div class="segbtns"><button class="segbtn'+(state.lang==="uz"?" on":"")+'" data-act="setLang" data-l="uz">UZ</button><button class="segbtn'+(state.lang==="ru"?" on":"")+'" data-act="setLang" data-l="ru">RU</button></div></div>'
  +'<div class="setrow"><div><div class="setlbl">'+tr("Ovoz signallari")+'</div><div class="setsub">'+tr("Test paytidagi ovozlar")+'</div></div>'
  +'<button class="swt'+(state.muted?"":" on")+'" data-act="mute" aria-label="Ovoz"><span class="swt-k"></span></button></div>'
  +'<div class="setrow"><div><div class="setlbl">'+tr("Ko\'rinish")+'</div><div class="setsub">'+tr("Yorug\' yoki tungi rejim")+'</div></div>'
  +'<div class="segbtns"><button class="segbtn'+(state.theme!=="dark"?" on":"")+'" data-act="setTheme" data-t="light">'+tr("Yorug\'")+'</button><button class="segbtn'+(state.theme==="dark"?" on":"")+'" data-act="setTheme" data-t="dark">'+tr("Tungi")+'</button></div></div>'
  +'</div>'
  +'<div class="card" style="padding:22px;margin-bottom:14px">'
  +'<div class="setlbl" style="margin-bottom:10px">'+tr("Ismni o'zgartirish")+'</div>'
  +'<input id="setName" class="input" maxlength="28" value="'+esc(p.name||"")+'" placeholder="Ismingiz">'
  +'<input id="setCls" class="input" maxlength="12" value="'+escAttr(p.cls||"")+'" placeholder="Sinf (masalan: 9-A)" style="margin-top:10px">'
  +'<button class="btn btn-primary" data-act="doRename" style="width:100%;margin-top:12px;height:54px;border-radius:18px">'+tr("Saqlash")+'</button>'
  +'</div>'
  +'<div class="card" style="padding:22px">'
  +'<div class="setlbl" style="margin-bottom:4px">'+tr("Ma'lumotlarni tozalash")+'</div>'
  +'<div class="setsub" style="margin-bottom:14px">'+tr("Progress, tarix, xatolar va XP o'chiriladi")+'</div>'
  +'<button class="btn btn-ghost" data-act="clearData" style="width:100%;color:var(--red);border:2px solid #fbd5d5">'+I.trash+' '+tr("Hammasini tozalash")+'</button>'
  +'</div></div>';
}
function doRename(){
  var el=document.getElementById("setName"); if(!el)return;
  var v=(el.value||"").trim(); if(!v){flash(tr("Ismingizni yozing"));return;}
  var p=state.profile||{id:genId(),streak:0,bestStreak:0,lastDate:null,totalXP:0,freezes:1};
  p.name=v; var ce=document.getElementById("setCls"); if(ce)p.cls=normCls(ce.value); state.profile=p; LS.set(K.profile,p);
  flash(tr("Saqlandi")); state.phase="intro"; render();
}
function clearData(){
  if(!window.confirm(tr("Hamma ma'lumot (progress, XP, tarix, xatolar) o'chirilsinmi?")))return;
  [K.profile,K.last,K.attempt,K.history,K.mistakes,K.stats].forEach(function(k){LS.del(k);});
  state.profile=null; state.history=[]; state.result=null; state.variant=null;
  state.selections=Array(10).fill(null); state.mistakeMode=false; state.current=0;
  flash(tr("Tozalandi")); state.phase="rolePick"; render();
}
function topicChips(){
  var sel=state.topic||"all";var tc=topicCounts();
  var chips='<button class="tcard'+(sel==="all"?" on":"")+'" data-act="setTopic" data-val="all" style="'+tcStyle("all")+'"><span class="tcard-ic">🎯</span><span class="tcard-name">Hammasi</span><span class="tcard-n">'+pickPool().length+'</span></button>';
  Object.keys(TOPICS).forEach(function(k){
    if(k==="aralash")return;
    var n=tc[k]||0; if(n<4)return;
    chips+='<button class="tcard'+(sel===k?" on":"")+'" data-act="setTopic" data-val="'+k+'" style="'+tcStyle(k)+'"><span class="tcard-ic">'+TOPIC_ICON[k]+'</span><span class="tcard-name">'+TOPICS[k]+'</span><span class="tcard-n">'+n+'</span></button>';
  });
  return '<div class="tcards">'+chips+'</div>';
}
function mistakeCard(){
  var m=LS.get(K.mistakes)||[];
  if(m.length===0)return '';
  return '<div class="mistcard" data-act="startMistakes">'
  +'<span class="mistcard-ic">📕</span>'
  +'<div style="flex:1"><div class="mistcard-t">Xatolar daftari</div><div class="mistcard-s">'+m.length+' ta xato savolni mashq qiling</div></div>'
  +'<span class="mistcard-go">'+I.right+'</span></div>';
}
/* ===== O'QUVCHI STATISTIKASI (localStorage: K.stats) =====
   topics: {m1:{c,t}} — mavzu bo'yicha to'g'ri/jami; days: {"YYYY-MM-DD":{c,t}};
   qs: {<ID yoki xesh>:{l:qisqa matn,tp:mavzu,n:necha marta,w:necha marta xato}} */
function statKey(x){return x&&x.id?String(x.id):"h"+qHash(x&&x.q);}
function loadStats(){var s=LS.get(K.stats)||{};s.topics=s.topics||{};s.days=s.days||{};s.qs=s.qs||{};return s;}
function recordStats(qs,sels){
  try{
    var s=loadStats(),d=s.days[today.key]||(s.days[today.key]={c:0,t:0});
    (qs||[]).forEach(function(Q,i){
      if(!Q)return;var ok=sels[i]===Q.correct,tp=Q.topic||"aralash";
      var t=s.topics[tp]||(s.topics[tp]={c:0,t:0});t.t++;if(ok)t.c++;
      d.t++;if(ok)d.c++;
      var k=statKey(Q),e=s.qs[k]||(s.qs[k]={l:qLabel(Q.q).slice(0,140),tp:tp,n:0,w:0});
      e.n++;if(!ok)e.w++;e.ts=Date.now();
    });
    var dk=Object.keys(s.days).sort();if(dk.length>90)dk.slice(0,dk.length-90).forEach(function(k){delete s.days[k];});
    var qk=Object.keys(s.qs);if(qk.length>600){qk.sort(function(a,b){return (s.qs[a].ts||0)-(s.qs[b].ts||0);}).slice(0,qk.length-600).forEach(function(k){delete s.qs[k];});}
    LS.set(K.stats,s);
  }catch(e){}
}
function topMissed(n){var s=loadStats();return Object.keys(s.qs).map(function(k){var e=s.qs[k];return {k:k,l:e.l,tp:e.tp,n:e.n,w:e.w};}).filter(function(e){return e.w>0;}).sort(function(a,b){return (b.w-a.w)||((b.w/b.n)-(a.w/a.n))||(b.n-a.n);}).slice(0,n||10);}
function startTopMissedQuiz(){
  var keys={};topMissed(10).forEach(function(e){keys[e.k]=1;});
  var pool=pickPool().filter(function(x){return keys[statKey(x)];});
  if(!pool.length){flash("Savollar topilmadi");return;}
  ac();state.submitted=false;state.counted=false;state.confetti=false;state.onlyMistakes=false;state.mistakeMode=true;state.adaptiveRun=false;
  state.variant=shuffle(pool).map(toQuiz);state.selections=Array(state.variant.length).fill(null);state.current=0;state.startedAt=Date.now();state.remaining=TEST;
  persistAttempt();if(!state.muted)sStart();state.phase="quiz";render();
}
function pctColor(p){return p>=0.7?"var(--green)":(p>=0.5?"var(--blue)":"var(--red)");}
function statsCard(){
  var s=loadStats(),tot=0,ok=0;Object.keys(s.topics).forEach(function(k){tot+=s.topics[k].t;ok+=s.topics[k].c;});
  return '<div class="statcard" data-act="openStats"><span class="statcard-ic">📊</span>'
  +'<div style="flex:1"><div class="statcard-t">Mening statistikam</div><div class="statcard-s">'+(tot?('To\'g\'ri javoblar: '+Math.round(ok/tot*100)+'% · '+tot+' ta savol'):'Mavzular, 7 kunlik progress va xatolar')+'</div></div>'
  +'<span class="statcard-go">'+I.right+'</span></div>';
}
function viewStats(){
  var s=loadStats(),tot=0,ok=0;
  var rows=Object.keys(s.topics).map(function(k){var t=s.topics[k];tot+=t.t;ok+=t.c;return {k:k,c:t.c,t:t.t,p:t.t?t.c/t.t:0};});
  var head='<div class="fade"><div class="top"><button class="icbtn" data-act="backIntro">'+I.left+'</button><span class="kicker">'+I.bars+' Mening statistikam</span></div>';
  if(!tot)return head+'<div class="card" style="padding:26px;text-align:center;color:var(--ink2);line-height:1.6;margin-top:12px"><div style="font-size:40px">📊</div>Hali statistika yo\'q. Bir nechta test ishlang — natijalaringiz shu yerda mavzular bo\'yicha ko\'rinadi.</div></div>';
  var num=function(k){return parseInt(String(k).replace(/\D/g,""),10)||99;};
  rows.sort(function(a,b){return num(a.k)-num(b.k);});
  var weak=rows.filter(function(r){return r.t>=3;}).sort(function(a,b){return a.p-b.p;})[0];
  var p=state.profile||{};
  var tiles='<div class="stiles">'
   +'<div class="stile"><div class="stile-n">'+tot+'</div><div class="stile-l">jami javob</div></div>'
   +'<div class="stile"><div class="stile-n" style="color:'+pctColor(ok/tot)+'">'+Math.round(ok/tot*100)+'%</div><div class="stile-l">to\'g\'ri</div></div>'
   +'<div class="stile"><div class="stile-n">'+I.flame+' '+(p.streak||0)+'</div><div class="stile-l">kun ketma-ket</div></div></div>'
   +(weak&&weak.p<0.7?'<div class="weakbox">💡 Ko\'proq mashq qiling: <b>'+esc(TOPICS[weak.k]||weak.k)+'</b> ('+Math.round(weak.p*100)+'%)</div>':'');
  var topicHtml=rows.map(function(r){var pc=Math.round(r.p*100);
    return '<div class="trow"><div class="trow-h"><span class="trow-n">'+(TOPIC_ICON[r.k]||"🎯")+' '+esc(TOPICS[r.k]||"Aralash")+'</span><span class="trow-v"><b style="color:'+pctColor(r.p)+'">'+pc+'%</b> <span>'+r.c+'/'+r.t+'</span></span></div>'
    +'<div class="trow-bar"><i style="width:'+Math.max(3,pc)+'%;background:'+pctColor(r.p)+'"></i></div></div>';}).join("");
  /* oxirgi 7 kun: yangi statistikadan, bo'lmasa eski kunlik tarixdan (10 savollik urinishlar) */
  var hist={};(state.history||[]).forEach(function(h){hist[h.date]=h;});
  var days=[],mx=1;
  for(var i=6;i>=0;i--){var dk=shiftKey(today.key,-i),d=s.days[dk],c=0,t=0;
    if(d){c=d.c;t=d.t;}else if(hist[dk]){c=hist[dk].correct||0;t=(hist[dk].attempts||0)*10;}
    var a=dk.split("-").map(Number),wd=new Date(a[0],a[1]-1,a[2]).getDay();
    days.push({k:dk,c:c,t:t,wd:UZ_WEEKDAYS[wd].slice(0,3)});mx=Math.max(mx,t);}
  var wc=0,wt=0;days.forEach(function(d){wc+=d.c;wt+=d.t;});
  var bars=days.map(function(d){var hp=d.t?Math.max(6,d.t/mx*100):0,cp=d.t?(d.c/d.t*100):0;
    return '<div class="dcol"><span class="dcol-v">'+(d.t?Math.round(d.c/d.t*100)+'%':'—')+'</span><div class="dcol-b" style="height:'+hp+'%" title="'+d.c+'/'+d.t+'"><i style="height:'+cp+'%"></i></div><span class="dcol-l'+(d.k===today.key?' on':'')+'">'+d.wd+'</span><span class="dcol-d">'+d.k.slice(8)+'</span></div>';}).join("");
  var miss=topMissed(10);
  var missHtml=miss.length?miss.map(function(e){return '<div class="srow" style="align-items:flex-start">'+(/^h[0-9a-f]{8}$/.test(e.k)?'':'<span class="idchip">'+esc(e.k)+'</span>')+'<span style="flex:1;font-size:13.5px;line-height:1.45">'+esc(e.l)+'<br><span style="color:var(--ink2);font-size:12px">'+esc(TOPICS[e.tp]||"")+'</span></span><span class="misscnt" title="xato / jami">'+e.w+'/'+e.n+'</span></div>';}).join("")
    +'<button class="btn btn-primary" data-act="startTopMissed" style="width:100%;margin-top:12px">'+I.play+' Shu savollarni qayta ishlash</button>'
    :'<div style="padding:14px;color:var(--green);font-weight:700;text-align:center">Xato qilingan savollar yo\'q 🎉</div>';
  return head+tiles
  +'<div class="sect-h"><span>'+I.cal+' Oxirgi 7 kun</span><span class="sect-tag">'+wc+'/'+wt+'</span></div>'
  +'<div class="card" style="padding:16px 12px 12px"><div class="dchart">'+bars+'</div><div style="text-align:center;font-size:12px;color:var(--ink2);margin-top:8px">Ustun balandligi — javoblar soni, to\'q qismi — to\'g\'ri javoblar</div></div>'
  +'<div class="sect-h"><span>'+I.bars+' Mavzular bo\'yicha</span></div>'
  +'<div class="card" style="padding:14px 16px">'+topicHtml+'</div>'
  +'<div class="sect-h"><span>📕 Eng ko\'p xato qilingan savollar</span></div>'
  +'<div class="card" style="padding:8px 10px 12px">'+missHtml+'</div>'
  +'<div style="height:20px"></div></div>';
}
function viewQuiz(){var QS=questions();var Q=QS[state.current];var sel=state.selections[state.current];var N=QS.length;var TOT=state.adaptiveRun?state.adaptTarget:N;var last=state.adaptiveRun?(state.current>=TOT-1):(state.current===N-1);
 var opts=LO(Q).map((o,i)=>'<button class="opt'+(sel===i?' sel':'')+'" data-act="choose" data-val="'+i+'"><span class="badge">'+LETTERS[i]+'</span><span style="flex:1">'+renderQ(o)+'</span></button>').join("");
 var segs="";for(var i=0;i<TOT;i++){var cl=i<state.current?'done':(i===state.current?'cur':'');if(state.selections[i]!=null&&i!==state.current)cl='done';segs+='<i class="'+cl+'"></i>';}
 var navHtml="";if(state.current>0)navHtml+='<button class="btn btn-ghost" data-act="prev">'+I.left+'</button>';
 navHtml+=last?'<button class="btn btn-primary'+(!state.selections.some(s=>s===null)?' nxtglow':'')+'" data-act="submit" style="flex:1"'+(state.selections.some(s=>s===null)?' disabled':'')+'>Yakunlash '+I.check+'</button>':'<button class="btn btn-primary'+(sel!==null?' nxtglow':'')+'" data-act="next" style="flex:1"'+(sel===null?' disabled':'')+'>Keyingi savol '+I.right+'</button>';
 var cnt=state.selections.filter(s=>s!==null).length;
 var tag=state.adaptiveRun?('⚡ '+tr("Adaptiv")):(state.mistakeMode?'📕 Xatolar':(state.topic&&state.topic!=="all"?(TOPIC_ICON[state.topic]+" "+TOPICS[state.topic]):"🎯 Aralash"));
 return '<div><div class="top"><span class="qtag">'+tag+'</span><span class="timer" id="tmrbox">'+I.timer+' <span id="tmr">'+fmt(TEST-Math.floor((Date.now()-state.startedAt)/1000))+'</span></span>'+mute()+'</div>'
 +'<div class="qhead"><div class="qhead-n"><span class="qhead-cur">'+(state.current+1)+'</span><span class="qhead-tot">/ '+TOT+'</span></div><div class="qhead-cnt">'+cnt+' / '+TOT+' belgilandi</div></div>'
 +'<div class="seg2">'+segs+'</div>'
 +'<div class="fade" style="margin-top:18px"><div class="qcard">'+qidTag(Q)+'<div class="qcard-num">Savol '+(state.current+1)+'</div><h2 class="qcard-q disp">'+renderQ(LQ(Q))+'</h2></div>'
 +'<div style="display:flex;flex-direction:column;gap:11px;margin-top:14px">'+opts+'</div></div>'
 +'<div style="display:flex;gap:12px;margin-top:22px">'+navHtml+'</div></div>';}
function viewResult(){var qs=questions();var res=state.result;var msg=scoreMsg(res.score,qs.length);
 var wrong=qs.filter((Q,i)=>res.selections[i]!==Q.correct).length;
 var dots="";qs.forEach((Q,i)=>{dots+='<div class="dot '+(res.selections[i]===Q.correct?'ok':'bad')+'" style="animation:dotin .35s both;animation-delay:'+(0.15+i*0.06)+'s"></div>';});
 var mile="";
 if(res.milestone)mile+='<div class="mile"><span style="font-size:26px">🏆</span><div><div class="disp" style="font-weight:800;font-size:17px">'+res.milestone+' kunlik streak!</div><div style="color:var(--ink2);font-size:14px">Ajoyib izchillik!</div></div></div>';
 var chart="";
 if(state.history.length){var hs=state.history.slice(-14);var mx=Math.max.apply(null,hs.map(h=>h.correct).concat([1]));var bars="";hs.forEach((h,i)=>{var c=BRAND[i%BRAND.length];var hp=Math.max(6,(h.correct/mx)*100);bars+='<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;height:100%;justify-content:flex-end"><span style="font-size:11px;font-weight:800;color:'+c+';font-family:Montserrat,sans-serif">'+h.correct+'</span><div style="width:100%;max-width:26px;height:'+hp+'%;border-radius:6px 6px 3px 3px;background:linear-gradient(180deg,'+c+','+c+'aa);box-shadow:0 4px 12px -3px '+c+'88"></div><span style="font-size:10px;color:var(--ink2)">'+h.date.slice(8)+'</span></div>';});
   chart='<h3 class="disp h" style="font-size:22px;margin:26px 0 12px;display:flex;align-items:center;gap:8px">'+I.bars+' Taraqqiyot</h3><div class="card" style="padding:18px 14px 12px"><div style="display:flex;align-items:flex-end;gap:6px;height:150px">'+bars+'</div><div style="text-align:center;font-size:12px;color:var(--ink2);margin-top:8px">Kunlik jami to\'g\'ri javoblar</div></div>';}
 var analysis="";qs.forEach((Q,qi)=>{var us=res.selections[qi];var ok=us===Q.correct;if(state.onlyMistakes&&ok)return;
   var o=LO(Q).map((opt,oi)=>{var cls="opt dis";if(oi===Q.correct)cls+=" correct";else if(oi===us)cls+=" wrong";var tag="";if(oi===Q.correct)tag='<span style="font-size:12px;font-weight:800;color:var(--green)">TO\'G\'RI</span>';else if(oi===us)tag='<span style="font-size:12px;font-weight:800;color:var(--red)">SIZNING JAVOBINGIZ</span>';return '<div class="'+cls+'" style="font-size:15.5px;padding:11px 13px"><span class="badge" style="width:28px;height:28px;font-size:13.5px">'+LETTERS[oi]+'</span><span style="flex:1">'+renderQ(opt)+'</span>'+tag+'</div>';}).join("");
   analysis+='<div class="card" style="padding:18px 18px 16px"><div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:13px"><span style="flex:0 0 auto;width:26px;height:26px;border-radius:8px;display:flex;align-items:center;justify-content:center;background:'+(ok?'var(--green)':'var(--red)')+';color:#fff">'+(ok?I.check:I.x)+'</span><div class="disp" style="font-weight:700;font-size:17px;line-height:1.32;padding-top:2px">'+qidTag(Q)+'<span style="color:var(--ink2)">'+(qi+1)+'.</span> '+renderQ(LQ(Q))+'</div></div><div style="display:flex;flex-direction:column;gap:8px">'+o+'</div><div class="sol">'+I.bulb+'<div style="font-size:14px;line-height:1.65"><b>Yechish usuli:</b><br>'+fracify(esc(LSn(Q)))+'</div></div></div>';});
 if(state.onlyMistakes&&wrong===0)analysis='<div class="card" style="padding:18px;text-align:center;color:var(--green);font-weight:700">Birorta ham xato yo\'q — barakalla! 🎉</div>';
 var adaptBox="";
 if(state.adaptiveRun){
   var lvl=state.adaptLevel||2;
   var lname=lvl>=3?"Qiyin daraja":(lvl<=1?"Oson daraja":"O'rta daraja");
   var wk=state.weakTopic||{};var wkeys=Object.keys(wk).sort(function(a,b){return wk[b]-wk[a];}).slice(0,3);
   var wtxt=wkeys.length?wkeys.map(function(k){return TOPICS[k]||k;}).join(", "):"—";
   adaptBox='<div class="card" style="padding:18px 20px;margin-top:14px"><div class="disp" style="font-weight:800;font-size:17px;margin-bottom:6px">⚡ Adaptiv natija</div>'
    +'<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--line)"><span style="color:var(--ink2)">Erishilgan daraja</span><b style="color:var(--blue)">'+lname+'</b></div>'
    +'<div style="display:flex;justify-content:space-between;padding:7px 0;gap:12px"><span style="color:var(--ink2)">Zaif mavzular</span><b style="text-align:right">'+wtxt+'</b></div></div>';
 }
 return '<div class="fade"><div class="top"><button class="icbtn" data-act="goHome">'+I.left+'</button><span class="kicker">'+I.trophy+' Natija</span>'+mute()+'</div>'
 +'<div class="card" id="scorecard" style="padding:26px 24px;text-align:center;margin-top:12px;position:relative;overflow:hidden">'
 +'<div class="disp" style="font-size:clamp(64px,20vw,96px);line-height:1;font-weight:900;color:'+msg.c+'"><span id="bigscore">'+res.score+'</span><span style="color:var(--ink2);font-size:.42em;font-weight:800"> / '+qs.length+'</span></div>'
 +'<div class="disp" style="font-size:22px;font-weight:800;margin-top:6px">'+msg.t+' '+msg.e+'</div>'
 +'<div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap;margin-top:16px"><span class="chip" style="color:var(--blue)">'+I.bolt+' +'+res.xpEarned+' XP</span><span class="chip">'+I.flame+' '+res.streak+' kun</span><span class="chip">'+I.cal+' Bugun '+todayAttempts()+'-urinish</span></div>'
 +'<div style="display:grid;grid-template-columns:repeat('+Math.min(qs.length,10)+',1fr);gap:7px;margin-top:20px;max-width:320px;margin-inline:auto">'+dots+'</div></div>'
 +adaptBox
 +'<button class="btn btn-green" id="nextbtn" data-act="newVariant" style="width:100%;margin-top:14px" disabled>'+I.play+' Yangi variant</button>'
 +'<div id="cdv" style="text-align:center;color:rgba(255,255,255,.9);font-weight:700;font-size:14px;margin-top:8px"></div>'
 +mile
 +'<div style="display:flex;justify-content:space-between;align-items:center;margin:26px 0 12px;gap:10px;flex-wrap:wrap"><h3 class="disp h" style="font-size:22px;margin:0">Tahlil</h3><div class="toggle"><button class="'+(!state.onlyMistakes?'active':'')+'" data-act="all">Hammasi</button><button class="'+(state.onlyMistakes?'active':'')+'" data-act="miss">'+I.filter+' Xatolar'+(wrong?' ('+wrong+')':'')+'</button></div></div>'
 +'<div style="display:flex;flex-direction:column;gap:16px">'+analysis+'</div>'
 +chart
 +'</div>';}
function startTimer(){if(timerInt)clearInterval(timerInt);timerInt=setInterval(function(){var rem=TEST-Math.floor((Date.now()-state.startedAt)/1000);var el=document.getElementById("tmr");var box=document.getElementById("tmrbox");if(el)el.textContent=fmt(rem);if(box)box.classList.toggle("danger",rem<=60);if(rem<=0){clearInterval(timerInt);timerInt=null;submitQuiz();}},1000);}
function afterResult(){
 if(!state.counted){state.counted=true;
   var target=state.result.score;var el=document.getElementById("bigscore");if(el)el.textContent="0";
   if(target>0){var n=0;var si=setInterval(function(){n++;var e=document.getElementById("bigscore");if(e)e.textContent=n;if(n>=target)clearInterval(si);},110);}
   if(state.confetti){var sc=document.getElementById("scorecard");if(sc){for(var i=0;i<70;i++){var s=document.createElement("span");var col=BRAND[i%BRAND.length];var sz=6+Math.random()*8;s.style.cssText="position:absolute;top:-24px;left:"+(Math.random()*100)+"%;width:"+sz+"px;height:"+(sz*0.6)+"px;background:"+col+";border-radius:2px;transform:rotate("+(Math.random()*360)+"deg);animation:conf "+(1.8+Math.random()*1.6)+"s "+(Math.random()*0.5)+"s ease-in forwards";sc.appendChild(s);}}}
 }
 if(countInt)clearInterval(countInt);
 function upd(){var rem=Math.ceil((nextAllowedTs()-Date.now())/1000);var btn=document.getElementById("nextbtn");var lbl=document.getElementById("cdv");
   if(rem>0){if(btn)btn.disabled=true;if(lbl)lbl.textContent="Keyingi variant: "+fmt(rem)+" — shu vaqtda xatolaringizni ko'rib chiqing";}
   else{if(btn)btn.disabled=false;if(lbl)lbl.textContent="Yangi variant tayyor ✅";clearInterval(countInt);}}
 upd();countInt=setInterval(upd,1000);
}
function adminTabs(){return '<div style="display:flex;justify-content:center;margin:18px 0 10px"><div class="toggle">'
 +'<button class="'+(state.adminTab==="daily"?"active":"")+'" data-act="tabDaily">Kunlik</button>'
 +'<button class="'+(state.adminTab==="weekly"?"active":"")+'" data-act="tabWeekly">Haftalik</button>'
 +'<button class="'+(state.adminTab==="report"?"active":"")+'" data-act="tabReport">Hisobot</button>'
 +'<button class="'+(state.adminTab==="bank"?"active":"")+'" data-act="tabBank">Savollar bazasi</button>'
 +'</div></div>';}
function adminTop(){return '<div class="top"><button class="icbtn" data-act="adminHome" aria-label="Bosh sahifa">'+I.left+'</button><span class="kicker">'+I.trophy+' Ustoz paneli</span><span style="margin-left:auto;display:flex;gap:8px"><button class="icbtn" data-act="refresh">'+I.redo+'</button><button class="btn btn-ghost" data-act="adminLogout" style="padding:8px 14px;font-size:13px">Chiqish</button></span></div>';}
function viewAdminLogin(){
 var u=auth.user,head='<div class="fade" style="min-height:440px;display:flex;flex-direction:column;justify-content:center"><div class="top"><button class="icbtn" data-act="adminHome">'+I.left+'</button><span class="kicker">'+I.trophy+' Ustoz paneli</span></div>';
 if(!fbdb||!fbauth)return head+'<div class="card" style="padding:22px;color:var(--ink2);line-height:1.55">Ustoz paneli uchun internet va Firebase kerak. Sahifani yangilang.</div></div>';
 if(u&&!u.isAnonymous&&!auth.adminChecked)return head+'<div class="card" style="padding:28px;text-align:center"><div class="loader" style="margin:0 auto"></div></div></div>';
 if(u&&!u.isAnonymous)return head+'<div class="card" style="padding:22px"><h1 class="disp" style="font-size:20px;font-weight:800;margin:0 0 8px">Ruxsat yo\'q</h1>'
  +'<p style="color:var(--ink2);font-size:14px;line-height:1.55;margin:0 0 12px"><b>'+esc(u.email||"")+'</b> hisobiga ustoz huquqi berilmagan. Firebase konsolida bazaga <b>admins/'+esc(u.uid)+' = true</b> yozuvini qo\'shing.</p>'
  +'<button class="btn btn-ghost" data-act="adminLogout" style="width:100%">Boshqa hisob bilan kirish</button></div></div>';
 return head+'<div class="card" style="padding:24px"><h1 class="disp" style="font-size:22px;font-weight:800;margin:0 0 6px">Ustoz sifatida kirish</h1>'
  +'<p style="color:var(--ink2);font-size:14px;margin:0 0 16px">Firebase Authentication hisobingiz (email va parol).</p>'
  +'<input id="admEmail" class="input" type="email" placeholder="Email" autocomplete="username" style="margin-bottom:10px">'
  +'<input id="admPass" class="input" type="password" placeholder="Parol" autocomplete="current-password">'
  +'<button class="btn btn-primary" data-act="adminLogin" style="width:100%;margin-top:16px">Kirish '+I.right+'</button></div></div>';
}
function doAdminLogin(){
 var e=(document.getElementById("admEmail").value||"").trim(),p=document.getElementById("admPass").value||"";
 if(!e||!p){flash("Email va parolni kiriting");return;}
 if(!fbauth){flash("Firebase yuklanmadi");return;}
 fbauth.signInWithEmailAndPassword(e,p).catch(function(err){var c=(err&&err.code)||"";flash(/password|credential|user-not-found/.test(c)?"Email yoki parol noto'g'ri":"Kirishda xato: "+c);});
}
function doAdminLogout(){if(fbauth)fbauth.signOut();state.phase="adminLogin";render();}
function viewAdmin(){
 if(state.adminTab==="bank")return viewBank();
 if(state.adminTab==="report")return viewReport();
 var when=state.adminTab==="weekly"?"Joriy hafta":today.weekday+", "+today.label;
 return '<div class="fade">'+adminTop()
 +'<div class="card" style="padding:18px;text-align:center;margin-top:12px"><div style="display:inline-flex">'+wordmark(0.9)+'</div></div>'
 +adminTabs()
 +'<div style="color:rgba(255,255,255,.85);font-size:13px;text-align:center;margin-bottom:6px">'+when+' · jami to\'g\'ri javoblar bo\'yicha</div>'
 +'<div class="card" id="adminlb" style="padding:8px"></div></div>';
}
function viewBank(){
 if(!fbdb)return '<div class="fade">'+adminTop()+adminTabs()+'<div class="card" style="padding:16px;color:var(--ink2);line-height:1.5">Savollar bazasi uchun Firebase kerak. Faylga FB_CONFIG qiymatlarini qo\'shing.</div></div>';
 var ed=state.editData||{q:"",q_ru:"",options:["","","",""],options_ru:["","","",""],correct:0,solution:"",solution_ru:"",topic:"m1",svg:""};
 var editing=!!state.editId;
 var sels="";for(var j=0;j<4;j++)sels+='<option value="'+j+'"'+(ed.correct===j?' selected':'')+'>'+LETTERS[j]+'</option>';
 var topsel="";for(var k=1;k<=18;k++){var tk="m"+k;topsel+='<option value="'+tk+'"'+(ed.topic===tk?' selected':'')+'>'+TOPICS[tk]+'</option>';}
 var etitle=editing?('✏️ Savolni tahrirlash <span class="idchip">ID '+esc(state.editId)+'</span>'):'➕ Yangi savol qo\'shish';
 var enote=editing?(state.editKind==="builtin"?'Asl savol fayl ichida o\'zgarmaydi: tahriringiz bazada saqlanadi va o\'quvchilarga darhol shu ko\'rinishda chiqadi. Istalgan vaqtda «Asl holi» tugmasi bilan qaytarish mumkin.':'Siz qo\'shgan savol bazada yangilanadi.'):'Yangi savol bazaga qo\'shiladi va unga avtomatik ID beriladi.';
 var svgBox=(editing&&ed.svg)?('<div style="margin-top:10px;padding:10px;border:1px dashed var(--line);border-radius:14px"><div style="font-size:12.5px;color:var(--ink2);margin-bottom:4px">Savoldagi chizma (o\'zgarmaydi):</div>'+ed.svg+'<label style="display:flex;gap:8px;align-items:center;font-size:13px;color:var(--ink2);margin-top:6px"><input type="checkbox" id="rmsvg"> Chizmani olib tashlash</label></div>'):'';
 return '<div class="fade">'+adminTop()+adminTabs()
 +'<div class="card" style="padding:16px"><div class="disp" style="font-weight:800;font-size:15px;margin-bottom:6px">🔎 Savolni topish</div>'
 +'<div style="font-size:13px;color:var(--ink2);line-height:1.5;margin-bottom:9px">Savol ID sini kiriting (masalan <b>8-14</b> — 8-mavzu, 14-savol; test ekranida va PDF da ko\'rsatilgan) yoki savol matnidan bir parcha yozing.</div>'
 +'<div style="display:flex;gap:8px"><input id="qfind" class="input" placeholder="8-14 yoki matndan parcha" value="'+escAttr(state.findText||"")+'" autocomplete="off"><button class="btn btn-primary" data-act="findQ" style="padding:12px 18px">Topish</button></div>'
 +'<div id="findres"></div></div>'
 +'<div id="editcard" class="card" style="padding:16px;margin-top:14px'+(editing?';border:2px solid var(--blue);box-shadow:0 0 0 4px rgba(14,124,196,.12)':'')+'"><div class="disp" style="font-weight:800;font-size:15px;margin-bottom:6px">'+etitle+'</div>'
 +'<div style="font-size:12.5px;color:var(--ink2);line-height:1.5;margin-bottom:10px">'+enote+'</div>'
 +'<textarea id="qa" class="input" placeholder="Savol matni" style="min-height:70px;resize:vertical">'+escTa(ed.q)+'</textarea>'
 +svgBox
 +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px"><input id="oa0" class="input" placeholder="A varianti" value="'+escAttr(ed.options[0]||"")+'"><input id="oa1" class="input" placeholder="B varianti" value="'+escAttr(ed.options[1]||"")+'"><input id="oa2" class="input" placeholder="C varianti" value="'+escAttr(ed.options[2]||"")+'"><input id="oa3" class="input" placeholder="D varianti" value="'+escAttr(ed.options[3]||"")+'"></div>'
 +'<div style="display:flex;gap:10px;align-items:center;margin-top:8px;flex-wrap:wrap"><span style="font-size:13px;color:var(--ink2)">To\'g\'ri:</span><select id="ca" class="input" style="width:auto;padding:10px 12px">'+sels+'</select><span style="font-size:13px;color:var(--ink2)">Mavzu:</span><select id="qtopic" class="input" style="flex:1;min-width:150px;padding:10px 12px">'+topsel+'</select></div>'
 +'<textarea id="sa" class="input" placeholder="Yechish usuli (izoh)" style="min-height:60px;resize:vertical;margin-top:8px">'+escTa(ed.solution)+'</textarea>'
 +'<div class="disp" style="font-weight:700;font-size:13px;margin:14px 0 6px;color:var(--ink2)">🇷🇺 Ruscha (ixtiyoriy)</div>'
 +'<textarea id="qa_ru" class="input" placeholder="Вопрос (рус)" style="min-height:48px;resize:vertical">'+escTa(ed.q_ru||'')+'</textarea>'
 +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px"><input id="oa_ru0" class="input" placeholder="Вариант A" value="'+escAttr((ed.options_ru&&ed.options_ru[0])||'')+'"><input id="oa_ru1" class="input" placeholder="Вариант B" value="'+escAttr((ed.options_ru&&ed.options_ru[1])||'')+'"><input id="oa_ru2" class="input" placeholder="Вариант C" value="'+escAttr((ed.options_ru&&ed.options_ru[2])||'')+'"><input id="oa_ru3" class="input" placeholder="Вариант D" value="'+escAttr((ed.options_ru&&ed.options_ru[3])||'')+'"></div>'
 +'<textarea id="sa_ru" class="input" placeholder="Решение (рус)" style="min-height:44px;resize:vertical;margin-top:8px">'+escTa(ed.solution_ru||'')+'</textarea>'
 +'<div style="display:flex;gap:10px;margin-top:12px"><button class="btn btn-primary" data-act="saveQ" style="flex:1">'+(editing?'Saqlash':'Bazaga qo\'shish')+'</button>'+(editing?'<button class="btn btn-ghost" data-act="cancelEdit">Bekor</button>':'')+'</div></div>'
 +'<div class="card" style="padding:16px;margin-top:14px"><div class="disp" style="font-weight:800;font-size:15px;margin-bottom:8px">Oraliq vaqti</div>'
 +'<div style="display:flex;gap:10px;align-items:center"><input id="cdmin" type="number" min="0" max="60" class="input" style="width:110px" value="'+state.cooldownMin+'"><span style="color:var(--ink2);font-size:14px">daqiqa</span><button class="btn btn-ghost" data-act="saveCd" style="padding:12px 16px;margin-left:auto">Saqlash</button></div></div>'
 +'<div class="card" style="padding:16px;margin-top:14px"><div class="disp" style="font-weight:800;font-size:15px;margin-bottom:6px">Ko\'p savol qo\'shish (import)</div>'
 +'<div style="font-size:13px;color:var(--ink2);line-height:1.5;margin-bottom:9px">Ustunlar: <b>Savol | A | B | C | D | To\'g\'ri (A/B/C/D) | Yechim</b>. Tab yoki | bilan ajrating.</div>'
 +'<textarea id="bulk" class="input" placeholder="Savollarni shu yerga joylang…" style="min-height:120px;resize:vertical;font-size:13.5px"></textarea>'
 +'<button class="btn btn-primary" data-act="importQ" style="width:100%;margin-top:10px">Import qilish</button></div>'
 +'<div id="seedbox"></div>'
 +'<h3 class="disp h" style="font-size:18px;margin:22px 0 10px" id="banktitle">Barcha savollar</h3>'
 +'<div class="card" id="banklist" style="padding:8px"></div><div style="height:20px"></div></div>';
}
function qBadges(x){var b='';if(x.custom)b+='<span class="stag st-u">ustoz</span>';if(x.edited)b+='<span class="stag st-e">tahrirlangan</span>';if(x.hidden)b+='<span class="stag st-h">yashirin</span>';return b;}
function qPreview(x){
 var opts=(x.options||[]).map(function(o,i){return '<div class="opt dis'+(i===x.correct?' correct':'')+'" style="font-size:15px;padding:10px 12px"><span class="badge" style="width:26px;height:26px;font-size:13px">'+LETTERS[i]+'</span><span style="flex:1">'+renderQ(o)+'</span>'+(i===x.correct?'<span style="font-size:12px;font-weight:800;color:var(--green)">TO\'G\'RI</span>':'')+'</div>';}).join("");
 var btns='<button class="btn btn-primary" data-act="editById" data-id="'+escAttr(x.id)+'" style="flex:1;min-width:140px">✏️ Tahrirlash</button>';
 if(x.custom)btns+='<button class="btn btn-ghost" data-act="delQ" data-id="'+escAttr(x.key)+'">'+(state.delArm===x.key?'Tasdiqlang: o\'chirish':'🗑 O\'chirish')+'</button>';
 else{btns+='<button class="btn btn-ghost" data-act="toggleHide" data-id="'+escAttr(x.id)+'">'+(x.hidden?'👁 Testga qaytarish':'🙈 Yashirish')+'</button>';if(x.edited)btns+='<button class="btn btn-ghost" data-act="resetOvr" data-id="'+escAttr(x.id)+'">↩ Asl holi</button>';}
 return '<div style="margin-top:12px;padding:14px;border:1px solid var(--line);border-radius:16px'+(x.hidden?';opacity:.75':'')+'">'
 +'<div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap"><span class="idchip">ID '+esc(x.id)+'</span><span style="font-size:12.5px;color:var(--ink2)">'+esc(TOPICS[x.topic]||'Boshqa mavzu')+'</span>'+qBadges(x)+'</div>'
 +'<div class="disp" style="font-weight:700;font-size:16px;line-height:1.42;margin:10px 0 12px">'+renderQ(x.q)+'</div>'
 +'<div style="display:flex;flex-direction:column;gap:7px">'+opts+'</div>'
 +'<div class="sol">'+I.bulb+'<div style="font-size:13.5px;line-height:1.6"><b>Yechim:</b><br>'+fracify(esc(x.solution||''))+'</div></div>'
 +'<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">'+btns+'</div></div>';
}
function qRow(x){return '<div class="srow"'+(x.hidden?' style="opacity:.55"':'')+'><span class="idchip">'+esc(x.id)+'</span><span style="flex:1;font-size:13.5px;line-height:1.4">'+esc(qLabel(x.q).slice(0,110))+'&nbsp;<b style="color:var(--green)">('+LETTERS[x.correct]+')</b>'+qBadges(x)+'</span><button class="delx" data-act="openQ" data-id="'+escAttr(x.id)+'" style="color:var(--blue)" title="Ko\'rish">👁</button><button class="delx" data-act="editById" data-id="'+escAttr(x.id)+'" style="color:var(--blue)" title="Tahrirlash">'+I.edit+'</button></div>';}
function renderFind(){
 var box=document.getElementById("findres");if(!box)return;var v=(state.findText||"").trim();
 if(!v){box.innerHTML="";return;}
 var msg=function(t){return '<div style="margin-top:10px;font-size:14px;color:var(--ink2)">'+t+'</div>';};
 var x=findById(v);if(x){box.innerHTML=qPreview(x);return;}
 if(normId(v)){box.innerHTML=msg('<b>'+esc(normId(v))+'</b> ID li savol topilmadi.');return;}
 if(v.length<3){box.innerHTML=msg('Matn bo\'yicha qidirish uchun kamida 3 ta belgi yozing.');return;}
 var re;try{re=new RegExp("(^|[^0-9a-z\u0400-\u04ff'\u02bb\u2019])"+v.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));}catch(e){re=null;}
 var hits=allQs().filter(function(q){var t=qLabel(q.q).toLowerCase();return re?re.test(t):t.indexOf(v.toLowerCase())>=0;});
 if(!hits.length){box.innerHTML=msg('Hech narsa topilmadi.');return;}
 if(hits.length===1){box.innerHTML=qPreview(hits[0]);return;}
 box.innerHTML=msg(hits.length+' ta savol topildi'+(hits.length>40?' (birinchi 40 tasi)':'')+':')+'<div style="margin-top:6px">'+hits.slice(0,40).map(qRow).join("")+'</div>';
}
function doFind(){var el=document.getElementById("qfind");state.findText=el?el.value:"";state.delArm=null;renderFind();}
function openQ(id){state.findText=id;state.delArm=null;var el=document.getElementById("qfind");if(el)el.value=id;renderFind();var c=document.getElementById("qfind");if(c)try{c.scrollIntoView({behavior:"smooth",block:"start"});}catch(e){}}
function fillBank(){
 var box=document.getElementById("banklist");if(!box)return;
 box.innerHTML='<div style="padding:14px;color:var(--ink2)">Yuklanmoqda…</div>';
 Promise.all([loadBank(),loadOverrides()]).then(function(r){
   state.bank=enrichBank(r[0]||[]);state.ovr=r[1]||{};
   renderFind();
   var have=builtinByQ(),ret=retiredSet();
   var stale=state.bank.filter(function(x){return x&&x.q&&isStaleCopy(x,have,ret);});
   var sb=document.getElementById("seedbox");
   if(sb)sb.innerHTML=stale.length?('<div class="card" style="padding:16px;margin-top:14px;border-left:4px solid var(--amber)"><div class="disp" style="font-weight:800;font-size:15px;margin-bottom:6px">🧹 Bazada '+stale.length+' ta eski nusxa bor</div><div style="font-size:13px;color:var(--ink2);line-height:1.55;margin-bottom:10px">Bular asosiy savollarning avval bazaga yuklangan nusxalari. Ular testga chiqmaydi, faqat sahifa yuklanishini sekinlashtiradi. Asosiy savollarni endi ID orqali tahrirlang.</div><button class="btn '+(state.cleanArm?'btn-primary':'btn-ghost')+'" data-act="cleanStale" style="width:100%">'+(state.cleanArm?'Tasdiqlang: '+stale.length+' ta nusxani o\'chirish':stale.length+' ta eski nusxani o\'chirish')+'</button></div>'):'';
   var list=allQs();
   var nHidden=list.filter(function(x){return x.hidden;}).length,nEd=list.filter(function(x){return x.edited;}).length,nU=list.filter(function(x){return x.custom;}).length;
   var t=document.getElementById("banktitle");if(t)t.textContent="Barcha savollar ("+list.length+(nEd?", tahrirlangan: "+nEd:"")+(nHidden?", yashirin: "+nHidden:"")+(nU?", ustoz: "+nU:"")+")";
   var groups={};list.forEach(function(q){var gk=/^m\d+$/.test(q.topic)?q.topic:'boshqa';(groups[gk]=groups[gk]||[]).push(q);});
   var num=function(q){var m=String(q.id).match(/-(\d+)$/);return q.custom?1e6:(m?+m[1]:0);};
   var order=[];for(var gi=1;gi<=18;gi++)order.push('m'+gi);order.push('boshqa');
   var html='';
   order.forEach(function(k){
     var arr=groups[k];if(!arr||!arr.length)return;
     arr.sort(function(a,b){return num(a)-num(b);});
     var nm=TOPICS[k]?(k.slice(1)+'. '+TOPICS[k]):'Boshqa mavzu';var op=!!state.openSecs[k];
     html+='<div class="banksec"><button class="banksec-h" data-act="togglesec" data-sec="'+k+'"><span class="arr">'+(op?'▾':'▸')+'</span>'+nm+'<span class="cnt">'+arr.length+'</span></button><div class="banksec-body" data-sec="'+k+'" style="display:'+(op?'block':'none')+'">';
     html+=arr.map(qRow).join("");
     html+='</div></div>';
   });
   box.innerHTML=html;
 });
}
function splitSvg(q){q=String(q||"");var m=q.match(/<svg[\s\S]*?<\/svg>/);return {text:q.replace(/(<br\s*\/?>\s*)?<svg[\s\S]*?<\/svg>/,"").trim(),svg:m?m[0]:""};}
function startEditById(id){
 var x=findById(id);if(!x){flash("Topilmadi");return;}
 var sp=splitSvg(x.q);
 state.editId=x.id;state.editKind=x.custom?"custom":"builtin";state.editKey=x.key||null;
 state.editData={q:sp.text,svg:sp.svg,q_ru:x.q_ru||"",options:(x.options||["","","",""]).slice(),options_ru:(x.options_ru||["","","",""]).slice(),correct:x.correct||0,solution:x.solution||"",solution_ru:x.solution_ru||"",topic:x.topic||"m1"};
 render();var c=document.getElementById("editcard");if(c)try{c.scrollIntoView({behavior:"smooth",block:"start"});}catch(e){}
}
function cancelEdit(){state.editId=null;state.editData=null;state.editKind=null;state.editKey=null;render();}
function doSaveQ(){
 var q=(document.getElementById("qa").value||"").trim();
 var opts=[0,1,2,3].map(function(j){return (document.getElementById("oa"+j).value||"").trim();});
 var c=parseInt(document.getElementById("ca").value,10)||0;
 var tpEl=document.getElementById("qtopic");var tp=tpEl?tpEl.value:"m1";
 var sol=(document.getElementById("sa").value||"").trim();
 if(!q||opts.some(function(o){return !o;})||!sol){flash("Barcha maydonlarni to'ldiring");return;}
 var ed=state.editData||{};var rm=document.getElementById("rmsvg");
 if(state.editId&&ed.svg&&!(rm&&rm.checked))q=q+"<br>"+ed.svg;
 var q_ru=((document.getElementById("qa_ru")||{}).value||"").trim();
 var sol_ru=((document.getElementById("sa_ru")||{}).value||"").trim();
 var opts_ru=[0,1,2,3].map(function(j){var e=document.getElementById("oa_ru"+j);return e?e.value.trim():"";});
 var obj={q:q,options:opts,correct:c,solution:sol,topic:tp,q_ru:q_ru||null,solution_ru:sol_ru||null,options_ru:opts_ru.every(function(o){return o;})?opts_ru:null};
 if(!fbdb){flash("Firebase kerak");return;}
 var done=function(id){flash("Saqlandi ✓");state.editId=null;state.editData=null;state.editKind=null;state.editKey=null;state.findText=id||"";render();try{window.scrollTo(0,0);}catch(e){}};
 if(state.editId&&state.editKind==="builtin"){
   var id=state.editId;
   fbdb.ref("overrides/"+id).update(obj).then(function(){var o=state.ovr[id]||{};OVR_FIELDS.forEach(function(f){o[f]=obj[f];});state.ovr[id]=o;done(id);}).catch(function(){flash("Saqlashda xato");});
 }else if(state.editId&&state.editKind==="custom"){
   var key=state.editKey,sid=state.editId;
   fbdb.ref("bank/"+key).update(obj).then(function(){(state.bank||[]).forEach(function(x){if(x.id===key)for(var f in obj)x[f]=obj[f];});done(sid);}).catch(function(){flash("Saqlashda xato");});
 }else{
   var clean={};for(var f in obj)if(obj[f]!==null)clean[f]=obj[f];
   var ref=fbdb.ref("bank").push();
   ref.set(clean).then(function(){clean.id=ref.key;(state.bank=state.bank||[]).push(clean);flash("Qo'shildi ✓ — ID: U-"+String(ref.key).slice(-5).toUpperCase());state.editData=null;state.findText="U-"+String(ref.key).slice(-5).toUpperCase();render();}).catch(function(){flash("Xato");});
 }
}
function toggleHide(id){
 if(!fbdb){flash("Firebase kerak");return;}
 var cur=!!(state.ovr[id]&&state.ovr[id].hidden);
 fbdb.ref("overrides/"+id).update({hidden:cur?null:true}).then(function(){var o=state.ovr[id]||{};if(cur)delete o.hidden;else o.hidden=true;state.ovr[id]=o;flash(cur?"Savol testga qaytarildi":"Savol yashirildi — testga chiqmaydi");renderFind();fillBank();}).catch(function(){flash("Xato");});
}
function resetOvr(id){
 if(!fbdb){flash("Firebase kerak");return;}
 var up={};OVR_FIELDS.forEach(function(f){up[f]=null;});
 fbdb.ref("overrides/"+id).update(up).then(function(){var o=state.ovr[id]||{};OVR_FIELDS.forEach(function(f){delete o[f];});state.ovr[id]=o;flash("Asl holiga qaytarildi");renderFind();fillBank();}).catch(function(){flash("Xato");});
}
function doDelQ(key){
 if(state.delArm!==key){state.delArm=key;renderFind();return;}
 state.delArm=null;
 bankDel(key).then(function(ok){if(ok){state.bank=(state.bank||[]).filter(function(x){return x.id!==key;});state.findText="";flash("O'chirildi");render();}else flash("Xato");});
}
function cleanStale(){
 if(!state.cleanArm){state.cleanArm=true;fillBank();return;}
 state.cleanArm=false;
 var have=builtinByQ(),ret=retiredSet();
 var keys=(state.bank||[]).filter(function(x){return x&&x.q&&isStaleCopy(x,have,ret);}).map(function(x){return x.id;});
 if(!keys.length){fillBank();return;}
 flash(keys.length+" ta nusxa o'chirilmoqda…");
 var p=Promise.resolve(true);
 for(var i=0;i<keys.length;i+=400)(function(ch){p=p.then(function(ok){if(!ok)return false;var u={};ch.forEach(function(k){u[k]=null;});return fbdb.ref("bank").update(u).then(function(){return true;}).catch(function(){return false;});});})(keys.slice(i,i+400));
 p.then(function(ok){flash(ok?"Eski nusxalar o'chirildi ✓":"O'chirishda xato");fillBank();});
}
function fillAdmin(){
 if(state.adminTab==="bank"){fillBank();return;}
 if(state.adminTab==="report"){fillReport();return;}
 var card=document.getElementById("adminlb");if(!card)return;
 if(!fbdb){card.innerHTML='<div style="padding:16px;color:var(--ink2);font-size:14px;">Firebase sozlanmagan.</div>';return;}
 card.innerHTML='<div style="padding:16px;color:var(--ink2)">Yuklanmoqda…</div>';
 var p=state.adminTab==="weekly"?lbLoadWeekly():lbLoadDaily();
 p.then(function(list){
   if(!list){card.innerHTML='<div style="padding:16px;color:var(--ink2)">Yuklab bo\'lmadi.</div>';return;}
   if(!list.length){card.innerHTML='<div style="padding:16px;color:var(--ink2)">Hozircha natija yo\'q.</div>';return;}
   list.sort(function(a,b){return ((b.correct||0)-(a.correct||0))||((a.attempts||0)-(b.attempts||0));});
   var rows=list.map(function(e,i){var medal=i===0?"🥇":i===1?"🥈":i===2?"🥉":(i+1);var att=state.adminTab==="weekly"?'':'<span style="color:var(--ink2);font-size:12.5px;margin-right:10px">'+(e.attempts||0)+' urinish</span>';return '<div class="srow"><span class="rk">'+medal+'</span><span style="flex:1;font-weight:600;font-size:15.5px">'+esc(e.name||"—")+(e.cls?' <span class="idchip">'+esc(e.cls)+'</span>':'')+'</span>'+att+'<span class="disp" style="font-weight:800;color:var(--ink)">'+(e.correct||0)+'</span></div>';}).join("");
   card.innerHTML=tr(rows);
 });
}
/* ===== USTOZ HISOBOTI: sinf bo'yicha natijalar va CSV ===== */
var report={all:null,cls:"all",period:"7"};
function viewReport(){
 return '<div class="fade">'+adminTop()+adminTabs()
 +'<div class="card" style="padding:14px 16px"><div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">'
 +'<label class="rlbl">Sinf <select id="repCls" class="input rsel"></select></label>'
 +'<label class="rlbl">Davr <select id="repPer" class="input rsel">'
 +[["1","Bugun"],["7","Oxirgi 7 kun"],["30","Oxirgi 30 kun"],["all","Hammasi"]].map(function(o){return '<option value="'+o[0]+'"'+(report.period===o[0]?' selected':'')+'>'+o[1]+'</option>';}).join("")
 +'</select></label></div>'
 +'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px"><button class="btn btn-primary" data-act="csvStudents" style="flex:1;min-width:150px;padding:12px 14px">⬇ CSV: o\'quvchilar</button><button class="btn btn-ghost" data-act="csvAttempts" style="flex:1;min-width:150px;padding:12px 14px">⬇ CSV: barcha urinishlar</button></div></div>'
 +'<div id="repBox" style="margin-top:14px"><div class="card" style="padding:16px;color:var(--ink2)">Yuklanmoqda…</div></div><div style="height:20px"></div></div>';
}
function repFiltered(){
 var list=report.all||[],from=report.period==="all"?"":shiftKey(today.key,-(parseInt(report.period,10)-1));
 return list.filter(function(r){return (!from||r.date>=from)&&(report.cls==="all"||(r.cls||"")===report.cls);});
}
/* o'quvchi kaliti: auth uid (bir qurilma/brauzer) */
function repStudents(list){
 var m={};list.forEach(function(r){var k=r.uid;var s=m[k]||(m[k]={name:r.name,cls:r.cls||"",n:0,c:0,t:0,last:0,days:{}});
   if(r.ts>=s.last){s.last=r.ts;s.name=r.name;if(r.cls)s.cls=r.cls;}s.n++;s.c+=r.score||0;s.t+=r.total||0;s.days[r.date]=1;});
 return Object.keys(m).map(function(k){var s=m[k];s.uid=k;s.p=s.t?s.c/s.t:0;s.nd=Object.keys(s.days).length;return s;});
}
function fmtTs(ts){if(!ts)return "—";var d=new Date(ts);return String(d.getDate()).padStart(2,"0")+"."+String(d.getMonth()+1).padStart(2,"0")+"."+d.getFullYear()+" "+String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");}
function renderReport(){
 var box=document.getElementById("repBox");if(!box)return;
 var sel=document.getElementById("repCls");
 if(sel){var cl={};(report.all||[]).forEach(function(r){cl[r.cls||""]=1;});var keys=Object.keys(cl).sort(function(a,b){return a.localeCompare(b,undefined,{numeric:true});});
   if(report.cls!=="all"&&keys.indexOf(report.cls)<0)report.cls="all";
   sel.innerHTML='<option value="all">Barcha sinflar</option>'+keys.map(function(k){return '<option value="'+escAttr(k)+'"'+(report.cls===k?' selected':'')+'>'+(k?esc(k):'Sinfsiz')+'</option>';}).join("");}
 if(!report.all){box.innerHTML='<div class="card" style="padding:16px;color:var(--ink2)">Natijalarni yuklab bo\'lmadi.</div>';return;}
 var list=repFiltered();
 if(!list.length){box.innerHTML='<div class="card" style="padding:16px;color:var(--ink2)">Bu davrda natija yo\'q.</div>';return;}
 var studs=repStudents(list),groups={};studs.forEach(function(s){(groups[s.cls]=groups[s.cls]||[]).push(s);});
 var gk=Object.keys(groups).sort(function(a,b){if(!a)return 1;if(!b)return -1;return a.localeCompare(b,undefined,{numeric:true});});
 var html=gk.map(function(k){var arr=groups[k].sort(function(a,b){return (b.p-a.p)||(b.c-a.c);});
   var c=0,t=0,n=0;arr.forEach(function(s){c+=s.c;t+=s.t;n+=s.n;});var avg=t?c/t:0;
   return '<div class="card" style="padding:14px 12px;margin-bottom:12px"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:0 4px 10px"><div class="disp" style="font-weight:800;font-size:17px">'+(k?esc(k)+' sinf':'Sinf ko\'rsatilmagan')+'</div>'
   +'<div style="font-size:13px;color:var(--ink2);text-align:right">'+arr.length+' o\'quvchi · '+n+' test · o\'rtacha <b style="color:'+pctColor(avg)+'">'+Math.round(avg*100)+'%</b></div></div>'
   +'<div class="rtwrap"><table class="rtab"><thead><tr><th>#</th><th>Ism</th><th>Testlar</th><th>To\'g\'ri</th><th>%</th><th>Oxirgi</th></tr></thead><tbody>'
   +arr.map(function(s,i){return '<tr><td>'+(i+1)+'</td><td class="rname">'+esc(s.name||"—")+'</td><td>'+s.n+'</td><td>'+s.c+'/'+s.t+'</td><td><b style="color:'+pctColor(s.p)+'">'+Math.round(s.p*100)+'%</b></td><td class="rdate">'+fmtTs(s.last)+'</td></tr>';}).join("")
   +'</tbody></table></div></div>';}).join("");
 /* mavzular bo'yicha sinf natijasi */
 var tp={};list.forEach(function(r){var o=r.topics||{};Object.keys(o).forEach(function(k){var e=tp[k]||(tp[k]={c:0,t:0});e.c+=o[k].c||0;e.t+=o[k].t||0;});});
 var tk=Object.keys(tp).filter(function(k){return tp[k].t>0;}).sort(function(a,b){return tp[a].c/tp[a].t-tp[b].c/tp[b].t;});
 if(tk.length)html+='<div class="card" style="padding:14px 16px"><div class="disp" style="font-weight:800;font-size:16px;margin-bottom:4px">Mavzular bo\'yicha (zaifidan boshlab)</div>'
   +tk.map(function(k){var e=tp[k],p=e.c/e.t,pc=Math.round(p*100);return '<div class="trow"><div class="trow-h"><span class="trow-n">'+esc(TOPICS[k]||"Aralash")+'</span><span class="trow-v"><b style="color:'+pctColor(p)+'">'+pc+'%</b> <span>'+e.c+'/'+e.t+'</span></span></div><div class="trow-bar"><i style="width:'+Math.max(3,pc)+'%;background:'+pctColor(p)+'"></i></div></div>';}).join("")+'</div>';
 box.innerHTML=tr(html);
}
function fillReport(){
 var box=document.getElementById("repBox");if(!box)return;
 var bind=function(){var a=document.getElementById("repCls"),b=document.getElementById("repPer");
   if(a)a.onchange=function(){report.cls=a.value;renderReport();};if(b)b.onchange=function(){report.period=b.value;renderReport();};};
 bind();
 loadResults().then(function(list){report.all=list;if(list)list.sort(function(a,b){return b.ts-a.ts;});renderReport();});
}
function csvCell(v){v=v==null?"":String(v);return /[";\n\r]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v;}
function downloadCsv(kind){
 if(!report.all){flash("Avval natijalar yuklansin");return;}
 var list=repFiltered(),rows;
 if(!list.length){flash("Bu davrda natija yo'q");return;}
 var MODES={solo:"yakka",mistakes:"xatolar",adaptive:"adaptiv",live:"jonli xona"};
 if(kind==="students"){
   rows=[["Sinf","Ism","Testlar soni","Faol kunlar","To'g'ri","Jami","Foiz","Oxirgi test"]];
   repStudents(list).sort(function(a,b){return (a.cls||"").localeCompare(b.cls||"",undefined,{numeric:true})||(b.p-a.p);}).forEach(function(s){rows.push([s.cls,s.name,s.n,s.nd,s.c,s.t,Math.round(s.p*100),fmtTs(s.last)]);});
 }else{
   rows=[["Sana","Vaqt","Sinf","Ism","Rejim","Xona","To'g'ri","Jami","Foiz","Sarflangan vaqt (s)"]];
   list.slice().sort(function(a,b){return a.ts-b.ts;}).forEach(function(r){rows.push([r.date,fmtTs(r.ts).slice(11),r.cls||"",r.name,MODES[r.mode]||r.mode||"",r.room||"",r.score,r.total,r.total?Math.round(r.score/r.total*100):0,r.elapsed==null?"":r.elapsed]);});
 }
 var csv="\ufeff"+rows.map(function(r){return r.map(csvCell).join(";");}).join("\r\n");
 var name="natijalar-"+(kind==="students"?"oquvchilar":"urinishlar")+"-"+(report.cls==="all"?"barcha":report.cls||"sinfsiz")+"-"+today.key+".csv";
 try{var blob=new Blob([csv],{type:"text/csv;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(url);a.remove();},500);}catch(e){flash("Yuklab bo'lmadi");}
}
function bankImport(list){
  if(!fbdb)return Promise.resolve(false);
  var chunks=[];for(var i=0;i<list.length;i+=400)chunks.push(list.slice(i,i+400));
  var p=Promise.resolve(true);
  chunks.forEach(function(ch){p=p.then(function(prev){if(!prev)return false;var updates={};ch.forEach(function(q){updates[fbdb.ref("bank").push().key]=q;});return fbdb.ref("bank").update(updates).then(function(){return true;}).catch(function(){return false;});});});
  return p;
}
function doImport(){
  var raw=document.getElementById("bulk").value;
  if(!raw||!raw.trim()){flash("Avval savollarni joylang");return;}
  var lines=raw.split(/\r?\n/);var ok=[],bad=0;
  lines.forEach(function(ln){
    if(!ln.trim())return;
    var parts=(ln.indexOf("\t")>=0?ln.split("\t"):ln.split("|")).map(function(p){return (p||"").trim();});
    if(parts.length<7){bad++;return;}
    var q=parts[0],a=parts[1],b=parts[2],c=parts[3],d=parts[4],cor=(parts[5]||"").toUpperCase(),sol=parts.slice(6).join(" ").trim();
    var ci=["A","B","C","D"].indexOf(cor);
    if(ci<0&&["1","2","3","4"].indexOf(cor)>=0)ci=parseInt(cor,10)-1;
    if(!q||!a||!b||!c||!d||!sol||ci<0){bad++;return;}
    ok.push({q:q,options:[a,b,c,d],correct:ci,solution:sol});
  });
  if(!ok.length){flash("To'g'ri qator topilmadi");return;}
  flash(ok.length+" ta savol yuklanmoqda…");
  bankImport(ok).then(function(res){if(res){flash(ok.length+" ta qo'shildi"+(bad?(", "+bad+" o'tkazildi"):""));document.getElementById("bulk").value="";fillBank();}else flash("Saqlashda xato");});
}
function doSaveCd(){var n=parseInt(document.getElementById("cdmin").value,10);if(isNaN(n)||n<0){flash("To'g'ri son kiriting");return;}saveCooldown(n).then(function(ok){if(ok){state.cooldownMin=n;flash("Saqlandi: "+n+" daqiqa");}else flash("Xato");});}
var toastT;
function flash(t){var old=document.querySelector(".toast");if(old)old.remove();var d=document.createElement("div");d.className="toast";d.textContent=tr(t);document.body.appendChild(d);clearTimeout(toastT);toastT=setTimeout(function(){d.remove();},2200);}
app.addEventListener("click",function(e){
 var t=e.target.closest("[data-act]");if(!t)return;var a=t.dataset.act;
 if(a==="mute"){ac();state.muted=!state.muted;render();}
 else if(a==="setLang"){var nl=t.dataset.l;if(nl!==state.lang){state.lang=nl;LS.set(K.lang,nl);render();}}
 else if(a==="saveName")saveName();
 else if(a==="start")startVariant();
 else if(a==="choose")choose(parseInt(t.dataset.val,10));
 else if(a==="next")nav(1);
 else if(a==="prev")nav(-1);
 else if(a==="submit")submitQuiz();
 else if(a==="newVariant"){if(!t.disabled)startVariant();}
 else if(a==="all"){state.onlyMistakes=false;render();}
 else if(a==="miss"){state.onlyMistakes=true;render();}
 else if(a==="refresh")fillAdmin();
 else if(a==="tabDaily"){state.adminTab="daily";render();}
 else if(a==="tabWeekly"){state.adminTab="weekly";render();}
 else if(a==="tabBank"){state.adminTab="bank";render();}
 else if(a==="tabReport"){state.adminTab="report";render();}
 else if(a==="csvStudents")downloadCsv("students");
 else if(a==="csvAttempts")downloadCsv("attempts");
 else if(a==="saveQ")doSaveQ();
 else if(a==="editQ"||a==="editById")startEditById(t.dataset.id);
 else if(a==="findQ")doFind();
 else if(a==="openQ")openQ(t.dataset.id);
 else if(a==="toggleHide")toggleHide(t.dataset.id);
 else if(a==="resetOvr")resetOvr(t.dataset.id);
 else if(a==="cleanStale")cleanStale();
 else if(a==="cancelEdit")cancelEdit();
 else if(a==="togglesec"){var sc=t.dataset.sec;var bd=document.querySelector('.banksec-body[data-sec="'+sc+'"]');if(bd){var op=bd.style.display!=="none";bd.style.display=op?"none":"block";state.openSecs[sc]=!op;var ar=t.querySelector(".arr");if(ar)ar.textContent=op?"\u25b8":"\u25be";}}
 else if(a==="importQ")doImport();
 else if(a==="delQ")doDelQ(t.dataset.id);
 else if(a==="saveCd")doSaveCd();
 else if(a==="goTeacher"){state.phase="teacherName";render();}
 else if(a==="goAdmin"){state.phase="adminLogin";render();}
 else if(a==="adminLogin")doAdminLogin();
 else if(a==="adminLogout")doAdminLogout();
 else if(a==="adminHome"){location.href=location.pathname;}
 else if(a==="goStudent"){state.phase="studentJoin";render();}
 else if(a==="goSolo"){state.phase=state.profile&&state.profile.name?"intro":"name";render();}
 else if(a==="backRole"){state.phase="rolePick";render();}
 else if(a==="goHome"){state.phase="rolePick";render();}
 else if(a==="setTopic"){state.topic=t.dataset.val;render();}
 else if(a==="startMistakes")startMistakeQuiz();
 else if(a==="openStats"){state.phase="stats";render();try{window.scrollTo(0,0);}catch(e){}}
 else if(a==="startTopMissed")startTopMissedQuiz();
 else if(a==="openSettings"){state.phase="settings";render();}
 else if(a==="backIntro"){state.phase="intro";render();}
 else if(a==="doRename")doRename();
 else if(a==="clearData")clearData();
 else if(a==="setTheme"){var nt=t.dataset.t;if(nt!==state.theme){state.theme=nt;LS.set(K.theme,nt);applyTheme();render();}}
 else if(a==="createRoom"){live.name=(document.getElementById("tName").value||"").trim()||"Ustoz";liveTeacherCreate();}
 else if(a==="startLive")liveTeacherStart();
 else if(a==="finishLive")liveTeacherFinish();
 else if(a==="joinRoom"){live.cls=normCls((document.getElementById("sCls")||{}).value);liveStudentJoin(document.getElementById("sCode").value,document.getElementById("sName").value);}
 else if(a==="lchoose")liveChoose(parseInt(t.dataset.val,10));
 else if(a==="lnext")liveNav(1);
 else if(a==="lprev")liveNav(-1);
 else if(a==="lsubmit")liveStudentSubmit();
 else if(a==="exitLive")exitLive();
});
app.addEventListener("keydown",function(e){if(e.key==="Enter"&&state.phase==="name")saveName();if(e.key==="Enter"&&e.target&&(e.target.id==="admEmail"||e.target.id==="admPass"))doAdminLogin();if(e.key==="Enter"&&e.target&&e.target.id==="qfind"){e.preventDefault();doFind();}});
(function(){var le=document.getElementById("langsw");if(le)le.addEventListener("click",function(e){var b=e.target.closest("[data-l]");if(!b)return;var nl=b.dataset.l;if(nl&&nl!==state.lang){state.lang=nl;LS.set(K.lang,nl);render();}});})();
init();
