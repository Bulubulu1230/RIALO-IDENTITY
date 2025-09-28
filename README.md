# 🪪 RIALO-IDENTITY

> Sistem kartu identitas berbasis web yang dibangun dengan **Next.js** & **Tailwind CSS**  
> Dibuat untuk ekosistem **Rialo**, memudahkan pembuatan & pengelolaan kartu ID digital dengan desain yang ringan, responsif, dan mudah diintegrasikan.

---

## ✨ Fitur Utama
- 🚀 **Next.js 14** – framework React modern dengan optimasi performance
- 🎨 **Tailwind CSS** – styling cepat & konsisten
- 📦 **Modular Pages** – mudah diperluas untuk fitur baru
- 🖼️ **Assets Management** – dukungan gambar ID card di `public/assets`
- 🌗 **Dark/Light Theme Friendly**
- 🔒 **Environment Ready** – siap ditambahkan integrasi login/auth (NextAuth, dsb.)
- ⚡ Mudah dideploy di **Vercel**

---

## 📂 Struktur Proyek

rialo-id-card/
├─ pages/
│ ├─ index.js # halaman utama
│ └─ _app.js # entry app Next.js
├─ public/
│ └─ assets/
│ └─ card-bg-fixed.png
├─ styles/
│ └─ globals.css # style global
├─ components/ # (opsional) komponen UI
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ .gitignore


---

## ⚙️ Persiapan & Instalasi
Pastikan Node.js ≥ 18 dan npm sudah terpasang.

```bash
# Clone repo
git clone https://github.com/Bulubulu1230/RIALO-IDENTITY.git
cd RIALO-IDENTITY

# Install dependencies
npm install      # atau npm ci

# Jalankan dev server
npm run dev


Buka di browser: http://localhost:3000

🚀 Deploy ke Vercel

Login ke Vercel

Klik New Project → Import from GitHub → pilih RIALO-IDENTITY

Pilih framework Next.js

Tambahkan Environment Variables (jika diperlukan)

Deploy → project akan aktif di https://rialo-identity.vercel.app

🔧 Perintah Penting
Perintah	Fungsi
npm run dev	Jalankan server development
npm run build	Build untuk produksi
npm start	Jalankan build produksi
npm run lint	Jalankan linter (opsional)
📝 Catatan

Jangan commit folder node_modules/ atau file .env

Tambahkan komponen & halaman baru di folder components/ dan pages/

Gunakan branch baru untuk fitur/bugfix:

git checkout -b feat/nama-fitur
git push -u origin feat/nama-fitur

📜 Lisensi

Proyek ini berada di bawah lisensi MIT.
Silakan gunakan, modifikasi, dan kembangkan sesuai kebutuhan.

💡 Dibuat dengan ❤️ untuk mendukung ekosistem Rialo.


> Letakkan file ini di root project sebagai `README.md`, commit lalu push:
```bash
git add README.md
git commit -m "docs: add project README"
git push
