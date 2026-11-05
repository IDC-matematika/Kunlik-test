# Kunlik-test — Majburiy matematika

Majburiy matematika bo'yicha kunlik mashq uchun veb-ilova (o'zbek va rus tillarida).
O'quvchi har kuni 10 daqiqada 10 ta savol ishlaydi, natijasini va yechimlarini ko'radi,
streak va XP to'playdi. Ustoz jonli xona ochib butun sinfni bir vaqtda test qildiradi,
savollar bazasini tahrirlaydi va sinf bo'yicha hisobot oladi.

Hech qanday build talab qilinmaydi: oddiy HTML/CSS/JS, ma'lumotlar Firebase Realtime Database'da.

## Imkoniyatlar

**O'quvchi uchun**
- **Hisob bilan kirish**: ustoz bergan login (`9a-07`) va parol — streak, XP, tarix, xatolar va statistika bulutda saqlanadi, istalgan qurilmada bir xil
- **Mehmon rejimi**: hisobsiz mashq — ism-familiya va sinf (5–11) so'raladi, natijalar faqat shu qurilmada
- Kunlik test: 10 savol, 10 daqiqalik taymer, yechim tahlili
- 18 ta mavzu bo'yicha tanlash, aralash, adaptiv rejim va "Xatolar daftari"
- Streak (ketma-ket kunlar), muzlatish, XP va daraja
- **Mening statistikam**: mavzular bo'yicha to'g'ri javoblar foizi, oxirgi 7 kunlik progress,
  eng ko'p xato qilingan savollar (va ularni qayta ishlash)
- Kunlik/haftalik reyting, tungi rejim, UZ/RU tillari
- PWA: telefonga o'rnatish va internetsiz ishlash

**Ustoz uchun**
- Jonli xona: 6 raqamli kod, o'quvchilar real vaqtda qo'shiladi va natijalar jonli ko'rinadi
- Ustoz paneli (Firebase Authentication orqali kirish):
  - kunlik va haftalik reyting
  - **Hisobot**: sinf va davr bo'yicha natijalar jadvali, mavzular bo'yicha sinf natijasi,
    CSV yuklab olish (o'quvchilar bo'yicha yig'ma yoki barcha urinishlar)
  - savollar bazasi: ID orqali topish, tahrirlash, yashirish, yangi savol qo'shish, import
  - **Sinflar**: sinf yaratish, o'quvchilar ro'yxatini kiritish — har biriga login va 6 raqamli parol avtomatik beriladi; parollarni ko'rish/yangilash, hisobni o'chirish, ro'yxatni CSV qilib olish

## O'quvchi hisoblari qanday ishlaydi

1. Ustoz panelida **Sinflar** bo'limida sinf yaratadi (masalan `9-A`) va o'quvchilar ismlarini qator-qator kiritadi.
2. Har bir o'quvchi uchun Firebase Authentication'da hisob yaratiladi: login `9a-01`, `9a-02`, … (ichki email `login@students.kunlik-test.uz`) va 6 raqamli parol. Ustoz ro'yxatni CSV qilib chop etib, o'quvchilarga tarqatadi.
3. O'quvchi "O'quvchi → Kirish" orqali login va parol bilan kiradi. Ismi va sinfi ro'yxatdan olinadi (o'zi o'zgartira olmaydi); progress `users/<uid>` da saqlanadi va har kirishda yuklanadi. Sessiya qurilmada saqlanib qoladi.
4. Parolni unutsa — ustoz **Sinflar** bo'limida ko'radi yoki "↻" bilan yangisini beradi. Hisobni o'chirsa, o'quvchi kira olmaydi (natijalari hisobotda qoladi).

Ustoz boshqa hisoblarni yaratishi/o'zgartirishi uchun ilova brauzerda ikkinchi Firebase app nusxasidan foydalanadi — ustozning o'z sessiyasi uzilmaydi. Parollar `studentSecrets/<uid>` da saqlanadi va qoidalar bo'yicha **faqat ustoz** o'qiy oladi; bu parollar faqat shu ilova uchun, shuning uchun o'quvchilarga boshqa joyda ishlatadigan parolini kiritmaslikni ayting.

## Fayllar tuzilmasi

```
index.html              sahifa karkasi, Firebase SDK va skriptlarni ulash
style.css               barcha uslublar
app.js                  ilova kodi (auth, test, statistika, jonli xona, ustoz paneli)
data/questions.js       BUILTIN — asosiy savollar bazasi (1537 savol, har birida ruscha tarjima: q_ru, options_ru, solution_ru)
Yangilangan.pdf         "Majburiy matematika" darsligi — bazaning manbasi va namunasi
data/questions-ru.js    eskirgan (o'chirilgan/almashtirilgan) savollar xeshlari (RETIRED_Q)
img/                    logotip va PWA ikonlari
manifest.json           PWA manifesti
sw.js                   service worker (oflayn kesh)
database.rules.json     Firebase Realtime Database xavfsizlik qoidalari
firebase.json           Firebase CLI sozlamasi (qoidalar va hosting)
```

Savol formati (`data/questions.js`):

```js
{"id":"8-14","q":"Savol matni (SVG chizma bo'lishi mumkin)","options":["A","B","C","D"],
 "correct":0,"solution":"Yechim","topic":"m8"}
```

`id` — `<mavzu raqami>-<tartib raqami>`, doimiy bo'lishi kerak (statistika va ustoz tahrirlari shunga bog'langan).

### Baza va darslik

