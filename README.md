# 📐 MathKna

MathKna adalah platform edukasi matematika modern berbasis web yang dirancang dengan antarmuka bergaya SaaS. Platform ini tidak hanya berfungsi sebagai kalkulator matematika, tetapi juga menyediakan **penjelasan langkah demi langkah (step-by-step)** untuk membantu siswa dan pelajar memahami alur perhitungan (seperti mencari Luas dan Keliling bangun datar).

## 🌟 Fitur Utama

- **Kalkulator Geometri Dinamis:** Hitung Luas dan Keliling berbagai bangun datar (Persegi, Persegi Panjang, Segitiga, dan Lingkaran).
- **Langkah Penyelesaian (Step-by-Step):** Menampilkan breakdown cara menghitung secara detail (misal: L = 5 × 5 = 25).
- **UI/UX Modern & Bersih:** Dibangun dengan filosofi desain modern ala SaaS, banyak whitespace, sudut membulat, dan navigasi yang intuitif.
- **Responsive Design:** Mendukung tampilan optimal baik di Desktop (Sidebar) maupun Mobile (Top & Bottom bar).
- **Routing Dinamis:** Menggunakan React Router untuk transisi halaman tanpa *reload* (Single Page Application).

## 💻 Tech Stack

Proyek ini dibangun menggunakan teknologi web terkini untuk performa dan skalabilitas yang maksimal:
- **[React 18](https://react.dev/)** - Library UI utama
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing untuk kode yang lebih aman dan mudah di-maintain
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Framework CSS *utility-first* untuk styling cepat
- **[React Router DOM 6](https://reactrouter.com/)** - Manajemen *routing* dan navigasi
- **[Lucide React](https://lucide.dev/)** - Ikon SVG yang cantik dan ringan
- **[Vite](https://vitejs.dev/)** - *Build tool* yang super cepat

## 🚀 Cara Menjalankan di Lokal (Local Development)

Pastikan kamu sudah menginstal [Node.js](https://nodejs.org/) di komputermu.

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/username-kamu/MathKna.git
   cd MathKna
   ```

2. **Install semua dependensi:**
   ```bash
   npm install
   ```
   *Atau jika menggunakan yarn/pnpm:*
   ```bash
   yarn install
   # atau
   pnpm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Buka di Browser:**
   Akses `http://localhost:5173` (atau port yang tertera di terminal) untuk melihat aplikasi.

## 📂 Struktur Folder Utama

- `src/component/` : Komponen UI yang dapat digunakan kembali (Navbar, Hero, Section, dll).
- `src/data/` : Data statis aplikasi (contoh: metadata bangun datar).
- `src/logic/` : Core logic atau otak aplikasi (berisi fungsi-fungsi perhitungan matematika untuk setiap bangun datar).
- `src/pages/` : Komponen Halaman statis (Beranda, Tentang).
- `src/shapePage/` : Halaman Katalog dan Kalkulator dinamis.

---
*Dibangun dengan dedikasi untuk membuat matematika lebih mudah.*
