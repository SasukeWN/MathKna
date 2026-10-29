import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Mafs, Coordinates, Plot, Point, Line, Text } from 'mafs';
import { 
  ArrowLeft, 
  Activity, 
  TrendingUp, 
  EqualNot, 
  Calculator, 
  Play, 
  BookOpen, 
  Info 
} from 'lucide-react';

import { aljabarList } from '../data/aljabar';
import { HitungPersamaanKuadrat } from '../logic/aljabar/kuadrat';
import { HitungPersamaanGarisLurus } from '../logic/aljabar/garislurus';
import { hitungSpldv } from '../logic/aljabar/spldv';

// Mapping Icon
const iconMap: Record<string, React.ElementType> = {
  Activity: Activity,
  TrendingUp: TrendingUp,
  EqualNot: EqualNot,
};

type HasilKuadrat = ReturnType<typeof HitungPersamaanKuadrat>;
type HasilGarisLurus = ReturnType<typeof HitungPersamaanGarisLurus>;
type HasilSpldv = ReturnType<typeof hitungSpldv>;

const AljabarPageDetail: React.FC = () => {
  const { aljabarId } = useParams<{ aljabarId: string }>();
  const navigate = useNavigate();

  // Cari data materi berdasarkan ID di URL
  const topic = aljabarList.find((item) => item.id === aljabarId);

  // --- State Input untuk Persamaan Kuadrat (a, b, c) ---
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [inputC, setInputC] = useState('');
  const [resultKuadrat, setResultKuadrat] = useState<HasilKuadrat | null>(null);
  const [errorKuadrat, setErrorKuadrat] = useState<string | null>(null);

  // --- State Input untuk Persamaan Garis Lurus (m, x, c) ---
  const [inputM, setInputM] = useState('');
  const [inputX, setInputX] = useState('');
  const [inputConstC, setInputConstC] = useState('');
  const [resultGarisLurus, setResultGarisLurus] = useState<HasilGarisLurus | null>(null);
  const [errorGarisLurus, setErrorGarisLurus] = useState<string | null>(null);

  // --- State Input untuk SPLDV (a1, b1, c1, a2, b2, c2) ---
  const [inputA1, setInputA1] = useState('');
  const [inputB1, setInputB1] = useState('');
  const [inputC1, setInputC1] = useState('');
  const [inputA2, setInputA2] = useState('');
  const [inputB2, setInputB2] = useState('');
  const [inputC2, setInputC2] = useState('');
  const [resultSpldv, setResultSpldv] = useState<HasilSpldv | null>(null);
  const [errorSpldv, setErrorSpldv] = useState<string | null>(null);

  // Jika materi tidak ditemukan di data
  if (!topic) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Materi aljabar tidak ditemukan</h2>
        <button 
          onClick={() => navigate('/kategori/aljabar')} 
          className="mt-4 text-indigo-600 hover:underline font-medium"
        >
          Kembali ke Katalog Aljabar
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
          onClick={() => navigate('/kategori/aljabar')} 
          className="mt-6 inline-flex items-center text-indigo-600 hover:underline font-semibold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Katalog Aljabar
        </button>
      </div>
    );
  }

  const Icon = iconMap[topic.iconName] || Activity;

  // --- Handler Perhitungan Persamaan Kuadrat ---
  const handleCalculateKuadrat = () => {
    setErrorKuadrat(null);
    setResultKuadrat(null);

    const a = parseFloat(inputA);
    const b = parseFloat(inputB);
    const c = parseFloat(inputC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setErrorKuadrat('Semua kolom (a, b, c) harus diisi dengan angka.');
      return;
    }

    if (a === 0) {
      setErrorKuadrat('Nilai "a" tidak boleh 0 pada persamaan kuadrat.');
      return;
    }

    try {
      const res = HitungPersamaanKuadrat(a, b, c);
      setResultKuadrat(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorKuadrat(err.message);
      } else {
        setErrorKuadrat('Terjadi kesalahan saat menghitung.');
      }
    }
  };

  // --- Handler Perhitungan Persamaan Garis Lurus ---
  const handleCalculateGarisLurus = () => {
    setErrorGarisLurus(null);
    setResultGarisLurus(null);

    const m = parseFloat(inputM);
    const x = parseFloat(inputX);
    const c = parseFloat(inputConstC);

    if (isNaN(m) || isNaN(x) || isNaN(c)) {
      setErrorGarisLurus('Semua kolom (m, x, c) harus diisi dengan angka.');
      return;
    }

    try {
      const res = HitungPersamaanGarisLurus(m, x, c);
      setResultGarisLurus(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorGarisLurus(err.message);
      } else {
        setErrorGarisLurus('Terjadi kesalahan saat menghitung.');
      }
    }
  };

  // --- Handler Perhitungan SPLDV ---
  const handleCalculateSpldv = () => {
    setErrorSpldv(null);
    setResultSpldv(null);

    const a1 = parseFloat(inputA1);
    const b1 = parseFloat(inputB1);
    const c1 = parseFloat(inputC1);
    const a2 = parseFloat(inputA2);
    const b2 = parseFloat(inputB2);
    const c2 = parseFloat(inputC2);

    if ([a1, b1, c1, a2, b2, c2].some(isNaN)) {
      setErrorSpldv('Semua koefisien (a1, b1, c1, a2, b2, c2) harus diisi angka.');
      return;
    }

    try {
      const res = hitungSpldv(a1, b1, c1, a2, b2, c2);
      if (res.error) {
        setErrorSpldv(res.error);
      }
      setResultSpldv(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorSpldv(err.message);
      } else {
        setErrorSpldv('Terjadi kesalahan saat menghitung SPLDV.');
      }
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Tombol Back */}
      <button
        onClick={() => navigate('/kategori/aljabar')}
        className="flex items-center text-slate-500 hover:text-indigo-600 font-medium mb-8 transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Kembali ke Katalog Aljabar
      </button>

      {/* Header Info */}
      <div className="flex items-center gap-5 mb-10">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm">
          <Icon className="w-8 h-8" strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">{topic.name}</h1>
          <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mt-2 inline-block">
            {topic.type}
          </span>
        </div>
      </div>

      {/* ========================================================
          1. MATERI: PERSAMAAN KUADRAT
          ======================================================== */}
      {topic.id === 'persamaan-kuadrat' && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  Konsep Dasar
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {topic.description}
                </p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">Bentuk Umum:</span>
                  <code className="text-base font-bold text-indigo-600 font-mono">
                    ax² + bx + c = 0 &nbsp;(a ≠ 0)
                  </code>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border border-indigo-100">
                <h3 className="text-lg font-bold text-indigo-900 mb-5 flex items-center gap-2">
                  <Info className="w-5 h-5 text-indigo-600" />
                  Rumus Utama
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <RumusCard label="Diskriminan" rumus="D = b² - 4ac" />
                  <RumusCard label="Rumus ABC" rumus="x = (-b ± √D) / 2a" />
                  <RumusCard label="Titik Puncak X (Sumbu Simetri)" rumus="xp = -b / (2a)" />
                  <RumusCard label="Titik Puncak Y (Nilai Optimum)" rumus="yp = -D / (4a)" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-24">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                  <div className="bg-indigo-600 p-2 rounded-lg text-white">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Kalkulator {topic.name}</h2>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 mb-6 text-center border border-slate-100 font-mono text-base sm:text-lg font-bold text-slate-800">
                  <span className="text-indigo-600">{inputA || 'a'}</span>x² +{' '}
                  <span className="text-indigo-600">{inputB || 'b'}</span>x +{' '}
                  <span className="text-indigo-600">{inputC || 'c'}</span> = 0
                </div>

                <div className="space-y-4 mb-6">
                  <InputField label="Nilai a (koefisien x²)" value={inputA} onChange={setInputA} placeholder="Contoh: 1" />
                  <InputField label="Nilai b (koefisien x)" value={inputB} onChange={setInputB} placeholder="Contoh: -2" />
                  <InputField label="Nilai c (konstanta)" value={inputC} onChange={setInputC} placeholder="Contoh: -8" />
                </div>

                {errorKuadrat && (
                  <div className="bg-red-50 text-red-600 text-sm font-medium p-3 rounded-xl mb-4 border border-red-200">
                    ⚠️ {errorKuadrat}
                  </div>
                )}

                <button
                  onClick={handleCalculateKuadrat}
                  className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-[0.98]"
                >
                  Hitung & Visualisasikan
                </button>
              </div>
            </div>
          </div>

          {resultKuadrat && (
            <div className="space-y-10">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Visualisasi Parabola Interaktif</h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Grafik otomatis memplot kurva parabola, titik puncak, dan perpotongan sumbu.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Puncak</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Akar Sumbu X</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Potong Sumbu Y</span>
                  </div>
                </div>

                <div className="w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-900/5">
                  <GrafikParabola
                    a={parseFloat(inputA)}
                    b={parseFloat(inputB)}
                    c={parseFloat(inputC)}
                    result={resultKuadrat}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <HasilCard label="Diskriminan (D)" value={resultKuadrat.diskriminan.toString()} />
                <HasilCard label="Arah Kurva" value={resultKuadrat.arah} />
                <HasilCard label="Titik Puncak" value={`(${fmt(resultKuadrat.titikpuncak.x)}, ${fmt(resultKuadrat.titikpuncak.y)})`} />
                <HasilCard label="Potong Sumbu Y" value={`(0, ${resultKuadrat.TitikPotongSumbuY.y})`} />
              </div>

              <div className="bg-white rounded-3xl p-8 border border-emerald-200/60 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                <h3 className="text-lg font-bold text-emerald-900 mb-5 flex items-center gap-2">
                  <Play className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                  Langkah Penyelesaian
                </h3>
                <div className="space-y-3">
                  {resultKuadrat.penyelesaian.map((langkah, index) => (
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

      {/* ========================================================
          2. MATERI: PERSAMAAN GARIS LURUS
          ======================================================== */}
      {topic.id === 'persamaan-garis-lurus' && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  Konsep Dasar
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {topic.description}
                </p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">Bentuk Umum:</span>
                  <code className="text-base font-bold text-indigo-600 font-mono">
                    y = mx + c
                  </code>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border border-indigo-100">
                <h3 className="text-lg font-bold text-indigo-900 mb-5 flex items-center gap-2">
                  <Info className="w-5 h-5 text-indigo-600" />
                  Unsur-Unsur Utama
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <RumusCard label="Gradien (m)" rumus="m = Δy / Δx" />
                  <RumusCard label="Titik Potong Sumbu Y" rumus="(0, c)" />
                  <RumusCard label="Titik Potong Sumbu X" rumus="(-c/m, 0)" />
                  <RumusCard label="Hubungan Titik (x, y)" rumus="y = mx + c" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-24">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                  <div className="bg-indigo-600 p-2 rounded-lg text-white">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Kalkulator {topic.name}</h2>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 mb-6 text-center border border-slate-100 font-mono text-base sm:text-lg font-bold text-slate-800">
                  y = <span className="text-indigo-600">{inputM || 'm'}</span>({inputX !== '' ? inputX : 'x'}) +{' '}
                  <span className="text-indigo-600">{inputConstC || 'c'}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <InputField label="Gradien (m)" value={inputM} onChange={setInputM} placeholder="Contoh: 2" />
                  <InputField label="Titik x yang diuji" value={inputX} onChange={setInputX} placeholder="Contoh: 3" />
                  <InputField label="Konstanta (c / intersep Y)" value={inputConstC} onChange={setInputConstC} placeholder="Contoh: 1" />
                </div>

                {errorGarisLurus && (
                  <div className="bg-red-50 text-red-600 text-sm font-medium p-3 rounded-xl mb-4 border border-red-200">
                    ⚠️ {errorGarisLurus}
                  </div>
                )}

                <button
                  onClick={handleCalculateGarisLurus}
                  className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-[0.98]"
                >
                  Hitung & Visualisasikan
                </button>
              </div>
            </div>
          </div>

          {resultGarisLurus && (
            <div className="space-y-10">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Visualisasi Garis Lurus Interaktif</h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Grafik memplot garis linear, titik koordinat yang dihitung, dan titik potong sumbu.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span> Titik (x, y)</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Potong Y</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Potong X</span>
                  </div>
                </div>

                <div className="w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-900/5">
                  <GrafikGarisLurus
                    m={parseFloat(inputM)}
                    x={parseFloat(inputX)}
                    c={parseFloat(inputConstC)}
                    result={resultGarisLurus}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <HasilCard label="Persamaan Garis" value={resultGarisLurus.persamaanStr} />
                <HasilCard label={`Nilai y pada x=${inputX}`} value={resultGarisLurus.y.toString()} />
                <HasilCard label="Potong Sumbu Y" value={`(0, ${resultGarisLurus.titikPotongY.y})`} />
                <HasilCard 
                  label="Potong Sumbu X" 
                  value={resultGarisLurus.titikPotongX ? `(${fmt(resultGarisLurus.titikPotongX.x)}, 0)` : 'Tidak ada'} 
                />
              </div>

              <div className="bg-white rounded-3xl p-8 border border-emerald-200/60 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                <h3 className="text-lg font-bold text-emerald-900 mb-5 flex items-center gap-2">
                  <Play className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                  Langkah Penyelesaian
                </h3>
                <div className="space-y-3">
                  {resultGarisLurus.penyelesaian.map((langkah, index) => (
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

      {/* ========================================================
          3. MATERI: SPLDV (SISTEM PERSAMAAN LINEAR DUA VARIABEL)
          ======================================================== */}
      {topic.id === 'spldv' && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
            {/* Kolom Kiri: Penjelasan Materi */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  Konsep Dasar SPLDV
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {topic.description} Solusi titik potong (x, y) diperoleh menggunakan metode determinan (Aturan Cramer) yang akurat.
                </p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 font-mono text-sm font-bold text-indigo-700">
                  <div>(1) &nbsp; a₁x + b₁y = c₁</div>
                  <div>(2) &nbsp; a₂x + b₂y = c₂</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border border-indigo-100">
                <h3 className="text-lg font-bold text-indigo-900 mb-5 flex items-center gap-2">
                  <Info className="w-5 h-5 text-indigo-600" />
                  Rumus Aturan Cramer (Determinan)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <RumusCard label="Determinan Utama (D)" rumus="D = a₁b₂ - b₁a₂" />
                  <RumusCard label="Determinan X (Dx)" rumus="Dx = c₁b₂ - b₁c₂" />
                  <RumusCard label="Determinan Y (Dy)" rumus="Dy = a₁c₂ - c₁a₂" />
                  <RumusCard label="Solusi (x, y)" rumus="x = Dx/D,  y = Dy/D" />
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Form Kalkulator Dua Persamaan */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-24">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                  <div className="bg-indigo-600 p-2 rounded-lg text-white">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Kalkulator SPLDV</h2>
                </div>

                {/* Box Persamaan 1 */}
                <div className="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100/70 mb-4">
                  <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-2">Persamaan 1</div>
                  <div className="font-mono text-sm font-semibold text-slate-700 mb-3">
                    <span className="text-indigo-600">{inputA1 || 'a₁'}</span>x + <span className="text-indigo-600">{inputB1 || 'b₁'}</span>y = <span className="text-indigo-600">{inputC1 || 'c₁'}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <InputField label="a₁" value={inputA1} onChange={setInputA1} placeholder="Contoh: 2" />
                    <InputField label="b₁" value={inputB1} onChange={setInputB1} placeholder="Contoh: 1" />
                    <InputField label="c₁" value={inputC1} onChange={setInputC1} placeholder="Contoh: 5" />
                  </div>
                </div>

                {/* Box Persamaan 2 */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 mb-6">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Persamaan 2</div>
                  <div className="font-mono text-sm font-semibold text-slate-700 mb-3">
                    <span className="text-indigo-600">{inputA2 || 'a₂'}</span>x + <span className="text-indigo-600">{inputB2 || 'b₂'}</span>y = <span className="text-indigo-600">{inputC2 || 'c₂'}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <InputField label="a₂" value={inputA2} onChange={setInputA2} placeholder="Contoh: 1" />
                    <InputField label="b₂" value={inputB2} onChange={setInputB2} placeholder="Contoh: -1" />
                    <InputField label="c₂" value={inputC2} onChange={setInputC2} placeholder="Contoh: 1" />
                  </div>
                </div>

                {errorSpldv && (
                  <div className="bg-red-50 text-red-600 text-sm font-medium p-3 rounded-xl mb-4 border border-red-200">
                    ⚠️ {errorSpldv}
                  </div>
                )}

                <button
                  onClick={handleCalculateSpldv}
                  className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-[0.98]"
                >
                  Hitung & Visualisasikan
                </button>
              </div>
            </div>
          </div>

          {resultSpldv && (
            <div className="space-y-10">
              {/* Kanvas Grafik Mafs Dua Garis */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Visualisasi Dua Garis Tabrakan</h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Kedua garis digambar di koordinat kartesius. Titik temu keduanya adalah solusi nilai (x, y).
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span> Garis 1</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Garis 2</span>
                    {resultSpldv.x !== null && resultSpldv.y !== null && (
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Titik Potong (x, y)</span>
                    )}
                  </div>
                </div>

                <div className="w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-900/5">
                  <GrafikSPLDV
                    a1={parseFloat(inputA1)}
                    b1={parseFloat(inputB1)}
                    c1={parseFloat(inputC1)}
                    a2={parseFloat(inputA2)}
                    b2={parseFloat(inputB2)}
                    c2={parseFloat(inputC2)}
                    result={resultSpldv}
                  />
                </div>
              </div>

              {/* 4 Cards Ringkasan */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <HasilCard 
                  label="Nilai x" 
                  value={resultSpldv.x !== null ? fmt(resultSpldv.x) : 'Tidak ada'} 
                />
                <HasilCard 
                  label="Nilai y" 
                  value={resultSpldv.y !== null ? fmt(resultSpldv.y) : 'Tidak ada'} 
                />
                <HasilCard 
                  label="Determinan Utama (D)" 
                  value={resultSpldv.determinanutama.toString()} 
                />
                <HasilCard 
                  label="Status Solusi" 
                  value={resultSpldv.error ? 'Sejajar/Berimpit' : 'Solusi Tunggal'} 
                />
              </div>

              {/* Langkah Penyelesaian */}
              <div className="bg-white rounded-3xl p-8 border border-emerald-200/60 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                <h3 className="text-lg font-bold text-emerald-900 mb-5 flex items-center gap-2">
                  <Play className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                  Langkah Penyelesaian (Metode Determinan)
                </h3>
                <div className="space-y-3">
                  {resultSpldv.penyelesaian.map((langkah, index) => (
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
// KOMPONEN GRAFIK: PARABOLA
// ========================================================
const GrafikParabola: React.FC<{
  a: number;
  b: number;
  c: number;
  result: HasilKuadrat;
}> = ({ a, b, c, result }) => {
  const xCenter = result.titikpuncak.x;
  const yCenter = result.titikpuncak.y;
  const range = Math.max(8, Math.abs(xCenter) + 6, Math.abs(yCenter) + 6);

  return (
    <Mafs
      width="auto"
      height={600}
      viewBox={{
        x: [xCenter - range, xCenter + range],
        y: [yCenter - range, yCenter + range],
      }}
      zoom
    >
      <Coordinates.Cartesian />

      <Plot.OfX
        y={(x) => a * Math.pow(x, 2) + b * x + c}
        color="#6366f1"
        weight={3}
      />

      <Point x={result.titikpuncak.x} y={result.titikpuncak.y} color="#ef4444" />
      <Text
        x={result.titikpuncak.x}
        y={result.titikpuncak.y + (a > 0 ? -1 : 1)}
        size={13}
        color="#ef4444"
      >
        Puncak ({fmt(result.titikpuncak.x)}, {fmt(result.titikpuncak.y)})
      </Text>

      {typeof result.TitikPotongSumbuX.x1 === 'number' && (
        <>
          <Point x={result.TitikPotongSumbuX.x1} y={0} color="#10b981" />
          <Text x={result.TitikPotongSumbuX.x1} y={0.8} size={13} color="#10b981">
            x₁ = {fmt(result.TitikPotongSumbuX.x1)}
          </Text>
        </>
      )}

      {typeof result.TitikPotongSumbuX.x2 === 'number' &&
        result.TitikPotongSumbuX.x2 !== result.TitikPotongSumbuX.x1 && (
        <>
          <Point x={result.TitikPotongSumbuX.x2} y={0} color="#10b981" />
          <Text x={result.TitikPotongSumbuX.x2} y={0.8} size={13} color="#10b981">
            x₂ = {fmt(result.TitikPotongSumbuX.x2)}
          </Text>
        </>
      )}

      <Point x={0} y={c} color="#3b82f6" />
      <Text x={0.8} y={c} size={13} color="#3b82f6">
        (0, {c})
      </Text>
    </Mafs>
  );
};

// ========================================================
// KOMPONEN GRAFIK: GARIS LURUS
// ========================================================
const GrafikGarisLurus: React.FC<{
  m: number;
  x: number;
  c: number;
  result: HasilGarisLurus;
}> = ({ m, x, c, result }) => {
  const y = result.y;
  const xCenter = x;
  const yCenter = y;
  const range = Math.max(8, Math.abs(xCenter) + 6, Math.abs(yCenter) + 6, Math.abs(c) + 6);

  return (
    <Mafs
      width="auto"
      height={600}
      viewBox={{
        x: [xCenter - range, xCenter + range],
        y: [yCenter - range, yCenter + range],
      }}
      zoom
    >
      <Coordinates.Cartesian />

      <Plot.OfX
        y={(val) => m * val + c}
        color="#6366f1"
        weight={3}
      />

      <Point x={x} y={y} color="#4f46e5" />
      <Text x={x} y={y + 0.8} size={13} color="#4f46e5">
        ({fmt(x)}, {fmt(y)})
      </Text>

      <Point x={0} y={c} color="#3b82f6" />
      <Text x={0.8} y={c} size={13} color="#3b82f6">
        Potong Y (0, {c})
      </Text>

      {result.titikPotongX && (
        <>
          <Point x={result.titikPotongX.x} y={0} color="#10b981" />
          <Text x={result.titikPotongX.x} y={-0.8} size={13} color="#10b981">
            Potong X ({fmt(result.titikPotongX.x)}, 0)
          </Text>
        </>
      )}
    </Mafs>
  );
};

// ========================================================
// KOMPONEN GRAFIK: SPLDV (DUA GARIS TABRAKAN)
// ========================================================
const GrafikSPLDV: React.FC<{
  a1: number;
  b1: number;
  c1: number;
  a2: number;
  b2: number;
  c2: number;
  result: HasilSpldv;
}> = ({ a1, b1, c1, a2, b2, c2, result }) => {
  const xCenter = result.x !== null ? result.x : 0;
  const yCenter = result.y !== null ? result.y : 0;
  const range = Math.max(8, Math.abs(xCenter) + 6, Math.abs(yCenter) + 6);

  return (
    <Mafs
      width="auto"
      height={600}
      viewBox={{
        x: [xCenter - range, xCenter + range],
        y: [yCenter - range, yCenter + range],
      }}
      zoom
    >
      <Coordinates.Cartesian />

      {/* Garis 1 (Indigo): a1*x + b1*y = c1 => y = (c1 - a1*x) / b1 */}
      {b1 !== 0 ? (
        <Plot.OfX
          y={(x) => (c1 - a1 * x) / b1}
          color="#4f46e5"
          weight={3}
        />
      ) : (
        <Line.Segment
          point1={[c1 / a1, -100]}
          point2={[c1 / a1, 100]}
          color="#4f46e5"
          weight={3}
        />
      )}

      {/* Garis 2 (Rose): a2*x + b2*y = c2 => y = (c2 - a2*x) / b2 */}
      {b2 !== 0 ? (
        <Plot.OfX
          y={(x) => (c2 - a2 * x) / b2}
          color="#f43f5e"
          weight={3}
        />
      ) : (
        <Line.Segment
          point1={[c2 / a2, -100]}
          point2={[c2 / a2, 100]}
          color="#f43f5e"
          weight={3}
        />
      )}

      {/* Titik Potong / Solusi Tunggal (Emerald Green) */}
      {result.x !== null && result.y !== null && (
        <>
          <Point x={result.x} y={result.y} color="#10b981" />
          <Text
            x={result.x}
            y={result.y + 0.8}
            size={13}
            color="#10b981"
          >
            Titik Potong ({fmt(result.x)}, {fmt(result.y)})
          </Text>
        </>
      )}
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
      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-mono"
    />
  </div>
);

// Helper Rumus Card
const RumusCard: React.FC<{ label: string; rumus: string }> = ({ label, rumus }) => (
  <div className="bg-white/80 p-5 rounded-2xl border border-white backdrop-blur-sm shadow-sm">
    <span className="block text-sm text-indigo-600 font-semibold mb-1">{label}</span>
    <code className="text-base font-bold text-slate-900 font-mono">{rumus}</code>
  </div>
);

// Helper Hasil Card
const HasilCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center">
    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{label}</div>
    <div className="text-base sm:text-lg font-bold text-slate-900 font-mono break-words">{value}</div>
  </div>
);

// Helper format angka
const fmt = (num: number): string =>
  Number.isInteger(num) ? num.toString() : num.toFixed(2);

export default AljabarPageDetail;
