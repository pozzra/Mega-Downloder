import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ArrowUp, MessageCircle } from 'lucide-react';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="font-khmer min-h-screen bg-[#0d1117] text-[#c9d1d9] selection:bg-primary selection:text-background relative">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[100]">
        
        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className={`p-3 bg-gray-800 hover:bg-gray-700 text-primary border border-gray-700 rounded-full shadow-lg transition-all duration-300 transform ${
            showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
          }`}
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>

        {/* Telegram Chat Widget */}
        <a 
          href="https://t.me/kun_amra"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center p-4 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-full shadow-[0_0_20px_rgba(0,136,204,0.5)] hover:shadow-[0_0_30px_rgba(0,136,204,0.7)] transition-all duration-300 transform hover:scale-110"
          aria-label="Chat on Telegram"
        >
          <MessageCircle size={28} fill="currentColor" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-white text-[#0088cc] px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            Chat ជាមួយយើង!
          </span>
          
          {/* Ping Animation */}
          <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;