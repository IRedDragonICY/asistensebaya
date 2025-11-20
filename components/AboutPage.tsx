import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Award,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  GraduationCap
} from 'lucide-react';
import type { Page } from '../App';

type AboutPageProps = {
  navigate: (page: Page) => void;
};

const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const stats = [
    { number: "10,000+", label: "Tugas Diselesaikan", icon: <CheckCircle /> },
    { number: "5,000+", label: "Mahasiswa Terbantu", icon: <Users /> },
    { number: "65+", label: "Jurusan Dilayani", icon: <GraduationCap /> },
    { number: "98%", label: "Tingkat Kepuasan", icon: <Star /> },
    { number: "24/7", label: "Layanan Siap", icon: <Clock /> },
    { number: "50+", label: "Tutor Ahli", icon: <Award /> }
  ];

  const values = [
    {
      icon: <Shield />,
      title: "Terpercaya & Aman",
      description: "Kerahasiaan data dan privasi Anda adalah prioritas utama kami. Semua informasi dijaga ketat dan tidak dibagikan kepada pihak ketiga."
    },
    {
      icon: <Zap />,
      title: "Cepat & Responsif",
      description: "Kami memahami deadline adalah hal penting. Tim kami siap memberikan respons cepat dan menyelesaikan tugas tepat waktu."
    },
    {
      icon: <Award />,
      title: "Berkualitas Tinggi",
      description: "Setiap tugas dikerjakan oleh tutor ahli di bidangnya dengan standar kualitas akademik yang tinggi dan original."
    },
    {
      icon: <Heart />,
      title: "Peduli & Supportif",
      description: "Kami tidak hanya mengerjakan tugas, tapi juga membantu Anda memahami materi dengan penjelasan yang jelas dan sabar."
    },
    {
      icon: <TrendingUp />,
      title: "Harga Terjangkau",
      description: "Layanan premium dengan harga yang ramah di kantong mahasiswa. Berbagai paket dan diskon menarik tersedia."
    },
    {
      icon: <Users />,
      title: "Tim Profesional",
      description: "Tutor kami adalah lulusan universitas terkemuka dengan pengalaman dan keahlian di berbagai bidang akademik."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Awal Perjalanan",
      description: "AsistenSebaya didirikan oleh sekelompok mahasiswa yang ingin membantu sesama mahasiswa dalam menyelesaikan tugas akademik."
    },
    {
      year: "2021",
      title: "Ekspansi Layanan",
      description: "Menambah layanan dari hanya makalah menjadi berbagai jenis tugas termasuk coding, analisis data, dan desain grafis."
    },
    {
      year: "2022",
      title: "Pertumbuhan Pesat",
      description: "Mencapai 1,000+ mahasiswa terbantu dengan tim tutor yang berkembang dari 5 menjadi 20+ profesional."
    },
    {
      year: "2023",
      title: "Inovasi Platform",
      description: "Meluncurkan platform digital modern untuk memudahkan pemesanan dan komunikasi antara mahasiswa dan tutor."
    },
    {
      year: "2024",
      title: "Leader dalam Industri",
      description: "Menjadi platform bantuan tugas terdepan di Indonesia dengan 10,000+ tugas diselesaikan dan rating 98% kepuasan."
    },
    {
      year: "2025",
      title: "Masa Depan Cerah",
      description: "Terus berinovasi dengan AI-assisted learning dan expanding ke lebih banyak universitas di seluruh Indonesia."
    }
  ];

  const team = [
    {
      role: "Tim Akademik",
      description: "Lulusan S1, S2, dan S3 dari universitas terkemuka di Indonesia dan luar negeri yang ahli di bidangnya masing-masing."
    },
    {
      role: "Tim Teknis",
      description: "Developer dan programmer berpengalaman yang menguasai berbagai bahasa pemrograman dan teknologi modern."
    },
    {
      role: "Tim Kreatif",
      description: "Designer grafis dan multimedia expert yang mampu menghasilkan karya visual yang menarik dan profesional."
    },
    {
      role: "Tim Support",
      description: "Customer service yang ramah dan responsif, siap membantu Anda 24/7 melalui berbagai channel komunikasi."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-gray-300">
      {/* Header Navigation */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-40 bg-dark-bg/80 backdrop-blur-sm border-b border-gray-800"
      >
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-2 text-orange-accent hover:text-orange-400 transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span>Kembali ke Beranda</span>
          </button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tentang <span className="text-orange-accent">AsistenSebaya</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Platform bantuan tugas akademik terpercaya yang telah membantu ribuan mahasiswa Indonesia
              mencapai prestasi terbaik mereka sejak 2020.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-dark-bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-dark-bg rounded-2xl p-6 text-center shadow-neumorphic-out hover:shadow-neumorphic-out-lg transition-all"
              >
                <div className="text-orange-accent mb-3 flex justify-center">
                  {React.cloneElement(stat.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-dark-bg-secondary rounded-3xl p-8 md:p-12 border border-gray-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-accent/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-orange-accent" />
                </div>
                <h2 className="text-3xl font-bold text-white">Misi Kami</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Membantu setiap mahasiswa Indonesia meraih prestasi akademik terbaik dengan
                menyediakan bantuan tugas yang berkualitas, terpercaya, dan terjangkau.
                Kami percaya bahwa setiap mahasiswa berhak mendapatkan dukungan untuk
                mencapai potensi maksimal mereka.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-dark-bg-secondary rounded-3xl p-8 md:p-12 border border-gray-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-accent/10 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-orange-accent" />
                </div>
                <h2 className="text-3xl font-bold text-white">Visi Kami</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Menjadi platform bantuan akademik #1 di Indonesia yang dikenal dengan
                kualitas, integritas, dan inovasi. Kami berkomitmen untuk terus berkembang
                dan beradaptasi dengan kebutuhan mahasiswa modern, sekaligus mempertahankan
                standar etika dan profesionalisme tertinggi.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-dark-bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Mengapa <span className="text-orange-accent">Memilih Kami?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Nilai-nilai yang menjadi pondasi layanan kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-dark-bg rounded-2xl p-8 border border-gray-800 hover:border-orange-accent/50 transition-all"
              >
                <div className="w-14 h-14 bg-orange-accent/10 rounded-xl flex items-center justify-center mb-6">
                  {React.cloneElement(value.icon as React.ReactElement, {
                    className: "w-7 h-7 text-orange-accent"
                  })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Perjalanan <span className="text-orange-accent">Kami</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Dari startup kecil hingga menjadi leader dalam industri
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-accent via-orange-500 to-orange-accent" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year Badge */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-orange-accent rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="font-bold text-white text-sm">{item.year}</span>
                </div>

                {/* Content */}
                <div className={`ml-28 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-dark-bg-secondary rounded-2xl p-6 border border-gray-800 hover:border-orange-accent/50 transition-all">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-dark-bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tim <span className="text-orange-accent">Profesional</span> Kami
            </h2>
            <p className="text-gray-400 text-lg">
              Para ahli yang siap membantu kesuksesan akademik Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-dark-bg rounded-2xl p-8 text-center border border-gray-800 hover:border-orange-accent/50 transition-all"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-accent to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {member.role}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-accent to-orange-500 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Bergabunglah dengan Ribuan Mahasiswa Sukses!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Raih prestasi akademik terbaikmu bersama AsistenSebaya.
              Kami siap membantu perjalanan akademikmu!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('login')}
              className="bg-white text-orange-accent font-bold py-4 px-12 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              Mulai Sekarang
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
