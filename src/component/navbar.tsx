import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, Home, BookOpen, LayoutGrid, Info } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect untuk top bar mobile
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/', icon: Home },
    { name: 'Rumus', path: '/rumus', icon: BookOpen }, // belum dibikin halamannya
    { name: 'Kategori', path: '/kategori', icon: LayoutGrid },
    { name: 'Tentang', path: '/tentang', icon: Info },
  ];

  return (
    <>
      {/* =========================================
          MOBILE NAVIGATION (Top Bar & Bottom Bar)
          ========================================= */}
      
      {/* 1. Mobile Top Bar (Logo & Mini CTA) */}
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <div className="bg-indigo-600 text-white p-1.5 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Math<span className="text-indigo-600">KNA</span>
              </span>
            </Link>
            <button className="bg-indigo-50 text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-1.5 rounded-full font-medium text-sm transition-all active:scale-95">
              Mulai
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 z-50 pb-[env(safe-area-inset-bottom)]">
        <div className="flex justify-around items-center h-16 px-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            // logic active tab sederhana
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                  isActive ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <div className={`p-1 rounded-full transition-all duration-300 ${isActive ? 'bg-indigo-50 scale-110' : ''}`}>
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`text-[10px] transition-all duration-300 ${isActive ? 'font-semibold' : 'font-medium'}`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* =========================================
          DESKTOP SIDEBAR
          ========================================= */}
      <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 z-50 shadow-sm">
        
        {/* Logo Area */}
        <Link to="/" className="h-20 flex items-center px-6 border-b border-gray-100 cursor-pointer shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-2 rounded-xl flex items-center justify-center">
              <Calculator className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-900">
              Math<span className="text-indigo-600">KNA</span>
            </span>
          </div>
        </Link>

        {/* Navigation Links Area */}
        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">Menu Utama</div>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-700 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <Icon 
                  className={`w-5 h-5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} 
                  strokeWidth={isActive ? 2.5 : 2} 
                />
                <span>{link.name === 'Rumus' ? 'Jelajahi Rumus' : link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Lab / Playground Shortcut */}
        <div className="p-4 border-t border-gray-100">
          <Link
            to="/playground/mafs"
            className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-indigo-50 border border-slate-200/60 hover:border-indigo-200 transition-all group"
          >
            <div>
              <div className="text-xs font-bold text-slate-800 group-hover:text-indigo-600">Mafs Sandbox</div>
              <div className="text-[10px] text-slate-400">Lab eksperimen grafik</div>
            </div>
            <span className="text-xs font-mono bg-white px-2 py-0.5 rounded-lg border border-slate-200 text-slate-500 group-hover:text-indigo-600">
              Lab
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;