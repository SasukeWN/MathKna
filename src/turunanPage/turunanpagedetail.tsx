import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Mafs, Coordinates, Plot, Point, Text } from 'mafs';
import { 
  ArrowLeft, 
  Zap, 
  TrendingUp, 
  Activity, 
  Calculator, 
  Play, 
  BookOpen, 
  Info,
  Layers
} from 'lucide-react';

import { turunanList } from '../data/turunan';
import { hitungTurunanDasar } from '../logic/turunan/turunanDasar';

// Mapping Icon Lucide
const iconMap: Record<string, React.ElementType> = {
  Zap: Zap,
  TrendingUp: TrendingUp,
  Activity: Activity,
};

type HasilTurunanDasar = ReturnType<typeof hitungTurunanDasar>;

const TurunanPageDetail: React.FC = () => {
  const { turunanId } = useParams<{ turunanId: string }>();
  const navigate = useNavigate();

  // Cari data materi berdasarkan ID di URL
  const topic = turunanList.find((item) => item.id === turunanId);

  // State Input untuk Turunan Dasar f(x) = ax^n
  const [inputKoef, setInputKoef] = useState('');
  const [inputPangkat, setInputPangkat] = useState('');
  const [result, setResult] = useState<HasilTurunanDasar | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Jika materi tidak ditemukan
  if (!topic) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Materi kalkulus tidak ditemukan</h2>
        <button 
          onClick={() => navigate('/kategori/kalkulus')} 
          className="mt-4 text-sky-600 hover:underline font-medium"
        >
          Kembali ke Katalog Kalkulus
        </button>
      </div>
    );
  }

  // Jika materi belum tersedia
  if (!topic.isAvailable) {
    return (
      <div className="py-20 text-center max-w-md mx-auto">
        <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">{topic.name}</h2>
        <p className="text-slate-500 mt-2">Materi ini sedang dalam tahap pengembangan.</p>
        <button 
          onClick={() => navigate('/kategori/kalkulus')} 
          className="mt-6 inline-flex items-center text-sky-600 hover:underline font-semibold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Katalog Kalkulus
        </button>
      </div>
    );
  }

  const Icon = iconMap[topic.iconName] || Zap;

  // Handler Perhitungan Turunan
  const handleCalculate = () => {
    setError(null);
    setResult(null);

    const koef = parseFloat(inputKoef);
    const pangkat = parseInt(inputPangkat, 10);

    if (isNaN(koef) || isNaN(pangkat)) {
      setError('Koefisien (a) dan Pangkat (n) harus diisi dengan angka.');
      return;
    }

    if (pangkat < 0) {
      setError('Untuk materi turunan dasar ini, gunakan pangkat bilangan bulat non-negatif (n ≥ 0).');
      return;
    }

    if (pangkat > 10) {
      setError('Maksimal pangkat adalah 10 agar perhitungan dan tampilan tetap optimal.');
      return;
    }

    try {
      const res = hitungTurunanDasar(koef, pangkat);
      setResult(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Terjadi kesalahan saat menghitung turunan.');
      }
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Tombol Back */}
      <button
        onClick={() => navigate('/kategori/kalkulus')}
        className="flex items-center text-slate-500 hover:text-sky-600 font-medium mb-8 transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Kembali ke Katalog Kalkulus
      </button>

      {/* Header Info */}
      <div className="flex items-center gap-5 mb-10">
        <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center shadow-sm">
          <Icon className="w-8 h-8" strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">{topic.name}</h1>
          <span className="text-sm font-medium text-sky-600 bg-sky-50 px-3 py-1 rounded-full mt-2 inline-block">
            {topic.type}
          </span>
        </div>
      </div>

      {/* TAMPILAN MATERI: TURUNAN DASAR */}
      {topic.id === 'turunan-dasar' && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
            {/* Kolom Kiri: Penjelasan Materi */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-sky-600" />
                  Konsep Aturan Pangkat (Power Rule)
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {topic.description} Turunan mengukur laju perubahan nilai fungsi terhadap variabel x.
                </p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">Rumus Power Rule:</span>
                  <code className="text-base font-bold text-sky-600 font-mono">
                    f(x) = axⁿ &nbsp;→&nbsp; f'(x) = n · axⁿ⁻¹
                  </code>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-3xl p-8 border border-sky-100">
                <h3 className="text-lg font-bold text-sky-900 mb-5 flex items-center gap-2">
                  <Info className="w-5 h-5 text-sky-600" />
                  Aturan Turunan Penting
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <RumusCard label="Turunan Konstanta" rumus="f(x) = c  →  f'(x) = 0" />
                  <RumusCard label="Turunan Linear" rumus="f(x) = ax  →  f'(x) = a" />
                  <RumusCard label="Turunan Berulang" rumus="f''(x) = turunan dari f'(x)" />
                  <RumusCard label="Pangkat Habis" rumus="Turunan ke-(n+1) = 0" />
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Form Kalkulator */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-24">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                  <div className="bg-sky-600 p-2 rounded-lg text-white">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Kalkulator {topic.name}</h2>
                </div>

                {/* Live Preview Fungsi */}
                <div className="bg-slate-50 rounded-2xl p-4 mb-6 text-center border border-slate-100 font-mono text-base sm:text-lg font-bold text-slate-800">
                  f(x) = <span className="text-sky-600">{inputKoef || 'a'}</span>x
                  <sup className="text-sky-600 text-sm font-bold ml-0.5">{inputPangkat !== '' ? inputPangkat : 'n'}</sup>
                </div>

                <div className="space-y-4 mb-6">
                  <InputField label="Koefisien (a)" value={inputKoef} onChange={setInputKoef} placeholder="Contoh: 3" />
                  <InputField label="Pangkat awal (n ≥ 0)" value={inputPangkat} onChange={setInputPangkat} placeholder="Contoh: 3" />
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 text-sm font-medium p-3 rounded-xl mb-4 border border-red-200">
                    ⚠️ {error}
                  </div>
                )}

                <button
                  onClick={handleCalculate}
                  className="w-full bg-sky-600 text-white font-bold py-4 rounded-xl hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-200 transition-all active:scale-[0.98]"
                >
                  Hitung Semua Turunan
                </button>

                <p className="text-center text-xs text-slate-400 mt-4">
                  Sistem otomatis menghitung rantai turunan hingga mencapai 0.
                </p>
              </div>
            </div>
          </div>

          {result && (
            <div className="space-y-10">
              {/* Kanvas Grafik Mafs Perbandingan f(x) vs f'(x) */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Perbandingan Visual: f(x) vs Turunan f'(x)</h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Lihat bagaimana kurva fungsi asal dan kurva laju perubahan turunan pertamanya berhubungan.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span> Fungsi Asal f(x)</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Turunan f'(x)</span>
                  </div>
                </div>

                <div className="w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-900/5">
                  <GrafikTurunan
                    koef={parseFloat(inputKoef)}
                    pangkat={parseInt(inputPangkat, 10)}
                  />
                </div>
                <p className="text-xs text-slate-400 mt-3 text-center">
                  Tips: Klik & drag untuk menggeser sumbu. Scroll mouse untuk zoom in / zoom out.
                </p>
              </div>

              {/* Rantai Hasil Turunan (Tingkat-tingkat Turunan) */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-sky-600" />
                  Rantai Hasil Turunan Hingga Habis (Nol)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {result.hasilTurunan.map((item) => (
                    <div 
                      key={item.tingkat}
                      className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 text-center"
                    >
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                        {item.tingkat === 1 ? "Turunan ke-1: f'(x)" : item.tingkat === 2 ? "Turunan ke-2: f''(x)" : `Turunan ke-${item.tingkat}`}
                      </span>
                      <code className="text-xl font-extrabold text-sky-600 font-mono">
                        {item.bentuk}
                      </code>
                    </div>
                  ))}
                </div>
              </div>

              {/* Langkah Penyelesaian Step-by-Step */}
              <div className="bg-white rounded-3xl p-8 border border-emerald-200/60 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                <h3 className="text-lg font-bold text-emerald-900 mb-5 flex items-center gap-2">
                  <Play className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                  Langkah Penyelesaian Aturan Pangkat
                </h3>
                <div className="space-y-3">
                  {result.penyelesaian.map((langkah, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 rounded-2xl p-4 border border-slate-100 font-mono text-sm text-slate-700"
                    >
                      {langkah}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

// ========================================================
// KOMPONEN GRAFIK: PERBANDINGAN f(x) vs f'(x)
// ========================================================
const GrafikTurunan: React.FC<{
  koef: number;
  pangkat: number;
}> = ({ koef, pangkat }) => {
  // Turunan pertama: koefPrime = koef * pangkat, pangkatPrime = pangkat - 1
  const koefPrime = koef * pangkat;
  const pangkatPrime = Math.max(0, pangkat - 1);

  return (
    <Mafs
      width="auto"
      height={550}
      viewBox={{
        x: [-6, 6],
        y: [-8, 8],
      }}
      zoom
    >
      <Coordinates.Cartesian />

      {/* Kurva Fungsi Asal f(x) = a * x^n (Indigo) */}
      <Plot.OfX
        y={(x) => koef * Math.pow(x, pangkat)}
        color="#4f46e5"
        weight={3}
      />

      {/* Kurva Turunan Pertama f'(x) (Rose) jika pangkat > 0 */}
      {pangkat > 0 && (
        <Plot.OfX
          y={(x) => koefPrime * Math.pow(x, pangkatPrime)}
          color="#f43f5e"
          weight={2.5}
        />
      )}

      {/* Titik Referensi di (0, 0) */}
      <Point x={0} y={0} color="#059669" />
      <Text x={0.6} y={0.6} size={12} color="#059669">
        (0, 0)
      </Text>
    </Mafs>
  );
};

// Helper Input Field
const InputField: React.FC<{
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
}> = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all font-mono"
    />
  </div>
);

// Helper Rumus Card
const RumusCard: React.FC<{ label: string; rumus: string }> = ({ label, rumus }) => (
  <div className="bg-white/80 p-5 rounded-2xl border border-white backdrop-blur-sm shadow-sm">
    <span className="block text-sm text-sky-600 font-semibold mb-1">{label}</span>
    <code className="text-base font-bold text-slate-900 font-mono">{rumus}</code>
  </div>
);

export default TurunanPageDetail;

