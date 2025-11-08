import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Briefcase,
  BookOpen,
  Code,
  BarChart3,
  Palette,
  Calculator,
  FlaskConical,
  Building2,
  Award,
  Zap,
  Heart,
  Target,
  MessageCircle,
  Laptop
} from 'lucide-react';
import type { Page } from '../App';

type CareerPageProps = {
  navigate: (page: Page) => void;
};

const CareerPage: React.FC<CareerPageProps> = ({ navigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const benefits = [
    {
      icon: <DollarSign />,
      title: "Penghasilan Menarik",
      description: "Dapatkan penghasilan kompetitif sesuai dengan keahlian dan pengalaman Anda. Sistem pembayaran yang transparan dan tepat waktu.",
      highlight: "Rp 50K - 500K per tugas"
    },
    {
      icon: <Clock />,
      title: "Fleksibilitas Waktu",
      description: "Bekerja sesuai jadwal Anda sendiri. Cocok untuk mahasiswa, fresh graduate, atau profesional yang ingin penghasilan tambahan.",
      highlight: "Atur waktu sendiri"
    },
    {
      icon: <TrendingUp />,
      title: "Pengembangan Karir",
      description: "Tingkatkan skill dan portfolio Anda. Kesempatan untuk berkembang dari tutor junior hingga senior dengan rate yang lebih tinggi.",
      highlight: "Karir berkelanjutan"
    },
    {
      icon: <Laptop />,
      title: "Work From Anywhere",
      description: "Bekerja dari mana saja, kapan saja. Yang Anda butuhkan hanya laptop dan koneksi internet.",
      highlight: "100% Remote"
    },
    {
      icon: <Users />,
      title: "Komunitas Positif",
      description: "Bergabung dengan komunitas tutor profesional, saling berbagi ilmu dan pengalaman.",
      highlight: "50+ Tutor Aktif"
    },
    {
      icon: <Award />,
      title: "Pelatihan Gratis",
      description: "Akses ke pelatihan dan workshop gratis untuk meningkatkan kualitas kerja dan skill Anda.",
      highlight: "Upskilling Program"
    }
  ];

  const requirements = [
    {
      category: "Umum",
      icon: <GraduationCap />,
      items: [
        "Minimal mahasiswa S1 semester 5 atau fresh graduate",
        "IPK minimal 3.00 untuk tutor akademik",
        "Memiliki passion dalam berbagi ilmu",
        "Komunikatif dan responsif",
        "Bertanggung jawab dan tepat waktu",
        "Memiliki laptop dan internet stabil"
      ]
    },
    {
      category: "Tutor Makalah & Esai",
      icon: <BookOpen />,
      items: [
        "Mahir dalam penulisan akademik",
        "Memahami berbagai gaya penulisan (APA, MLA, IEEE, Chicago)",
        "Kemampuan riset dan analisis yang baik",
        "Menguasai Microsoft Word dan Google Docs",
        "Portfolio minimal 5 karya tulis akademik",
        "Mampu menulis dalam Bahasa Indonesia dan Inggris"
      ]
    },
    {
      category: "Tutor Coding & Programming",
      icon: <Code />,
      items: [
        "Menguasai minimal 2 bahasa pemrograman",
        "Pengalaman dalam software development",
        "Memahami data structures & algorithms",
        "Familiar dengan version control (Git)",
        "Mampu menjelaskan kode dengan jelas",
        "Portfolio project atau GitHub yang aktif"
      ]
    },
    {
      category: "Tutor Analisis Data",
      icon: <BarChart3 />,
      items: [
        "Menguasai SPSS, Excel, R, atau Python",
        "Memahami statistik deskriptif dan inferensial",
        "Pengalaman mengolah data penelitian",
        "Mampu membuat visualisasi data yang menarik",
        "Bisa menjelaskan hasil analisis dengan baik",
        "Sertifikat analisis data (nilai plus)"
      ]
    },
    {
      category: "Tutor Desain Grafis",
      icon: <Palette />,
      items: [
        "Menguasai Adobe Creative Suite atau CorelDRAW",
        "Memiliki portofolio desain yang kuat",
        "Memahami prinsip desain dan tipografi",
        "Kreatif dan up-to-date dengan tren desain",
        "Mampu bekerja dengan deadline ketat",
        "Pengalaman minimal 1 tahun di bidang desain"
      ]
    },
    {
      category: "Tutor Matematika & Sains",
      icon: <Calculator />,
      items: [
        "Background pendidikan di bidang STEM",
        "Menguasai konsep matematika tingkat universitas",
        "Mampu menjelaskan konsep kompleks dengan sederhana",
        "Familiar dengan software komputasi (MATLAB, Mathematica)",
        "Sabar dan telaten dalam mengajar",
        "Pengalaman mengajar/bimbel (nilai plus)"
      ]
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Daftar Online",
      description: "Isi formulir pendaftaran dengan lengkap dan upload dokumen yang diperlukan (CV, transkrip, portfolio).",
      icon: <MessageCircle />
    },
    {
      step: 2,
      title: "Screening Awal",
      description: "Tim kami akan mereview aplikasi Anda dalam 1-3 hari kerja dan menghubungi kandidat yang memenuhi syarat.",
      icon: <CheckCircle />
    },
    {
      step: 3,
      title: "Test Kompetensi",
      description: "Kandidat terpilih akan mengikuti tes sesuai bidang keahlian untuk menilai kemampuan teknis dan akademik.",
      icon: <Award />
    },
    {
      step: 4,
      title: "Interview",
      description: "Sesi interview online dengan tim untuk mengenal Anda lebih jauh dan membahas ekspektasi kerja sama.",
      icon: <Users />
    },
    {
      step: 5,
      title: "Onboarding",
      description: "Tutor yang lolos akan mendapat pelatihan dan orientasi platform sebelum mulai menerima tugas.",
      icon: <GraduationCap />
    },
    {
      step: 6,
      title: "Mulai Bekerja!",
      description: "Selamat! Anda resmi menjadi bagian dari tim AsistenSebaya dan siap membantu mahasiswa di seluruh Indonesia.",
      icon: <Star />
    }
  ];

  const testimonials = [
    {
      name: "Rizky Pratama",
      role: "Tutor Programming",
      university: "Institut Teknologi Bandung",
      initials: "RP",
      avatarColor: "from-blue-500 to-indigo-600",
      rating: 5,
      text: "Menjadi tutor di AsistenSebaya memberikan saya penghasilan tambahan yang lumayan sambil mengasah skill programming saya. Sistemnya fleksibel dan pembayarannya tepat waktu!"
    },
    {
      name: "Siti Nurhaliza",
      role: "Tutor Statistik & SPSS",
      university: "Universitas Indonesia",
      initials: "SN",
      avatarColor: "from-purple-500 to-pink-600",
      rating: 5,
      text: "Saya fresh graduate dan kesulitan cari kerja. AsistenSebaya memberi saya kesempatan untuk tetap produktif dan menghasilkan income. Bahkan sekarang ini jadi pekerjaan utama saya!"
    },
    {
      name: "Budi Santoso",
      role: "Tutor Desain Grafis",
      university: "Telkom University",
      initials: "BS",
      avatarColor: "from-orange-500 to-red-600",
      rating: 5,
      text: "Platform yang profesional dengan sistem yang jelas. Saya bisa work from home sambil kuliah. Rate-nya kompetitif dan saya bisa mengembangkan portfolio juga."
    },
    {
      name: "Amanda Putri",
      role: "Tutor Makalah & Esai",
      university: "Universitas Gadjah Mada",
      initials: "AP",
      avatarColor: "from-green-500 to-emerald-600",
      rating: 5,
      text: "Sebagai mahasiswa S2, pekerjaan ini sangat membantu finansial saya. Jadwalnya fleksibel jadi tidak mengganggu kuliah dan penelitian saya. Highly recommended!"
    }
  ];

  const faqs = [
    {
      question: "Berapa penghasilan yang bisa didapat?",
      answer: "Penghasilan bervariasi tergantung jenis tugas, tingkat kesulitan, dan deadline. Range nya dari Rp 50.000 - 500.000 per tugas. Tutor senior dengan rating tinggi bisa mendapat rate yang lebih besar."
    },
    {
      question: "Apakah harus full time?",
      answer: "Tidak. Anda bisa bekerja paruh waktu sesuai ketersediaan Anda. Ambil tugas ketika Anda available dan tolak ketika sedang sibuk. Fleksibilitas penuh ada di tangan Anda."
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer: "Pembayaran dilakukan setiap minggu melalui transfer bank atau e-wallet. Anda akan dibayar setelah tugas selesai dan diverifikasi oleh mahasiswa dan tim quality control kami."
    },
    {
      question: "Apakah ada biaya pendaftaran?",
      answer: "TIDAK ADA biaya pendaftaran sama sekali. Gratis 100%. Hati-hati dengan penipuan yang mengatasnamakan AsistenSebaya dan meminta biaya pendaftaran."
    },
    {
      question: "Berapa lama proses rekrutmen?",
      answer: "Proses dari pendaftaran hingga onboarding biasanya memakan waktu 1-2 minggu, tergantung kecepatan Anda dalam menyelesaikan setiap tahap."
    },
    {
      question: "Apakah ada kontrak kerja?",
      answer: "Ya, kami akan memberikan perjanjian kerja sama yang jelas mengenai hak dan kewajiban masing-masing pihak untuk melindungi kedua belah pihak."
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
      <section className="py-20 px-6 bg-gradient-to-b from-dark-bg to-dark-bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <GraduationCap className="w-20 h-20 text-orange-accent mx-auto" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bergabung Sebagai <span className="text-orange-accent">Tutor</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
              Bagikan keahlianmu, bantu sesama mahasiswa, dan dapatkan penghasilan menarik
              dengan jadwal yang fleksibel!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-accent to-orange-500 text-white font-bold py-4 px-12 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-2"
            >
              Daftar Jadi Tutor Sekarang
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Keuntungan Menjadi <span className="text-orange-accent">Tutor</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Lebih dari sekedar penghasilan tambahan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-dark-bg-secondary rounded-2xl p-8 border border-gray-800 hover:border-orange-accent/50 transition-all"
              >
                <div className="w-14 h-14 bg-orange-accent/10 rounded-xl flex items-center justify-center mb-6">
                  {React.cloneElement(benefit.icon as React.ReactElement, {
                    className: "w-7 h-7 text-orange-accent"
                  })}
                </div>
                <div className="mb-3">
                  <span className="inline-block bg-orange-accent/20 text-orange-accent text-xs font-semibold px-3 py-1 rounded-full">
                    {benefit.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-6 bg-dark-bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Persyaratan <span className="text-orange-accent">Tutor</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Pilih kategori sesuai keahlianmu
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-dark-bg rounded-2xl p-8 border border-gray-800 hover:border-orange-accent/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-accent/10 rounded-xl flex items-center justify-center">
                    {React.cloneElement(req.icon as React.ReactElement, {
                      className: "w-6 h-6 text-orange-accent"
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {req.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-orange-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Cara <span className="text-orange-accent">Bergabung</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Proses pendaftaran yang mudah dan transparan
            </p>
          </motion.div>

          <div className="space-y-8">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 bg-dark-bg-secondary rounded-2xl p-6 border border-gray-800 hover:border-orange-accent/50 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-accent to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    {React.cloneElement(step.icon as React.ReactElement, {
                      className: "w-6 h-6 text-orange-accent"
                    })}
                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-dark-bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Kata <span className="text-orange-accent">Tutor Kami</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Pengalaman nyata dari tutor-tutor kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-dark-bg rounded-2xl p-8 border border-gray-800"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.avatarColor} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-xl">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-orange-accent text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.university}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-accent text-orange-accent" />
                  ))}
                </div>
                <p className="text-gray-400 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Pertanyaan <span className="text-orange-accent">Umum</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Jawaban untuk pertanyaan yang sering ditanyakan
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-dark-bg-secondary rounded-xl overflow-hidden border border-gray-800"
              >
                <button
                  onClick={() => setSelectedCategory(selectedCategory === faq.question ? null : faq.question)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-dark-bg transition-colors"
                >
                  <span className="font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: selectedCategory === faq.question ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5 text-orange-accent transform rotate-90" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {selectedCategory === faq.question && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-dark-bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-accent to-orange-500 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Siap Memulai Perjalanan Sebagai Tutor?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan tim tutor profesional kami dan mulai bantu ribuan
              mahasiswa Indonesia sambil mengembangkan karir Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-accent font-bold py-4 px-12 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center justify-center gap-2"
              >
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-12 rounded-full text-lg hover:bg-white hover:text-orange-accent transition-all"
              >
                Hubungi Kami
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
