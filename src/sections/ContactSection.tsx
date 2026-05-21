import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your request! We will contact you soon.');
  };

  const inputClasses = (field: string) =>
    `w-full bg-transparent border-b ${
      focusedField === field ? 'border-[#D4F87A]' : 'border-[#FAFAFA]/20'
    } py-3 text-[#FAFAFA] placeholder-[#888888] outline-none transition-colors duration-300 font-body text-sm`;

  return (
    <section id="contact" className="relative w-full min-h-[100dvh] sm:min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/contact-cherry-fuji.jpg"
          alt="Cherry blossoms framing Mount Fuji"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-[#0A0A0A]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[100dvh] sm:min-h-screen flex items-center justify-center sm:justify-start px-4 sm:px-6 lg:px-10 py-20 sm:py-24 pt-28 sm:pt-24">
        <div className="max-w-6xl w-full mx-auto">
          <motion.div
            className="w-full max-w-md mx-auto sm:mx-0 rounded-2xl p-6 sm:p-8 lg:p-10"
            style={{
              background: 'rgba(20, 20, 20, 0.5)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Heading */}
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#FAFAFA] mb-2 leading-snug sm:leading-relaxed tracking-wide sm:tracking-wider">
              Want to join us, but still have questions?
            </h3>
            <p className="text-base sm:text-xl tracking-[0.12em] sm:tracking-[0.18em] lowercase font-serif text-[#888888] mb-6 sm:mb-8">
              Leave a request
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('name')}
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('phone')}
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  onFocus={() => setFocusedField('comment')}
                  onBlur={() => setFocusedField(null)}
                  rows={3}
                  className={`${inputClasses('comment')} resize-none`}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full min-h-[48px] py-4 rounded-full text-sm font-medium text-[#0A0A0A] transition-colors duration-300 mt-4"
                style={{ background: '#FAFAFA' }}
                whileHover={{ backgroundColor: '#D4F87A' }}
                transition={{ duration: 0.3 }}
                data-cursor-hover
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
