import React from 'react';
import { BookOpen, Square, Triangle, Circle, RectangleHorizontal, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { shapes } from '../data/shape';

// Mapping Icon seperti di halaman lain
const iconMap: Record<string, React.ElementType> = {
  Square: Square,
  Triangle: Triangle,
  Circle: Circle,
  RectangleHorizontal: RectangleHorizontal,
};

const RumusPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm">
          <BookOpen className="w-8 h-8" strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Jelajahi Rumus</h1>
          <p className="text-slate-500 mt-1">
            Kumpulan rumus matematika lengkap untuk referensi belajarmu.
          </p>
        </div>
      </div>

      {/* Grid Rumus */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {shapes.map((shape) => {
          const Icon = iconMap[shape.iconName] || Square;
          
          return (
            <div key={shape.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col h-full">
              {/* Dekorasi Card */}
              <div className="absolute -top-10 -right-10 text-slate-50 opacity-50 transform rotate-12 pointer-events-none">
                <Icon className="w-48 h-48" strokeWidth={1} />
              </div>
              
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{shape.name}</h2>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{shape.type}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="text-sm font-semibold text-indigo-600 mb-1">Rumus Luas</p>
                    <code className="text-lg font-bold text-slate-800 font-mono">{shape.formulaLuas}</code>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="text-sm font-semibold text-emerald-600 mb-1">Rumus Keliling</p>
                    <code className="text-lg font-bold text-slate-800 font-mono">{shape.formulaKeliling}</code>
                  </div>
                </div>
              </div>

              <Link 
                to={`/shape/${shape.id}`}
                className="relative z-10 w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-3.5 rounded-xl hover:bg-indigo-600 transition-colors"
              >
                Coba Kalkulator
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RumusPage;

