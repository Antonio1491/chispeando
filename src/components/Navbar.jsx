import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Solución', href: '#solucion' },
        { name: 'Beneficios', href: '#beneficios' },
        { name: 'Cursos', href: '#cursos' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all duration-300">
            <div className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logotipo.png" alt="Chispeando Ideas Logo" className="h-10 w-auto" />
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
                    <a href="https://wa.me/529994519579" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-yellow-500 text-white px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all inline-block text-center">
                        Inscribir a mi hijo
                    </a>
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
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
                            <a href="https://wa.me/529994519579" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-yellow-500 text-white w-full py-3 rounded-xl font-bold shadow-md text-center block" onClick={() => setIsOpen(false)}>
                                Inscribir a mi hijo
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
