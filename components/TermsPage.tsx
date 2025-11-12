import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  CheckCircle,
  AlertCircle,
  Shield,
  Scale,
  ArrowRight,
  Info
} from 'lucide-react';
import type { Page } from '../App';

type TermsPageProps = {
  navigate: (page: Page) => void;
};

const TermsPage: React.FC<TermsPageProps> = ({ navigate }) => {
  const sections = [
    {
      title: "1. Penerimaan Syarat dan Ketentuan",
      icon: <CheckCircle />,
      content: [
        "Dengan mengakses dan menggunakan layanan AsistenSebaya, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini.",
        "Jika Anda tidak menyetujui sebagian atau seluruh ketentuan ini, mohon untuk tidak menggunakan layanan kami.",
        "Kami berhak untuk mengubah, memodifikasi, atau memperbarui Syarat dan Ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya.",
        "Penggunaan layanan yang berkelanjutan setelah perubahan dibuat dianggap sebagai penerimaan Anda terhadap perubahan tersebut."
      ]
    },
    {
      title: "2. Layanan yang Disediakan",
      icon: <FileText />,
      content: [
        "AsistenSebaya menyediakan layanan bantuan akademik termasuk namun tidak terbatas pada penulisan makalah, pembuatan presentasi, pengerjaan tugas programming, analisis data, dan desain grafis.",
        "Layanan kami ditujukan sebagai referensi dan panduan belajar untuk membantu mahasiswa memahami materi dengan lebih baik.",
        "Kami tidak bertanggung jawab atas penggunaan hasil pekerjaan kami yang tidak sesuai dengan kebijakan akademik institusi pendidikan Anda.",
        "Semua materi yang kami hasilkan bersifat original dan bebas plagiarisme, dengan menggunakan referensi yang valid dan terpercaya."
      ]
    },
    {
      title: "3. Kewajiban Pengguna",
      icon: <Shield />,
      content: [
        "Pengguna wajib memberikan informasi yang akurat, lengkap, dan terkini saat melakukan pemesanan.",
        "Pengguna bertanggung jawab untuk menjaga kerahasiaan akun dan password mereka.",
        "Pengguna dilarang menggunakan layanan untuk tujuan yang melanggar hukum atau merugikan pihak lain.",
        "Pengguna wajib memberikan brief/instruksi yang jelas dan lengkap untuk memastikan hasil yang sesuai harapan.",
        "Pengguna setuju untuk tidak membagikan atau menjual kembali hasil pekerjaan yang diperoleh dari layanan kami kepada pihak ketiga.",
        "Pengguna wajib menghormati hak kekayaan intelektual dan tidak mengklaim hasil kerja sebagai murni karya sendiri tanpa modifikasi atau pemahaman."
      ]
    },
    {
      title: "4. Pemesanan dan Pembayaran",
      icon: <Scale />,
      content: [
        "Semua pemesanan harus dilakukan melalui platform atau channel resmi AsistenSebaya.",
        "Harga layanan akan dikomunikasikan sebelum pemesanan dikonfirmasi dan dapat berbeda tergantung kompleksitas, deadline, dan jenis tugas.",
        "Pembayaran harus dilakukan sesuai dengan metode dan instruksi yang telah ditentukan.",
        "Untuk tugas urgent (kurang dari 24 jam), akan dikenakan biaya tambahan sesuai kebijakan yang berlaku.",
        "Pembayaran yang sudah dilakukan tidak dapat dikembalikan (non-refundable) kecuali dalam kondisi tertentu yang diatur dalam kebijakan refund kami.",
        "Faktur dan bukti pembayaran akan diberikan untuk setiap transaksi yang berhasil."
      ]
    },
    {
      title: "5. Pengerjaan dan Pengiriman",
      icon: <CheckCircle />,
      content: [
        "Waktu pengerjaan akan disesuaikan dengan deadline yang disepakati saat pemesanan.",
        "Kami berkomitmen untuk mengirimkan hasil pekerjaan tepat waktu sesuai jadwal yang telah disepakati.",
        "Jika terjadi keterlambatan dari pihak kami, pengguna berhak mendapatkan kompensasi berupa diskon atau refund parsial.",
        "Hasil pekerjaan akan dikirimkan melalui email atau platform yang telah disepakati dalam format yang diminta.",
        "Pengguna wajib melakukan review terhadap hasil pekerjaan yang dikirimkan dalam waktu maksimal 3x24 jam.",
        "Keterlambatan review dari pengguna dapat mempengaruhi timeline revisi dan tidak menjadi tanggung jawab kami."
      ]
    },
    {
      title: "6. Kebijakan Revisi",
      icon: <AlertCircle />,
      content: [
        "Kami menyediakan revisi GRATIS untuk perbaikan yang masih dalam scope pekerjaan awal yang disepakati.",
        "Permintaan revisi harus disampaikan maksimal 7 hari setelah pengiriman hasil pekerjaan pertama kali.",
        "Revisi yang memerlukan perubahan signifikan atau di luar scope awal akan dikenakan biaya tambahan.",
        "Jumlah revisi minor tidak dibatasi selama masih dalam scope, namun revisi mayor dibatasi hingga 2 kali.",
        "Revisi harus disampaikan dengan instruksi yang jelas dan spesifik untuk mempercepat proses.",
        "Tidak ada revisi untuk pekerjaan yang sudah disetujui dan telah melewati batas waktu 7 hari."
      ]
    },
    {
      title: "7. Hak Kekayaan Intelektual",
      icon: <Shield />,
      content: [
        "Hasil pekerjaan yang telah dibayar penuh menjadi hak milik pengguna dan dapat digunakan sesuai kebutuhan akademik.",
        "AsistenSebaya memiliki hak untuk menyimpan salinan hasil pekerjaan untuk keperluan internal dan quality control.",
        "Pengguna tidak diperkenankan untuk mengklaim hasil pekerjaan sebagai karya original 100% tanpa modifikasi atau pemahaman mendalam.",
        "Materi referensi, template, dan tools yang digunakan dalam pengerjaan tetap menjadi hak milik AsistenSebaya atau pihak ketiga yang sah.",
        "Pengguna dilarang mendistribusikan, menjual kembali, atau menggunakan hasil pekerjaan untuk kepentingan komersial."
      ]
    },
    {
      title: "8. Kerahasiaan dan Privasi",
      icon: <Shield />,
      content: [
        "Kami berkomitmen untuk menjaga kerahasiaan semua informasi pribadi dan data tugas yang Anda berikan.",
        "Informasi pengguna tidak akan dibagikan kepada pihak ketiga tanpa persetujuan, kecuali diwajibkan oleh hukum.",
        "Data transaksi dan komunikasi akan disimpan dengan aman menggunakan enkripsi dan sistem keamanan terkini.",
        "Untuk detail lebih lanjut mengenai bagaimana kami mengelola data Anda, silakan baca Kebijakan Privasi kami.",
        "Pengguna memiliki hak untuk meminta penghapusan data pribadi mereka sesuai dengan ketentuan yang berlaku."
      ]
    },
    {
      title: "9. Pembatasan Tanggung Jawab",
      icon: <AlertCircle />,
      content: [
        "AsistenSebaya tidak bertanggung jawab atas konsekuensi akademik yang mungkin timbul dari penggunaan hasil pekerjaan kami.",
        "Pengguna bertanggung jawab penuh untuk memastikan bahwa penggunaan layanan kami sesuai dengan kebijakan institusi pendidikan mereka.",
        "Kami tidak menjamin nilai atau hasil akademik tertentu dari penggunaan layanan kami.",
        "AsistenSebaya tidak bertanggung jawab atas kerugian, baik langsung maupun tidak langsung, yang mungkin timbul dari penggunaan atau ketidakmampuan menggunakan layanan kami.",
        "Tanggung jawab kami terbatas pada nilai pembayaran yang telah diterima untuk layanan yang bersangkutan.",
        "Kami tidak bertanggung jawab atas gangguan teknis, kehilangan data, atau masalah lain di luar kendali kami."
      ]
    },
    {
      title: "10. Pembatalan dan Pengembalian Dana",
      icon: <Scale />,
      content: [
        "Pembatalan dapat dilakukan maksimal 24 jam setelah pemesanan dengan refund 100%.",
        "Pembatalan setelah pengerjaan dimulai akan dikenakan biaya administrasi 30% dari total pembayaran.",
        "Refund penuh dapat diberikan jika kami tidak dapat menyelesaikan pekerjaan sesuai kesepakatan awal.",
        "Keterlambatan pengiriman lebih dari 24 jam dari deadline yang disepakati akan mendapatkan kompensasi berupa refund parsial 20-50%.",
        "Permintaan refund harus diajukan secara tertulis dengan alasan yang jelas dan bukti yang mendukung.",
        "Proses refund akan diproses dalam 7-14 hari kerja setelah persetujuan."
      ]
    },
    {
      title: "11. Penyelesaian Sengketa",
      icon: <Scale />,
      content: [
        "Jika terjadi perselisihan, kedua belah pihak setuju untuk menyelesaikan secara musyawarah terlebih dahulu.",
        "Mediasi akan dilakukan melalui channel komunikasi resmi AsistenSebaya.",
        "Jika mediasi tidak berhasil, penyelesaian dapat dilakukan melalui jalur hukum yang berlaku di Indonesia.",
        "Yurisdiksi hukum yang berlaku adalah hukum Negara Republik Indonesia.",
        "Pengguna setuju bahwa pengadilan di Jakarta, Indonesia memiliki yurisdiksi eksklusif atas setiap sengketa."
      ]
    },
    {
      title: "12. Ketentuan Umum",
      icon: <Info />,
      content: [
        "Jika ada bagian dari Syarat dan Ketentuan ini yang dianggap tidak sah atau tidak dapat diterapkan, bagian lainnya tetap berlaku.",
        "Kegagalan kami untuk menegakkan hak atau ketentuan tertentu tidak dianggap sebagai pengesampingan hak tersebut.",
        "Syarat dan Ketentuan ini merupakan kesepakatan lengkap antara Anda dan AsistenSebaya.",
        "Tidak ada perubahan terhadap Syarat dan Ketentuan ini yang akan mengikat kecuali dibuat secara tertulis dan ditandatangani oleh perwakilan resmi kami.",
        "Pengguna tidak dapat mengalihkan hak dan kewajiban berdasarkan Syarat dan Ketentuan ini tanpa persetujuan tertulis dari kami."
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
            <Scale className="w-16 h-16 text-orange-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Syarat & <span className="text-orange-accent">Ketentuan</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Terakhir diperbarui: 8 November 2025
            </p>
            <p className="text-gray-400 mt-4">
              Mohon baca dengan seksama sebelum menggunakan layanan kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-orange-accent/10 border border-orange-accent/30 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-orange-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Pemberitahuan Penting
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Dengan menggunakan layanan AsistenSebaya, Anda secara otomatis menyetujui
                  seluruh Syarat dan Ketentuan yang tercantum di halaman ini. Pastikan Anda
                  memahami hak dan kewajiban Anda sebagai pengguna layanan kami.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                <ul className="space-y-4 ml-16">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-accent flex-shrink-0 mt-0.5" />
                      <p className="text-gray-400 leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-orange-accent to-orange-500 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ada Pertanyaan tentang Syarat & Ketentuan?
            </h3>
            <p className="text-white/90 mb-6">
              Jika ada hal yang kurang jelas atau ingin dikonfirmasi, jangan ragu untuk menghubungi kami
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

export default TermsPage;
