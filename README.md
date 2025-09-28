RIALO ID CARD 
🚀 Rialo ID Card Generator
Selamat datang di proyek Rialo ID Card Generator! Aplikasi web sederhana ini memungkinkan anggota komunitas Rialo membuat kartu identitas digital yang dapat disesuaikan dan diunduh sebagai file PNG.

✨ Fitur Utama
Customization: Input bidang Discord, X (Twitter), Role, Join Date, dan Region.

Avatar Uploader: Unggah dan preview foto profil (diubah menjadi format square WebP).

Real-time Preview: Pratinjau kartu identitas yang diperbarui secara instan.

Export: Unduh kartu identitas final dalam format PNG menggunakan html2canvas.

Responsive Layout: Tata letak dua kolom yang dioptimalkan (Control Panel lebar) untuk pengalaman pengguna yang baik.

🛠️ Stack Teknologi
Kategori	Teknologi	Deskripsi
Framework	Next.js 14	Framework React untuk server-side rendering (SSR) dan routing.
Styling	Tailwind CSS	Utility-first CSS framework untuk styling yang cepat dan konsisten.
Export	html2canvas	Digunakan untuk mengambil screenshot elemen DOM dan mengubahnya menjadi gambar.
Development	Node.js, npm	Lingkungan runtime dan package manager.

Ekspor ke Spreadsheet
⚙️ Setup Lokal
Ikuti langkah-langkah ini untuk menjalankan proyek secara lokal di mesin Anda (atau di Codespaces).

1. Kloning Repositori
Jika Anda belum mengkloning proyek, lakukan dengan perintah berikut:

Bash

git clone [URL_REPOSITORI_ANDA]
cd rialo-id-card
2. Instalasi Dependensi
Anda harus menginstal semua package yang tercantum dalam package.json. Pastikan ini adalah langkah pertama!

Bash

npm install
3. Jalankan Server Pengembangan
Setelah instalasi selesai, Anda dapat menjalankan aplikasi.

Bash

npm run dev
Aplikasi akan berjalan di http://localhost:5173. Jika Anda berada di Codespaces, buka port 5173 di browser Anda.

4. Build Produksi
Untuk membuat build siap produksi:

Bash

npm run build
📝 Struktur Proyek
Berikut adalah tampilan singkat dari struktur proyek utama:

rialo-id-card/
├─ components/
│   ├─ CardPreview.jsx     # Komponen utama untuk pratinjau kartu.
│   └─ ControlPanel.jsx    # Komponen untuk semua input dan PP preview.
├─ pages/
│   ├─ _app.js
│   └─ index.js            # Halaman beranda dengan layout grid.
├─ public/
│   └─ assets/
│       ├─ card-bg-fixed.png
│       └─ rialo-logo.png
├─ styles/
│   └─ globals.css
└─ package.json
💡 Kontribusi & Feedback
Jika Anda memiliki feedback atau ingin berkontribusi, silakan ajukan issue atau pull request. Proyek ini didorong oleh prinsip RETHINK · REBUILD · RIALO.
