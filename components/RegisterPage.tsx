import React from 'react';
import { BrainCircuit, Mail, Lock, User } from 'lucide-react';
import type { Page } from '../App';

type AuthPageProps = {
  navigate: (page: Page) => void;
}

const FormInput = ({ icon, type, placeholder }: { icon: React.ReactNode, type: string, placeholder: string }) => (
    <div className="relative w-full">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">{icon}</span>
        <input 
            type={type} 
            placeholder={placeholder}
            className="w-full bg-dark-bg text-gray-300 pl-12 pr-4 py-3 rounded-full shadow-neumorphic-in focus:outline-none focus:ring-2 focus:ring-orange-accent transition-all duration-300"
        />
    </div>
);

const RegisterPage: React.FC<AuthPageProps> = ({ navigate }) => {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-orange-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob-soft animation-delay-2000"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-accent/20 rounded-full filter blur-3xl opacity-30 animate-blob-soft animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-md bg-dark-bg-secondary p-8 md:p-12 rounded-3xl shadow-neumorphic-out">
            <div className="text-center mb-8">
                 <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="inline-flex items-center gap-2 mb-4">
                    <BrainCircuit className="w-10 h-10 text-orange-accent" />
                    <span className="text-2xl font-bold text-white tracking-tight">
                        Asisten<span className="text-orange-accent">Sebaya</span>
                    </span>
                </a>
                <h1 className="text-3xl font-bold text-white">Gabung Sekarang!</h1>
                <p className="text-gray-400 mt-2">Buat akun barumu dan mulai belajar cerdas.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <FormInput icon={<User size={20} />} type="text" placeholder="Nama Lengkap" />
                <FormInput icon={<Mail size={20} />} type="email" placeholder="Alamat Email" />
                <FormInput icon={<Lock size={20} />} type="password" placeholder="Buat Kata Sandi" />
                <FormInput icon={<Lock size={20} />} type="password" placeholder="Konfirmasi Kata Sandi" />

                <button type="submit" className="w-full bg-orange-accent text-white font-bold py-3 px-8 rounded-full shadow-neumorphic-out text-lg hover:bg-orange-accent-hover hover:shadow-neumorphic-in transition-all duration-300 transform hover:scale-105">
                    Buat Akun
                </button>
            </form>

            <div className="text-center mt-8">
                <p className="text-sm text-gray-400">
                    Sudah punya akun?{' '}
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('login'); }} className="font-semibold text-orange-accent hover:underline">
                        Login di sini
                    </a>
                </p>
                 <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="mt-4 inline-block text-sm text-gray-500 hover:text-orange-accent transition-colors">
                    &larr; Kembali ke Beranda
                </a>
            </div>
        </div>
    </div>
  );
};

export default RegisterPage;