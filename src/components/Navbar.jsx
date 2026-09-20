import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from './icons/WhatsAppIcon';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Cada niño', href: '#cada-nino' },
        { name: 'Programas', href: '#programas' },
        { name: 'Por qué nosotros', href: '#porque-nosotros' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
                scrolled || isOpen ? 'bg-primary-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logotipo.webp" alt="Chispeando Ideas Logo" width="150" height="70" className="h-10 w-auto" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group py-2">
                            <Sparkle
                                size={11}
                                className="pointer-events-none absolute -top-1 -left-3 text-accent opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-pop fill-accent"
                            />
                            <Sparkle
                                size={9}
                                style={{ animationDelay: '150ms' }}
                                className="pointer-events-none absolute -top-2 right-0 text-science opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-pop fill-science"
                            />
                            <Sparkle
                                size={10}
                                style={{ animationDelay: '300ms' }}
                                className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 text-accent opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-pop fill-accent"
                            />
                            <a
                                href={link.href}
                                className="inline-block text-white/90 group-hover:text-accent group-hover:animate-wiggle font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        </div>
                    ))}
                    <a href="https://wa.me/529994519579" target="_blank" rel="noopener noreferrer" className="min-h-[44px] bg-accent hover:bg-orange-500 text-primary-dark px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all inline-flex items-center gap-2 text-center">
                        <WhatsAppIcon size={18} />
                        Reservar lugar
                    </a>
                </div>

                {/* Mobile: CTA siempre visible + botón de menú */}
                <div className="flex md:hidden items-center gap-3">
                    <a
                        href="https://wa.me/529994519579"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] bg-accent text-primary-dark px-4 py-2 rounded-full font-bold text-sm shadow-md inline-flex items-center gap-1.5"
                    >
                        <WhatsAppIcon size={15} />
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
                            <a href="https://wa.me/529994519579" target="_blank" rel="noopener noreferrer" className="min-h-[44px] bg-accent hover:bg-orange-500 text-primary-dark w-full py-3 rounded-xl font-bold shadow-md text-center flex items-center justify-center gap-2" onClick={() => setIsOpen(false)}>
                                <WhatsAppIcon size={18} />
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
