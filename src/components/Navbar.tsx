import { useState, useRef, useEffect, MouseEvent } from 'react';
import './GlassNav.css';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('About');
  const navRef = useRef<HTMLElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const activePillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const updatePill = (btn: HTMLElement | null, smooth = true) => {
    if (!btn || !activePillRef.current) return;
    
    if (!smooth) {
      activePillRef.current.style.transition = 'none';
    } else {
      activePillRef.current.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.2, 0.64, 1), width 0.5s cubic-bezier(0.34, 1.2, 0.64, 1), background 0.5s ease, box-shadow 0.5s ease';
    }
    
    activePillRef.current.style.setProperty('--pill-width', `${btn.offsetWidth}px`);
    activePillRef.current.style.setProperty('--pill-x', `${btn.offsetLeft}px`);
  };

  useEffect(() => {
    const activeBtn = document.querySelector('.nav-btn.active') as HTMLElement;
    if (activeBtn) {
      setTimeout(() => {
        updatePill(activeBtn, false);
      }, 50);
    }

    const handleResize = () => {
      const active = document.querySelector('.nav-btn.active') as HTMLElement;
      if (active) updatePill(active, false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!navRef.current || !glareRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    glareRef.current.style.setProperty("--x", `${x}px`);
    glareRef.current.style.setProperty("--y", `${y}px`);
  };

  const navItems = [
    {
      id: 'About',
      href: '#about',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      )
    },
    {
      id: 'Included',
      href: '#included',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      id: 'Contacts',
      href: '#contact',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveTab(id);
    updatePill(e.currentTarget);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 sm:top-6 md:top-8 left-0 right-0 z-50 flex items-center justify-center px-3 sm:px-4 pointer-events-none safe-area-top">
      <a
        href="/"
        data-cursor-hover
        className="absolute left-3 sm:left-4 md:left-[3%] pointer-events-auto flex items-center min-h-[44px] min-w-[44px]"
        aria-label="Japan Tour home"
      >
        <img 
          src="/assets/JT_logo-removebg-preview.png" 
          alt="Japan Tour Logo" 
          className="h-8 sm:h-9 md:h-10 w-auto hover:opacity-80 transition-opacity"
        />
      </a>

      <nav 
        ref={navRef}
        className="liquid-nav pointer-events-auto" 
        onMouseMove={handleMouseMove}
        aria-label="Main navigation"
      >
          <div className="liquid-glare-container">
              <div ref={glareRef} className="liquid-glare"></div>
          </div>

          <div className="nav-items">
              <div ref={activePillRef} className="active-pill"></div>

              {navItems.map((item) => (
                <button 
                  key={item.id}
                  type="button"
                  className={`nav-btn ${activeTab === item.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  data-cursor-hover
                  aria-label={item.id}
                  aria-current={activeTab === item.id ? 'page' : undefined}
                >
                    <div className="btn-content">
                        {item.icon}
                        <span className="nav-btn-label">{item.id}</span>
                    </div>
                </button>
              ))}
          </div>
      </nav>
    </header>
  );
}
