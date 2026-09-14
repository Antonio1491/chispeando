import React from 'react';
import { motion } from 'framer-motion';
import { Users, TreePine, FlaskConical, Heart } from 'lucide-react';
import imgPatio from '../assets/imagenes/espacio_seguro.webp';

const WhyChooseUs = () => {
    const points = [
        {
            icon: Users,
            title: 'Grupos reducidos',
            description: 'Atención personalizada para que cada niño explore a su ritmo.',
        },
        {
            icon: TreePine,
            title: 'Aire libre',
            description: 'Actividades en un patio seguro, en contacto con la naturaleza.',
            image: imgPatio,
            imageAlt: 'Niños explorando y aprendiendo al aire libre en el patio del club',
        },
        {
            icon: FlaskConical,
            title: 'Experimentos reales',
            description: 'Manos a la obra: ciencia y tecnología que se pueden tocar.',
        },
        {
            icon: Heart,
            title: 'Padres involucrados',
            description: 'Comunicamos avances y compartimos el proceso con la familia.',
        },
    ];

    return (
        <section id="porque-nosotros" className="py-20 bg-bg-main">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-dark mb-4">
                        ¿Por qué <span className="text-primary">elegirnos</span>?
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {points.map((point, index) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-white rounded-3xl p-6 shadow-sm border border-gray-100 overflow-hidden flex flex-col items-start gap-3 min-h-[180px]"
                        >
                            {point.image && (
                                <img
                                    src={point.image}
                                    alt={point.imageAlt}
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                            {point.image && (
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent" />
                            )}

                            <div className={`relative z-10 rounded-xl p-2.5 ${point.image ? 'bg-white/20 text-white' : 'bg-science/15 text-science'}`}>
                                <point.icon size={22} />
                            </div>
                            <h3 className={`relative z-10 font-bold text-base leading-snug ${point.image ? 'text-white mt-auto' : 'text-gray-800'}`}>
                                {point.title}
                            </h3>
                            <p className={`relative z-10 text-xs leading-relaxed ${point.image ? 'text-white/90' : 'text-gray-600'}`}>
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
