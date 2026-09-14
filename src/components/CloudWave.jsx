import React from 'react';

/**
 * Divisor decorativo tipo "nube" entre secciones de color contrastante.
 * Se coloca dentro del borde de la sección de origen (bottom-0), relleno
 * con el color de la sección siguiente, para anticipar su color con
 * curvas suaves tipo nube (inspirado en el logo y en la referencia KiddyLand).
 */
const CloudWave = ({ fillClassName = 'fill-white' }) => (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none translate-y-[1px]">
        <svg
            className="relative block w-full h-[36px] md:h-[70px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                d="M0,40 Q60,0 120,40 Q180,80 240,40 Q300,0 360,40 Q420,80 480,40 Q540,0 600,40 Q660,80 720,40 Q780,0 840,40 Q900,80 960,40 Q1020,0 1080,40 Q1140,80 1200,40 L1200,120 L0,120 Z"
                className={fillClassName}
            />
        </svg>
    </div>
);

export default CloudWave;
