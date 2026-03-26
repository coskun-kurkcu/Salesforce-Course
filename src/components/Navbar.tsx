import { motion } from 'motion/react';
import { Menu, X, BookOpen, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const goToFundamentals = () => {
    setCurrentPage('fundamentals');
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const goToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('home');
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 w-full z-50 dark:bg-slate-950/80 bg-white/80 backdrop-blur-md border-b dark:border-slate-800 border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={goToHome}>
            <BookOpen className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold dark:text-white text-slate-900 tracking-tight">Teach Skills</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#salesforce" onClick={(e) => handleNav(e, '#salesforce')} className="text-sm font-medium dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 transition-colors">Salesforce</a>
            <a href="#features" onClick={(e) => handleNav(e, '#features')} className="text-sm font-medium dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 transition-colors">Features</a>
            <a href="#curriculum" onClick={(e) => handleNav(e, '#curriculum')} className="text-sm font-medium dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 transition-colors">Curriculum</a>
            <a href="#about" onClick={(e) => handleNav(e, '#about')} className="text-sm font-medium dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 transition-colors">About</a>
            <a href="#faq" onClick={(e) => handleNav(e, '#faq')} className="text-sm font-medium dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 transition-colors">FAQ</a>
            <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              Contact Now 
            </a>
            <button onClick={goToFundamentals} className={`text-sm font-medium transition-colors ${currentPage === 'fundamentals' ? 'text-blue-500 dark:text-blue-400' : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900'}`}>
              Fundamentals
            </button>
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2 rounded-full dark:bg-slate-800 bg-blue-100 dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2 rounded-full dark:bg-slate-800 bg-blue-100 dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden dark:bg-slate-900 bg-blue-50 border-b dark:border-slate-800 border-blue-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#salesforce" onClick={(e) => handleNav(e, '#salesforce')} className="block px-3 py-2 text-base font-medium dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-800 hover:bg-blue-100 rounded-md">Salesforce</a>
            <a href="#features" onClick={(e) => handleNav(e, '#features')} className="block px-3 py-2 text-base font-medium dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-800 hover:bg-blue-100 rounded-md">Features</a>
            <a href="#curriculum" onClick={(e) => handleNav(e, '#curriculum')} className="block px-3 py-2 text-base font-medium dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-800 hover:bg-blue-100 rounded-md">Curriculum</a>
            <a href="#about" onClick={(e) => handleNav(e, '#about')} className="block px-3 py-2 text-base font-medium dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-800 hover:bg-blue-100 rounded-md">About</a>
            <a href="#faq" onClick={(e) => handleNav(e, '#faq')} className="block px-3 py-2 text-base font-medium dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-800 hover:bg-blue-100 rounded-md">FAQ</a>
            <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="block text-center w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-md text-base font-medium transition-colors">
              Contact Now
            </a>
            <button onClick={goToFundamentals} className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md mt-2 ${currentPage === 'fundamentals' ? 'bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400' : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-800 hover:bg-blue-100'}`}>
              Fundamentals
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