Baza "Majburiy matematika" darsligi (`Yangilangan.pdf`) asosida tuzilgan: har mavzuning
"Mavzu bo'yicha test savollari" (2 variant × 10) va kitob oxiridagi 30 ta imtihon varianti
(10 tadan savol) turlari bo'yicha har biriga shu tipdagi, lekin boshqa sonlar, kontekst va
tuzilishdagi original savol tuzilgan (kitobdan aynan ko'chirilgan savol yo'q) — yechimlari bilan.
Qolgan savollar ham kitob testlari darajasida (1–3 bosqichli, matnli masalalar, chizmalar).
Yangi savol qo'shganda shu darajani saqlang: bir amalli "0,6 · 5 ni hisoblang" kabi
savollar kiritilmaydi; kitobdagi savolni aynan ko'chirmang, shu turdagi yangisini tuzing.

Savol matni o'zgartirilsa, eski matn xeshi `data/questions-ru.js` dagi `RETIRED_Q` ga
qo'shiladi (Firebase bankidagi eski nusxalar testga chiqmasligi uchun) — buni
`scratchpad/bankops.py` uslubidagi skript avtomatik qiladi; ruscha tarjima (`QRU`) esa
qayta yozilishi kerak.

## Firebase'ni sozlash

1. [Firebase konsolida](https://console.firebase.google.com) loyiha yarating (yoki mavjudini oching)
   va **Realtime Database** ni yoqing.
2. Veb-ilova qo'shing va konfiguratsiyani `app.js` boshidagi `FB_CONFIG` ga yozing.
   (`apiKey` maxfiy emas — xavfsizlikni bazaning qoidalari ta'minlaydi.)
3. **Authentication → Sign-in method** bo'limida ikkita usulni yoqing:
   - **Anonymous** — o'quvchilar uchun (reyting, natija va jonli xonaga yozish shunga bog'liq);
   - **Email/Password** — ustozlar uchun.
4. **Authentication → Users** bo'limida ustoz uchun foydalanuvchi qo'shing (email + parol)
   va uning **User UID** sini nusxalang.
5. **Realtime Database → Data** bo'limida ustozga huquq bering:
   ```
   admins
     └─ <ustozning UID si>: true
   ```
   `admins` tugunini ilovadan o'zgartirib bo'lmaydi — faqat konsoldan.
6. Xavfsizlik qoidalarini joylang: `database.rules.json` mazmunini **Realtime Database → Rules**
   ga nusxalang yoki Firebase CLI bilan deploy qiling (pastga qarang).

### Qoidalar qisqacha

| Tugun | O'qish | Yozish |
|---|---|---|
| `bank`, `overrides`, `config` | hamma | faqat ustoz |
| `lb` (reyting) | hamma | o'quvchi faqat o'z yozuvini (`uid` = auth uid) |
| `results/<uid>` | ustoz va o'quvchining o'zi | o'quvchi faqat o'ziga yangi natija qo'shadi (o'zgartira olmaydi) |
| `rooms/<kod>` | avtorizatsiyadan o'tgan har kim | xonani faqat yaratgan ustoz; o'quvchi faqat `students/<o'z uid si>` |
| `admins` | faqat o'z yozuvi | hech kim (faqat konsol) |
| `users/<uid>` (progress) | o'quvchining o'zi va ustoz | o'quvchining o'zi (ustoz o'chira oladi) |
| `students`, `classes` | ustoz; o'quvchi faqat o'z yozuvini (`students`), sinflar ro'yxatini hamma avtorizatsiyalangan | faqat ustoz |
| `studentSecrets` (parollar) | faqat ustoz | faqat ustoz |

## Ishga tushirish

### Lokal

Service worker va Firebase Auth `file://` da ishlamaydi, shuning uchun oddiy HTTP server kerak:

```bash
python3 -m http.server 8080
```

So'ng brauzerda `http://localhost:8080` ni oching. Ustoz paneli: `http://localhost:8080/?admin`
yoki "Ustozlar uchun → Ustoz paneli (kirish)".

### Firebase Hosting'ga joylash

```bash
npm install -g firebase-tools
```

```bash
firebase login
```

```bash
firebase use --add
```

```bash
firebase deploy --only hosting,database
```

GitHub Pages yoki istalgan statik hostingga ham shunchaki fayllarni yuklash kifoya
(HTTPS bo'lsa PWA ishlaydi; qoidalarni esa konsoldan joylang).

### Yangilanish chiqarish

Fayllarni o'zgartirgandan keyin `sw.js` dagi `VERSION` ni oshiring (masalan `v1` → `v2`),
aks holda o'rnatilgan PWA eski keshlangan fayllarni bir marta ko'rsatishi mumkin.

## Ma'lumotlar qayerda saqlanadi

- **Qurilmada (localStorage)**: profil (ism, sinf, streak, XP), kunlik tarix, xatolar daftari,
  statistika (`idc:v3:*` kalitlari). "Sozlamalar → Hammasini tozalash" ularni o'chiradi.
- **Firebase'da**: o'quvchi hisoblari (`students`, `classes`, `studentSecrets`) va progressi (`users`), reyting (`lb`), test natijalari (`results`), jonli xonalar (`rooms`),
  ustoz qo'shgan/tahrirlagan savollar (`bank`, `overrides`) va sozlamalar (`config`).

Hisob bilan kirgan o'quvchining progressi bulutda; mehmon esa anonim — brauzer ma'lumotlari tozalansa
hisobotda yangi o'quvchi sifatida ko'rinadi.
