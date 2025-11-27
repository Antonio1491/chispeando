import React from 'react';
import { Facebook, Instagram, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 relative" id="contacto">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="text-primary w-6 h-6" />
                            <span className="text-xl font-heading font-bold">
                                Chispeando<span className="text-primary">Ideas</span>
                            </span>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Despertando la curiosidad científica en la próxima generación de innovadores.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Inicio</a></li>
                            <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
                            <li><a href="#metodologia" className="hover:text-primary transition-colors">Metodología</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href="#" className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v4a9 9 0 0 1-9-9Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Chispeando Ideas. Todos los derechos reservados.</p>
                </div>
            </div>

            {/* Floating Action Button (FAB) */}
            <motion.a
                href="https://wa.me/NUMERO?text=Hola,%20quiero%20que%20mi%20hijo%20descubra%20la%20ciencia"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 z-50 font-bold transform hover:scale-105 transition-all"
            >
                <MessageCircle size={24} />
                <span>¡Hola! Quiero info 💬</span>
            </motion.a>
        </footer>
    );
};

export default Footer;
