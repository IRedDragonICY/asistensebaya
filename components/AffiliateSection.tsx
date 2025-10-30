
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AffiliateSection: React.FC = () => {
  return (
    <section id="affiliate" className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-dark-bg-secondary rounded-3xl shadow-neumorphic-out p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Punya Waktu Luang & Skill?
                    <br />
                    <span className="text-orange-accent">Jadi Tutor Sebaya!</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg mb-8">
                    Bantu teman-teman mahasiswa lain sambil dapat penghasilan tambahan. Jadilah bagian dari tim tutor elit kami dan kembangkan portofoliomu.
                </p>
            </div>
            <div className="lg:w-auto">
                 <a
                    href="#"
                    className="inline-flex items-center gap-3 bg-orange-accent text-white font-bold py-4 px-8 rounded-full shadow-neumorphic-out text-lg hover:bg-orange-accent-hover hover:shadow-neumorphic-in transition-all duration-300 transform hover:scale-105"
                >
                    Daftar Jadi Tutor <ArrowRight />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;
