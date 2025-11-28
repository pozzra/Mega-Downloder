import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  {
    question: "តើត្រូវមាន Key ទើបប្រើបានឬ?",
    answer: "បាទ/ចាស, កម្មវិធីតម្រូវឱ្យមាន License Key ដើម្បីដំណើរការ។ អ្នកអាចសាកល្បង Demo (សាក 3 ថ្ងៃ) មុននឹងសម្រេចចិត្តទិញ Key Lifetime។"
  },
  {
    question: "តើអាចទាញយកវីដេអូឯកជន (Private) បានឬទេ?",
    answer: "បាន 100%! កម្មវិធីមានមុខងារ Cookies Support ដែលអនុញ្ញាតឱ្យអ្នកទាញយកវីដេអូ Private ពី Facebook ឬ YouTube ដែលត្រូវការ Login ឬ Age-restricted។"
  },
  {
    question: "តើដំណើរការលើ Windows 7 បានឬទេ?",
    answer: "MEGA DOWNLOADER v10.5 ត្រូវបាន Optimize សម្រាប់ Windows 10 និង Windows 11 (64-bit) ដើម្បីទទួលបានល្បឿនអតិបរមា។ Windows 7 អាចនឹងមិនដំណើរការមុខងារមួយចំនួន។"
  },
  {
    question: "មាន Update ឥតគិតថ្លៃជារៀងរហូតឬ?",
    answer: "ពិតប្រាកដណាស់! នៅពេលអ្នកទិញ Key អ្នកនឹងត្រូវបានបញ្ចូលទៅក្នុង Telegram Channel ដើម្បីទទួលបាន Version ថ្មីៗដោយឥតគិតថ្លៃជារៀងរហូត។"
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#161b22]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center justify-center gap-3 mb-12">
          <HelpCircle className="text-primary" size={32} />
          <h2 className="text-3xl font-bold text-white">សំណួរដែលសួរញឹកញាប់</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#0d1117] border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-700"
            >
              <button
                className="w-full p-5 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-200">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-500 flex-shrink-0" />
                )}
              </button>
              <div 
                className={`px-5 text-secondary overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};