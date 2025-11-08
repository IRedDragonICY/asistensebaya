import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Presentation,
  Code,
  BarChart3,
  FileText,
  Calculator,
  Microscope,
  Building2,
  Palette,
  Stethoscope,
  Scale,
  Briefcase,
  Landmark,
  GraduationCap,
  Globe,
  Music,
  Camera,
  Cpu,
  FlaskConical,
  LineChart,
  Brain,
  Heart,
  TreePine,
  Factory,
  Languages,
  Users,
  Plane,
  Home,
  Zap,
  CheckCircle,
  ArrowRight,
  Search,
  X
} from 'lucide-react';
import type { Page } from '../App';

type ServicesPageProps = {
  navigate: (page: Page) => void;
};

// Komprehensif daftar layanan berdasarkan jenis tugas
const serviceTypes = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Makalah & Esai",
    description: "Bantuan pembuatan makalah, esai, artikel ilmiah, jurnal, dan karya tulis akademik lainnya dengan referensi lengkap dan metodologi yang tepat.",
    features: [
      "Penulisan makalah ilmiah",
      "Esai akademik & argumentatif",
      "Literature review & tinjauan pustaka",
      "Artikel jurnal ilmiah",
      "Karya tulis penelitian",
      "Referensi APA, MLA, Chicago, IEEE"
    ]
  },
  {
    icon: <Presentation className="w-8 h-8" />,
    title: "Presentasi (PPT)",
    description: "Pembuatan presentasi PowerPoint yang menarik, profesional, dan informatif dengan desain modern dan konten yang terstruktur.",
    features: [
      "Desain slide profesional",
      "Infografis & visualisasi data",
      "Template custom sesuai tema",
      "Animasi & transisi menarik",
      "Speaker notes lengkap",
      "Export ke PDF/Video"
    ]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Tugas Koding & Programming",
    description: "Bantuan pengerjaan tugas programming dari berbagai bahasa pemrograman dengan kode yang clean, terdokumentasi, dan best practices.",
    features: [
      "Python, Java, C++, C#, JavaScript",
      "PHP, Ruby, Go, Kotlin, Swift",
      "Web Development (HTML, CSS, React, Vue, Angular)",
      "Mobile Development (Android, iOS, Flutter)",
      "Database (SQL, MongoDB, Firebase)",
      "Machine Learning & AI",
      "Data Structures & Algorithms",
      "OOP & Design Patterns"
    ]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analisis Data & Statistik",
    description: "Pengolahan dan analisis data menggunakan berbagai tools statistik dengan interpretasi hasil yang mendalam dan visualisasi yang jelas.",
    features: [
      "SPSS - Analisis statistik lengkap",
      "Excel - Data processing & pivot",
      "R Studio - Statistical computing",
      "Python (Pandas, NumPy, Matplotlib)",
      "Tableau - Data visualization",
      "Power BI - Business intelligence",
      "SAS - Advanced analytics",
      "STATA - Econometric analysis",
      "AMOS - Structural equation modeling",
      "SmartPLS - PLS-SEM analysis"
    ]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Desain Grafis & Multimedia",
    description: "Pembuatan desain grafis, ilustrasi, video editing, dan konten multimedia untuk berbagai keperluan akademik dan profesional.",
    features: [
      "Adobe Photoshop - Photo editing",
      "Adobe Illustrator - Vector design",
      "CorelDRAW - Graphic design",
      "Adobe Premiere - Video editing",
      "After Effects - Motion graphics",
      "Blender - 3D modeling & animation",
      "Figma - UI/UX design",
      "AutoCAD - Technical drawing"
    ]
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Tugas Matematika & Komputasi",
    description: "Penyelesaian soal matematika tingkat lanjut, perhitungan komputasi, dan pemodelan matematis dengan step-by-step solution.",
    features: [
      "Kalkulus & Aljabar Linear",
      "Statistika & Probabilitas",
      "Matematika Diskrit",
      "Persamaan Diferensial",
      "Analisis Numerik",
      "Metode Numerik",
      "MATLAB & Mathematica",
      "Optimasi & Riset Operasi"
    ]
  },
  {
    icon: <FlaskConical className="w-8 h-8" />,
    title: "Laporan Praktikum & Lab Report",
    description: "Pembuatan laporan praktikum laboratorium dengan format ilmiah, analisis data eksperimen, dan pembahasan yang komprehensif.",
    features: [
      "Kimia - Laporan analisis & sintesis",
      "Fisika - Eksperimen & pengukuran",
      "Biologi - Observasi & mikroskopis",
      "Farmasi - Formulasi & uji laboratorium",
      "Teknik - Testing & material analysis",
      "Format ilmiah standar laboratorium"
    ]
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Skripsi, Tesis & Disertasi",
    description: "Bimbingan dan bantuan penyusunan skripsi, tesis, dan disertasi dari proposal hingga sidang dengan metodologi penelitian yang tepat.",
    features: [
      "Proposal penelitian",
      "BAB 1-5 lengkap",
      "Metodologi penelitian",
      "Pengolahan data kuantitatif/kualitatif",
      "Analisis & pembahasan",
      "Revisi pasca sidang",
      "Plagiarism check & turnitin"
    ]
  }
];

