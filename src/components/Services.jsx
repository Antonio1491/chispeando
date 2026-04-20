import React from 'react';
import { motion } from 'framer-motion';
import imgRobotica from '../assets/imagenes/WhatsApp Image 2026-01-17 at 8.29.10 PM.jpeg';
import imgCiencia from '../assets/imagenes/WhatsApp Image 2026-03-22 at 11.26.20 PM.jpeg222.jpeg';
import imgElectronica from '../assets/imagenes/foto_circuitos.png';

const Services = () => {
    const courses = [
        {
            title: "Robótica Básica",
            description: "Principios de robótica sin pantallas. Fomentamos el pensamiento lógico y espacial utilizando bloques y componentes físicos interactivos.",
            imgUrl: imgRobotica,
            tags: ["Lógica", "Sin pantallas"]
        },
        {
            title: "Experimentos de Ciencia",
            description: "Descubrimos el mundo a través de la observación y la experimentación activa. ¡Ciencia divertida y segura con sus propias manos!",
            imgUrl: imgCiencia,
            tags: ["Ciencia", "Curiosidad"]
        },
        {
            title: "Electrónica para Niños",
            description: "Aprenden el funcionamiento de la electricidad, creando circuitos simples y divertidos de forma práctica y 100% segura.",
            imgUrl: imgElectronica,
            tags: ["Circuitos", "Creatividad"]
        }
    ];

    return (
        <section id="cursos" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-heading text-primary-dark mb-4">
                        Aventuras Interactivas
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Nuestros cursos están diseñados para empoderar a los niños y prepararlos para los desafíos tecnológicos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-bg-main rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow"
                        >
                            <div className="h-56 overflow-hidden">
                                <img 
                                    src={course.imgUrl} 
                                    alt={course.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex gap-2 mb-4">
                                    {course.tags.map((tag, i) => (
                                        <span key={i} className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h3>
                                <p className="text-gray-600 mb-6">{course.description}</p>
                                <a href="https://wa.me/529994519579" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:text-yellow-500 transition-colors flex items-center gap-2">
                                    Saber más <span className="text-xl">→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
