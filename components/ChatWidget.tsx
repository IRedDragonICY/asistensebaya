
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Paperclip, Send, Loader, User } from 'lucide-react';
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
      <button
        id="chat"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-orange-accent text-white w-16 h-16 rounded-full flex items-center justify-center shadow-neumorphic-out hover:bg-orange-accent-hover hover:shadow-neumorphic-in transition-all duration-300 transform hover:scale-110"
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
      </button>

      <div
        className={`fixed bottom-24 right-6 z-50 w-[90vw] max-w-md h-[70vh] bg-dark-bg-secondary rounded-3xl shadow-neumorphic-out flex flex-col transition-all duration-500 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-700 shadow-neumorphic-in-sm">
          <div className="flex items-center gap-3">
            <img src="https://picsum.photos/id/433/40/40" className="w-10 h-10 rounded-full"/>
            <div>
              <h3 className="font-bold text-white">Asisten Sebaya</h3>
              <p className="text-xs text-green-400">Online</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'model' && <img src="https://picsum.photos/id/433/40/40" className="w-8 h-8 rounded-full self-end"/>}
              <div
                className={`max-w-xs md:max-w-sm p-3 rounded-2xl ${
                  msg.role === 'user' ? 'bg-orange-accent text-white rounded-br-none' : 'bg-dark-bg text-gray-300 rounded-bl-none shadow-neumorphic-out-sm'
                }`}
              >
                {msg.filePreview && <img src={msg.filePreview} alt="upload preview" className="rounded-lg mb-2 max-h-40"/>}
                <p className="text-sm">{msg.text}</p>
              </div>
               {msg.role === 'user' && <User className="w-8 h-8 rounded-full self-end bg-gray-700 p-1"/>}
            </div>
          ))}
           {isLoading && (
              <div className="flex gap-3 justify-start">
                  <img src="https://picsum.photos/id/433/40/40" className="w-8 h-8 rounded-full self-end"/>
                  <div className="max-w-xs md:max-w-sm p-3 rounded-2xl bg-dark-bg text-gray-300 rounded-bl-none shadow-neumorphic-out-sm">
                    <div className="flex items-center gap-2">
                      <Loader className="animate-spin w-4 h-4" />
                      <span className="text-sm italic">Asisten lagi ngetik...</span>
                    </div>
                  </div>
              </div>
            )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-gray-700">
           {filePreview && (
            <div className="relative w-24 mb-2">
              <img src={filePreview} alt="preview" className="rounded-lg" />
              <button onClick={() => { setFile(null); setFilePreview(null); }} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                <X size={16} />
              </button>
            </div>
          )}
          <div className="flex items-center gap-2 p-2 bg-dark-bg rounded-full shadow-neumorphic-in">
            <button onClick={() => fileInputRef.current?.click()} className="p-2 text-gray-400 hover:text-orange-accent transition-colors">
              <Paperclip size={20} />
            </button>
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
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
              className="p-2 bg-orange-accent text-white rounded-full disabled:bg-gray-600 hover:bg-orange-accent-hover transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
