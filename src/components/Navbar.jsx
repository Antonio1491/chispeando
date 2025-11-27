import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Cursos', href: '#servicios' },
        { name: 'Metodología', href: '#metodologia' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 left-0 px-4 py-3">
            <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Sparkles className="text-primary w-8 h-8" />
                    <span className="text-2xl font-heading font-bold text-gray-800">
                        Chispeando<span className="text-primary">Ideas</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-primary font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all">
                        Inscribir a mi hijo
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 md:hidden flex flex-col gap-4 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 font-medium text-lg text-center py-2 hover:bg-orange-50 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-primary text-white w-full py-3 rounded-xl font-bold shadow-md">
                            Inscribir a mi hijo
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
