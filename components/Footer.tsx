import React from 'react';
import { Send, Download } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0d1117] border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">MEGA DOWNLOADER</h3>
            <p className="text-gray-500">v10.5 © 2025. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <a 
              href="https://mega.nz/file/2lZU3KIR#JBlwheeb7G_BYsI5KOKUNrzWhU458RkTxJgbwcw9QAk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2 border border-gray-700 cursor-pointer"
            >
              <Download size={18} />
              ទាញយក Demo (Free 3 ថ្ងៃ)
            </a>
            {/* <a 
              href="https://t.me/kun_amra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              <Send size={18} />
              Chat តាម Telegram
            </a> */}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-600">
          <p>Designed with ❤️ for Cambodian Users.</p>
        </div>
      </div>
    </footer>
  );
};