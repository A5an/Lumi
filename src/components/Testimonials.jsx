import { motion } from 'framer-motion';
import { fadeUp } from './AnimationConfig';
import { useRef } from 'react';

const ITEMS = [
  { name: 'Daniël', handle: '@dvdwinden', avatar: '/assets/avatar-1.png', text: 'Its simply brilliant... very detailed feedback. Love it.' },
  { name: 'Regina', handle: '@remo!', avatar: '/assets/avatar-2.png', text: 'Helped me work on my pronunciation. Noticed improvement in 2 weeks.' },
  { name: 'Pawan Dubey', handle: '@Pawa090', avatar: '/assets/avatar-3.png', text: 'Amazing app for non‑English environments. Personalized feedback.' }
];

export default function Testimonials() {
  const ref = useRef(null);

  return (
    <section id="testimonials" className="relative">
      <div className="container py-16 md:py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <motion.span variants={fadeUp(0.02)} className="mb-3 inline-block rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 text-xs tracking-wider text-muted">
            TESTIMONIALS
          </motion.span>
          <motion.h2 variants={fadeUp(0.06)} className="text-3xl font-bold md:text-5xl">
            What Our Users Say
          </motion.h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="mt-8 overflow-hidden"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: -600, right: 0 }}
            className="flex gap-5"
          >
            {ITEMS.map((t, i) => (
              <article key={i} className="card w-[320px] shrink-0 p-5">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted">{t.handle}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t.text}</p>
              </article>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-12 grid place-items-center">
          <a href="#download" className="btn">Get Started</a>
        </div>
      </div>

      <div className="section-divider"></div>
    </section>
  );
}
