import React from 'react';
import { motion } from 'framer-motion';

const ProblemSolution = () => {
    return (
        <section id="solucion" className="py-20 md:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Copy persuasivo */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl font-bold font-heading text-primary-dark mb-6">
                            ¿Sientes que el potencial de tu hijo no se está aprovechando al máximo?
                        </h2>
                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            En un mundo cada vez más tecnológico, la curiosidad de los niños es su mayor superpoder. Sin embargo, la educación tradicional a menudo no estimula esa chispa de innovación.
                        </p>
                        <p className="text-xl text-gray-600 leading-relaxed font-semibold">
                            Es hora de transformar su tiempo libre en habilidades para el futuro.
                        </p>
                    </motion.div>

                    {/* Recuadro de solución */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="absolute inset-0 bg-accent rounded-3xl animate-pulse blur-xl opacity-30"></div>
                        <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100 z-10 text-center">
                            <h3 className="text-3xl font-bold text-primary mb-4">La Chispa del Éxito</h3>
                            <p className="text-lg text-gray-700 mb-8">
                                Nuestra metodología práctica permite a los niños aprender jugando, experimentando y creando tecnología con sus propias manos.
                            </p>
                            <ul className="text-left space-y-4 text-gray-600">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span> Mentoría personalizada
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span> Proyectos que pueden tocar
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span> Desarrollo de pensamiento crítico
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
