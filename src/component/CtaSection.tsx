import { BookOpen } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 lg:py-24 mb-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="bg-indigo-600 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-xl shadow-indigo-200/50">
          
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-indigo-500 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-indigo-800 rounded-full blur-3xl opacity-40"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
              Siap Memahami Matematika Lebih Dalam?
            </h2>
            <p className="text-lg text-indigo-100 mb-10 leading-relaxed max-w-xl mx-auto">
              Mulai eksplorasi rumus, coba kalkulator interaktif, dan temukan langkah penyelesaian yang membantumu belajar dengan lebih percaya diri.
            </p>
            <a href="#kategori" className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 hover:bg-slate-50 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 mx-auto max-w-xs cursor-pointer">
              <BookOpen className="w-5 h-5" strokeWidth={2.5} />
              Jelajahi Rumus Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

