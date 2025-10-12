import { motion } from 'framer-motion';
import { fadeUp, stagger } from './AnimationConfig';

const QA = [
  { q: 'What is Stimuler?', a: 'Your personal AI speech coach for daily speaking practice and instant feedback.' },
  { q: 'How long should I practice?', a: 'About 10 minutes per day is enough to see steady improvements.' },
  { q: 'Do you evaluate pronunciation?', a: 'Yes — pronunciation, grammar, vocabulary usage, and fluency pacing.' }
];

export default function FAQ() {
  return (
    <section id="faq" className="relative">
      <div className="container py-16 md:py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger(0.06, 0)}>
          <motion.h2 variants={fadeUp(0.02)} className="text-3xl font-bold md:text-5xl">FAQs</motion.h2>
          <div className="mt-8 grid gap-3">
            {QA.map((item, i) => (
              <motion.details key={i} variants={fadeUp(0.04 * i)} className="card group p-5 open:shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  {item.q}
                  <svg className="ml-4 h-5 w-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-muted">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="section-divider"></div>
    </section>
  );
}
