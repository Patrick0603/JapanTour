import { motion } from 'framer-motion';
import { Users, Plane, Bus, Hotel } from 'lucide-react';

const cards = [
  {
    icon: Users,
    title: 'Guides',
    description: '2 awesome guides who know everything about Japan!',
  },
  {
    icon: Plane,
    title: 'Flights',
    description: 'Routes: Moscow — Osaka, Tokyo — Moscow',
  },
  {
    icon: Bus,
    title: 'Transfers',
    description: 'From the airport to the hotels',
  },
  {
    icon: Hotel,
    title: 'Hotels',
    description: 'Comfortable accommodation, 2 people per room (breakfasts included)',
  },
];

function IncludedCard({ card }: { card: (typeof cards)[0] }) {
  const Icon = card.icon;
  return (
    <div
      className="group relative shrink-0 w-[min(280px,calc(100vw-3rem))] sm:w-[300px] md:w-[320px] rounded-xl p-5 sm:p-6 cursor-pointer overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
      data-cursor-hover
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(212,248,122,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="mb-3 sm:mb-4 transition-transform duration-300 md:group-hover:scale-110">
        <Icon className="w-5 h-5 text-[#D4F87A]" strokeWidth={1.5} />
      </div>

      <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#8A7342] mb-2 sm:mb-3 leading-tight">
        {card.title}
      </h3>

      <p className="text-base sm:text-lg md:text-xl font-display text-[#888888] leading-relaxed tracking-wide">
        {card.description}
      </p>
    </div>
  );
}

export default function IncludedSection() {
  return (
    <section id="included" className="relative w-full bg-[#0A0A0A] py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mb-10 sm:mb-16">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <motion.h2
            className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-[#FAFAFA] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            What's Included
          </motion.h2>
          <div className="hidden sm:block flex-1 h-px bg-[#FAFAFA]/15" />
        </div>
      </div>

      <div className="w-full overflow-hidden relative">
        <div className="flex w-max animate-marquee-mobile sm:animate-marquee gap-3 sm:gap-4 px-3 sm:px-4">
          {[...cards, ...cards].map((card, i) => (
            <IncludedCard key={`${i}-${card.title}`} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
