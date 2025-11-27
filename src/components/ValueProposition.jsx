import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Hand, Users } from 'lucide-react';

const ValueProposition = () => {
    const features = [
        {
            icon: <Brain size={48} />,
            title: 'Enfoque STEAM',
            description: 'Ciencia, Tecnología, Ingeniería, Arte y Matemáticas integrados en cada aventura.',
            color: 'bg-blue-100 text-blue-600',
        },
        {
            icon: <Hand size={48} />,
            title: 'Aprendizaje Práctico',
            description: 'Prohibido aburrirse. Aquí ensuciarse las manos es un requisito indispensable.',
            color: 'bg-orange-100 text-orange-600',
        },
        {
            icon: <Users size={48} />,
            title: 'Grupos Reducidos',
            description: 'Atención personalizada (máx 7 niños) en un entorno seguro al aire libre.',
            color: 'bg-green-100 text-green-600',
        },
    ];

    return (
        <section className="py-20 bg-white" id="metodologia">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                        ¿Por qué <span className="text-primary">Chispeando Ideas</span>?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Diseñamos experiencias que despiertan la curiosidad natural de los niños.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-slate-50 rounded-3xl p-8 text-center hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className={`inline-flex p-4 rounded-2xl mb-6 ${feature.color} mb-6 transform hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
