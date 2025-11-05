
import React, { useRef } from 'react';
import { BrainCircuit, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Footer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-dark-bg-secondary mt-20 shadow-neumorphic-in relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-orange-accent/5 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        ref={ref}
        className="container mx-auto px-6 py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <BrainCircuit className="w-8 h-8 text-orange-accent" />
              </motion.div>
              <span className="text-xl font-bold text-white">AsistenSebaya</span>
            </motion.a>
            <p className="text-gray-400 text-sm">Partner belajar andalan mahasiswa Indonesia.</p>
            <div className="flex gap-4 mt-6">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-orange-accent transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-orange-accent transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-orange-accent transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin />
              </motion.a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-orange-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Makalah & Esai
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-orange-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Presentasi (PPT)
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-orange-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Tugas Koding
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-orange-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Analisis Data
                </motion.a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-orange-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Tentang Kami
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#affiliate"
                  className="text-gray-400 hover:text-orange-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Karir (Jadi Tutor)
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-orange-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Kontak
                </motion.a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-orange-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Syarat & Ketentuan
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-orange-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Kebijakan Privasi
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Asisten Sebaya. Semua Hak Cipta Dilindungi.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
