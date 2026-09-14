import React from 'react';
import { motion } from 'framer-motion';
import MediaPlaceholder from './MediaPlaceholder';
import imgCircuitos from '../assets/imagenes/foto_circuitos.webp';

const Gallery = () => {
    const items = [
        {
            imgUrl: imgCircuitos,
            alt: 'Niño armando un circuito eléctrico simple con componentes reales',
        },
        {
            alt: 'Niños observando un experimento de volcán casero',
            label: 'Foto: experimento de volcán casero',
        },
        {
            alt: 'Grupo de niños programando un robot educativo',
            label: 'Foto: niños programando un robot',
        },
        {
            alt: 'Niña mirando por un microscopio al aire libre',
            label: 'Foto: niña usando un microscopio',
        },
        {
            alt: 'Niños armando un kit de construcción STEAM en equipo',
            label: 'Foto: kit de construcción en equipo',
        },
        {
            alt: 'Familias reunidas en el día de puertas abiertas del club',
            label: 'Foto: día de puertas abiertas',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-dark mb-4">
                        Momentos de <span className="text-primary">nuestro club</span>
                    </h2>
                </div>

                <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible pb-4 md:pb-0">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.alt}
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06 }}
                            className="shrink-0 w-[70vw] sm:w-[280px] md:w-auto snap-center rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5"
                        >
                            {item.imgUrl ? (
                                <img
                                    src={item.imgUrl}
                                    alt={item.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            ) : (
                                // TODO: reemplazar con foto real descrita en el placeholder
                                <MediaPlaceholder alt={item.alt} label={item.label} ratio="4/3" rounded="rounded-none" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
