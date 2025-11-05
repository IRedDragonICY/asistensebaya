
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const AffiliateSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="affiliate" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="bg-dark-bg-secondary rounded-3xl shadow-neumorphic-out p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 bg-orange-accent/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="lg:w-1/2 text-center lg:text-left relative z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Punya Waktu Luang & Skill?
              <br />
              <motion.span
                className="text-orange-accent"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Jadi Tutor Sebaya!
              </motion.span>
            </h2>
            <motion.p
              className="text-gray-400 text-base md:text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Bantu teman-teman mahasiswa lain sambil dapat penghasilan tambahan. Jadilah bagian dari tim tutor elit kami dan kembangkan portofoliomu.
            </motion.p>
          </motion.div>
          <motion.div
            className="lg:w-auto relative z-10"
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 bg-orange-accent text-white font-bold py-4 px-8 rounded-full shadow-neumorphic-out text-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "inset 8px 8px 16px #1a1c20, inset -4px -4px 8px #22242a"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Daftar Jadi Tutor <ArrowRight />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AffiliateSection;