// Daftar lengkap jurusan di Indonesia dari A-Z dengan ikon dan tools khusus
const majors = [
  { name: "Administrasi Bisnis", icon: <Briefcase />, tools: ["SPSS", "Excel", "Power BI"], color: "from-blue-500 to-cyan-500" },
  { name: "Administrasi Negara", icon: <Landmark />, tools: ["SPSS", "NVivo"], color: "from-purple-500 to-pink-500" },
  { name: "Administrasi Publik", icon: <Building2 />, tools: ["SPSS", "Tableau"], color: "from-green-500 to-emerald-500" },
  { name: "Agroteknologi", icon: <TreePine />, tools: ["SPSS", "ArcGIS", "R"], color: "from-green-600 to-lime-500" },
  { name: "Agribisnis", icon: <Factory />, tools: ["Excel", "SPSS", "Power BI"], color: "from-yellow-600 to-orange-500" },
  { name: "Aktuaria", icon: <Calculator />, tools: ["R", "Python", "Excel"], color: "from-indigo-500 to-blue-600" },
  { name: "Akuntansi", icon: <Calculator />, tools: ["Excel", "SPSS", "MYOB"], color: "from-blue-600 to-indigo-500" },
  { name: "Antropologi", icon: <Users />, tools: ["NVivo", "SPSS", "Atlas.ti"], color: "from-orange-500 to-red-500" },
  { name: "Arsitektur", icon: <Building2 />, tools: ["AutoCAD", "SketchUp", "Revit", "3ds Max"], color: "from-gray-600 to-slate-500" },
  { name: "Astronomi", icon: <Globe />, tools: ["Python", "MATLAB", "IDL"], color: "from-purple-600 to-indigo-700" },
  { name: "Biologi", icon: <Microscope />, tools: ["SPSS", "ImageJ", "R"], color: "from-green-500 to-teal-500" },
  { name: "Bioteknologi", icon: <FlaskConical />, tools: ["BLAST", "PyMOL", "R"], color: "from-cyan-500 to-blue-500" },
  { name: "Desain Grafis", icon: <Palette />, tools: ["Photoshop", "Illustrator", "CorelDRAW"], color: "from-pink-500 to-rose-500" },
  { name: "Desain Komunikasi Visual (DKV)", icon: <Camera />, tools: ["Photoshop", "Illustrator", "After Effects", "Premiere"], color: "from-purple-500 to-pink-600" },
  { name: "Desain Interior", icon: <Home />, tools: ["AutoCAD", "3ds Max", "SketchUp"], color: "from-amber-500 to-yellow-600" },
  { name: "Desain Produk", icon: <Palette />, tools: ["SolidWorks", "Rhino", "Blender"], color: "from-red-500 to-orange-500" },
  { name: "Ekonomi", icon: <LineChart />, tools: ["SPSS", "STATA", "EViews"], color: "from-green-600 to-emerald-600" },
  { name: "Ekonomi Pembangunan", icon: <BarChart3 />, tools: ["STATA", "SPSS", "R"], color: "from-teal-500 to-cyan-600" },
  { name: "Farmasi", icon: <Stethoscope />, tools: ["ChemDraw", "SPSS"], color: "from-red-500 to-pink-500" },
  { name: "Filsafat", icon: <Brain />, tools: ["NVivo", "Atlas.ti"], color: "from-indigo-600 to-purple-600" },
  { name: "Fisika", icon: <Zap />, tools: ["MATLAB", "Python", "LabVIEW"], color: "from-blue-500 to-cyan-600" },
  { name: "Geografi", icon: <Globe />, tools: ["ArcGIS", "QGIS", "Google Earth"], color: "from-emerald-500 to-green-600" },
  { name: "Geologi", icon: <TreePine />, tools: ["ArcGIS", "Surfer", "MATLAB"], color: "from-stone-600 to-amber-700" },
  { name: "Gizi", icon: <Heart />, tools: ["SPSS", "NutriSurvey"], color: "from-rose-500 to-pink-600" },
  { name: "Hubungan Internasional", icon: <Globe />, tools: ["NVivo", "SPSS"], color: "from-blue-600 to-indigo-600" },
  { name: "Hukum", icon: <Scale />, tools: ["Westlaw", "NVivo"], color: "from-amber-700 to-yellow-800" },
  { name: "Ilmu Komunikasi", icon: <Users />, tools: ["SPSS", "NVivo", "Adobe Suite"], color: "from-cyan-500 to-blue-600" },
  { name: "Ilmu Komputer", icon: <Cpu />, tools: ["Python", "Java", "C++", "VS Code"], color: "from-blue-500 to-indigo-600" },
  { name: "Ilmu Lingkungan", icon: <TreePine />, tools: ["ArcGIS", "SPSS", "R"], color: "from-green-600 to-emerald-700" },
  { name: "Ilmu Politik", icon: <Landmark />, tools: ["SPSS", "NVivo"], color: "from-red-600 to-rose-600" },
  { name: "Kehutanan", icon: <TreePine />, tools: ["ArcGIS", "SPSS"], color: "from-green-700 to-lime-800" },
  { name: "Kedokteran", icon: <Stethoscope />, tools: ["SPSS", "EndNote"], color: "from-red-500 to-rose-500" },
  { name: "Kedokteran Gigi", icon: <Stethoscope />, tools: ["SPSS", "3D Imaging"], color: "from-cyan-500 to-blue-500" },
  { name: "Keperawatan", icon: <Heart />, tools: ["SPSS", "EndNote"], color: "from-blue-400 to-cyan-500" },
  { name: "Kimia", icon: <FlaskConical />, tools: ["ChemDraw", "MATLAB", "Origin"], color: "from-purple-500 to-violet-600" },
  { name: "Manajemen", icon: <Briefcase />, tools: ["SPSS", "Excel", "Power BI"], color: "from-blue-600 to-cyan-600" },
  { name: "Manajemen Informatika", icon: <Cpu />, tools: ["MySQL", "PHP", "Laravel"], color: "from-indigo-500 to-blue-600" },
  { name: "Matematika", icon: <Calculator />, tools: ["SPSS", "MATLAB", "R", "Python"], color: "from-purple-600 to-pink-600" },
  { name: "Pendidikan", icon: <GraduationCap />, tools: ["SPSS", "NVivo"], color: "from-yellow-500 to-orange-500" },
  { name: "Pendidikan Bahasa Inggris", icon: <Languages />, tools: ["Grammarly", "NVivo"], color: "from-blue-500 to-cyan-500" },
  { name: "Pendidikan Matematika", icon: <Calculator />, tools: ["SPSS", "GeoGebra"], color: "from-indigo-500 to-purple-600" },
  { name: "Perikanan", icon: <Microscope />, tools: ["SPSS", "ArcGIS"], color: "from-blue-500 to-teal-500" },
  { name: "Peternakan", icon: <TreePine />, tools: ["SPSS", "Excel"], color: "from-amber-600 to-orange-600" },
  { name: "Psikologi", icon: <Brain />, tools: ["SPSS", "AMOS", "SmartPLS", "NVivo"], color: "from-purple-500 to-pink-500" },
  { name: "Sastra Indonesia", icon: <BookOpen />, tools: ["NVivo", "Atlas.ti"], color: "from-red-500 to-orange-500" },
  { name: "Sastra Inggris", icon: <Languages />, tools: ["NVivo", "Grammarly"], color: "from-blue-500 to-indigo-500" },
  { name: "Sistem Informasi", icon: <Cpu />, tools: ["MySQL", "PHP", "Java", "UML"], color: "from-cyan-500 to-blue-600" },
  { name: "Sosiologi", icon: <Users />, tools: ["SPSS", "NVivo", "Atlas.ti"], color: "from-orange-500 to-red-500" },
  { name: "Statistika", icon: <LineChart />, tools: ["SPSS", "R", "Python", "SAS"], color: "from-blue-600 to-purple-600" },
  { name: "Teknik Arsitektur", icon: <Building2 />, tools: ["AutoCAD", "SketchUp", "Lumion"], color: "from-slate-600 to-gray-600" },
  { name: "Teknik Elektro", icon: <Zap />, tools: ["MATLAB", "Simulink", "PSpice"], color: "from-yellow-500 to-amber-600" },
  { name: "Teknik Industri", icon: <Factory />, tools: ["Excel", "SPSS", "Arena", "POM-QM"], color: "from-orange-600 to-red-600" },
  { name: "Teknik Informatika", icon: <Code />, tools: ["Python", "Java", "C++", "JavaScript", "MySQL"], color: "from-blue-500 to-indigo-600" },
  { name: "Teknik Kimia", icon: <FlaskConical />, tools: ["MATLAB", "Aspen HYSYS", "ChemCAD"], color: "from-purple-600 to-pink-600" },
  { name: "Teknik Komputer", icon: <Cpu />, tools: ["Verilog", "VHDL", "Assembly"], color: "from-indigo-600 to-purple-600" },
  { name: "Teknik Lingkungan", icon: <TreePine />, tools: ["AutoCAD", "ArcGIS", "SWMM"], color: "from-green-600 to-teal-600" },
  { name: "Teknik Mesin", icon: <Factory />, tools: ["AutoCAD", "SolidWorks", "ANSYS"], color: "from-gray-600 to-slate-700" },
  { name: "Teknik Perminyakan", icon: <Factory />, tools: ["ECLIPSE", "Petrel", "MATLAB"], color: "from-stone-700 to-amber-800" },
  { name: "Teknik Pertambangan", icon: <Factory />, tools: ["Surfer", "Minescape", "AutoCAD"], color: "from-yellow-800 to-orange-900" },
  { name: "Teknik Sipil", icon: <Building2 />, tools: ["AutoCAD", "SAP2000", "ETABS", "STAAD.Pro"], color: "from-blue-700 to-indigo-800" },
  { name: "Teknologi Pangan", icon: <FlaskConical />, tools: ["SPSS", "Minitab"], color: "from-orange-500 to-red-500" },
  { name: "Pariwisata", icon: <Plane />, tools: ["SPSS", "Excel"], color: "from-cyan-500 to-blue-500" },
  { name: "Perpustakaan & Informasi", icon: <BookOpen />, tools: ["Zotero", "Mendeley", "EndNote"], color: "from-indigo-500 to-purple-500" },
  { name: "Seni Musik", icon: <Music />, tools: ["FL Studio", "Ableton", "Sibelius"], color: "from-pink-500 to-rose-600" },
  { name: "Seni Rupa", icon: <Palette />, tools: ["Photoshop", "Illustrator", "Procreate"], color: "from-purple-500 to-pink-600" },
  { name: "Broadcasting", icon: <Camera />, tools: ["Premiere Pro", "After Effects"], color: "from-red-500 to-orange-600" },
  { name: "Film & Televisi", icon: <Camera />, tools: ["Premiere Pro", "DaVinci Resolve", "Final Cut"], color: "from-purple-600 to-pink-700" }
];

