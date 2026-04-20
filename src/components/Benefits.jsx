import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Hand, Rocket } from 'lucide-react';

const Benefits = () => {
    const cards = [
        {
            icon: <Atom size={48} className="text-primary mb-4" />,
            title: "Enfoque STEAM",
            description: "Ciencia, Tecnología, Ingeniería, Arte y Matemáticas integrados en cada aventura."
        },
        {
            icon: <Hand size={48} className="text-accent mb-4" />,
            title: "Aprendizaje Práctico",
            description: "Prohibido aburrirse. Aquí ensuciarse las manos es un requisito indispensable."
        },
        {
            icon: <Rocket size={48} className="text-primary-dark mb-4" />,
            title: "Preparación para el Futuro",
            description: "Habilidades en robótica e Inteligencia Artificial que les darán una verdadera ventaja competitiva en el mundo del mañana."
        }
    ];

    return (
        <section id="beneficios" className="py-20 bg-bg-main">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-heading text-primary-dark mb-4">
                        ¿Por qué Chispeando Ideas?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Diseñamos experiencias que despiertan la curiosidad natural de los niños.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-t-0 hover:border-t-4 hover:border-t-accent"
                        >
                            {card.icon}
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
                            <p className="text-gray-600">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
