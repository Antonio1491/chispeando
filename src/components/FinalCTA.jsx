import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section className="bg-primary-dark relative pt-20 overflow-hidden">
            {/* TODO: reemplazar con foto/ilustración real de fondo (niños celebrando un logro STEAM) */}
            <div
                role="img"
                aria-label="Niños celebrando un logro en un experimento de ciencia"
                className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary opacity-90"
            />
            <div className="max-w-4xl mx-auto px-6 text-center pb-32 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-heading text-white mb-6"
                >
                    El futuro de tu hijo comienza con una <span className="text-accent relative">chispa<svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/40" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10" fill="currentColor"/></svg></span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-white/80 mb-10"
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
                    className="inline-flex items-center justify-center min-h-[44px] bg-accent hover:bg-orange-500 text-primary-dark text-2xl px-12 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all"
                >
                    Reservar lugar
                </motion.a>
            </div>
        </section>
    );
};

export default FinalCTA;
