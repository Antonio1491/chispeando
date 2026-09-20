import React from 'react';
import { motion } from 'framer-motion';
import { Atom, FlaskConical, Dna, Star, Leaf, Cpu } from 'lucide-react';
import ScienceDoodle from './ScienceDoodle';
import CloudWave from './CloudWave';
import WhatsAppIcon from './icons/WhatsAppIcon';

const badges = [
    { icon: FlaskConical, label: 'Ciencia práctica' },
    { icon: Leaf, label: 'Laboratorio al aire libre' },
    { icon: Cpu, label: 'Tecnología e IA' },
];

const orbitIcons = [
    { icon: Atom, className: 'top-[2%] right-[6%]', colorClassName: 'bg-accent text-primary-dark', size: 20, duration: 5 },
    { icon: Dna, className: 'top-[38%] -right-3', colorClassName: 'bg-science text-primary-dark', size: 18, duration: 6, delay: 0.5 },
    { icon: Star, className: 'bottom-[4%] left-[2%]', colorClassName: 'bg-white text-accent', size: 18, duration: 7, delay: 1 },
];

const Hero = () => {
    return (
        <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-primary via-[#3F2E86] to-deep-blue">
            {/* Background ambient blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-science/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Doodles científicos flotantes sueltos */}
            <ScienceDoodle icon={Star} size={20} duration={6} className="top-[14%] left-[8%] hidden sm:block" colorClassName="text-accent/50" />
            <ScienceDoodle icon={Leaf} size={22} duration={8} delay={1.2} className="top-[24%] left-[42%] hidden lg:block" colorClassName="text-white/25" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-8">
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading text-white leading-tight mb-3"
                    >
                        Donde la{' '}
                        <span
                            className="text-accent"
                            style={{ WebkitTextStroke: '1.5px white', paintOrder: 'stroke fill' }}
                        >
                            curiosidad
                        </span>{' '}
                        se convierte en <span className="text-science">descubrimiento</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-base sm:text-lg md:text-xl text-white/80 mb-5 max-w-lg"
                    >
                        Ciencia, tecnología y creatividad para niños de 4 a 10 años en nuestro laboratorio al aire libre.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-col lg:flex-row items-center gap-3 w-full max-w-[280px] sm:max-w-xs lg:max-w-none mx-auto lg:mx-0 lg:w-auto mb-6"
                    >
                        <a
                            href="#programas"
                            className="w-full lg:w-auto inline-flex items-center justify-center min-h-[44px] whitespace-nowrap bg-accent hover:bg-orange-500 text-primary-dark text-sm sm:text-base px-5 md:px-6 py-2.5 md:py-3.5 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                        >
                            Descubre nuestras clases
                        </a>
                        <a
                            href="https://wa.me/529994519579"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full lg:w-auto inline-flex items-center justify-center gap-1.5 min-h-[44px] whitespace-nowrap border-2 border-white/40 hover:border-white text-white text-sm sm:text-base px-5 md:px-6 py-2.5 md:py-3.5 rounded-full font-bold transition-all"
                        >
                            <WhatsAppIcon size={18} className="text-[#25D366] shrink-0" />
                            Escríbenos por WhatsApp
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-wrap justify-center md:justify-start gap-2.5"
                    >
                        {badges.map((badge) => (
                            <span
                                key={badge.label}
                                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full"
                            >
                                <badge.icon size={14} className="text-accent shrink-0" />
                                {badge.label}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Media: niña científica con órbita decorativa */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="w-full md:w-1/2 relative flex justify-center md:justify-end"
                >
                    <div className="relative w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-[4/5] flex items-end justify-center">
                        {/* Halo de fondo */}
                        <div className="absolute inset-0 -z-10 flex items-center justify-center">
                            <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-accent/30 via-science/25 to-white/10 blur-2xl"></div>
                        </div>

                        {/* Anillo tipo órbita */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -z-10 m-auto w-[92%] h-[92%] rounded-full border-2 border-dashed border-white/25 animate-spin-slow"
                        ></div>
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -z-10 m-auto w-[75%] h-[75%] rounded-full border border-white/15 animate-spin-slow-reverse"
                        ></div>

                        {/* Iconos orbitando la niña */}
                        {orbitIcons.map(({ icon: Icon, className, colorClassName, size, duration, delay }) => (
                            <motion.div
                                key={className}
                                aria-hidden="true"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration, ease: 'easeInOut', delay }}
                                className={`absolute z-10 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-lg ${colorClassName} ${className}`}
                            >
                                <Icon size={size} strokeWidth={2} />
                            </motion.div>
                        ))}

                        {/* Niña científica (foco principal) */}
                        <img
                            src="/nina.png"
                            alt="Niña sonriente vestida de científica, con bata blanca, lentes de laboratorio y un divertido gorro puntiagudo, lista para experimentar"
                            className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>

            <CloudWave fillClassName="fill-white" />
        </section>
    );
};

export default Hero;
