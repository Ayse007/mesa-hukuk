
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  image: string;
  description: string;
  longDescription: string;
  subFields: string[];
  icon: React.ReactNode;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Lawyer {
  id: string;
  name: string;
  title: string;
  image: string;
  specialization: string;
  bio: string;
  email: string;
  phone: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  challenge: string;
  strategy: string;
  outcome: string;
  image: string;
}

export interface AppointmentSlot {
  id: string;
  time: string;
  date: string;
  isAvailable: boolean;
}

export interface AppointmentBooking {
  practiceAreaId: string;
  lawyerId: string;
  slotId: string;
  userDetails: {
    fullName: string;
    email: string;
    phone: string;
    notes: string;
  };
}
