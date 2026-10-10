import { ArrowRight, BookOpen, Calculator, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-28">
      {/* Container utama */}
      <div className="w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* =========================================
              1. Teks & CTA (Pasti di ATAS pada Mobile)
              ========================================= */}
          <div className="w-full flex flex-col space-y-8 text-center lg:text-left">
            
            {/* Headline */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-2">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
                Platform Belajar Interaktif
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Pahami Matematika, <br className="hidden md:block" />
                <span className="text-indigo-600">
                  Bukan Sekadar Menghafal Rumus.
                </span>
              </h1>
              
              {/* Deskripsi */}
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Pelajari berbagai rumus matematika dengan kalkulator interaktif, visualisasi yang mudah dipahami, dan penjelasan langkah demi langkah. Temukan cara belajar matematika yang lebih praktis dan menyenangkan bersama MathKNA.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-base transition-all shadow-sm shadow-indigo-200 hover:shadow-md active:scale-95 flex items-center justify-center gap-2">
                Mulai Belajar
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a href="#kategori" className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-xl font-semibold text-base transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                <BookOpen className="w-5 h-5 text-slate-500" />
                Jelajahi Rumus
              </a>
            </div>

            {/* Social Proof / Benefit mini */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Visualisasi Jelas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Langkah Detail</span>
              </div>
            </div>
          </div>

          {/* =========================================
              2. Mockup Interaktif (Pasti di BAWAH pada Mobile)
              ========================================= */}
          <div className="w-full relative max-w-lg mx-auto lg:max-w-none mt-6 lg:mt-0">
            {/* Dekorasi Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-indigo-50/80 rounded-full blur-3xl -z-10"></div>
            
            {/* Card Mockup UI */}
            <div className="bg-white border border-slate-100 shadow-2xl shadow-slate-200/40 rounded-2xl p-6 sm:p-8 w-full relative z-10 transform transition-transform hover:-translate-y-1 duration-500">
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-50 text-indigo-600 p-2.5 rounded-xl">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 leading-none">Luas Persegi Panjang</h3>
                    <span className="text-xs text-slate-500 font-medium">Kalkulator Geometri</span>
                  </div>
                </div>
              </div>

              {/* Visualisasi (Diagram SVG / CSS) */}
              <div className="flex justify-center items-center py-8 mb-4">
                <div className="relative w-48 h-24 bg-indigo-50/50 border-2 border-dashed border-indigo-300 rounded-xl flex items-center justify-center group">
                  <span className="text-indigo-400 font-bold text-xl group-hover:scale-110 transition-transform">L = ?</span>
                  
                  {/* Label Panjang */}
                  <div className="absolute -top-7 text-sm font-semibold text-slate-600 flex items-center gap-2">
                    <span className="text-indigo-600 font-bold">p</span>= 10 cm
                  </div>
                  {/* Label Lebar */}
                  <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-600 flex items-center gap-2">
                    <span className="text-indigo-600 font-bold">l</span>= 5 cm
                  </div>
                </div>
              </div>

              {/* Mockup Input Box */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Panjang (p)</label>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 font-medium flex items-center justify-between">
                    <span>10</span>
                    <span className="text-slate-400">cm</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Lebar (l)</label>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 font-medium flex items-center justify-between">
                    <span>5</span>
                    <span className="text-slate-400">cm</span>
                  </div>
                </div>
              </div>

              {/* Langkah Penyelesaian Card */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Langkah Penyelesaian</div>
                
                <div className="space-y-3 font-mono text-sm">
                  {/* Step 1 */}
                  <div className="flex items-center text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-[10px] font-bold mr-3 shrink-0">1</span>
                    <span>L = p × l</span>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex items-center text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-[10px] font-bold mr-3 shrink-0">2</span>
                    <span>L = 10 × 5</span>
                  </div>
                  
                  {/* Step 3 (Hasil) */}
                  <div className="flex items-center text-indigo-700 font-bold bg-indigo-100/60 border border-indigo-200 rounded-lg p-2.5 mt-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] mr-3 shrink-0">3</span>
                    <span>L = 50 cm²</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
