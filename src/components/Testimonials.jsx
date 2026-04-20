import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: "María Fernández",
            role: "Mamá de Leo (7 años)",
            text: "Desde que Leo entró a Chispeando Ideas, su curiosidad se multiplicó. Ahora siempre está preguntando cómo funcionan las cosas y tratando de 'inventar' soluciones en casa."
        },
        {
            name: "Carlos Rodríguez",
            role: "Papá de Sofía (9 años)",
            text: "La metodología es increíble. Sofía antes pasaba horas viendo videos, ahora programa sus propios mini-juegos. La transformación ha sido impresionante."
        }
    ];

    return (
        <section className="py-20 bg-bg-main relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-4xl font-bold font-heading text-primary-dark mb-4">
                            Lo que dicen las familias
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Nuestra mayor recompensa es ver el brillo en los ojos de los niños al lograr sus metas tecnológicas, y la tranquilidad de los padres al saber que están preparados.
                        </p>
                    </div>
                    
                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-8 shadow-lg rounded-2xl border-l-4 border-accent relative"
                            >
                                <svg className="absolute text-accent/20 w-12 h-12 top-4 right-4" fill="currentColor" viewBox="0 0 32 32">
                                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                                </svg>
                                <p className="text-gray-700 italic mb-6 relative z-10">"{testimonial.text}"</p>
                                <div>
                                    <h4 className="font-bold text-primary-dark">{testimonial.name}</h4>
                                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
