# Kunlik-test — Majburiy matematika

Majburiy matematika bo'yicha kunlik mashq uchun veb-ilova (o'zbek va rus tillarida).
O'quvchi har kuni 10 daqiqada 10 ta savol ishlaydi, natijasini va yechimlarini ko'radi,
streak va XP to'playdi. Ustoz jonli xona ochib butun sinfni bir vaqtda test qildiradi,
savollar bazasini tahrirlaydi va sinf bo'yicha hisobot oladi.

Hech qanday build talab qilinmaydi: oddiy HTML/CSS/JS, ma'lumotlar Firebase Realtime Database'da.

## Imkoniyatlar

**O'quvchi uchun**
- Ro'yxatdan o'tish: ism-familiya va sinf (5–11-sinflar, masalan `9-A`) majburiy — natijalar ustoz hisobotida sinf bo'yicha guruhlanadi
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

## Fayllar tuzilmasi

```
index.html              sahifa karkasi, Firebase SDK va skriptlarni ulash
style.css               barcha uslublar
app.js                  ilova kodi (auth, test, statistika, jonli xona, ustoz paneli)
data/questions.js       BUILTIN — asosiy savollar bazasi (1000 savol)
data/questions-ru.js    savollarning ruscha tarjimalari va eskirgan savollar xeshlari
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
- **Firebase'da**: reyting (`lb`), test natijalari (`results`), jonli xonalar (`rooms`),
  ustoz qo'shgan/tahrirlagan savollar (`bank`, `overrides`) va sozlamalar (`config`).

O'quvchi anonim tarzda kiradi, shuning uchun brauzer ma'lumotlari tozalansa u hisobotda
yangi o'quvchi sifatida ko'rinadi.
