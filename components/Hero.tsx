import React, { useState, useEffect } from 'react';
import { ArrowRight, DownloadCloud, Zap, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

// Link ទៅកាន់រូបភាពនៅក្នុង Folder "public/Images"
// សូមប្រាកដថាអ្នកបានបង្កើត Folder "Images" ក្នុង "public" ហើយដាក់រូបភាពចូល
const screenshots = [
  {
    url: "https://github.com/pozzra/Mega-Downloder/blob/main/Images/slider1.png?raw=true", // ឈ្មោះ File: "img 1.png"
    alt: "Main Interface - Dark Mode"
  },
  {
    url: "https://github.com/pozzra/Mega-Downloder/blob/main/Images/slider2.png?raw=true",   // ឈ្មោះ File: "im2.png"
    alt: "High Speed Downloading"
  },
  {
    url: "https://raw.githubusercontent.com/pozzra/Mega-Downloder/refs/heads/main/Images/slider3.png",  // ឈ្មោះ File: "img3.png"
    alt: "Security Key System"
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (isHovering) return; // Pause on hover

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, [isHovering]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-primary text-sm font-medium mb-6 animate-fade-in-up">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Update ថ្មីបំផុតសម្រាប់ឆ្នាំ 2025
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up [animation-delay:200ms]">
          <span className="block text-white">MEGA DOWNLOADER</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#4affb0] to-primaryDark">
            v10.5
          </span>
        </h1>

        <p className="text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          Tools ទាញយកវីដេអូលឿនបំផុតនៅកម្ពុជា។ គាំទ្រ <span className="text-white font-semibold">YouTube, TikTok, Facebook, Instagram</span> និងគ្រប់ Link!
          ទាញយកកម្រិត 4K ច្បាស់ឥតខ្ចោះ។
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 animate-fade-in-up [animation-delay:600ms]">
          <a 
            href="https://t.me/kun_amra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primaryDark text-background hover:text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:shadow-[0_0_30px_rgba(0,255,136,0.6)] flex items-center justify-center gap-2"
          >
            ទិញ Key ឥឡូវនេះ
            <ArrowRight size={20} />
          </a>
          <a 
            href="https://mega.nz/file/K9JSCRQC#SzyAdqdZG5FxJXuEhvTLPfvDdPc1RFVqgTXNJiYdqS8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#161b22] border border-gray-700 hover:border-primary text-secondary hover:text-primary font-bold text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <DownloadCloud size={20} />
            ទាញយក (Free)
          </a>
        </div>

        {/* Stats / Mini Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20 text-left animate-fade-in-up [animation-delay:800ms]">
          <div className="bg-[#161b22]/80 backdrop-blur border border-gray-800 p-4 rounded-lg flex items-center gap-4">
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg">
              <DownloadCloud size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white">All in One</h3>
              <p className="text-sm text-gray-400">គាំទ្រ 1000+ វេបសាយ</p>
            </div>
          </div>
          <div className="bg-[#161b22]/80 backdrop-blur border border-gray-800 p-4 rounded-lg flex items-center gap-4">
            <div className="p-3 bg-yellow-500/20 text-yellow-400 rounded-lg">
              <Zap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white">ល្បឿនគុណនឹង 10</h3>
              <p className="text-sm text-gray-400">បច្ចេកវិទ្យា aria2c</p>
            </div>
          </div>
          <div className="bg-[#161b22]/80 backdrop-blur border border-gray-800 p-4 rounded-lg flex items-center gap-4">
            <div className="p-3 bg-primary/20 text-primary rounded-lg">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white">សុវត្ថិភាព 100%</h3>
              <p className="text-sm text-gray-400">គ្មានមេរោគ គ្មាន Error</p>
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative max-w-5xl mx-auto animate-fade-in-up [animation-delay:1000ms]">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-30"></div>
          
          <div 
            className="relative bg-[#0d1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden aspect-video group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
             {/* Slider Images */}
             {screenshots.map((slide, index) => (
               <div 
                 key={index}
                 className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                   index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                 }`}
               >
                 <img 
                    src={slide.url} 
                    alt={slide.alt} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image not found
                      e.currentTarget.src = `https://placehold.co/1200x675/0d1117/00ff88?text=Image+Not+Found:+${encodeURIComponent(slide.url)}`;
                    }}
                 />
                 {/* Optional Overlay Gradient for better integration */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/80 via-transparent to-transparent opacity-50"></div>
               </div>
             ))}

             {/* Slider Controls */}
             <button 
               onClick={(e) => { e.preventDefault(); prevSlide(); }}
               className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-primary hover:text-black text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0"
               aria-label="Previous Slide"
             >
               <ChevronLeft size={24} />
             </button>
             
             <button 
               onClick={(e) => { e.preventDefault(); nextSlide(); }}
               className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-primary hover:text-black text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0"
               aria-label="Next Slide"
             >
               <ChevronRight size={24} />
             </button>

             {/* Caption */}
             <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white font-bold text-lg md:text-xl transform transition-all duration-500 translate-y-0">
                  {screenshots[currentSlide].alt}
                </p>
             </div>

             {/* Dots Indicators */}
             <div className="absolute bottom-6 right-6 z-20 flex gap-2">
               {screenshots.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => goToSlide(index)}
                   className={`h-2 rounded-full transition-all duration-300 ${
                     index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-gray-500 hover:bg-gray-400'
                   }`}
                   aria-label={`Go to slide ${index + 1}`}
                 />
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