// Daftar universitas terkemuka di Indonesia
const universities = [
  "Universitas Indonesia (UI)",
  "Institut Teknologi Bandung (ITB)",
  "Universitas Gadjah Mada (UGM)",
  "Institut Pertanian Bogor (IPB)",
  "Institut Teknologi Sepuluh Nopember (ITS)",
  "Universitas Airlangga (UNAIR)",
  "Universitas Diponegoro (UNDIP)",
  "Universitas Padjadjaran (UNPAD)",
  "Universitas Brawijaya (UB)",
  "Universitas Hasanuddin (UNHAS)",
  "Universitas Sebelas Maret (UNS)",
  "Universitas Sumatera Utara (USU)",
  "Universitas Andalas (UNAND)",
  "Universitas Sriwijaya (UNSRI)",
  "Telkom University",
  "Bina Nusantara University (BINUS)",
  "Universitas Trisakti",
  "Universitas Gunadarma",
  "Universitas Kristen Petra",
  "Universitas Multimedia Nusantara (UMN)",
  "Universitas Pelita Harapan (UPH)",
  "Universitas Tarumanagara (UNTAR)",
  "Universitas Katolik Indonesia Atma Jaya",
  "Universitas Muhammadiyah Malang (UMM)",
  "Universitas Muhammadiyah Yogyakarta (UMY)",
  "Universitas Islam Indonesia (UII)",
  "Universitas Ahmad Dahlan (UAD)",
  "Universitas Negeri Jakarta (UNJ)",
  "Universitas Negeri Yogyakarta (UNY)",
  "Universitas Negeri Malang (UM)",
  "Universitas Negeri Semarang (UNNES)",
  "Universitas Negeri Surabaya (UNESA)",
  "Universitas Pendidikan Indonesia (UPI)",
  "Universitas Jember (UNEJ)",
  "Universitas Lampung (UNILA)",
  "Universitas Riau (UNRI)",
  "Universitas Udayana (UNUD)",
  "Universitas Mataram (UNRAM)",
  "Universitas Nusa Cendana (UNDANA)",
  "Universitas Halu Oleo (UHO)",
  "Universitas Tadulako (UNTAD)",
  "Universitas Mulawarman (UNMUL)",
  "Universitas Syiah Kuala (UNSYIAH)",
  "Politeknik Elektronika Negeri Surabaya (PENS)",
  "Politeknik Negeri Bandung (POLBAN)",
  "Politeknik Negeri Jakarta (PNJ)",
  "Politeknik Negeri Malang (POLINEMA)",
  "Politeknik Negeri Semarang (POLINES)",
  "STIKOM Surabaya",
  "STMIK AMIKOM Yogyakarta"
];

