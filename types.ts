
export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  filePreview?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  origin: string;
  avatar: string;
  text: string;
  rating: number;
}
