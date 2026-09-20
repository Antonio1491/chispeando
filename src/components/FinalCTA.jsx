import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from './icons/WhatsAppIcon';

const FinalCTA = () => {
    return (
        <section className="bg-primary-dark relative pt-20 pb-16 md:pb-0 overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary opacity-90"
            />
            {/* Resplandores decorativos */}
            <div className="absolute top-10 left-0 w-72 h-72 bg-science/10 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-10">
                {/* Texto + CTA */}
                <div className="w-full md:w-1/2 text-center md:text-left">
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
                        className="inline-flex items-center justify-center gap-2 min-h-[44px] bg-accent hover:bg-orange-500 text-primary-dark text-base md:text-lg px-6 md:px-8 py-2.5 md:py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                    >
                        <WhatsAppIcon size={20} />
                        Reservar lugar
                    </motion.a>
                </div>

                {/* Foto: niña haciendo un experimento, refuerza confianza y marca */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="w-full md:w-1/2 relative flex justify-center md:justify-end"
                >
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[75%] h-[75%] rounded-full bg-gradient-to-tr from-accent/25 via-science/20 to-white/5 blur-2xl"></div>
                    </div>
                    <img
                        src="/nina_3.png"
                        alt="Niña con playera de Chispeando Ideas y bata de laboratorio vertiendo un líquido rojo en un vaso de precipitados durante un experimento"
                        className="relative z-10 w-[230px] sm:w-[280px] md:w-[300px] lg:w-[340px] drop-shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