const ServicesPage: React.FC<ServicesPageProps> = ({ navigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredMajors = majors.filter(major =>
    major.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    major.tools.some(tool => tool.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Layanan <span className="text-orange-accent">Lengkap</span> untuk Semua Kebutuhan Akademik
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Dari Makalah hingga Analisis Data, dari Coding hingga Desain Grafis.
            Kami melayani <span className="text-orange-accent font-semibold">SEMUA jurusan</span> dan <span className="text-orange-accent font-semibold">SEMUA universitas</span> di Indonesia!
          </motion.p>
        </div>
      </section>

      {/* Service Types Grid */}
      <section className="py-16 px-6 bg-dark-bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Jenis <span className="text-orange-accent">Layanan</span> Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTypes.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-dark-bg p-6 rounded-2xl shadow-neumorphic-out hover:shadow-neumorphic-out-lg transition-all duration-300 cursor-pointer border border-gray-800 hover:border-orange-accent/30"
                onClick={() => setSelectedCategory(selectedCategory === service.title ? null : service.title)}
              >
                <div className="text-orange-accent mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <AnimatePresence>
                  {selectedCategory === service.title && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-2 overflow-hidden"
                    >
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-orange-accent flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Majors Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-orange-accent">65+</span> Jurusan yang Kami Layani
            </h2>
            <p className="text-gray-400 text-lg">
              Dari A sampai Z, semua jurusan di Indonesia dengan tools dan software spesifik!
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari jurusan atau tools (contoh: SPSS, AutoCAD, Photoshop)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-dark-bg-secondary border border-gray-700 rounded-full py-4 pl-12 pr-12 text-gray-300 focus:border-orange-accent focus:outline-none transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-accent"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Majors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMajors.map((major, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br bg-dark-bg-secondary border border-gray-800 hover:border-orange-accent/50 transition-all duration-300 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${major.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="text-orange-accent mb-3 transform group-hover:scale-110 transition-transform">
                    {major.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-orange-accent transition-colors">
                    {major.name}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {major.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-dark-bg px-2 py-1 rounded-full text-gray-400 group-hover:text-orange-accent group-hover:bg-orange-accent/10 transition-all"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredMajors.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                Tidak menemukan jurusan yang dicari? <br />
                <span className="text-orange-accent">Hubungi kami</span>, kami melayani semua jurusan!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 px-6 bg-dark-bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Melayani <span className="text-orange-accent">Semua Universitas</span> di Indonesia
            </h2>
            <p className="text-gray-400 text-lg">
              PTN, PTS, Politeknik - Kami siap membantu mahasiswa dari seluruh Indonesia!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 bg-dark-bg p-4 rounded-lg border border-gray-800 hover:border-orange-accent/50 transition-all group"
              >
                <CheckCircle className="w-5 h-5 text-orange-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {university}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-xl text-gray-300">
              Dan <span className="text-orange-accent font-bold">ratusan universitas lainnya</span> di seluruh Indonesia!
            </p>
          </motion.div>
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
              Siap Membantu Tugas Anda Sekarang!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Apapun jurusanmu, apapun universitasmu, apapun jenis tugasnya - kami siap membantu dengan profesional dan berkualitas!
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

export default ServicesPage;
