
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Paperclip, Send, Loader, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateResponse } from '../services/geminiService';
import type { Message } from '../types';

const fileToGenerativePart = async (file: File) => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
    reader.readAsDataURL(file);
  });
  return {
    mimeType: file.type,
    data: await base64EncodedDataPromise,
  };
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
        setIsLoading(true);
        setTimeout(() => {
            setMessages([
                { id: 'initial', role: 'model', text: 'Halo kak! Ada tugas yang bisa aku bantu? Coba upload file atau ketik pertanyaanmu di bawah ya!' }
            ]);
            setIsLoading(false);
        }, 1000);
    }
  }, [isOpen, messages.length]);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
        if(selectedFile.type.startsWith('image/')) {
            setFile(selectedFile);
            setFilePreview(URL.createObjectURL(selectedFile));
        } else {
            alert('Saat ini hanya mendukung file gambar (JPEG, PNG, dll).');
        }
    }
  };

  const handleSendMessage = async () => {
    if ((!input.trim() && !file) || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input, filePreview: filePreview || undefined };
    setMessages((prev) => [...prev, userMessage]);

    setInput('');
    setFile(null);
    setFilePreview(null);
    setIsLoading(true);

    try {
        const filePart = file ? await fileToGenerativePart(file) : undefined;
        const responseText = await generateResponse(input, filePart);
        const modelMessage: Message = { id: (Date.now() + 1).toString(), role: 'model', text: responseText };
        setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
        console.error(error);
        const errorMessage: Message = { id: (Date.now() + 1).toString(), role: 'model', text: 'Waduh, ada masalah nih. Coba lagi nanti ya.' };
        setMessages((prev) => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        id="chat"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-orange-accent text-white w-16 h-16 rounded-full flex items-center justify-center shadow-neumorphic-out"
        whileHover={{
          scale: 1.1,
          boxShadow: "inset 8px 8px 16px #1a1c20, inset -4px -4px 8px #22242a"
        }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? {} : { y: [0, -10, 0] }}
        transition={isOpen ? {} : { duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={32} />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare size={32} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-md h-[70vh] bg-dark-bg-secondary rounded-3xl shadow-neumorphic-out flex flex-col"
            initial={{ scale: 0, opacity: 0, originX: 1, originY: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="p-4 flex items-center justify-between border-b border-gray-700 shadow-neumorphic-in-sm"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center gap-3">
                <motion.img
                  src="https://picsum.photos/id/433/40/40"
                  className="w-10 h-10 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2, type: "spring" }}
                />
                <div>
                  <h3 className="font-bold text-white">Asisten Sebaya</h3>
                  <motion.p
                    className="text-xs text-green-400 flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-green-400 rounded-full inline-block"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Online
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {msg.role === 'model' && (
                      <motion.img
                        src="https://picsum.photos/id/433/40/40"
                        className="w-8 h-8 rounded-full self-end"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    <motion.div
                      className={`max-w-xs md:max-w-sm p-3 rounded-2xl ${
                        msg.role === 'user' ? 'bg-orange-accent text-white rounded-br-none' : 'bg-dark-bg text-gray-300 rounded-bl-none shadow-neumorphic-out-sm'
                      }`}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      {msg.filePreview && (
                        <motion.img
                          src={msg.filePreview}
                          alt="upload preview"
                          className="rounded-lg mb-2 max-h-40"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <p className="text-sm">{msg.text}</p>
                    </motion.div>
                    {msg.role === 'user' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <User className="w-8 h-8 rounded-full self-end bg-gray-700 p-1"/>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                <motion.div
                  className="flex gap-3 justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="https://picsum.photos/id/433/40/40" className="w-8 h-8 rounded-full self-end"/>
                  <div className="max-w-xs md:max-w-sm p-3 rounded-2xl bg-dark-bg text-gray-300 rounded-bl-none shadow-neumorphic-out-sm">
                    <div className="flex items-center gap-2">
                      <Loader className="animate-spin w-4 h-4" />
                      <span className="text-sm italic">Asisten lagi ngetik...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <motion.div
              className="p-4 border-t border-gray-700"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <AnimatePresence>
                {filePreview && (
                  <motion.div
                    className="relative w-24 mb-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img src={filePreview} alt="preview" className="rounded-lg" />
                    <motion.button
                      onClick={() => { setFile(null); setFilePreview(null); }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X size={16} />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="flex items-center gap-2 p-2 bg-dark-bg rounded-full shadow-neumorphic-in">
                <motion.button
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 text-gray-400 hover:text-orange-accent transition-colors"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Paperclip size={20} />
                </motion.button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*,application/pdf,.doc,.docx,.ppt,.pptx"
                />
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ketik pesanmu..."
                  className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  className="p-2 bg-orange-accent text-white rounded-full disabled:bg-gray-600"
                  whileHover={{ scale: 1.1, rotate: -15 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
