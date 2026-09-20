import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MediaPlaceholder from './MediaPlaceholder';
import imgCircuitos from '../assets/imagenes/foto_circuitos.webp';
import imgVolcanes from '../assets/imagenes/IMG-20260330-WA0024.jpg';
import imgGrupoLab from '../assets/imagenes/IMG-20260330-WA0028(1).jpg';
import imgRoboticaEquipo from '../assets/imagenes/IMG-20260401-WA0031.jpg';
import imgCircuitosNinas from '../assets/imagenes/IMG-20260401-WA0034.jpg';
import imgAmigasProyecto from '../assets/imagenes/IMG-20260401-WA0060.jpg';
import imgTubosEnsayo from '../assets/imagenes/IMG-20250823-WA0037.jpg';

const Gallery = () => {
    const trackRef = useRef(null);

    const items = [
        {
            imgUrl: imgCircuitos,
            alt: 'Niño armando un circuito eléctrico simple con componentes reales',
        },
        {
            alt: 'Niños observando un experimento de volcán casero',
            label: 'Foto: experimento de volcán casero',
        },
        {
            alt: 'Grupo de niños programando un robot educativo',
            label: 'Foto: niños programando un robot',
        },
        {
            alt: 'Niña mirando por un microscopio al aire libre',
            label: 'Foto: niña usando un microscopio',
        },
        {
            alt: 'Niños armando un kit de construcción STEAM en equipo',
            label: 'Foto: kit de construcción en equipo',
        },
        {
            alt: 'Familias reunidas en el día de puertas abiertas del club',
            label: 'Foto: día de puertas abiertas',
        },
        {
            imgUrl: imgVolcanes,
            alt: 'Niños con bata de laboratorio armando volcanes en erupción',
        },
        {
            imgUrl: imgGrupoLab,
            alt: 'Grupo de niños con bata de laboratorio reunidos en una sesión de experimentos',
        },
        {
            imgUrl: imgRoboticaEquipo,
            alt: 'Niños construyendo circuitos y kits de robótica en equipo',
        },
        {
            imgUrl: imgCircuitosNinas,
            alt: 'Niñas armando un kit de circuitos eléctricos',
        },
        {
            imgUrl: imgAmigasProyecto,
            alt: 'Dos niñas sonriendo mientras muestran su proyecto de circuitos',
        },
        {
            imgUrl: imgTubosEnsayo,
            alt: 'Niñas con bata de laboratorio mezclando líquidos de colores en tubos de ensayo',
        },
    ];

    // Se duplica la lista para lograr un loop infinito y continuo del carrusel.
    const loopItems = [...items, ...items];

    const isPausedRef = useRef(false);
    const resumeTimeoutRef = useRef(null);

    const pauseAutoScroll = () => {
        isPausedRef.current = true;
    };

    const resumeAutoScroll = () => {
        isPausedRef.current = false;
    };

    const resumeAutoScrollAfterDelay = () => {
        window.clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = window.setTimeout(resumeAutoScroll, 2500);
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return undefined;

        const speed = 0.6; // px por frame: desplazamiento suave y constante
        let rafId;

        const step = () => {
            if (!isPausedRef.current) {
                const singleSetWidth = track.scrollWidth / 2;
                track.scrollLeft += speed;
                if (track.scrollLeft >= singleSetWidth) {
                    track.scrollLeft -= singleSetWidth;
                }
            }
            rafId = requestAnimationFrame(step);
        };

        rafId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafId);
    }, []);

    const scrollByCard = (direction) => {
        pauseAutoScroll();
        const track = trackRef.current;
        if (!track) return;
        const card = track.querySelector('[data-gallery-card]');
        const amount = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;
        track.scrollBy({ left: direction * amount, behavior: 'smooth' });
        resumeAutoScrollAfterDelay();
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-dark mb-4">
                        Momentos de <span className="text-primary">nuestro club</span>
                    </h2>
                </div>

                <div className="relative">
                    <button
                        type="button"
                        onClick={() => scrollByCard(-1)}
                        aria-label="Ver fotos anteriores"
                        className="flex items-center justify-center absolute left-1 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg transition-colors"
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollByCard(1)}
                        aria-label="Ver más fotos"
                        className="flex items-center justify-center absolute right-1 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg transition-colors"
                    >
                        <ChevronRight size={22} />
                    </button>

                    <div
                        ref={trackRef}
                        onMouseEnter={pauseAutoScroll}
                        onMouseLeave={resumeAutoScroll}
                        onTouchStart={pauseAutoScroll}
                        onTouchEnd={resumeAutoScrollAfterDelay}
                        className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {loopItems.map((item, index) => (
                            <motion.div
                                key={`${item.alt}-${index}`}
                                data-gallery-card
                                initial={{ opacity: 0, scale: 0.96 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % items.length) * 0.06 }}
                                className="shrink-0 w-[68vw] sm:w-[220px] lg:w-[205px] rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5"
                            >
                                {item.imgUrl ? (
                                    <img
                                        src={item.imgUrl}
                                        alt={item.alt}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full aspect-[4/3] object-cover"
                                    />
                                ) : (
                                    // TODO: reemplazar con foto real descrita en el placeholder
                                    <MediaPlaceholder alt={item.alt} label={item.label} ratio="4/3" rounded="rounded-none" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
