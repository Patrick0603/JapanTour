import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Calm spring physics for luxury smoothness (tuned for faster scroll response)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.5
  });

  // TEXT CINEMATICS (Calm & Subtle)
  // Text emerges faster, reaches its maximum height quickly, and stays fixed there
  const textY = useTransform(smoothProgress, [0, 0.25, 1], ['15%', '-12%', '-15%']);
  const textScale = useTransform(smoothProgress, [0, 1], [0.95, 1.15]);
  const letterSpacing = useTransform(smoothProgress, [0, 1], ['0.05em', '0.25em']);
  const textOpacity = useTransform(smoothProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);
  const textBlur = useTransform(smoothProgress, [0, 0.1, 0.8, 1], ['blur(12px)', 'blur(0px)', 'blur(0px)', 'blur(8px)']);

  // Atmospheric elements (subtle scroll fade)
  const atmosphereOpacity = useTransform(smoothProgress, [0, 0.5], [0.5, 0]);

  return (
    <section ref={containerRef} className='relative h-[220vh] sm:h-[260vh] md:h-[300vh] w-full bg-[#050505] selection:bg-[#bc002d] selection:text-white'>
      <div className='sticky top-0 h-[100dvh] min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#050505]'>

        {/* LAYER 1: STABLE BACKGROUND */}
        <div 
          className='absolute inset-0 w-full h-full'
          style={{
            backgroundImage: 'url(/assets/mountfuji.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Cinematic Vignette & Tonal Grading */}
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.7)_100%)] pointer-events-none' />
          <div className='absolute inset-0 bg-[#050505]/10 mix-blend-multiply pointer-events-none' />
        </div>

        {/* LAYER 2: CINEMATIC TYPOGRAPHY */}
        <motion.div
          className='absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-2 sm:px-4'
          style={{ 
            y: textY,
            scale: textScale,
            opacity: textOpacity,
            filter: textBlur,
            willChange: 'transform, opacity, filter'
          }}
        >
          <motion.h1
            className='text-[clamp(3.5rem,22vw,18rem)] sm:text-[clamp(4rem,20vw,18rem)] md:text-[18rem] xl:text-[22rem] font-bold font-display select-none text-white leading-none text-center max-w-full'
            style={{ 
              letterSpacing,
              textShadow: '0 20px 40px rgba(0,0,0,0.6)',
            }}
          >
            JAPAN
          </motion.h1>
        </motion.div>

        {/* LAYER 3: STABLE FOREGROUND MASK */}
        <div 
          className='absolute inset-0 w-full h-full z-20 pointer-events-none'
          style={{
            backgroundImage: 'url(/assets/mountfuji-mask.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* OVERLAYS & DETAILS */}
        {/* Soft film grain */}
        <div className='absolute inset-0 z-30 opacity-[0.04] mix-blend-overlay pointer-events-none' 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
        />

        <div className='absolute inset-0 z-30 pointer-events-none flex flex-col justify-end'>
          <div className='w-full h-[30vh] bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent translate-y-[2px]' />
        </div>

        <motion.div
          className='absolute bottom-8 sm:bottom-12 left-0 right-0 z-40 flex justify-center items-center pointer-events-none px-4'
          style={{ opacity: atmosphereOpacity }}
        >
          <div className='flex flex-col items-center gap-3 sm:gap-4'>
            <span className='text-[#D4AF37] text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] font-light uppercase text-center'>
              Discover Japan
            </span>
            <div className='w-[1px] h-10 bg-gradient-to-b from-[#D4AF37]/30 to-transparent' />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;