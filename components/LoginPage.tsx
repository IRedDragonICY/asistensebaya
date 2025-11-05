import React from 'react';
import { BrainCircuit, Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Page } from '../App';

type AuthPageProps = {
  navigate: (page: Page) => void;
}

const FormInput = ({ icon, type, placeholder, delay = 0 }: { icon: React.ReactNode, type: string, placeholder: string, delay?: number }) => (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
    >
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">{icon}</span>
        <motion.input
            type={type}
            placeholder={placeholder}
            className="w-full bg-dark-bg text-gray-300 pl-12 pr-4 py-3 rounded-full shadow-neumorphic-in focus:outline-none focus:ring-2 focus:ring-orange-accent transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
        />
    </motion.div>
);

const LoginPage: React.FC<AuthPageProps> = ({ navigate }) => {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute top-0 left-0 w-64 h-64 bg-orange-accent/10 rounded-full filter blur-3xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-72 h-72 bg-orange-accent/20 rounded-full filter blur-3xl opacity-30"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -30, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
        </div>

        <motion.div
          className="relative z-10 w-full max-w-md bg-dark-bg-secondary p-8 md:p-12 rounded-3xl shadow-neumorphic-out"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                <motion.a
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigate('home'); }}
                  className="inline-flex items-center gap-2 mb-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <BrainCircuit className="w-10 h-10 text-orange-accent" />
                    </motion.div>
                    <span className="text-2xl font-bold text-white tracking-tight">
                        Asisten<span className="text-orange-accent">Sebaya</span>
                    </span>
                </motion.a>
                <h1 className="text-3xl font-bold text-white">Selamat Datang Kembali!</h1>
                <p className="text-gray-400 mt-2">Login untuk melanjutkan belajarmu.</p>
            </motion.div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <FormInput icon={<Mail size={20} />} type="email" placeholder="Alamat Email" delay={0.4} />
                <FormInput icon={<Lock size={20} />} type="password" placeholder="Kata Sandi" delay={0.5} />

                <motion.button
                  type="submit"
                  className="w-full bg-orange-accent text-white font-bold py-3 px-8 rounded-full shadow-neumorphic-out text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "inset 8px 8px 16px #1a1c20, inset -4px -4px 8px #22242a"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                    Login
                </motion.button>
            </form>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
                <p className="text-sm text-gray-400">
                    Belum punya akun?{' '}
                    <motion.a
                      href="#"
                      onClick={(e) => { e.preventDefault(); navigate('register'); }}
                      className="font-semibold text-orange-accent hover:underline"
                      whileHover={{ scale: 1.05 }}
                    >
                        Daftar di sini
                    </motion.a>
                </p>
                <motion.a
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigate('home'); }}
                  className="mt-4 inline-block text-sm text-gray-500 hover:text-orange-accent transition-colors"
                  whileHover={{ x: -5 }}
                >
                    &larr; Kembali ke Beranda
                </motion.a>
            </motion.div>
        </motion.div>
    </div>
  );
};

export default LoginPage;