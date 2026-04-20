import React from 'react';
import { motion } from 'framer-motion';
import imgPatio from '../assets/imagenes/espacio_seguro.jpg';

const TheSpace = () => {
    return (
        <section className="py-20 md:py-32 bg-bg-main relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <p className="text-blue-500 font-bold tracking-widest uppercase mb-3">El Patio</p>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-dark mb-6 leading-tight">
                            Un espacio seguro para <span className="text-accent">explorar</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Nuestras actividades se realizan en un entorno controlado al aire libre, diseñado para estimular la creatividad y el contacto con la naturaleza.
                        </p>
                    </motion.div>

                    {/* Image/Visuals */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
                            <img 
                                src={imgPatio}
                                alt="Niños explorando y aprendiendo al aire libre" 
                                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative blobs */}
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/30 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TheSpace;
