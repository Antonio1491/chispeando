import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Bot, Flower2, Sun } from 'lucide-react';
import MediaPlaceholder from './MediaPlaceholder';
import imgCiencia from '../assets/imagenes/curso_ciencia.webp';
import imgRobotica from '../assets/imagenes/curso_robotica.webp';

const Offerings = () => {
    const programs = [
        {
            icon: FlaskConical,
            title: 'Club de Ciencia Sabatino',
            description: 'Experimentos guiados al aire libre. Grupos por edades: Chispitas (4-6) y Científicos (7-10 años).',
            imgUrl: imgCiencia,
            tag: 'Ciencia',
            variant: 'kids',
        },
        {
            icon: Bot,
            title: 'Talleres de Robótica',
            description: 'Principios de robótica sin pantallas: lógica, componentes físicos y mucha creatividad.',
            imgUrl: imgRobotica,
            tag: 'Tecnología',
            variant: 'kids',
        },
        {
            icon: Flower2,
            title: 'Ciencia Botánica',
            description: 'Un espacio íntimo para mamás e hijos: sembrar, observar y aprender juntos del mundo natural.',
            imgUrl: null,
            imgAlt: 'Mamá e hijo sembrando juntos en el jardín del club',
            imgLabel: 'Foto: mamá e hijo sembrando juntos',
            tag: 'Para mamás',
            variant: 'moms',
        },
        {
            icon: Sun,
            title: 'Cursos de Temporada',
            description: 'Verano, Pascua e Invierno llenos de descubrimientos, retos STEAM y nuevos amigos.',
            imgUrl: null,
            imgAlt: 'Niños celebrando al terminar un reto de ciencia en curso de temporada',
            imgLabel: 'Foto: reto STEAM de curso de temporada',
            tag: 'Temporada',
            variant: 'kids',
        },
    ];

    return (
        <section id="programas" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-dark mb-4">
                        Nuestros <span className="text-primary">programas</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Aventuras diseñadas para cada etapa y cada tipo de curiosidad.
                    </p>
                </div>

                {/* Mobile: carrusel horizontal con snap. Desktop: grid */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible pb-4 md:pb-0">
                    {programs.map((program, index) => {
                        const isMoms = program.variant === 'moms';
                        return (
                            <motion.div
                                key={program.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`shrink-0 w-[80vw] sm:w-[320px] md:w-auto snap-center rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow border ${isMoms ? 'bg-orange-50 border-orange-100' : 'bg-bg-main border-gray-100'
                                    }`}
                            >
                                <div className="h-48">
                                    {program.imgUrl ? (
                                        <img
                                            src={program.imgUrl}
                                            alt={program.title}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        // TODO: reemplazar con foto real descrita en el placeholder
                                        <MediaPlaceholder alt={program.imgAlt} label={program.imgLabel} ratio="4/3" rounded="rounded-none" className="h-full border-0" />
                                    )}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`inline-flex items-center justify-center rounded-full p-2 ${isMoms ? 'bg-orange-200/60 text-orange-700' : 'bg-science/15 text-science'}`}>
                                            <program.icon size={18} />
                                        </span>
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${isMoms ? 'bg-orange-200/60 text-orange-700' : 'bg-primary/10 text-primary'}`}>
                                            {program.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Offerings;
