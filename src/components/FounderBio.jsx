import React from 'react';
import { motion } from 'framer-motion';
import fotoAdle from '../assets/imagenes/equipo.jpg';

const FounderBio = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-bg-main p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center relative overflow-hidden"
                >
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent mb-6 shadow-lg">
                        <img 
                            src={fotoAdle} 
                            alt="Fundadores de Chispeando Ideas" 
                            className="w-full h-full object-cover object-top scale-[1.12]"
                        />
                    </div>
                    <h3 className="text-3xl font-bold font-heading text-primary-dark mb-2">Un Proyecto Familiar</h3>
                    <p className="text-accent font-semibold mb-6">De nuestra familia para tus hijos</p>
                    <div className="w-16 h-1 bg-primary/20 mb-6 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-700 italic leading-relaxed">
                        "Chispeando Ideas nació en el patio de nuestra casa. Como Ingeniera Petroquímica y un Ingeniero en Sistemas Computacionales con especialidad en IA, buscábamos que nuestros propios hijos dejaran de solo consumir tecnología para empezar a crearla. Sabemos que cada niño nace siendo un científico, y nuestra misión es compartir con las familias de Mérida este modelo donde juegan, descubren y se preparan para el futuro."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FounderBio;
