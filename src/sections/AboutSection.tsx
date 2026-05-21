import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    id: "tokyo",
    title: "Tokyo",
    subtitle: "The Modern Metropolis",
    description: "Experience the vibrant energy of Japan's capital, where neon-lit skyscrapers stand beautifully alongside historic temples and luxury boutiques.",
    images: ["/assets/tokyo1.jpg", "/assets/tokyo2.webp"]
  },
  {
    id: "kyoto",
    title: "Kyoto",
    subtitle: "The Ancient Capital",
    description: "Discover ancient temples, traditional tea houses, and the timeless culture of Japan's spiritual heart in unparalleled elegance.",
    images: ["/assets/kyoto1.png", "/assets/kyoto2.webp"]
  },
  {
    id: "osaka",
    title: "Osaka",
    subtitle: "The Kitchen of Japan",
    description: "Indulge in unmatched culinary delights and the warm, dynamic nightlife of this bustling port city from the comfort of exclusive access.",
    images: ["/assets/osaka1.jpg", "/assets/osaka2.jpg"]
  }
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeImageIndices, setActiveImageIndices] = useState<number[]>(timelineData.map(() => 0));

  const toggleImage = (index: number) => {
    setActiveImageIndices(prev => {
      const newIndices = [...prev];
      newIndices[index] = (newIndices[index] + 1) % timelineData[index].images.length;
      return newIndices;
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      gsap.fromTo(lineRef.current,
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: 1
          }
        }
      );

      nodesRef.current.forEach((node) => {
        if (!node) return;
        gsap.fromTo(node,
          { backgroundColor: "#3f3f46", scale: 1, boxShadow: "0 0 0px rgba(138, 115, 66, 0)" },
          {
            backgroundColor: "#8a7342",
            scale: 1.5,
            boxShadow: "0 0 20px rgba(138, 115, 66, 0.8)",
            scrollTrigger: {
              trigger: node,
              start: "top center",
              toggleActions: "play none reverse none"
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 md:py-32 bg-zinc-950 text-zinc-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="text-center mb-16 sm:mb-24 md:mb-32">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-white mb-4 sm:mb-6 uppercase tracking-widest font-display px-2">
            The <span className="text-[#8a7342] font-serif italic normal-case">Journey</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed px-2">
            Embark on an unforgettable luxury expedition through Japan's most captivating destinations.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block"></div>
          <div ref={lineRef} className="absolute left-1/2 top-0 w-px bg-[#8a7342] shadow-[0_0_15px_rgba(138,115,66,0.6)] -translate-x-1/2 hidden md:block origin-top"></div>

          <div className="space-y-16 sm:space-y-24 md:space-y-48">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 sm:gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div
                    className="absolute left-4 sm:left-6 md:left-1/2 top-8 md:top-1/2 -translate-x-0 md:-translate-x-1/2 md:-translate-y-1/2 flex md:hidden items-center justify-center z-10 w-2.5 h-2.5 rounded-full bg-zinc-700 border-2 border-zinc-950"
                    aria-hidden="true"
                  />

                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10 w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-950"
                    ref={el => { nodesRef.current[index] = el; }}
                  />

                  <div className="w-full md:w-[45%] pl-8 sm:pl-10 md:pl-0">
                    <div className={`flex flex-col text-left ${isEven ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'}`}>
                      <button
                        type="button"
                        className="text-left md:text-inherit group"
                        onClick={() => toggleImage(index)}
                        aria-label={`View alternate ${item.title} photo`}
                      >
                        <h3 className="text-3xl sm:text-4xl md:text-6xl font-light text-white mb-2 uppercase tracking-wider font-display transition-colors group-active:text-zinc-300 md:group-hover:text-zinc-300">
                          {item.title}
                        </h3>
                      </button>
                      <h4 className="text-lg sm:text-xl text-[#8a7342] mb-4 sm:mb-6 font-serif italic">{item.subtitle}</h4>
                      <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="group w-full md:w-[45%] relative aspect-[4/3] mt-2 md:mt-0 cursor-pointer overflow-hidden rounded-sm text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a7342]"
                    onClick={() => toggleImage(index)}
                    aria-label={`Tap to see another view of ${item.title}`}
                  >
                    <img 
                      key={item.images[activeImageIndices[index]]}
                      src={item.images[activeImageIndices[index]]} 
                      alt={`${item.title} — view ${activeImageIndices[index] + 1}`}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out md:group-hover:scale-105 animate-in fade-in zoom-in-95 duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/15 md:bg-black/10 md:hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                    <span className="absolute bottom-3 right-3 text-[10px] tracking-[0.15em] uppercase text-white/70 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-sm md:hidden">
                      Tap to switch
                    </span>
                  </button>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
