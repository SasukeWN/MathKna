import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  TrendingUp, 
  EqualNot, 
  ChevronRight,
  Calculator,
  Clock
} from 'lucide-react';
import { aljabarList, type AljabarData } from '../data/aljabar';

// Mapping icon string ke komponen Lucide
const iconMap: Record<string, React.ElementType> = {
  Activity: Activity,
  TrendingUp: TrendingUp,
  EqualNot: EqualNot,
};

const AljabarPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Kalkulator & Materi <span className="text-indigo-600">Aljabar</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Pilih topik materi aljabar di bawah ini untuk mempelajari konsep dasar, menghitung solusi otomatis, dan melihat visualisasi grafik interaktifnya.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aljabarList.map((item: AljabarData) => {
            const Icon = iconMap[item.iconName] || Activity;
            
            return (
              <div 
                key={item.id}
                className={`group bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col h-full ${
                  item.isAvailable 
                    ? 'border-slate-200/60 shadow-sm hover:shadow-xl hover:border-indigo-100' 
                    : 'border-slate-200/40 opacity-75 bg-slate-50/30'
                }`}
              >
                {/* Card Header with Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 shadow-sm ${
                    item.isAvailable
                      ? 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
                      : 'bg-slate-100 text-slate-400'
                  }`}>
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {item.name}
                    </h2>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
                  {item.description}
                </p>

                {/* Formulas Preview */}
                <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Bentuk Umum</span>
                    <code className="text-indigo-600 font-semibold bg-indigo-50/50 px-2 py-0.5 rounded font-mono">
                      {item.formula}
                    </code>
                  </div>
                </div>

                {/* Action Button */}
                {item.isAvailable ? (
                  <Link 
                    to={`/aljabar/${item.id}`} 
                    className="w-full flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-100"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Buka Kalkulator</span>
                    <ChevronRight className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                ) : (
                  <div className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-400 font-medium py-2.5 px-4 rounded-xl text-sm cursor-not-allowed">
                    <Clock className="w-4 h-4" />
                    <span>Segera Hadir</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AljabarPage;

