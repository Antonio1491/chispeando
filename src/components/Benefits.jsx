import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sun, Hand, Cpu } from 'lucide-react';
import MediaPlaceholder from './MediaPlaceholder';
import fotoFamilia from '../assets/imagenes/equipo.webp';

const Benefits = () => {
    const perks = [
        { icon: Users, label: 'Grupos reducidos' },
        { icon: Sun, label: 'Aire libre' },
        { icon: Hand, label: 'Aprendizaje práctico' },
        { icon: Cpu, label: 'Tecnología real' },
    ];

    return (
        <section id="cada-nino" className="py-20 bg-bg-main">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    {/* Texto */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-dark mb-4">
                            Cada niño es <span className="text-primary">único y especial</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Diseñamos experiencias que despiertan la curiosidad natural de cada niño, a su propio ritmo.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {perks.map(({ icon: Icon, label }) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                                >
                                    <div className="bg-science/15 text-science rounded-xl p-2 shrink-0">
                                        <Icon size={22} />
                                    </div>
                                    <span className="font-bold text-gray-700 text-sm">{label}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Credibilidad familiar (fusión de "Un Proyecto Familiar") */}
                        <div className="flex items-center gap-3 bg-white rounded-full pr-5 pl-2 py-2 w-fit shadow-sm border border-gray-100">
                            <img
                                src={fotoFamilia}
                                alt="Fundadores de Chispeando Ideas"
                                width="40"
                                height="40"
                                loading="lazy"
                                decoding="async"
                                className="w-10 h-10 rounded-full object-cover object-top"
                            />
                            <p className="text-sm font-semibold text-gray-700">
                                Un proyecto de <span className="text-primary">familia</span>, para tu familia
                            </p>
                        </div>
                    </div>

                    {/* Media */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        {/* TODO: reemplazar con foto real de un niño observando/experimentando de cerca */}
                        <MediaPlaceholder
                            alt="Niña observando con lupa un experimento de ciencia"
                            label="Foto: niño explorando a su propio ritmo"
                            ratio="4/3"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
