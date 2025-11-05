
import React, { useRef } from 'react';
import { Zap, ShieldCheck, Users, DollarSign } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const FeatureCard = ({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-dark-bg-secondary p-8 rounded-3xl shadow-neumorphic-out"
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: -15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{
        y: -8,
        boxShadow: "inset 8px 8px 16px #1a1c20, inset -4px -4px 8px #22242a",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <motion.div
        className="flex items-center justify-center w-16 h-16 rounded-full bg-dark-bg shadow-neumorphic-in mb-6"
        initial={{ scale: 0, rotate: -90 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.2,
          type: "spring",
          stiffness: 200
        }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      >
        <span className="text-orange-accent">{icon}</span>
      </motion.div>
      <motion.h3
        className="text-xl md:text-2xl font-bold text-white mb-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.3
        }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-400 text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.4
        }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Kenapa Pilih Kami?</h2>
          <motion.p
            className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kami lebih dari sekedar joki. Kami adalah partner andalanmu dalam meraih prestasi akademis.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Zap size={32} />}
            title="Cepat & Tepat Waktu"
            description="Proses pengerjaan kilat tanpa mengorbankan kualitas. Deadline aman, tidurmu nyenyak."
            index={0}
          />
          <FeatureCard
            icon={<Users size={32} />}
            title="Tutor Ahli Sebaya"
            description="Dikerjakan oleh mahasiswa/i berprestasi yang paham betul materi dan ekspektasi dosen."
            index={1}
          />
          <FeatureCard
            icon={<ShieldCheck size={32} />}
            title="Bebas Plagiarisme"
            description="Setiap tugas dikerjakan orisinal dan unik, lengkap dengan referensi yang valid."
            index={2}
          />
          <FeatureCard
            icon={<DollarSign size={32} />}
            title="Harga Mahasiswa"
            description="Kualitas premium dengan harga yang bersahabat untuk kantong mahasiswa."
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
