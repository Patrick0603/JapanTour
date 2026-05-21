import { useState } from 'react';
import './ExpandingCardsSection.css';

const OPTIONS = [
  {
    id: 1,
    bg: 'url(/assets/bc8767bb18416bb9257a133344d26612.jpg)',
    icon: 'fas fa-mountain',
    main: 'Mount Fuji',
    sub: 'The highest peak and cultural icon',
    colorRow: '#ED5565' // not strictly used via nth-child but valid logic
  },
  {
    id: 2,
    bg: 'url(/assets/newtokyotower.jpg)',
    icon: 'fas fa-city',
    main: 'Tokyo Tower',
    sub: 'A symbol of Japan\'s post-war rebirth',
    colorRow: '#FC6E51'
  },
  {
    id: 3,
    bg: 'url(/assets/kyotonew.jpg)',
    icon: 'fas fa-landmark',
    main: 'Kyoto',
    sub: 'Heart of traditional Japanese culture',
    colorRow: '#FFCE54'
  },
  {
    id: 4,
    bg: 'url(/assets/shirakawagonew.jpg)',
    icon: 'fas fa-snowflake',
    main: 'Shirakawa-go',
    sub: 'Historic village and winter wonderland',
    colorRow: '#2ECC71'
  },
  {
    id: 5,
    bg: 'url(/assets/HimejiCastle.jpg)',
    icon: 'fab fa-fort-awesome',
    main: 'Himeji Castle',
    sub: 'Spectacular and pristine white castle',
    colorRow: '#5D9CEC'
  }
];

export default function ExpandingCardsSection() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="relative w-full overflow-x-hidden bg-[#0A0A0A] py-16 sm:py-24 lg:py-32 flex flex-col justify-center items-center font-body text-white px-0">
      <div className="options">
        {OPTIONS.map((opt) => (
          <div
            key={opt.id}
            className={`option ${activeCard === opt.id ? 'active' : ''}`}
            style={{ 
              ['--optionBackground' as any]: opt.bg,
              ['--defaultBackground' as any]: opt.colorRow,
            }}
            onClick={() => setActiveCard(opt.id)}
            data-cursor-hover
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <i className={opt.icon}></i>
              </div>
              <div className="info">
                <div className="main">{opt.main}</div>
                <div className="sub">{opt.sub}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}