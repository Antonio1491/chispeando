import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Smile, FlaskConical, Heart } from 'lucide-react';

// Colores complementarios (rueda cromática) de los 3 colores principales de marca:
// morado #5A2C8A -> verde lima, naranja #FC9C00 -> azul, turquesa #3BC6DC -> coral.
// El naranja de marca se reutiliza en el 4to para cerrar el ciclo sin sumar un tono suelto.
const StatsBar = () => {
    const stats = [
        { value: '2+', label: 'Años de experiencia', icon: CalendarDays, color: '#9ACD32' },
        { value: '50+', label: 'Niños en el club', icon: Smile, color: '#2F80ED' },
        { value: '8+', label: 'Talleres realizados', icon: FlaskConical, color: '#EB5757' },
        { value: '70%', label: 'Familias que regresan', icon: Heart, color: '#FC9C00' },
    ];

    return (
        <section className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    {/* Mascota + frase */}
                    <div className="flex items-center gap-4 sm:gap-5 shrink-0">
                        <img
                            src="/nina_2.png"
                            alt="Niña de Chispeando Ideas experimentando con slime de colores"
                            className="h-28 sm:h-36 md:h-40 lg:h-44 w-auto object-contain drop-shadow-md shrink-0"
                        />
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-primary-dark leading-tight">
                            Ciencia real,
                            <br />
                            <span className="text-accent">mucha diversión</span>
                        </p>
                    </div>

                    <div className="hidden md:block w-px h-24 bg-gray-200 shrink-0" />

                    {/* Estadísticas */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-6 w-full">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <div
                                    className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-2xl shrink-0"
                                    style={{ backgroundColor: `${stat.color}1A`, color: stat.color }}
                                >
                                    <stat.icon size={20} strokeWidth={2} />
                                </div>
                                <div className="text-left min-w-0">
                                    <p className="text-2xl md:text-3xl font-bold font-heading text-primary-dark leading-none">
                                        {stat.value}
                                    </p>
                                    <p className="text-[11px] sm:text-xs text-gray-600 font-medium mt-1 leading-snug">
                                        {stat.label}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
