import React from 'react';
import { BookOpen, Users, Code, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-6">
          Tentang <span className="text-indigo-600">MathKna</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Platform belajar matematika modern yang dirancang untuk membuat proses belajar menjadi lebih interaktif, mudah dipahami, dan menyenangkan.
        </p>
      </div>

      {/* Visi Misi Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
            <Target className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Visi Kami</h3>
          <p className="text-slate-600 leading-relaxed">
            Menghilangkan stigma bahwa matematika itu rumit. Kami percaya dengan visualisasi yang tepat dan langkah penyelesaian yang jelas, siapa pun bisa menguasai matematika.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
            <BookOpen className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Misi Kami</h3>
          <p className="text-slate-600 leading-relaxed">
            Menyediakan alat bantu hitung pintar (kalkulator dinamis) lengkap dengan penjelasan langkah demi langkah (step-by-step) untuk membantu siswa memahami konsep dasar.
          </p>
        </div>
      </div>

      {/* Developer Section */}
      <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-indigo-500 opacity-10 blur-3xl"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Code className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Dibangun untuk Pelajar</h2>
          <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
            MathKna dikembangkan dengan arsitektur modern untuk memastikan pengalaman belajar yang cepat, responsif, dan tanpa gangguan. Terus dikembangkan untuk materi yang lebih luas.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-white text-indigo-900 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Mulai Belajar Sekarang
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

