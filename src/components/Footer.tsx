import { BookOpen, Github, Mountain } from 'lucide-react';

interface FooterProps {
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

export default function Footer({ currentPage, setCurrentPage }: FooterProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (setCurrentPage && currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToFundamentals = () => {
    if (setCurrentPage) {
      setCurrentPage('fundamentals');
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="dark:bg-slate-950 bg-white border-t dark:border-slate-900 border-blue-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold dark:text-white text-slate-900 tracking-tight">Teach Skills</span>
            </div>
            <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-6">
              Empowering the next generation of IT professionals with real-world skills and expert guidance.
            </p>
            <div className="flex gap-4">
              <a href="https://trailhead.salesforce.com/" target="_blank" rel="noopener noreferrer" className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 transition-colors">
                <Mountain className="w-5 h-5" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="dark:text-white text-slate-900 font-semibold mb-4">Course</h4>
            <ul className="space-y-3">
              <li><a href="#salesforce" onClick={(e) => handleNav(e, '#salesforce')} className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 text-sm transition-colors">Salesforce</a></li>
              <li><a href="#features" onClick={(e) => handleNav(e, '#features')} className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 text-sm transition-colors">Features</a></li>
              <li><a href="#curriculum" onClick={(e) => handleNav(e, '#curriculum')} className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 text-sm transition-colors">Curriculum</a></li>
              <li><a href="#about" onClick={(e) => handleNav(e, '#about')} className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 text-sm transition-colors">About</a></li>
              <li><a href="#faq" onClick={(e) => handleNav(e, '#faq')} className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 text-sm transition-colors">FAQ</a></li>
              <li><button onClick={goToFundamentals} className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 text-sm transition-colors">Fundamentals</button></li>
            </ul>
          </div>

          <div>
            <h4 className="dark:text-white text-slate-900 font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="https://help.salesforce.com/s/articleView?id=sf.glossary.htm&type=5" target="_blank" rel="noopener noreferrer" className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 text-sm transition-colors">Salesforce Glossary</a></li>
              <li><a href="https://help.salesforce.com/s/products" target="_blank" rel="noopener noreferrer" className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 text-sm transition-colors">Salesforce Help</a></li>
              <li><a href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dev_guide.htm" target="_blank" rel="noopener noreferrer" className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 text-sm transition-colors">Apex Developer Guide</a></li>
              <li><a href="https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_ref_guide.htm" target="_blank" rel="noopener noreferrer" className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 text-sm transition-colors">Apex Reference Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="dark:text-white text-slate-900 font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t dark:border-slate-800 border-blue-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Teach Skills. All rights reserved. Not affiliated with Salesforce.com, Inc.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="dark:text-slate-400 text-slate-600 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
