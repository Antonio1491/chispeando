import React from 'react';
import { MapPin, Star } from 'lucide-react';

const Location = () => {
    const testimonials = [
        {
            name: 'Ana García',
            role: 'Mamá de Mateo (6 años)',
            text: '¡Increíble lugar! Mateo llega a casa emocionado contándome sobre volcanes y robots. El ambiente es súper seguro.',
        },
        {
            name: 'Carlos López',
            role: 'Papá de Sofía (8 años)',
            text: 'Me encanta que aprendan jugando al aire libre. Los maestros tienen mucha paciencia y pasión.',
        },
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">El Patio</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2 mb-6">
                        Un espacio seguro para <span className="text-primary">explorar</span>
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Nuestras actividades se realizan en un entorno controlado al aire libre, diseñado para estimular la creatividad y el contacto con la naturaleza.
                    </p>

                    <div className="flex items-start gap-4 mb-8">
                        <div className="bg-green-100 p-3 rounded-full text-green-600">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 text-lg">Ubicación Estratégica</h4>
                            <p className="text-gray-600">Jardines del Valle, [Ciudad/Localidad]. <br />Fácil acceso y estacionamiento.</p>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 relative">
                        <div className="flex gap-1 text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-gray-700 italic mb-4">"{testimonials[0].text}"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm">{testimonials[0].name}</p>
                                <p className="text-gray-500 text-xs">{testimonials[0].role}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Placeholder */}
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1596464716127-f9a0859b4bce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Niños jugando al aire libre"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <p className="font-bold text-2xl">¡Ven a conocernos!</p>
                            <p className="text-white/80">Agenda tu visita hoy mismo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
