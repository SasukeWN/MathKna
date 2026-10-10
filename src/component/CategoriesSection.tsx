import { FunctionSquare, Triangle, Box, BarChart3, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { 
    name: 'Bangun Datar & Ruang', 
    slug: 'geometri',
    description: 'Pelajari luas, keliling, dan volume (Persegi, Segitiga, Lingkaran, Balok).',
    icon: Box,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'group-hover:border-emerald-200'
  },
  { 
    name: 'Aljabar', 
    slug: 'aljabar',
    description: 'Selesaikan persamaan linear, kuadrat, fungsi, dan pemfaktoran.',
    icon: FunctionSquare,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'group-hover:border-indigo-200'
  },
  { 
    name: 'Trigonometri', 
    slug: 'trigonometri',
    description: 'Hitung sudut, sin, cos, tan, dan teorema pythagoras.',
    icon: Triangle,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'group-hover:border-rose-200'
  },
  { 
    name: 'Statistika', 
    slug: 'statistika',
    description: 'Pahami pengolahan data, mean, median, modus, dan peluang.',
    icon: BarChart3,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'group-hover:border-amber-200'
  },
  { 
    name: 'Kalkulus Dasar', 
    slug: 'kalkulus',
    description: 'Pengantar limit, turunan, dan integral dasar.',
    icon: Calculator,
    color: 'text-sky-600',
    bgColor: 'bg-sky-50',
    borderColor: 'group-hover:border-sky-200'
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50/50 rounded-3xl my-12" id="kategori">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Pilih Topik Belajarmu
          </h2>
          <p className="text-lg text-slate-600">
            Pilih kategori matematika di bawah ini untuk melihat kumpulan rumus, kalkulator, dan penjelasan materi secara lengkap.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={`/kategori/${cat.slug}`} 
              className={`group flex flex-col bg-white border border-slate-200 hover:shadow-lg px-6 py-8 rounded-2xl transition-all cursor-pointer ${cat.borderColor} hover:-translate-y-1`}
            >
              <div className={`${cat.bgColor} ${cat.color} w-14 h-14 p-3 rounded-xl mb-5 transition-transform group-hover:scale-110`}>
                <cat.icon className="w-full h-full" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-slate-800">{cat.name}</h3>
              <p className="text-slate-500 font-medium leading-relaxed flex-1">
                {cat.description}
              </p>
              
              <div className={`mt-6 font-semibold text-sm flex items-center ${cat.color}`}>
                Mulai belajar <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
