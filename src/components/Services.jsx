import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Bot, Package, Sun } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <FlaskConical size={40} />,
            title: 'Club de Ciencia Sabatino',
            description: 'Experimentos guiados en patio al aire libre. Cada sábado una nueva misión.',
            color: 'bg-purple-500',
        },
        {
            icon: <Bot size={40} />,
            title: 'Talleres de Robótica',
            description: 'Electrónica básica y construcción para pequeños ingenieros del futuro.',
            color: 'bg-blue-500',
        },
        {
            icon: <Package size={40} />,
            title: 'Kits Educativos',
            description: 'Lleva la diversión a casa con kits como "Chispi Volcán Explosivo".',
            color: 'bg-orange-500',
        },
        {
            icon: <Sun size={40} />,
            title: 'Cursos de Temporada',
            description: 'Verano, Pascua e Invierno llenos de descubrimientos y amigos.',
            color: 'bg-yellow-500',
        },
    ];

    return (
        <section className="py-20 bg-slate-50" id="servicios">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Nuestros Servicios</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2">
                        Aventuras para cada <span className="text-secondary">pequeño genio</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-gray-100"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${service.color} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-heading font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
