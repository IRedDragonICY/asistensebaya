
import React from 'react';
import { Zap, ShieldCheck, Users, DollarSign } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-dark-bg-secondary p-8 rounded-3xl shadow-neumorphic-out transition-all duration-300 hover:shadow-neumorphic-in hover:-translate-y-2">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-dark-bg shadow-neumorphic-in mb-6">
            <span className="text-orange-accent">{icon}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base">{description}</p>
    </div>
);

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Kenapa Pilih Kami?</h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Kami lebih dari sekedar joki. Kami adalah partner andalanmu dalam meraih prestasi akademis.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
                icon={<Zap size={32} />} 
                title="Cepat & Tepat Waktu"
                description="Proses pengerjaan kilat tanpa mengorbankan kualitas. Deadline aman, tidurmu nyenyak."
            />
            <FeatureCard 
                icon={<Users size={32} />} 
                title="Tutor Ahli Sebaya"
                description="Dikerjakan oleh mahasiswa/i berprestasi yang paham betul materi dan ekspektasi dosen."
            />
            <FeatureCard 
                icon={<ShieldCheck size={32} />} 
                title="Bebas Plagiarisme"
                description="Setiap tugas dikerjakan orisinal dan unik, lengkap dengan referensi yang valid."
            />
            <FeatureCard 
                icon={<DollarSign size={32} />} 
                title="Harga Mahasiswa"
                description="Kualitas premium dengan harga yang bersahabat untuk kantong mahasiswa."
            />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
