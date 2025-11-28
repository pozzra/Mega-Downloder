import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#0d1117] to-[#161b22]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#161b22] border border-gray-700 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
            {/* Ribbon */}
            <div className="absolute top-0 right-0 bg-accentYellow text-black font-bold text-xs uppercase px-8 py-2 rotate-45 translate-x-8 translate-y-6 shadow-md">
              Best Seller
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  តម្លៃតែមួយ ប្រើមួយជីវិត
                </h2>
                <p className="text-secondary mb-6">
                  ឈប់ចំណាយលុយប្រចាំខែ! ទិញ MEGA DOWNLOADER v10.5 ម្ដងប្រើបានរហូត។
                </p>
                <div className="flex items-end justify-center md:justify-start gap-2 mb-2">
                    <span className="text-5xl font-bold text-primary">$15</span>
                    <span className="text-gray-500 line-through text-xl mb-2">$25.00</span>
                </div>
                <p className="text-sm text-gray-400 mb-8">ឬប្រហែល 60,000 រៀល</p>
                
                <a 
                  href="https://t.me/kun_amra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primaryDark text-background hover:text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-primary/50 text-lg"
                >
                  <Zap size={20} fill="currentColor" />
                  ទិញតាម Telegram 
                </a>
              </div>

              <div className="flex-1 w-full bg-[#0d1117] p-6 rounded-2xl border border-gray-800">
                <h3 className="text-white font-bold mb-6 border-b border-gray-800 pb-2">អ្វីដែលអ្នកនឹងទទួលបាន:</h3>
                <ul className="space-y-4">
                  {[
                    "កម្មវិធីពេញ Lifetime គ្មានដែនកំណត់",
                    "ជំនួយការដំឡើងតាម TeamViewer",
                    "ចូលក្នុង Group Update ឥតគិតថ្លៃ",
                    "អាចប្ដូរម៉ាស៊ីនបាន (Reset Key)",
                    "គាំទ្រពេញមួយជីវិត (Support)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-secondary">
                      <CheckCircle2 className="text-primary min-w-[20px]" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};