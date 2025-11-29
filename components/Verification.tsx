import React from 'react';
import { CheckCircle2, Play, Copy, StopCircle, Bot, Power } from 'lucide-react';

const steps = [
  {
    icon: Power,
    title: "1. Activation",
    description: "Run the app from 'dist/MegaDownloader'. Enter your key. It should restart automatically."
  },
  {
    icon: Copy,
    title: "2. Manual Download",
    description: "Copy a link and click 'PASTE LINK'. It should start downloading immediately."
  },
  {
    icon: Play,
    title: "3. Auto-Download",
    description: "Enable 'Auto-Download' checkbox. Copy a link. It should start automatically."
  },
  {
    icon: StopCircle,
    title: "4. Stop Function",
    description: "Click 'STOP ALL'. The download should stop immediately."
  },
  {
    icon: Bot,
    title: "5. Telegram Bot",
    description: "Send a link to your Telegram bot. The app should pick it up and download."
  }
];

export const Verification = () => {
  return (
    <section id="verification" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            របៀបសាកល្បង <span className="text-primary">មុខងារ (Verification)</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            សាកល្បងមុខងារទាំងអស់នេះដើម្បីបញ្ជាក់ថា MEGA DOWNLOADER ដំណើរការ 100%!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-[#161b22] p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-800 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <step.icon className="text-gray-400 group-hover:text-primary transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
