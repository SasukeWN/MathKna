import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Square,
  Triangle,
  Circle,
  RectangleHorizontal,
  Calculator,
  Play
} from 'lucide-react';
import { shapes } from '../data/shape';

import { hitungLuasPersegi, hitungKelilingPersegi } from '../logic/shape/persegi';
import { hitungLuasPersegiPanjang, hitungKelilingPersegiPanjang } from '../logic/shape/persegi_panjang';
import { hitungLuasSegitiga, hitungKelilingSegitiga } from '../logic/shape/segitiga';
import { hitungLuasLingkaran, hitungKelilingLingkaran } from '../logic/shape/lingkaran';


const iconMap: Record<string, React.ElementType> = {
  Square: Square,
  Triangle: Triangle,
  Circle: Circle,
  RectangleHorizontal: RectangleHorizontal,
};

const ShapePageDetail: React.FC = () => {
  // Ambil shapeId langsung dari URL (e.g. /shape/persegi -> dapet 'persegi')
  const { shapeId } = useParams<{ shapeId: string }>();
  const navigate = useNavigate(); // Buat fungsi tombol back

  const shape = shapes.find((s) => s.id === shapeId);

  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{
    luas: { hasil: number, penyelesaian: string } | null;
    keliling: { hasil: number, penyelesaian: string } | null
  } | null>(null);

  if (!shape) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Bangun datar tidak ditemukan</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-indigo-600 hover:underline">Kembali</button>
      </div>
    );
  }

  const Icon = iconMap[shape.iconName] || Square;

  const handleCalculate = () => {
    let luas: { hasil: number, penyelesaian: string } | null = null;
    let keliling: { hasil: number, penyelesaian: string } | null = null;

    if (shape.id === 'persegi') {
      const s = parseFloat(inputs['sisi']);
      if (!isNaN(s)) {
        luas = hitungLuasPersegi(s);
        keliling = hitungKelilingPersegi(s);
      }
    } else if (shape.id === 'persegi-panjang') {
      const p = parseFloat(inputs['panjang']);
      const l = parseFloat(inputs['lebar']);
      if (!isNaN(p) && !isNaN(l)) {
        luas = hitungLuasPersegiPanjang(p, l);
        keliling = hitungKelilingPersegiPanjang(p, l);
      }

    } else if (shape.id === 'segitiga') {
      const a = parseFloat(inputs['alas']);
      const t = parseFloat(inputs['tinggi']);
      const s1 = parseFloat(inputs['sisi1']);
      const s2 = parseFloat(inputs['sisi2']);
      const s3 = parseFloat(inputs['sisi3']);

      if (!isNaN(a) && !isNaN(t)) {
        luas = hitungLuasSegitiga(a, t);
      }
      if (!isNaN(s1) && !isNaN(s2) && !isNaN(s3)) {
        keliling = hitungKelilingSegitiga(s1, s2, s3);
      }
    } else if (shape.id === 'lingkaran') {
      const r = parseFloat(inputs['jari']);
      if (!isNaN(r)) {
        luas = hitungLuasLingkaran(r);
        keliling = hitungKelilingLingkaran(r);
      }
    }

    setResult({ luas, keliling });
  };

  const handleInputChange = (key: string, value: string) => {
    setInputs(prev => ({ ...prev, [key]: value }));
    setResult(null);
  };


  const renderInputs = () => {
    if (shape.id === 'persegi') {
      return (
        <InputField label="Sisi (s)" value={inputs['sisi'] || ''} onChange={(v) => handleInputChange('sisi', v)} placeholder="Masukkan nilai sisi..." />
      );
    }
    if (shape.id === 'persegi-panjang') {
      return (
        <>
          <InputField label="Panjang (p)" value={inputs['panjang'] || ''} onChange={(v) => handleInputChange('panjang', v)} placeholder="Masukkan nilai panjang..." />
          <InputField label="Lebar (l)" value={inputs['lebar'] || ''} onChange={(v) => handleInputChange('lebar', v)} placeholder="Masukkan nilai lebar..." />
        </>
      );
    }
    if (shape.id === 'segitiga') {
      return (
        <>
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Alas (a)" value={inputs['alas'] || ''} onChange={(v) => handleInputChange('alas', v)} placeholder="Alas" />
            <InputField label="Tinggi (t)" value={inputs['tinggi'] || ''} onChange={(v) => handleInputChange('tinggi', v)} placeholder="Tinggi" />
          </div>
          <p className="text-xs text-slate-500 mt-2 mb-1">Opsional untuk Keliling:</p>
          <div className="grid grid-cols-3 gap-2">
            <InputField label="Sisi 1" value={inputs['sisi1'] || ''} onChange={(v) => handleInputChange('sisi1', v)} placeholder="s1" />
            <InputField label="Sisi 2" value={inputs['sisi2'] || ''} onChange={(v) => handleInputChange('sisi2', v)} placeholder="s2" />
            <InputField label="Sisi 3" value={inputs['sisi3'] || ''} onChange={(v) => handleInputChange('sisi3', v)} placeholder="s3" />
          </div>
        </>
      );
    }
    if (shape.id === 'lingkaran') {
      return (
        <InputField label="Jari-jari (r)" value={inputs['jari'] || ''} onChange={(v) => handleInputChange('jari', v)} placeholder="Masukkan jari-jari..." />
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">

      {/* Back Button pake useNavigate */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-slate-500 hover:text-indigo-600 font-medium mb-8 transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Kembali ke Katalog
      </button>

      {/* Header Info */}
      <div className="flex items-center gap-5 mb-10">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm">
          <Icon className="w-8 h-8" strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">{shape.name}</h1>
          <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mt-2 inline-block">
            {shape.type}
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* Left Column: Info & Materi */}
        <div className="lg:col-span-7 space-y-8">

          <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Definisi</h3>
            <p className="text-slate-600 leading-relaxed">{shape.description}</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border border-indigo-100">
            <h3 className="text-lg font-bold text-indigo-900 mb-5">Rumus Tersedia</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/80 p-5 rounded-2xl border border-white backdrop-blur-sm shadow-sm">
                <span className="block text-sm text-indigo-600 font-semibold mb-1">Luas</span>
                <code className="text-xl font-bold text-slate-900">{shape.formulaLuas}</code>
              </div>
              <div className="bg-white/80 p-5 rounded-2xl border border-white backdrop-blur-sm shadow-sm">
                <span className="block text-sm text-indigo-600 font-semibold mb-1">Keliling</span>
                <code className="text-xl font-bold text-slate-900">{shape.formulaKeliling}</code>
              </div>
            </div>
          </div>

          {result && (
            <div className="bg-white rounded-3xl p-8 border border-emerald-200/60 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
              <h3 className="text-lg font-bold text-emerald-900 mb-5 flex items-center gap-2">
                <Play className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                Langkah Penyelesaian
              </h3>

              <div className="space-y-6">
                {result.luas !== null && (
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <div className="font-semibold text-slate-800 mb-2 border-b border-slate-200 pb-2">Mencari Luas</div>
                    <div className="text-slate-600 space-y-2 font-mono text-sm">
                      <p>{shape.formulaLuas}</p>
                      {shape.id === 'persegi' && (
                        <p>{result.luas.penyelesaian}</p>
                      )}
                      {shape.id === 'segitiga' && (
                        <p>{result.luas.penyelesaian}</p>
                      )}
                      {shape.id === 'persegi-panjang' && (
                        <p>{result.luas.penyelesaian}</p>
                      )}

                      {shape.id === 'lingkaran' && (
                        <p>{result.luas.penyelesaian}</p>
                      )}
                      <p className="font-bold text-indigo-600 mt-2 text-base">Hasil = {Number.isInteger(result.luas.hasil) ? result.luas.hasil : result.luas.hasil.toFixed(2)}</p>
                    </div>
                  </div>
                )}
                {result.keliling !== null && (
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <div className="font-semibold text-slate-800 mb-2 border-b border-slate-200 pb-2">Mencari Keliling</div>
                    <div className="text-slate-600 space-y-2 font-mono text-sm">
                      <p>{shape.formulaKeliling}</p>
                        {shape.id === 'persegi' && (
                        <p>{result.keliling.penyelesaian}</p>
                      )}
                      {shape.id === 'segitiga' && (
                        <p>{result.keliling.penyelesaian}</p>
                      )}
                      {shape.id === 'persegi-panjang' && (
                        <p>{result.keliling.penyelesaian}</p>
                      )}

                      {shape.id === 'lingkaran' && (
                        <p>{result.keliling.penyelesaian}</p>
                      )}
                      <p className="font-bold text-indigo-600 mt-2 text-base">Hasil = {Number.isInteger(result.keliling.hasil) ? result.keliling.hasil : result.keliling.hasil.toFixed(2)}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Calculator */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-24">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
              <div className="bg-indigo-600 p-2 rounded-lg text-white">
                <Calculator className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Kalkulator {shape.name}</h2>
            </div>

            <div className="space-y-4 mb-8">
              {renderInputs()}
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-[0.98]"
            >
              Hitung Sekarang
            </button>

            <p className="text-center text-xs text-slate-400 mt-4">
              Masukkan angka menggunakan titik untuk desimal.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

// Helper component buat form input
const InputField = ({ label, value, onChange, placeholder }: { label: string, value: string, onChange: (val: string) => void, placeholder: string }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
    />
  </div>
);

export default ShapePageDetail;