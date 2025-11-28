import { LucideIcon } from "lucide-react";

export interface FeatureItem {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  comment: string;
  rating: number;
}