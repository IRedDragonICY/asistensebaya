
import React, { useEffect, useRef, useState } from 'react';
import { BookCheck, Users, GraduationCap } from 'lucide-react';

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


const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center p-6 bg-dark-bg-secondary rounded-2xl shadow-neumorphic-out">
        <div className="text-orange-accent mb-4">{icon}</div>
        <p className="text-4xl md:text-5xl font-bold text-white">
           +<AnimatedCounter endValue={value} />
        </p>
        <p className="text-gray-400 mt-2 text-sm md:text-base">{label}</p>
    </div>
);


const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard icon={<BookCheck size={40} />} value={12532} label="Tugas Terselesaikan" />
            <StatCard icon={<Users size={40} />} value={8741} label="Siswa Terbantu" />
            <StatCard icon={<GraduationCap size={40} />} value={500} label="Tutor Berpengalaman" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
