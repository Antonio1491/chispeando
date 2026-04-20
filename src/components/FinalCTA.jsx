import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section className="bg-bg-main relative pt-20">
            <div className="max-w-4xl mx-auto px-6 text-center pb-32">
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-heading text-primary-dark mb-6"
                >
                    El futuro de tu hijo comienza con una <span className="text-accent relative">chispa<svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10" fill="currentColor"/></svg></span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-600 mb-10"
                >
                    Cupos limitados para nuestros cursos presenciales. ¡No dejes que se quede atrás!
                </motion.p>
                <motion.a 
                    href="https://wa.me/529994519579"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-block bg-accent hover:bg-yellow-500 text-white text-2xl px-12 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all"
                >
                    Inscribir a mi hijo
                </motion.a>
            </div>

            {/* Wavy Separator using Primary Dark color to blend with Footer */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 w-[200%] sm:w-[150%] md:w-full">
                <svg className="relative block w-full h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.38,197.36,108.5,238.16,101.86,280.95,73.1,321.39,56.44Z" className="fill-primary-dark"></path>
                </svg>
            </div>
        </section>
    );
};

export default FinalCTA;
