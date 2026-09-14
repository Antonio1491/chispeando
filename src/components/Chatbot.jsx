import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: '¡Hola! 🚀 Soy Chispa-Bot. ¿Te gustaría saber más sobre nuestros cursos STEAM para tus peques?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      // Esta llamada contacta de manera segura a nuestro Backend en Vercel
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: 'bot', text: data.text }]);
      } else {
        setMessages(prev => [...prev, { role: 'bot', text: 'Ups, se me cruzaron los cables. 🤖 ¿Podrías intentar de nuevo más tarde?' }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Hubo un problema de conexión. 😢' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-[90vw] sm:w-[360px] overflow-hidden flex flex-col h-[min(500px,70vh)]"
          >
            {/* Cabecera bonita (Gradient) */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-4 text-white flex justify-between items-center shadow-sm z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                  🤖
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-none tracking-tight">Chispa-Bot</h3>
                  <p className="text-xs text-orange-100 mt-1 font-medium bg-orange-600/30 w-max px-2 py-0.5 rounded-full">
                    <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                    En línea
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-black/10 p-1.5 rounded-full transition-colors active:scale-95 text-white/90"
              >
                <X size={20} className="stroke-[2.5px]" />
              </button>
            </div>

            {/* Zona de Mensajes */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`p-3.5 rounded-[1.25rem] max-w-[85%] text-sm leading-relaxed shadow-sm
                      ${msg.role === 'user' 
                        ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-br-sm' 
                        : 'bg-white border border-gray-100 text-gray-700 rounded-bl-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.02)]'
                      }`}
                  >
                    {msg.text}
                  </motion.div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm"
                  >
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </motion.div>
                </div>
              )}
            </div>

            {/* Input para Escribir */}
            <form onSubmit={sendMessage} className="p-3 bg-white/80 backdrop-blur border-t border-gray-100 flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pregúntale lo que quieras..."
                className="flex-1 bg-gray-100/80 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition-all text-gray-700 font-medium placeholder:text-gray-400"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-orange-500 text-white w-11 h-11 rounded-full hover:bg-orange-600 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all text-sm font-medium flex items-center justify-center disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                <Send size={18} className={`mr-0.5 ${input.trim() ? 'translate-x-0.5' : 'translate-x-0'} transition-transform`} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Flotante Principal (FAB) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="h-16 w-16 bg-gradient-to-br from-orange-500 hover:from-orange-400 to-blue-600 hover:to-blue-500 rounded-full shadow-[0_8px_30px_rgba(249,115,22,0.3)] flex items-center justify-center text-white transition-all duration-300 relative group"
          >
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            <MessageCircle size={28} className="stroke-[2.5px] group-hover:animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
