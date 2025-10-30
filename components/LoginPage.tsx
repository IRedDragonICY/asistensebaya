import React from 'react';
import { BrainCircuit, Mail, Lock } from 'lucide-react';
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

const LoginPage: React.FC<AuthPageProps> = ({ navigate }) => {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-accent/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-md bg-dark-bg-secondary p-8 md:p-12 rounded-3xl shadow-neumorphic-out">
            <div className="text-center mb-8">
                <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="inline-flex items-center gap-2 mb-4">
                    <BrainCircuit className="w-10 h-10 text-orange-accent" />
                    <span className="text-2xl font-bold text-white tracking-tight">
                        Asisten<span className="text-orange-accent">Sebaya</span>
                    </span>
                </a>
                <h1 className="text-3xl font-bold text-white">Selamat Datang Kembali!</h1>
                <p className="text-gray-400 mt-2">Login untuk melanjutkan belajarmu.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <FormInput icon={<Mail size={20} />} type="email" placeholder="Alamat Email" />
                <FormInput icon={<Lock size={20} />} type="password" placeholder="Kata Sandi" />

                <button type="submit" className="w-full bg-orange-accent text-white font-bold py-3 px-8 rounded-full shadow-neumorphic-out text-lg hover:bg-orange-accent-hover hover:shadow-neumorphic-in transition-all duration-300 transform hover:scale-105">
                    Login
                </button>
            </form>

            <div className="text-center mt-8">
                <p className="text-sm text-gray-400">
                    Belum punya akun?{' '}
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('register'); }} className="font-semibold text-orange-accent hover:underline">
                        Daftar di sini
                    </a>
                </p>
                 <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="mt-4 inline-block text-sm text-gray-500 hover:text-orange-accent transition-colors">
                    &larr; Kembali ke Beranda
                </a>
            </div>
        </div>
        <style jsx>{`
            .animate-blob { animation: blob 7s infinite; }
            .animation-delay-4000 { animation-delay: -4s; }
            @keyframes blob {
                0% { transform: translate(0px, 0px) scale(1); }
                33% { transform: translate(30px, -50px) scale(1.1); }
                66% { transform: translate(-20px, 20px) scale(0.9); }
                100% { transform: translate(0px, 0px) scale(1); }
            }
        `}</style>
    </div>
  );
};

export default LoginPage;