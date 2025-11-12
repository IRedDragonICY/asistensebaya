import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';
import type { Page } from '../App';

type ContactPageProps = {
  navigate: (page: Page) => void;
};

const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <MessageCircle />,
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      description: "Hubungi kami via WhatsApp untuk respon cepat",
      link: "https://wa.me/6281234567890",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mail />,
      title: "Email",
      value: "support@asistensebaya.com",
      description: "Kirim email untuk pertanyaan detail",
      link: "mailto:support@asistensebaya.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone />,
      title: "Telepon",
      value: "+62 21-5555-8888",
      description: "Layanan telepon di jam kerja",
      link: "tel:+622155558888",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Instagram />,
      title: "Instagram",
      value: "@asistensebaya",
      description: "Follow untuk update dan promo",
      link: "https://instagram.com/asistensebaya",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const operatingHours = [
    { day: "Senin - Jumat", hours: "08:00 - 22:00 WIB" },
    { day: "Sabtu - Minggu", hours: "09:00 - 20:00 WIB" },
    { day: "Hari Libur Nasional", hours: "10:00 - 18:00 WIB" }
  ];

  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan tugas?",
      answer: "Waktu pengerjaan tergantung tingkat kesulitan dan panjang tugas. Biasanya 1-7 hari. Untuk urgent bisa dikerjakan dalam 24 jam dengan biaya tambahan."
    },
    {
      question: "Bagaimana cara pembayaran?",
      answer: "Kami menerima pembayaran via transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, DANA, ShopeePay), dan QRIS."
    },
    {
      question: "Apakah ada garansi revisi?",
      answer: "Ya! Kami memberikan garansi revisi GRATIS hingga Anda puas dengan hasilnya, selama masih dalam scope tugas awal."
    },
    {
      question: "Apakah data saya aman?",
      answer: "Sangat aman! Kami menjamin kerahasiaan 100% dan tidak akan membagikan informasi Anda kepada pihak ketiga."
    }
  ];

  const socialMedia = [
    { icon: <Instagram />, name: "Instagram", link: "#", color: "hover:text-pink-500" },
    { icon: <Facebook />, name: "Facebook", link: "#", color: "hover:text-blue-500" },
    { icon: <Twitter />, name: "Twitter", link: "#", color: "hover:text-sky-500" },
    { icon: <Linkedin />, name: "LinkedIn", link: "#", color: "hover:text-blue-600" },
    { icon: <Youtube />, name: "YouTube", link: "#", color: "hover:text-red-500" }
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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hubungi <span className="text-orange-accent">Kami</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ada pertanyaan? Butuh bantuan? Tim kami siap membantu Anda 24/7!
              Pilih metode komunikasi yang paling nyaman untuk Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-dark-bg-secondary rounded-2xl p-6 border border-gray-800 hover:border-orange-accent/50 transition-all cursor-pointer group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(method.icon as React.ReactElement, {
                    className: "w-7 h-7 text-white"
                  })}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-accent transition-colors">
                  {method.title}
                </h3>
                <p className="text-orange-accent font-semibold mb-2">
                  {method.value}
                </p>
                <p className="text-gray-400 text-sm">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6 bg-dark-bg-secondary">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Kirim <span className="text-orange-accent">Pesan</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Isi formulir di bawah ini dan kami akan segera merespon pesan Anda
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-bg border border-gray-700 rounded-xl px-4 py-3 text-gray-300 focus:border-orange-accent focus:outline-none transition-all"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-bg border border-gray-700 rounded-xl px-4 py-3 text-gray-300 focus:border-orange-accent focus:outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      No. WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-bg border border-gray-700 rounded-xl px-4 py-3 text-gray-300 focus:border-orange-accent focus:outline-none transition-all"
                      placeholder="08123456789"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Topik *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-bg border border-gray-700 rounded-xl px-4 py-3 text-gray-300 focus:border-orange-accent focus:outline-none transition-all"
                  >
                    <option value="">Pilih topik</option>
                    <option value="order">Pemesanan Tugas</option>
                    <option value="payment">Pembayaran</option>
                    <option value="revision">Revisi</option>
                    <option value="tutor">Menjadi Tutor</option>
                    <option value="complaint">Keluhan</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-dark-bg border border-gray-700 rounded-xl px-4 py-3 text-gray-300 focus:border-orange-accent focus:outline-none transition-all resize-none"
                    placeholder="Tuliskan pesan Anda di sini..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                    isSubmitted
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gradient-to-r from-orange-accent to-orange-500 hover:shadow-lg'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Pesan Terkirim!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Operating Hours */}
              <div className="bg-dark-bg rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-accent/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Jam Operasional
                  </h3>
                </div>
                <div className="space-y-4">
                  {operatingHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0"
                    >
                      <span className="text-gray-400">{item.day}</span>
                      <span className="text-orange-accent font-semibold">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-orange-accent/10 rounded-xl">
                  <p className="text-sm text-gray-300">
                    <strong className="text-orange-accent">Chat WhatsApp 24/7:</strong> Untuk pertanyaan urgent di luar jam operasional, kirim pesan WhatsApp dan kami akan respon secepat mungkin!
                  </p>
                </div>
              </div>

              {/* Office Location */}
              <div className="bg-dark-bg rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-accent/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Lokasi Kantor
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Jl. Sudirman No. 123, Jakarta Pusat<br />
                  DKI Jakarta 10220<br />
                  Indonesia
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-accent hover:text-orange-400 transition-colors"
                >
                  Lihat di Google Maps
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-dark-bg rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Ikuti Kami
                </h3>
                <div className="flex gap-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-dark-bg-secondary rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all border border-gray-700 hover:border-orange-accent/50`}
                    >
                      {React.cloneElement(social.icon as React.ReactElement, {
                        className: "w-5 h-5"
                      })}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-dark-bg rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">
                  FAQ Singkat
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="pb-4 border-b border-gray-800 last:border-0">
                      <p className="font-semibold text-white mb-2">
                        {faq.question}
                      </p>
                      <p className="text-sm text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
            <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Butuh Bantuan Cepat?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Chat langsung dengan tim kami via WhatsApp untuk respon instan!
            </p>
            <motion.a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-orange-accent font-bold py-4 px-12 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chat WhatsApp Sekarang
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
