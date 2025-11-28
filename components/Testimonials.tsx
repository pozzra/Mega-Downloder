import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialItem } from '../types';

const reviews: TestimonialItem[] = [
  {
    name: "បង សុខ",
    role: "Youtuber / Content Creator",
    comment: "ខ្ញុំប្រើ Tools ច្រើនហើយ តែអាមួយនេះលឿនជាងគេ។ ចូលចិត្តត្រង់ដាក់ Link Playlist ចូលហើយទៅដេក ព្រឹកឡើងបានទាំងអស់!",
    rating: 5
  },
  {
    name: "Vid Gamer",
    role: "Editor",
    comment: "ស្អាត ហើយស្រួលប្រើ។ UI ត្រូវចិត្តអ្នក Download វីដេអូយប់ៗដូចខ្ញុំ។ 15$ ហួសពីសមរម្យសម្រាប់ Lifetime។",
    rating: 5
  },
  {
    name: "Srey Nich",
    role: "Online Seller",
    comment: "ទាញយកវីដេអូ TikTok អត់ជាប់ Logo យកមកផុសលក់ឥវ៉ាន់ស្រួល។ Support លឿន ពេលឆ្ងល់ឆាតសួរតបភ្លាម។",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          មតិពីអតិថិជនដែលបានប្រើ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#161b22] p-8 rounded-xl border border-gray-800 relative">
              <div className="flex gap-1 mb-4 text-accentYellow">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-secondary italic mb-6">"{review.comment}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{review.name}</h4>
                  <p className="text-gray-500 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};