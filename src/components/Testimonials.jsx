import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import MediaPlaceholder from './MediaPlaceholder';
import CloudWave from './CloudWave';

const Testimonials = () => {
    // [PLACEHOLDER — reemplazar con testimonios reales de familias]
    const testimonials = [
        {
            name: '[Nombre del padre/madre]',
            role: '[Papá/Mamá de [Nombre] ([edad] años)]',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec quam ut justo sagittis facilisis. [PLACEHOLDER — testimonio real pendiente].',
        },
        {
            name: '[Nombre del padre/madre]',
            role: '[Papá/Mamá de [Nombre] ([edad] años)]',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum ante ipsum. [PLACEHOLDER — testimonio real pendiente].',
        },
    ];

    return (
        <section className="relative overflow-hidden pt-20 pb-28 md:pb-32 bg-bg-main">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-dark mb-4">
                        Lo que dicen <span className="text-primary">las familias</span>
                    </h2>
                </div>

                <div className="flex md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-auto md:px-0 md:overflow-visible pb-4 md:pb-0">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="shrink-0 w-[85vw] sm:w-[360px] md:w-auto snap-center bg-white p-8 rounded-3xl shadow-md border border-gray-100 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-accent/20" size={36} />
                            <p className="text-gray-700 italic mb-6 relative z-10">"{testimonial.text}"</p>
                            <div className="flex items-center gap-3">
                                <MediaPlaceholder
                                    alt={`Foto de ${testimonial.name}`}
                                    rounded="rounded-full"
                                    className="shrink-0"
                                    size={48}
                                    compact
                                />
                                <div>
                                    <h4 className="font-bold text-primary-dark text-sm">{testimonial.name}</h4>
                                    <span className="text-xs text-gray-500">{testimonial.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <CloudWave fillClassName="fill-primary-dark" />
        </section>
    );
};

export default Testimonials;
