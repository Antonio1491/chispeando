import React from 'react';
import { ImagePlus } from 'lucide-react';

/**
 * Placeholder visual para un espacio de foto/video real pendiente de sustituir.
 * Mantiene el aspect ratio fijo para que el layout no salte cuando se reemplace
 * por el archivo definitivo (ver alt + label para ubicar qué foto va aquí).
 */
const MediaPlaceholder = ({ alt, ratio = '4/3', label, className = '', rounded = 'rounded-3xl', compact = false, size }) => {
    // `size` (px) fija ancho/alto vía estilo inline para evitar conflictos de
    // especificidad con la utilidad `w-full` de abajo (necesaria para los usos
    // a ancho completo); sin `size`, el elemento llena su contenedor con el
    // aspect ratio indicado.
    const sizeStyle = size ? { width: size, height: size } : { aspectRatio: ratio };

    return (
        <div
            role="img"
            aria-label={alt}
            className={`relative ${size ? '' : 'w-full'} ${rounded} overflow-hidden border-2 border-dashed border-primary/25 bg-primary/5 flex flex-col items-center justify-center gap-2 text-center ${compact ? 'p-1' : 'p-4'} ${className}`}
            style={sizeStyle}
        >
            <ImagePlus className="text-primary/40" size={compact ? 16 : 36} />
            {!compact && (
                <p className="text-xs sm:text-sm font-semibold text-primary/50 max-w-[220px] leading-snug">
                    {label}
                </p>
            )}
        </div>
    );
};

export default MediaPlaceholder;
