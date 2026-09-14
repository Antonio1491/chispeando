import React from 'react';
import { motion } from 'framer-motion';

/**
 * Doodle científico suelto de trazo simple (sin tarjeta/fondo), inspirado en
 * los planetas/aviones de la referencia KiddyLand. Se esparce directamente
 * sobre fondos oscuros, máx. 1-3 por sección.
 */
const ScienceDoodle = ({
    icon: Icon,
    className = '',
    size = 28,
    duration = 6,
    delay = 0,
    colorClassName = 'text-white/30',
}) => (
    <motion.div
        aria-hidden="true"
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration, ease: 'easeInOut', delay }}
        className={`absolute pointer-events-none ${colorClassName} ${className}`}
    >
        <Icon size={size} strokeWidth={1.5} />
    </motion.div>
);

export default ScienceDoodle;
