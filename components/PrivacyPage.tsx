import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  FileText,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Cookie,
  Globe,
  Mail
} from 'lucide-react';
import type { Page } from '../App';

type PrivacyPageProps = {
  navigate: (page: Page) => void;
};

const PrivacyPage: React.FC<PrivacyPageProps> = ({ navigate }) => {
  const sections = [
    {
      title: "1. Informasi yang Kami Kumpulkan",
      icon: <Database />,
      content: [
        {
          subtitle: "Informasi Pribadi",
          items: [
            "Nama lengkap, alamat email, nomor telepon/WhatsApp",
            "Informasi institusi pendidikan (nama universitas, jurusan, semester)",
            "Data akun (username, password yang terenkripsi)",
            "Informasi pembayaran (metode pembayaran, riwayat transaksi)"
          ]
        },
        {
          subtitle: "Informasi Tugas",
          items: [
            "Detail tugas yang dipesan (jenis, topik, deadline, instruksi)",
            "File-file pendukung yang diunggah",
            "Komunikasi terkait pengerjaan tugas",
            "Feedback dan rating yang diberikan"
          ]
        },
        {
          subtitle: "Informasi Teknis",
          items: [
            "Alamat IP, jenis browser, dan perangkat yang digunakan",
            "Data log aktivitas di platform kami",
            "Cookies dan teknologi pelacakan serupa",
            "Lokasi geografis (jika diizinkan)"
          ]
        }
      ]
    },
    {
      title: "2. Bagaimana Kami Menggunakan Informasi Anda",
      icon: <UserCheck />,
      content: [
        {
          subtitle: "Penyediaan Layanan",
          items: [
            "Memproses dan menyelesaikan pesanan tugas Anda",
            "Berkomunikasi tentang status pengerjaan dan pengiriman hasil",
            "Memfasilitasi pembayaran dan mengirimkan invoice",
            "Memberikan dukungan pelanggan dan menangani pertanyaan"
          ]
        },
        {
          subtitle: "Peningkatan Layanan",
          items: [
            "Menganalisis penggunaan platform untuk meningkatkan user experience",
            "Melakukan riset dan pengembangan fitur baru",
            "Personalisasi konten dan rekomendasi layanan",
            "Melakukan quality control dan evaluasi kinerja tutor"
          ]
        },
        {
          subtitle: "Komunikasi Marketing",
          items: [
            "Mengirimkan newsletter, promo, dan penawaran khusus (dengan persetujuan Anda)",
            "Memberikan update tentang layanan dan fitur baru",
            "Mengirimkan survei kepuasan pelanggan",
            "Program loyalitas dan referral"
          ]
        },
        {
          subtitle: "Keamanan dan Kepatuhan",
          items: [
            "Mencegah, mendeteksi, dan mengatasi penipuan atau aktivitas ilegal",
            "Mematuhi kewajiban hukum dan regulasi yang berlaku",
            "Melindungi hak, privasi, keamanan pengguna dan AsistenSebaya",
            "Menyelesaikan sengketa dan menegakkan perjanjian"
          ]
        }
      ]
    },
    {
      title: "3. Pembagian Informasi dengan Pihak Ketiga",
      icon: <Globe />,
      content: [
        {
          subtitle: "Tutor Kami",
          items: [
            "Kami membagikan detail tugas kepada tutor yang ditugaskan untuk mengerjakannya",
            "Informasi pribadi yang dibagikan dibatasi hanya yang diperlukan untuk pengerjaan",
            "Semua tutor terikat perjanjian kerahasiaan yang ketat"
          ]
        },
        {
          subtitle: "Penyedia Layanan Pihak Ketiga",
          items: [
            "Payment gateway untuk memproses pembayaran (contoh: Midtrans, Xendit)",
            "Cloud storage untuk menyimpan data dengan aman (contoh: AWS, Google Cloud)",
            "Email service provider untuk komunikasi (contoh: SendGrid, Mailchimp)",
            "Analytics tools untuk memahami penggunaan platform (contoh: Google Analytics)"
          ]
        },
        {
          subtitle: "Kewajiban Hukum",
          items: [
            "Ketika diwajibkan oleh hukum, pengadilan, atau otoritas pemerintah",
            "Untuk melindungi hak legal kami atau mencegah penipuan",
            "Dalam situasi darurat untuk melindungi keselamatan pengguna"
          ]
        },
        {
          subtitle: "Yang TIDAK Kami Lakukan",
          items: [
            "Kami TIDAK PERNAH menjual data pribadi Anda kepada pihak ketiga",
            "Kami TIDAK membagikan informasi tugas Anda ke institusi pendidikan",
            "Kami TIDAK menggunakan data Anda untuk tujuan di luar yang disebutkan di sini tanpa persetujuan eksplisit"
          ]
        }
      ]
    },
    {
      title: "4. Keamanan Data",
      icon: <Lock />,
      content: [
        {
          subtitle: "Langkah-langkah Keamanan Teknis",
          items: [
            "Enkripsi SSL/TLS untuk semua transmisi data sensitif",
            "Password di-hash menggunakan algoritma bcrypt yang aman",
            "Firewall dan sistem deteksi intrusi untuk melindungi server",
            "Regular security audits dan penetration testing",
            "Backup data otomatis dan disaster recovery plan"
          ]
        },
        {
          subtitle: "Langkah-langkah Keamanan Organisasi",
          items: [
            "Akses data dibatasi hanya untuk staff yang memerlukan (need-to-know basis)",
            "Pelatihan keamanan data rutin untuk semua karyawan dan tutor",
            "Non-disclosure agreements (NDA) untuk semua staff dan tutor",
            "Monitoring dan logging akses data secara berkala"
          ]
        },
        {
          subtitle: "Tanggung Jawab Anda",
          items: [
            "Jaga kerahasiaan password dan jangan membagikan akun Anda",
            "Logout dari akun setelah selesai menggunakan, terutama di perangkat publik",
            "Laporkan segera jika Anda mencurigai akses tidak sah ke akun Anda",
            "Gunakan password yang kuat dan unik"
          ]
        }
      ]
    },
    {
      title: "5. Cookies dan Teknologi Pelacakan",
      icon: <Cookie />,
      content: [
        {
          subtitle: "Apa itu Cookies?",
          items: [
            "Cookies adalah file kecil yang disimpan di perangkat Anda saat mengunjungi website",
            "Kami menggunakan cookies untuk meningkatkan pengalaman Anda di platform kami"
          ]
        },
        {
          subtitle: "Jenis Cookies yang Kami Gunakan",
          items: [
            "Essential Cookies: Diperlukan untuk fungsi dasar website (login, shopping cart)",
            "Performance Cookies: Membantu kami memahami bagaimana pengguna berinteraksi dengan site",
            "Functional Cookies: Mengingat preferensi Anda (bahasa, region)",
            "Marketing Cookies: Melacak kunjungan untuk menampilkan iklan yang relevan"
          ]
        },
        {
          subtitle: "Mengelola Cookies",
          items: [
            "Anda dapat mengatur browser untuk menolak cookies atau memberitahu saat cookies dikirim",
            "Namun, menonaktifkan cookies mungkin mempengaruhi fungsionalitas platform",
            "Anda dapat menghapus cookies yang sudah tersimpan kapan saja melalui pengaturan browser"
          ]
        }
      ]
    },
    {
      title: "6. Hak Anda atas Data Pribadi",
      icon: <Eye />,
      content: [
        {
          subtitle: "Hak Akses dan Portabilitas",
          items: [
            "Anda berhak meminta salinan data pribadi yang kami miliki tentang Anda",
            "Anda dapat meminta data dalam format yang terstruktur dan mudah dibaca"
          ]
        },
        {
          subtitle: "Hak Koreksi",
          items: [
            "Anda dapat memperbarui atau memperbaiki informasi pribadi yang tidak akurat",
            "Hubungi kami untuk melakukan perubahan pada data Anda"
          ]
        },
        {
          subtitle: "Hak Penghapusan",
          items: [
            "Anda dapat meminta penghapusan data pribadi Anda dalam kondisi tertentu",
            "Beberapa data mungkin perlu kami simpan untuk kepatuhan hukum atau penyelesaian sengketa",
            "Penghapusan akun akan menghapus sebagian besar data pribadi Anda"
          ]
        },
        {
          subtitle: "Hak Pembatasan dan Keberatan",
          items: [
            "Anda dapat meminta pembatasan pemrosesan data Anda",
            "Anda dapat keberatan pada penggunaan data untuk marketing langsung",
            "Opt-out dari newsletter dan komunikasi promotional kapan saja"
          ]
        },
        {
          subtitle: "Cara Menggunakan Hak Anda",
          items: [
            "Kirim permintaan ke: privacy@asistensebaya.com",
            "Kami akan merespons dalam 30 hari sejak permintaan diterima",
            "Verifikasi identitas mungkin diperlukan untuk melindungi privasi Anda"
          ]
        }
      ]
    },
    {
      title: "7. Penyimpanan dan Retensi Data",
      icon: <Database />,
      content: [
        {
          subtitle: "Berapa Lama Kami Menyimpan Data?",
          items: [
            "Data akun aktif: Selama akun Anda aktif dan periode yang wajar setelahnya",
            "Riwayat transaksi: Minimum 5 tahun untuk keperluan akuntansi dan pajak",
            "Data komunikasi: 2 tahun untuk quality control dan penyelesaian sengketa",
            "Data marketing: Hingga Anda unsubscribe atau menarik persetujuan"
          ]
        },
        {
          subtitle: "Penghapusan Data",
          items: [
            "Data yang tidak lagi diperlukan akan dihapus secara aman dan permanen",
            "Backup data akan dihapus sesuai dengan jadwal backup retention policy",
            "Penghapusan dilakukan dengan cara yang mencegah recovery data"
          ]
        }
      ]
    },
    {
      title: "8. Privasi Anak-anak",
      icon: <AlertTriangle />,
      content: [
        {
          subtitle: "Batasan Usia",
          items: [
            "Layanan kami ditujukan untuk pengguna berusia 17 tahun ke atas",
            "Kami tidak secara sengaja mengumpulkan data dari anak di bawah 17 tahun",
            "Jika kami mengetahui telah mengumpulkan data dari anak di bawah usia, kami akan segera menghapusnya"
          ]
        },
        {
          subtitle: "Untuk Orang Tua/Wali",
          items: [
            "Jika Anda percaya anak Anda memberikan informasi kepada kami, hubungi kami segera",
            "Kami akan mengambil langkah untuk memverifikasi dan menghapus informasi tersebut"
          ]
        }
      ]
    },
    {
      title: "9. Transfer Data Internasional",
      icon: <Globe />,
      content: [
        {
          subtitle: "Lokasi Server",
          items: [
            "Data Anda mungkin disimpan dan diproses di server yang berlokasi di Indonesia atau negara lain",
            "Kami menggunakan cloud providers terkemuka yang memenuhi standar keamanan internasional"
          ]
        },
        {
          subtitle: "Perlindungan Data",
          items: [
            "Jika data ditransfer ke luar Indonesia, kami memastikan perlindungan yang setara dengan kebijakan ini",
            "Kami menggunakan Standard Contractual Clauses atau mekanisme lain yang diakui secara hukum"
          ]
        }
      ]
    },
    {
      title: "10. Perubahan Kebijakan Privasi",
      icon: <FileText />,
      content: [
        {
          subtitle: "Update Kebijakan",
          items: [
            "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu",
            "Perubahan material akan diberitahukan melalui email atau notifikasi di platform",
            "Versi terbaru selalu tersedia di halaman ini dengan tanggal 'Terakhir diperbarui'"
          ]
        },
        {
          subtitle: "Persetujuan Berkelanjutan",
          items: [
            "Penggunaan layanan yang berkelanjutan setelah perubahan dianggap sebagai persetujuan terhadap kebijakan baru",
            "Jika Anda tidak setuju dengan perubahan, Anda dapat menghentikan penggunaan layanan dan menghapus akun"
          ]
        }
      ]
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
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <Shield className="w-16 h-16 text-orange-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kebijakan <span className="text-orange-accent">Privasi</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Terakhir diperbarui: 8 November 2025
            </p>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Privasi Anda adalah prioritas kami. Kebijakan ini menjelaskan bagaimana kami
              mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commitment Banner */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-accent to-orange-500 rounded-2xl p-8"
          >
            <div className="flex items-start gap-6">
              <Lock className="w-12 h-12 text-white flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Komitmen Privasi Kami
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-white">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">100% Rahasia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Data Terenkripsi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Tidak Dijual ke Pihak Lain</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-8 px-6 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-dark-bg-secondary rounded-2xl p-8 border border-gray-800"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {React.cloneElement(section.icon as React.ReactElement, {
                      className: "w-6 h-6 text-orange-accent"
                    })}
                  </div>
                  <h2 className="text-2xl font-bold text-white pt-2">
                    {section.title}
                  </h2>
                </div>
                <div className="ml-16 space-y-6">
                  {section.content.map((subsection, idx) => (
                    <div key={idx}>
                      {subsection.subtitle && (
                        <h3 className="text-lg font-semibold text-orange-accent mb-3">
                          {subsection.subtitle}
                        </h3>
                      )}
                      <ul className="space-y-2">
                        {subsection.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-orange-accent flex-shrink-0 mt-1" />
                            <p className="text-gray-400 leading-relaxed text-sm">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact for Privacy */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-dark-bg-secondary rounded-2xl p-8 border border-gray-800"
          >
            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-8 h-8 text-orange-accent" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Hubungi Data Protection Officer Kami
                </h3>
                <p className="text-gray-400 mb-4">
                  Jika Anda memiliki pertanyaan atau kekhawatiran tentang bagaimana kami menangani
                  data pribadi Anda, silakan hubungi kami:
                </p>
                <div className="space-y-2 text-gray-400">
                  <p>
                    <strong className="text-white">Email:</strong>{' '}
                    <a href="mailto:privacy@asistensebaya.com" className="text-orange-accent hover:underline">
                      privacy@asistensebaya.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-white">Alamat:</strong> Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 10220
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-orange-accent to-orange-500 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Punya Pertanyaan Lainnya?
            </h3>
            <p className="text-white/90 mb-6">
              Tim customer support kami siap membantu menjawab pertanyaan Anda
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('home')}
              className="bg-white text-orange-accent font-bold py-3 px-8 rounded-full inline-flex items-center gap-2"
            >
              Hubungi Kami
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
