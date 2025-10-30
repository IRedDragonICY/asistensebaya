
import React from 'react';
import { BrainCircuit, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg-secondary mt-20 shadow-neumorphic-in">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
                <a href="#" className="flex items-center gap-2 mb-4">
                    <BrainCircuit className="w-8 h-8 text-orange-accent" />
                    <span className="text-xl font-bold text-white">AsistenSebaya</span>
                </a>
                <p className="text-gray-400 text-sm">Partner belajar andalan mahasiswa Indonesia.</p>
                <div className="flex gap-4 mt-6">
                    <a href="#" className="text-gray-400 hover:text-orange-accent transition-colors"><Twitter /></a>
                    <a href="#" className="text-gray-400 hover:text-orange-accent transition-colors"><Instagram /></a>
                    <a href="#" className="text-gray-400 hover:text-orange-accent transition-colors"><Linkedin /></a>
                </div>
            </div>
             <div>
                <h4 className="font-bold text-white mb-4">Layanan</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-400 hover:text-orange-accent transition-colors">Makalah & Esai</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-accent transition-colors">Presentasi (PPT)</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-accent transition-colors">Tugas Koding</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-accent transition-colors">Analisis Data</a></li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold text-white mb-4">Perusahaan</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-400 hover:text-orange-accent transition-colors">Tentang Kami</a></li>
                    <li><a href="#affiliate" className="text-gray-400 hover:text-orange-accent transition-colors">Karir (Jadi Tutor)</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-accent transition-colors">Kontak</a></li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-400 hover:text-orange-accent transition-colors">Syarat & Ketentuan</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-accent transition-colors">Kebijakan Privasi</a></li>
                </ul>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Asisten Sebaya. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
