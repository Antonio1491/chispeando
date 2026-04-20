import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Rocket, Bot, Cpu, Code } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay, duration, yRange, xRange, className, size = 48 }) => (
  <motion.div
    animate={{ 
        y: yRange,
        x: xRange,
        rotate: [0, 10, -10, 0] 
    }}
    transition={{ 
        repeat: Infinity, 
        duration: duration, 
        ease: "easeInOut",
        delay: delay
    }}
    className={`absolute flex items-center justify-center rounded-2xl shadow-xl backdrop-blur-md bg-white/40 border border-white/60 ${className}`}
    style={{ width: size * 2, height: size * 2 }}
  >
    <Icon size={size} />
  </motion.div>
);

const Hero = () => {
    return (
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden flex items-center justify-center min-h-[100dvh]">
            {/* Background ambient blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-7xl font-bold font-heading text-primary-dark leading-tight mb-4 md:mb-6 mt-10 md:mt-0"
                    >
                        Despierta el <span className="text-accent relative inline-block">
                            genio científico
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-accent/40" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10" fill="currentColor"/></svg>
                        </span> en tu hijo
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-2xl text-gray-600 mb-6 md:mb-8 max-w-lg"
                    >
                        Club de ciencias y tecnología al aire libre para niños de 4 a 10 años en Mérida, Yucatán. Donde aprender es una aventura y ensuciarse es parte del proceso.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <a href="https://wa.me/529994519579" target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-yellow-500 text-white text-xl px-12 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
                            Inscribir a mi hijo
                        </a>
                    </motion.div>
                </div>

                {/* Imagery / Right Side - Zero Gravity Effect */}
                <div className="w-full md:w-1/2 relative h-[500px] hidden md:block perspective-1000">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="w-full h-full relative"
                    >
                        {/* Center large element */}
                        <FloatingIcon 
                            icon={Rocket} 
                            delay={0} 
                            duration={8} 
                            yRange={[0, -30, 0]} 
                            xRange={[0, 20, 0]} 
                            className="text-primary-dark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white/70 shadow-2xl"
                            size={70}
                        />
                        
                        {/* Orbiting elements */}
                        <FloatingIcon 
                            icon={Atom} 
                            delay={1} 
                            duration={6} 
                            yRange={[0, 40, 0]} 
                            xRange={[0, -20, 0]} 
                            className="text-accent top-[10%] left-[20%] z-20"
                            size={40}
                        />
                        
                        <FloatingIcon 
                            icon={Bot} 
                            delay={2} 
                            duration={7} 
                            yRange={[0, -50, 0]} 
                            xRange={[0, 30, 0]} 
                            className="text-primary top-[20%] right-[10%] z-40 transform scale-110"
                            size={50}
                        />

                        <FloatingIcon 
                            icon={Code} 
                            delay={0.5} 
                            duration={5} 
                            yRange={[0, 25, 0]} 
                            xRange={[0, 15, 0]} 
                            className="text-primary-dark bottom-[15%] left-[10%] z-10"
                            size={35}
                        />

                        <FloatingIcon 
                            icon={Cpu} 
                            delay={1.5} 
                            duration={9} 
                            yRange={[0, -40, 0]} 
                            xRange={[0, -30, 0]} 
                            className="text-gray-600 bottom-[20%] right-[20%] z-20"
                            size={40}
                        />
                        
                        {/* Connecting decorative dots/lines conceptually */}
                        <motion.div 
                            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }} 
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute top-1/2 left-1/2 w-[300px] h-[300px] border border-primary/20 rounded-full border-dashed -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        ></motion.div>
                        <motion.div 
                            animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.2, 1], rotate: [0, 180, 360] }} 
                            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 w-[450px] h-[450px] border-2 border-accent/10 rounded-full border-dotted -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        ></motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
