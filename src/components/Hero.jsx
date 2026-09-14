import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Atom, Lightbulb, Sparkles } from 'lucide-react';
import MediaPlaceholder from './MediaPlaceholder';
import CloudWave from './CloudWave';
import ScienceDoodle from './ScienceDoodle';

const Hero = () => {
    return (
        <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary-dark">
            {/* Background ambient blobs */}
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-science/20 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Doodles científicos sueltos de trazo simple (máx. 3), inspirados en la referencia */}
            <ScienceDoodle icon={Rocket} size={30} duration={7} className="top-[18%] right-[6%] hidden sm:block" />
            <ScienceDoodle icon={Atom} size={24} duration={6} delay={0.6} colorClassName="text-science/40" className="bottom-[20%] left-[4%] hidden lg:block" />
            <ScienceDoodle icon={Lightbulb} size={22} duration={8} delay={1.2} colorClassName="text-accent/40" className="top-[26%] left-[40%] hidden md:block" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full text-sm font-bold mb-6"
                    >
                        <Sparkles size={16} className="text-accent" />
                        Educación STEAM al aire libre
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight mb-5"
                    >
                        ¿Y si jugar fuera la{' '}
                        <span
                            className="text-accent"
                            style={{ WebkitTextStroke: '1.5px white', paintOrder: 'stroke fill' }}
                        >
                            mejor forma
                        </span>{' '}
                        de aprender?
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-white/80 mb-8 max-w-lg"
                    >
                        Club de ciencia y tecnología al aire libre para niños de 4 a 10 años en Mérida, Yucatán.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        <a
                            href="https://wa.me/529994519579"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] bg-accent hover:bg-orange-500 text-primary-dark text-lg px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                        >
                            Reservar lugar
                        </a>
                        <a
                            href="#programas"
                            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] border-2 border-white/40 hover:border-white text-white text-lg px-8 py-4 rounded-full font-bold transition-all"
                        >
                            Conocer el club
                        </a>
                    </motion.div>
                </div>

                {/* Media */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="w-full md:w-1/2 relative"
                >
                    {/* TODO: reemplazar con foto/video real de un niño experimentando (héroe principal) */}
                    <MediaPlaceholder
                        alt="Niño sonriente experimentando con un kit de ciencia al aire libre"
                        label="Foto/video: niño experimentando al aire libre"
                        ratio="16/9"
                        rounded="rounded-[2.5rem]"
                        className="bg-white/10 border-white/30"
                    />
                </motion.div>
            </div>

            <CloudWave fillClassName="fill-white" />
        </section>
    );
};

export default Hero;
