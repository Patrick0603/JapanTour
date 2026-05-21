import { Globe, Instagram, Facebook, Send } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Included', href: '#included' },
  { label: 'Contacts', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#0A0A0A] py-8 sm:py-10 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
        <div className="h-px bg-[#FAFAFA]/15" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[11px] tracking-[0.18em] uppercase text-[#FAFAFA]/60 hover:text-[#FAFAFA] transition-colors min-h-[44px] inline-flex items-center px-2"
              data-cursor-hover
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-center gap-2 group min-h-[44px]"
            data-cursor-hover
          >
            <Globe
              className="w-4 h-4 text-[#FAFAFA] opacity-50 group-hover:opacity-80 transition-opacity shrink-0"
              strokeWidth={1}
            />
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#FAFAFA]/70">
              Japan Tours
            </span>
          </a>

          <div className="flex items-center gap-5 sm:gap-4">
            {[Instagram, Facebook, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-[#FAFAFA]/30 hover:text-[#FAFAFA]/70 transition-colors min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
                data-cursor-hover
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" strokeWidth={1} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
