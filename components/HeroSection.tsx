import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Page } from '../App';

type HeroProps = {
  navigate: (page: Page) => void;
};

const HeroSection: React.FC<HeroProps> = ({ navigate }) => {
  return (
    <section className="relative py-20 md:py-32 min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-dark-bg z-0">
            <motion.div
                className="absolute top-0 left-0 w-64 h-64 bg-orange-accent/10 rounded-full filter blur-3xl opacity-50"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-72 h-72 bg-orange-accent/20 rounded-full filter blur-3xl opacity-30"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -30, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </div>
        <div className="container mx-auto px-6 relative z-10">
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Tugas Kelar, Nilai Aman,
                <br />
                <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Bareng Asisten Sebaya
                </motion.span>
            </motion.h1>
            <motion.p
                className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                Bukan sekedar joki, kami adalah partner belajarmu. Dapatkan bantuan pengerjaan tugas dari tutor mahasiswa terpilih dengan cepat, tepat, dan harga bersahabat.
            </motion.p>
            <motion.a
                href="#"
                onClick={(e) => { e.preventDefault(); navigate('login'); }}
                className="inline-flex items-center gap-3 bg-orange-accent text-white font-bold py-4 px-8 rounded-full shadow-neumorphic-out text-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "inset 8px 8px 16px #1a1c20, inset -4px -4px 8px #22242a",
                }}
                whileTap={{ scale: 0.95 }}
            >
                Tanya Asisten Sekarang <ArrowRight />
            </motion.a>
        </div>
    </section>
  );
};

export default HeroSection;