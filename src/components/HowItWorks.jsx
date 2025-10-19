import { motion } from 'framer-motion';
import { fadeUp, stagger } from './AnimationConfig';

const STEPS = [
  {
    id: 'pick-content',
    title: 'Pick Your Content',
    description: 'Pick or drop any content you love. (or let Lumi choose)',
    number: '1'
  },
  {
    id: 'learn-fundamentals',
    title: 'Learn the Fundamentals',
    description: 'Learn the key grammar, vocab, and expressions from it.',
    number: '2'
  },
  {
    id: 'immerse-yourself',
    title: 'Immerse Yourself',
    description: 'Immerse into real content and experience authentic language usage.',
    number: '3'
  },
  {
    id: 'practice-feedback',
    title: 'Practice & Get Feedback',
    description: 'Speak, write, and get instant feedback to improve your skills.',
    number: '4'
  },
  {
    id: 'build-library',
    title: 'Build Your Library',
    description: 'Review and grow your personal fluency library with every lesson.',
    number: '5'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative">
      <div className="container py-16 md:py-24 lg:py-28">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.08, 0)}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span variants={fadeUp(0.02)} className="mb-3 inline-block rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 text-xs tracking-wider text-muted">
            HOW IT WORKS
          </motion.span>
          <motion.h2 variants={fadeUp(0.06)} className="text-3xl font-bold md:text-5xl">
            It's like having a full team of expert tutors – in your pocket.
          </motion.h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp(0.06 * i)}
              className="card p-6 text-center"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-lg font-bold text-white">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold md:text-xl">{step.title}</h3>
              <p className="mt-2 text-sm text-muted md:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp(0.3)}
          className="mt-12 text-center"
        >
          <a href="#whitelist" className="btn">Try My First Lesson</a>
        </motion.div>
      </div>
      
      <div className="section-divider"></div>
    </section>
  );
}
