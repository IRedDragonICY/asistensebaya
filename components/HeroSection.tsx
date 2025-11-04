import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Page } from '../App';

type HeroProps = {
  navigate: (page: Page) => void;
};

const HeroSection: React.FC<HeroProps> = ({ navigate }) => {
  return (
    <section className="relative py-20 md:py-32 min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-dark-bg z-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-accent/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Tugas Kelar, Nilai Aman,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Bareng Asisten Sebaya
                </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 mb-10">
                Bukan sekedar joki, kami adalah partner belajarmu. Dapatkan bantuan pengerjaan tugas dari tutor mahasiswa terpilih dengan cepat, tepat, dan harga bersahabat.
            </p>
            <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigate('login'); }}
                className="inline-flex items-center gap-3 bg-orange-accent text-white font-bold py-4 px-8 rounded-full shadow-neumorphic-out text-lg hover:bg-orange-accent-hover hover:shadow-neumorphic-in transition-all duration-300 transform hover:scale-105"
            >
                Tanya Asisten Sekarang <ArrowRight />
            </a>
        </div>
    </section>
  );
};

export default HeroSection;