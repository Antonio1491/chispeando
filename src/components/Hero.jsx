import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-20 pb-10 px-4 overflow-hidden h-screen flex items-center">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-bold mb-6 text-sm">
                        <Rocket size={18} />
                        <span>¡Inscripciones Abiertas 2025!</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-gray-900 leading-tight mb-6">
                        Transforma su curiosidad en <span className="text-purple-600">superpoderes</span> 🚀
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                        Club de ciencias, robótica y tecnología al aire libre para niños de 4 a 9 años.
                        Donde aprender es una aventura y ensuciarse es parte del proceso.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/NUMERO?text=Hola,%20quiero%20una%20clase%20de%20prueba"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-600 hover:bg-purple-700 text-white text-center px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2"
                        >
                            Quiero una clase de prueba
                        </a>
                        <button className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg transition-all">
                            Ver Video
                        </button>
                    </div>
                </motion.div>

                {/* Image/Video Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-h-[70vh]">
                        <img
                            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Niños aprendiendo ciencia"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                            <p className="text-white font-bold text-xl">Explorando el mundo 🌍</p>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full z-0"></div>
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-600 rounded-full z-0"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
