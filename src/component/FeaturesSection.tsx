import { Calculator, Shapes, ListOrdered } from 'lucide-react';

const features = [
  {
    title: 'Kalkulator Interaktif',
    description: 'Masukkan nilai dan dapatkan hasil perhitungan secara otomatis.',
    icon: Calculator,
  },
  {
    title: 'Visualisasi Matematika',
    description: 'Pahami konsep melalui grafik, bentuk geometri, dan representasi visual.',
    icon: Shapes,
  },
  {
    title: 'Langkah Penyelesaian',
    description: 'Pelajari proses perhitungan dari rumus awal hingga mendapatkan hasil akhir.',
    icon: ListOrdered,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white rounded-3xl my-12 border border-slate-100 shadow-sm relative overflow-hidden">
      {/* Ornamen Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Belajar Matematika dengan Cara yang Lebih Mudah
          </h2>
          <p className="text-lg text-slate-600">
            MathKNA membantu kamu memahami konsep matematika melalui pengalaman belajar yang interaktif, praktis, dan mudah diikuti.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/40 transition-colors group cursor-default">
              <div className="w-14 h-14 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

