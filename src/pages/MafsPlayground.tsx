import React, { useState } from 'react';
import { Mafs, Coordinates, Plot, Point, Line, Text } from 'mafs';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MafsPlayground: React.FC = () => {
  // Pilihan level belajar dasar
  const [level, setLevel] = useState<1 | 2 | 3 | 4 | 5>(5);

  return (
    <div className="py-6 px-4 w-full">
      <Link
        to="/"
        className="inline-flex items-center text-slate-500 hover:text-indigo-600 font-medium mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Kembali ke Beranda
      </Link>

      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Belajar Dasar Mafs (Step-by-Step)</h1>
      <p className="text-slate-600 mb-6 text-sm">
        Pilih level di bawah untuk memahami komponen Mafs satu per satu dari yang paling simpel:
      </p>

      {/* Navigasi Level */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
        <button
          onClick={() => setLevel(1)}
          className={`p-3 rounded-2xl text-left border transition-all ${
            level === 1 ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <div className="text-xs opacity-75 font-mono">Langkah 1</div>
          <div className="font-bold text-sm">Kanvas & Grid</div>
        </button>

        <button
          onClick={() => setLevel(2)}
          className={`p-3 rounded-2xl text-left border transition-all ${
            level === 2 ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <div className="text-xs opacity-75 font-mono">Langkah 2</div>
          <div className="font-bold text-sm">Titik (Point)</div>
        </button>

        <button
          onClick={() => setLevel(3)}
          className={`p-3 rounded-2xl text-left border transition-all ${
            level === 3 ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <div className="text-xs opacity-75 font-mono">Langkah 3</div>
          <div className="font-bold text-sm">Garis Lurus</div>
        </button>

        <button
          onClick={() => setLevel(4)}
          className={`p-3 rounded-2xl text-left border transition-all ${
            level === 4 ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <div className="text-xs opacity-75 font-mono">Langkah 4</div>
          <div className="font-bold text-sm">Fungsi Linear</div>
        </button>

        <button
          onClick={() => setLevel(5)}
          className={`p-3 rounded-2xl text-left border transition-all ${
            level === 5 ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <div className="text-xs opacity-75 font-mono">Langkah 5</div>
          <div className="font-bold text-sm">Parabola 🚀</div>
        </button>
      </div>

      {/* Area Kanvas & Penjelasan Kode */}
      <div className="space-y-6">
        {/* Kanvas Preview */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-900/5">
            <Mafs width="auto" zoom={{ min: 0.2, max: 5 }} height={650} viewBox={{ x: [-10, 10], y: [-10, 10] }}>
              {/* Sumbu X dan Y wajib ada di semua level */}
              <Coordinates.Cartesian />

              {/* LEVEL 1: Hanya Grid Kosong */}
              {level === 1 && null}

              {/* LEVEL 2: Menaruh Titik Koordinat */}
              {level === 2 && (
                <>
                  <Point x={2} y={3} color="#4f46e5" />
                  <Text x={2} y={3.4} size={14} color="#4f46e5">A (2, 3)</Text>

                  <Point x={-3} y={-2} color="#ef4444" />
                  <Text x={-3} y={-1.6} size={14} color="#ef4444">B (-3, -2)</Text>
                </>
              )}

              {/* LEVEL 3: Menghubungkan Garis */}
              {level === 3 && (
                <>
                  <Line.Segment point1={[-3, -2]} point2={[3, 2]} color="#059669" weight={3} />
                  <Point x={-3} y={-2} color="#059669" />
                  <Point x={3} y={2} color="#059669" />
                </>
              )}

              {/* LEVEL 4: Menggambar Fungsi y = 2x - 1 */}
              {level === 4 && (
                <>
                  <Plot.OfX y={(x) => 2 * x - 1} color="#4f46e5" weight={3} />
                  <Text x={1} y={2} size={14} color="#4f46e5">y = 2x - 1</Text>
                </>
              )}

              {/* LEVEL 5: Menggambar Parabola y = x^2 - 4 */}
              {level === 5 && (
                <>
                  {/* Kurva Parabola */}
                  <Plot.OfX y={(x) => Math.pow(x, 2) - 4} color="#6366f1" weight={3} />

                  {/* Titik Puncak di (0, -4) */}
                  <Point x={0} y={-4} color="#ef4444" />
                  <Text x={0} y={-4.7} size={14} color="#ef4444">Puncak (0, -4)</Text>

                  {/* Akar-akar di mana kurva motong sumbu X: (-2, 0) dan (2, 0) */}
                  <Point x={-2} y={0} color="#10b981" />
                  <Text x={-2} y={0.8} size={14} color="#10b981">x₁ = -2</Text>

                  <Point x={2} y={0} color="#10b981" />
                  <Text x={2} y={0.8} size={14} color="#10b981">x₂ = 2</Text>
                </>
              )}
            </Mafs>
          </div>
        </div>

        {/* Kotak Kode & Penjelasan */}
        <div className="bg-slate-900 text-slate-100 p-6 rounded-3xl font-mono text-xs sm:text-sm">
          <div className="text-slate-400 font-sans font-semibold text-xs mb-3 uppercase tracking-wider">
            Potongan Kode Level {level}:
          </div>

          {level === 1 && (
            <pre className="text-indigo-300">
{`<Mafs height={520} viewBox={{ x: [-10, 10], y: [-7, 7] }}>
  {/* 1. Komponen pembungkus + Sumbu X dan Y otomatis */}
  <Coordinates.Cartesian />
</Mafs>`}
            </pre>
          )}

          {level === 2 && (
            <pre className="text-indigo-300">
{`<Mafs height={360}>
  <Coordinates.Cartesian />

  {/* Taruh titik A di koordinat (x: 2, y: 3) */}
  <Point x={2} y={3} color="#4f46e5" />

  {/* Taruh titik B di koordinat (x: -3, y: -2) */}
  <Point x={-3} y={-2} color="#ef4444" />
</Mafs>`}
            </pre>
          )}

          {level === 3 && (
            <pre className="text-indigo-300">
{`<Mafs height={360}>
  <Coordinates.Cartesian />

  {/* Tarik garis lurus dari titik [-3, -2] ke titik [3, 2] */}
  <Line.Segment point1={[-3, -2]} point2={[3, 2]} color="#059669" weight={3} />
</Mafs>`}
            </pre>
          )}

          {level === 4 && (
            <pre className="text-indigo-300">
{`<Mafs height={650}>
  <Coordinates.Cartesian />

  {/* Gambar kurva fungsi linear y = 2x - 1 secara otomatis */}
  <Plot.OfX y={(x) => 2 * x - 1} color="#4f46e5" weight={3} />
</Mafs>`}
            </pre>
          )}

          {level === 5 && (
            <pre className="text-indigo-300">
{`<Mafs height={650}>
  <Coordinates.Cartesian />

  {/* 1. Kurva Parabola Persamaan Kuadrat: y = x² - 4 */}
  <Plot.OfX y={(x) => Math.pow(x, 2) - 4} color="#6366f1" weight={3} />

  {/* 2. Titik Puncak di bawah (0, -4) */}
  <Point x={0} y={-4} color="#ef4444" />
  <Text x={0} y={-4.7}>Puncak (0, -4)</Text>

  {/* 3. Titik Akar-akar tempat kurva memotong sumbu X */}
  <Point x={-2} y={0} color="#10b981" />
  <Text x={-2} y={0.8}>x₁ = -2</Text>

  <Point x={2} y={0} color="#10b981" />
  <Text x={2} y={0.8}>x₂ = 2</Text>
</Mafs>`}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default MafsPlayground;
