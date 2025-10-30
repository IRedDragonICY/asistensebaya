import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Amelia',
    origin: 'Universitas Gadjah Mada',
    avatar: 'https://i.pravatar.cc/100?u=sarah',
    text: 'Gila sih, penyelamat di kala deadline mepet! Hasilnya rapi banget dan dapet nilai A. Thank you Asisten Sebaya!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Budi Hartono',
    origin: 'Institut Teknologi Bandung',
    text: 'Awalnya ragu, tapi ternyata tutornya asik banget diajak diskusi. Bukan cuma ngerjain, tapi jadi paham materinya juga.',
    avatar: 'https://i.pravatar.cc/100?u=budi',
    rating: 5,
  },
  {
    id: 3,
    name: 'Citra Lestari',
    origin: 'Universitas Indonesia',
    text: 'Untuk tugas presentasi, desain PPT-nya modern dan isinya berbobot. Bikin presentasiku jadi standout di kelas.',
    avatar: 'https://i.pravatar.cc/100?u=citra',
    rating: 5,
  },
    {
    id: 4,
    name: 'Dodi Setiawan',
    origin: 'Universitas Brawijaya',
    text: 'Harganya jujur paling worth it dibanding yang lain. Kualitasnya gak main-main. Recommended banget buat yang lagi kepepet.',
    avatar: 'https://i.pravatar.cc/100?u=dodi',
    rating: 4,
  },
  {
    id: 5,
    name: 'Rian Ardianto',
    origin: 'Universitas Airlangga',
    text: 'Analisis datanya detail dan mudah dipahami. Tutornya sabar banget jawabin semua pertanyaanku. Mantap!',
    avatar: 'https://i.pravatar.cc/100?u=rian',
    rating: 5,
  },
  {
    id: 6,
    name: 'Fitriani',
    origin: 'Universitas Padjadjaran',
    text: 'Pengerjaan tugas kodingnya bersih dan efisien. Ada komentarnya di setiap fungsi, jadi gampang buat dipelajari lagi.',
    avatar: 'https://i.pravatar.cc/100?u=fitri',
    rating: 5,
  },
  {
    id: 7,
    name: 'Agus Santoso',
    origin: 'Institut Pertanian Bogor',
    text: 'Luar biasa! Makalahku selesai jauh sebelum deadline dengan kualitas yang melebihi ekspektasi. Pasti bakal langganan.',
    avatar: 'https://i.pravatar.cc/100?u=agus',
    rating: 5,
  },
  {
    id: 8,
    name: 'Dewi Anggraini',
    origin: 'Universitas Hasanuddin',
    text: 'Respon admin dan tutornya cepat banget. Komunikasinya lancar, jadi gak khawatir tugasnya kenapa-kenapa. The best!',
    avatar: 'https://i.pravatar.cc/100?u=dewi',
    rating: 5,
  },
];

const Rating = ({ count }: { count: number }) => (
    <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className={i < count ? 'text-yellow-400 fill-current' : 'text-gray-600'} />
        ))}
    </div>
);

// FIX: Explicitly typed TestimonialCard as a React.FC to resolve a typing issue where the 'key' prop was incorrectly being checked against the component's props.
type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
    <div className="bg-dark-bg-secondary p-8 rounded-3xl shadow-neumorphic-out flex flex-col h-full w-80 md:w-96 flex-shrink-0">
        <div className="flex items-center mb-4">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-orange-accent" />
            <div>
                <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.origin}</p>
            </div>
        </div>
        <p className="text-gray-300 flex-grow mb-4">"{testimonial.text}"</p>
        <Rating count={testimonial.rating} />
    </div>
);


const TestimonialsSection: React.FC = () => {
    // Gandakan testimoni untuk loop yang mulus
    const extendedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-20 bg-dark-bg">
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }
                .marquee-container::before,
                .marquee-container::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 5rem;
                    z-index: 10;
                }
                .marquee-container::before {
                    left: 0;
                    background: linear-gradient(to right, #1e2025, transparent);
                }
                .marquee-container::after {
                    right: 0;
                    background: linear-gradient(to left, #1e2025, transparent);
                }
            `}</style>
            <div className="container mx-auto">
                <div className="text-center mb-16 px-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Kata Mereka yang Sudah Terbantu</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Kami tidak hanya mengerjakan, kami membangun kepercayaan.</p>
                </div>
                <div className="relative marquee-container w-full overflow-hidden">
                    <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
                        {extendedTestimonials.map((testimonial, index) => (
                            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;