import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar';
import HeroSection from './component/heroSection';
import FeaturesSection from './component/FeaturesSection';
import CategoriesSection from './component/CategoriesSection';
import PopularFormulasSection from './component/PopularFormulasSection';
import CtaSection from './component/CtaSection';
import ShapePage from './shapePage/shapepage';
import ShapePageDetail from './shapePage/shapepagedetail';
import AljabarPage from './aljabarPage/aljabarpage';
import AljabarPageDetail from './aljabarPage/aljabarpagedetail';
import TurunanPage from './turunanPage/turunanpage';
import TurunanPageDetail from './turunanPage/turunanpagedetail';
import AboutPage from './pages/AboutPage';
import RumusPage from './pages/RumusPage';
import MafsPlayground from './pages/MafsPlayground';

// Komponen Beranda (Home)
const Home = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <CategoriesSection />
    <PopularFormulasSection />
    <CtaSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col overflow-x-hidden">
       

        {/* Wrapper Konten: md:pl-64 untuk memberi ruang pada sidebar di desktop */}
        <div className="md:pl-64 flex-1 flex flex-col">
          <main className="flex-1 pt-20 pb-24 md:pt-4 md:pb-12 px-4 sm:px-8 max-w-7xl mx-auto w-full">
            <Routes>
              {/* Route Utama */}
              <Route path="/" element={<Home />} />
              <Route path="/tentang" element={<AboutPage />} />
              <Route path="/rumus" element={<RumusPage />} />
              <Route path="/playground/mafs" element={<MafsPlayground />} />
              <Route path="/kategori" element={<div className="pt-8"><CategoriesSection /></div>} />
              
              {/* Route Sub-Kategori */}
              <Route path="/kategori/geometri" element={<ShapePage />} />
              <Route path="/kategori/aljabar" element={<AljabarPage />} />
              <Route path="/kategori/kalkulus" element={<TurunanPage />} />
              <Route path="/kategori/turunan" element={<TurunanPage />} />

              {/* Route Detail Kalkulator */}
              <Route path="/shape/:shapeId" element={<ShapePageDetail />} />
              <Route path="/aljabar/:aljabarId" element={<AljabarPageDetail />} />
              <Route path="/turunan/:turunanId" element={<TurunanPageDetail />} />

              {/* Fallback 404 Route */}
              <Route path="*" element={
                <div className="py-20 text-center">
                  <h2 className="text-2xl font-bold text-slate-800">404 - Halaman Tidak Ditemukan</h2>
                  <p className="text-slate-500 mt-2">Halaman yang kamu cari belum dibuat atau urlnya salah.</p>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
