import { BookOpen, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white tracking-tight">Teach Skills</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of Salesforce professionals with real-world skills and expert guidance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Course</h4>
            <ul className="space-y-3">
              <li><a href="#curriculum" className="text-slate-400 hover:text-white text-sm transition-colors">Curriculum</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-white text-sm transition-colors">Features</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-white text-sm transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-white text-sm transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Free Admin Guide</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Salesforce Glossary</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Community Forum</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Teach Skills. All rights reserved. Not affiliated with Salesforce.com, Inc.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-slate-400 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
