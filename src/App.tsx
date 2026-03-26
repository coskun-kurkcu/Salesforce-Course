/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Salesforce from './components/Salesforce';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Fundamentals from './pages/Fundamentals';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen dark:bg-slate-950 bg-white dark:text-slate-50 text-slate-900 font-sans selection:bg-blue-500/30">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Salesforce setCurrentPage={setCurrentPage} />
            <Features />
            <Curriculum />
            <About />
            <FAQ />
            <Contact />
          </>
        ) : currentPage === 'fundamentals' ? (
          <Fundamentals />
        ) : null}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
