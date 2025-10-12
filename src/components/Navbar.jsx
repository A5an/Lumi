import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './AnimationConfig';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
  { href: '#careers', label: 'Careers' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-glass">
      <motion.div
        className="container flex h-16 items-center justify-between"
        initial="hidden" animate="show" variants={fadeUp(0, -8)}
      >
        <a href="#" className="flex items-center gap-2">
          <img src="/assets/logo.svg" alt="Stimuler" className="h-7 w-auto" />
          <span className="sr-only">Stimuler</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {links.map(l => (
            <a key={l.label} href={l.href} className="hover:text-fg transition-colors">{l.label}</a>
          ))}
          <a href="#download" className="btn ml-2">Download now</a>
        </nav>

        <button aria-label="Open menu"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.06)]"
          onClick={() => setOpen(true)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </motion.div>

      {open && (
        <div className="drawer" onClick={() => setOpen(false)}>
          <motion.div
            onClick={e => e.stopPropagation()}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } }}
            className="absolute left-0 right-0 top-0 mx-auto mt-16 w-[92%] max-w-md rounded-2xl bg-[rgba(16,16,24,0.98)] p-6 shadow-card"
          >
            <div className="flex flex-col gap-3 text-base">
              {links.map(l => (
                <a key={l.label} href={l.href} className="rounded-xl px-3 py-3 hover:bg-[rgba(255,255,255,0.05)]" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#download" className="btn mt-2">Download now</a>
            </div>
          </motion.div>
        </div>
      )}
    </header>
  );
}
