import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Cada niño', href: '#cada-nino' },
        { name: 'Programas', href: '#programas' },
        { name: 'Por qué nosotros', href: '#porque-nosotros' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-primary-dark/95 backdrop-blur-md transition-all duration-300">
            <div className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logotipo.webp" alt="Chispeando Ideas Logo" width="150" height="70" className="h-10 w-auto" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white/90 hover:text-accent font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="https://wa.me/529994519579" target="_blank" rel="noopener noreferrer" className="min-h-[44px] bg-accent hover:bg-orange-500 text-primary-dark px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all inline-flex items-center text-center">
                        Reservar lugar
                    </a>
                </div>

                {/* Mobile: CTA siempre visible + botón de menú */}
                <div className="flex md:hidden items-center gap-3">
                    <a
                        href="https://wa.me/529994519579"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] bg-accent text-primary-dark px-4 py-2 rounded-full font-bold text-sm shadow-md inline-flex items-center"
                    >
                        Reservar
                    </a>
                    <button
                        className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary-dark border-t border-white/10 shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white font-medium text-lg text-center py-2 hover:bg-white/10 rounded-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="https://wa.me/529994519579" target="_blank" rel="noopener noreferrer" className="min-h-[44px] bg-accent hover:bg-orange-500 text-primary-dark w-full py-3 rounded-xl font-bold shadow-md text-center flex items-center justify-center" onClick={() => setIsOpen(false)}>
                                Reservar lugar
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
