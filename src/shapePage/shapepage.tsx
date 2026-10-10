import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Square, 
  Triangle, 
  Circle, 
  RectangleHorizontal, 
  ChevronRight,
  Calculator
} from 'lucide-react';
import { type ShapeData } from '../data/shape';
import { shapes } from '../data/shape';

// Map icon string names to actual Lucide components
const iconMap: Record<string, React.ElementType> = {
  Square: Square,
  Triangle: Triangle,
  Circle: Circle,
  RectangleHorizontal: RectangleHorizontal,
};

const ShapePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Kalkulator <span className="text-indigo-600">Bangun Datar</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Pilih bangun datar di bawah ini untuk menghitung luas dan kelilingnya. Dilengkapi dengan penjelasan dan langkah penyelesaian.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shapes.map((shape: ShapeData) => {
            const Icon = iconMap[shape.iconName] || Square;
            
            return (
              <div 
                key={shape.id}
                className="group bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 flex flex-col h-full"
              >
                {/* Card Header with Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {shape.name}
                    </h2>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {shape.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
                  {shape.description}
                </p>

                {/* Formulas Preview */}
                <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-2 border border-slate-100">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Luas</span>
                    <code className="text-indigo-600 font-semibold bg-indigo-50/50 px-2 py-0.5 rounded">
                      {shape.formulaLuas}
                    </code>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Keliling</span>
                    <code className="text-indigo-600 font-semibold bg-indigo-50/50 px-2 py-0.5 rounded">
                      {shape.formulaKeliling}
                    </code>
                  </div>
                </div>

                {/* Action Button using Link */}
                <Link to={`/shape/${shape.id}`} className="w-full flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-100">
                  <Calculator className="w-4 h-4" />
                  <span>Buka Kalkulator</span>
                  <ChevronRight className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShapePage;
