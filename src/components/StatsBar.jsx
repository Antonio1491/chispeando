import React from 'react';
import { motion } from 'framer-motion';

const StatsBar = () => {
    const stats = [
        { value: '2+', label: 'Años de experiencia' },
        { value: '50+', label: 'Niños en el club' },
        { value: '8+', label: 'Talleres realizados' },
        { value: '70%', label: 'Familias que regresan' },
    ];

    return (
        <section className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <p className="text-3xl md:text-4xl font-bold font-heading text-primary-dark">
                                {stat.value}
                            </p>
                            <p className="text-sm md:text-base text-gray-600 font-medium mt-1">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
