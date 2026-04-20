import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Calendar, Package, Sun } from 'lucide-react';

const Offerings = () => {
    const offerings = [
        {
            icon: <FlaskConical size={28} />,
            colorClass: "bg-[#9b51e0]", // Purple matching the image
            title: "Club de Ciencia Sabatino",
            description: "Experimentos guiados al aire libre. Grupos por edades: Chispitas (4-6) y Científicos (7-10 años)."
        },
        {
            icon: <Calendar size={28} />,
            colorClass: "bg-[#2f80ed]", // Blue matching the image
            title: "Viernes de Consejo Técnico",
            description: "Mientras no hay clases, tus hijos aprenden creando. Mañanas llenas de experimentos, retos STEAM y mucha diversión."
        },
        {
            icon: <Package size={28} />,
            colorClass: "bg-[#f2994a]", // Orange matching the image
            title: "Kits Educativos",
            description: 'Lleva la diversión a casa con kits como "Chispi Volcán Explosivo".'
        },
        {
            icon: <Sun size={28} />,
            colorClass: "bg-[#f2c94c]", // Yellow matching the image
            title: "Cursos de Temporada",
            description: "Verano, Pascua e Invierno llenos de descubrimientos y amigos."
        }
    ];

    return (
        <section className="py-20 bg-bg-main relative pt-24" id="servicios">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-accent font-bold tracking-widest uppercase mb-3 text-sm md:text-base">Nuestros Servicios</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-dark mb-4">
                        Aventuras para cada <span className="text-blue-500">pequeño genio</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 border border-gray-50 flex flex-col items-start hover:-translate-y-2"
                        >
                            <div className={`w-16 h-16 rounded-3xl flex items-center justify-center text-white mb-6 shadow-sm ${offering.colorClass}`}>
                                {offering.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{offering.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{offering.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offerings;
