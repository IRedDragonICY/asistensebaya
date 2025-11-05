import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
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
    <motion.div
      className="bg-dark-bg-secondary p-8 rounded-3xl shadow-neumorphic-out flex flex-col h-full w-80 md:w-96 flex-shrink-0"
      whileHover={{
        scale: 1.03,
        y: -5,
        boxShadow: "inset 8px 8px 16px #1a1c20, inset -4px -4px 8px #22242a",
        transition: { duration: 0.3 }
      }}
    >
        <div className="flex items-center mb-4">
            <motion.img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full mr-4 border-2 border-orange-accent"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <div>
                <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.origin}</p>
            </div>
        </div>
        <p className="text-gray-300 flex-grow mb-4">"{testimonial.text}"</p>
        <Rating count={testimonial.rating} />
    </motion.div>
);


const TestimonialsSection: React.FC = () => {
    // Gandakan testimoni untuk loop yang mulus
    const extendedTestimonials = [...testimonials, ...testimonials];
    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

    return (
        <section id="testimonials" className="py-20 bg-dark-bg">
            <div className="container mx-auto">
                <motion.div
                  ref={titleRef}
                  className="text-center mb-16 px-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Kata Mereka yang Sudah Terbantu</h2>
                    <motion.p
                      className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto"
                      initial={{ opacity: 0 }}
                      animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Kami tidak hanya mengerjakan, kami membangun kepercayaan.
                    </motion.p>
                </motion.div>
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