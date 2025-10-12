import { motion } from 'framer-motion';
import { fadeUp, stagger } from './AnimationConfig';

const FEATURES = [
  {
    id: 'impromptu',
    title: 'Impromptu speaking',
    body: 'Get a topic, speak for 60 seconds, get live feedback. Unlimited topics to practice.',
    img: '/assets/feature-impromptu.png'
  },
  {
    id: 'themes',
    title: 'Chat on themes with Sarah !',
    body: 'Practice across 20+ exciting themes and get instant feedback. Samples & tips included.',
    img: '/assets/feature-themes.png'
  },
  {
    id: 'tests',
    title: 'Evaluate Daily with speaking tests',
    body: 'A set of speech exercises customized to your strengths. Practice ~10 minutes a day.',
    img: '/assets/feature-tests.png'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="container py-16 md:py-24 lg:py-28">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.08, 0)}
          className="max-w-3xl"
        >
          <motion.span variants={fadeUp(0.02)} className="mb-3 inline-block rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 text-xs tracking-wider text-muted">
            FEATURES
          </motion.span>
          <motion.h2 variants={fadeUp(0.06)} className="text-3xl font-bold md:text-5xl">
            English Practice enables you to speak more than ever
          </motion.h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.id}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp(0.06 * i)}
              className="card p-5 md:p-6 lg:p-7"
            >
              <img src={f.img} alt="" className="mb-5 h-auto w-full rounded-xl" />
              <h3 className="text-lg font-semibold md:text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted md:text-base">{f.body}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="section-divider"></div>
    </section>
  );
}
