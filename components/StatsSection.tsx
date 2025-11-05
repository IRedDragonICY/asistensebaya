
import React, { useEffect, useRef, useState } from 'react';
import { BookCheck, Users, GraduationCap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ endValue, duration = 2000 }: { endValue: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (endValue - 0) + 0);
      setCount(currentCount);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    requestAnimationFrame(step);
  }, [endValue, duration, isVisible]);

  return <span ref={ref}>{count.toLocaleString('id-ID')}</span>;
};


const StatCard = ({ icon, value, label, index }: { icon: React.ReactNode; value: number; label: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 bg-dark-bg-secondary rounded-2xl shadow-neumorphic-out"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "inset 8px 8px 16px #1a1c20, inset -4px -4px 8px #22242a",
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className="text-orange-accent mb-4"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{
          duration: 0.5,
          delay: index * 0.15 + 0.2,
          type: "spring",
          stiffness: 200
        }}
      >
        {icon}
      </motion.div>
      <motion.p
        className="text-4xl md:text-5xl font-bold text-white"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
        transition={{
          duration: 0.4,
          delay: index * 0.15 + 0.3,
          type: "spring"
        }}
      >
        +<AnimatedCounter endValue={value} />
      </motion.p>
      <motion.p
        className="text-gray-400 mt-2 text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.4,
          delay: index * 0.15 + 0.5
        }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};


const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard icon={<BookCheck size={40} />} value={12532} label="Tugas Terselesaikan" index={0} />
            <StatCard icon={<Users size={40} />} value={8741} label="Siswa Terbantu" index={1} />
            <StatCard icon={<GraduationCap size={40} />} value={500} label="Tutor Berpengalaman" index={2} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
