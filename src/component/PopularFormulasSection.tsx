import { ArrowRight } from 'lucide-react';

const formulas = [
  { title: 'Luas Persegi Panjang', visual: 'L = p × l', category: 'Geometri' },
  { title: 'Luas Segitiga', visual: 'L = ½ × a × t', category: 'Geometri' },
  { title: 'Teorema Pythagoras', visual: 'c² = a² + b²', category: 'Trigonometri' },
  { title: 'Persamaan Garis', visual: 'y = mx + c', category: 'Aljabar' },
];

const PopularFormulasSection = () => {
  return (
    <section className="py-16 lg:py-24" id="rumus">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Mulai dari Rumus yang Kamu Kenal
          </h2>
          <p className="text-lg text-slate-600">
            Pelajari rumus matematika populer, coba perhitungannya sendiri, dan pahami bagaimana setiap rumus bekerja.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formulas.map((formula, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-indigo-100 hover:border-indigo-300 transition-all cursor-pointer"
            >
              <div className="bg-slate-50 h-36 flex items-center justify-center border-b border-slate-100 group-hover:bg-indigo-50/60 transition-colors relative overflow-hidden">
                <span className="text-2xl font-mono font-bold text-slate-400 group-hover:text-indigo-500 transition-colors relative z-10">
                  {formula.visual}
                </span>
                {/* Dekorasi tipis di background card visual */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-200/50 rounded-full blur-xl group-hover:bg-indigo-200/50 transition-colors"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest mb-2 block">
                    {formula.category}
                  </span>
                  <h3 className="font-bold text-slate-900 text-lg leading-snug">{formula.title}</h3>
                </div>
                <div className="mt-5 flex items-center text-sm font-semibold text-slate-500 group-hover:text-indigo-600 transition-colors">
                  Pelajari rumus <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularFormulasSection;

