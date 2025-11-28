import React from 'react';
import { 
  Youtube, ListVideo, Music, MonitorPlay, Cookie, ClipboardCopy, 
  Layers, Image, BarChart3, Zap, Square, Save, 
  Key, Infinity as InfinityIcon, Bell, Eye, RefreshCw, Bot, 
  FileCode, ShieldCheck, RotateCcw, Speaker, Moon, Monitor
} from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  { id: 1, icon: Youtube, title: "All Social Media", description: "YouTube, TikTok, FB, IG, Reels, Shorts" },
  { id: 2, icon: ListVideo, title: "Playlist & Channel", description: "ទាញយកម្ដងទាំងអស់ (Max 9999)" },
  { id: 3, icon: Music, title: "High Quality MP3", description: "សំឡេងច្បាស់ 192kbps/320kbps" },
  { id: 4, icon: MonitorPlay, title: "Video Quality", description: "1080p, 2K, 4K, 8K ច្បាស់បំផុត" },
  { id: 5, icon: Cookie, title: "Cookies Support", description: "ទាញយកវីដេអូ Private & Age-restricted" },
  { id: 6, icon: ClipboardCopy, title: "Auto Detect", description: "ចម្លង Link ដឹងភ្លាមដោយស្វ័យប្រវត្តិ" },
  { id: 7, icon: Layers, title: "Batch Download", description: "ដាក់ Link ច្រើនចូលគ្នាក្នុងពេលតែមួយ" },
  { id: 8, icon: Image, title: "Big Thumbnail", description: "បង្ហាញរូបភាពវីដេអូធំមុនទាញយក" },
  { id: 9, icon: BarChart3, title: "Live Progress", description: "មើលល្បឿន និង ETA ជាក់លាក់" },
  { id: 10, icon: Zap, title: "Turbo Speed", description: "ប្រើ aria2c លឿនជាងធម្មតា 10 ដង" },
  { id: 11, icon: Square, title: "Instant Stop", description: "ប៊ូតុងបញ្ឈប់ការទាញយកភ្លាមៗ" },
  { id: 12, icon: Save, title: "Auto Save", description: "ចងចាំការកំណត់ជារៀងរហូត" },
  { id: 13, icon: Key, title: "License System", description: "ការពារកម្មវិធីដោយសុវត្ថិភាព" },
  { id: 14, icon: InfinityIcon, title: "Lifetime Validity", description: "បង្ហាញថ្ងៃនៅសល់ / មួយជីវិត" },
  { id: 15, icon: Bell, title: "Expiration Alert", description: "ជូនដំណឹងពេល Key ជិតផុត" },
  { id: 16, icon: Eye, title: "Status Bar", description: "ចុចខាងស្តាំបង្ហាញ Key ងាយស្រួល" },
  { id: 17, icon: RefreshCw, title: "Auto Update", description: "ពិនិត្យ Update ដោយស្វ័យប្រវត្តិ" },
  { id: 18, icon: Bot, title: "Telegram Admin", description: "គ្រប់គ្រង Key តាមរយៈ Bot" },
  { id: 19, icon: FileCode, title: ".py & .exe", description: "ដំណើរការ 100% គ្រប់ទម្រង់" },
  { id: 20, icon: ShieldCheck, title: "Safe Restart", description: "គ្មាន base_library.zip error" },
  { id: 21, icon: RotateCcw, title: "App Reset", description: "Reset កម្មវិធីចាប់ផ្ដើមថ្មីបាន" },
  { id: 22, icon: Speaker, title: "Windows Sound", description: "សំឡេងរោទ៍ Windows ពិរោះ" },
  { id: 23, icon: Moon, title: "Dark UI", description: "Interface ពណ៌ខ្មៅ + អក្សរខ្មែរ" },
  { id: 24, icon: Monitor, title: "Windows Support", description: "Windows 10 & 11 (64-bit)" },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            មុខងារពិសេសទាំង <span className="text-primary">24 ចំណុច</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            យើងបានសម្រិតសម្រាំងមុខងារដែលអ្នកត្រូវការបំផុត។ មិនស្មុគស្មាញ តែមានប្រសិទ្ធភាពខ្ពស់។
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-[#161b22] p-6 rounded-xl border border-gray-800 hover:border-primary/50 hover:bg-[#1c2128] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-800 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                <feature.icon className="text-gray-400 group-hover:text-primary transition-colors" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};