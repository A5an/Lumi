import { motion } from 'framer-motion';
import { fadeUp, stagger } from './AnimationConfig';

const FEATURES = [
  {
    id: 'replaces-fragmentation',
    title: 'Replaces 5+ Apps',
    body: 'Grammar drills, flashcards, speaking bots, videos — all replaced by one intelligent system.',
    icon: '📱'
  },
  {
    id: 'safe-practice',
    title: 'Practice Without Fear',
    body: 'No judgment, no scheduling. Practice speaking anytime with AI that never gets impatient.',
    icon: '🗣️'
  },
  {
    id: 'personal-content',
    title: 'Learn From What You Love',
    body: 'Use Netflix shows, work emails, or TikToks. Real content that matches your interests and level.',
    icon: '🎯'
  },
  {
    id: 'tutor-quality-cost',
    title: '1/10th the Cost of Tutors',
    body: 'Get personalized feedback and corrections at a fraction of private tutor prices.',
    icon: '💰'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="container py-16 md:py-24 lg:py-28">
        {/* Value Proposition */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.08, 0)}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.span variants={fadeUp(0.02)} className="mb-3 inline-block rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 text-xs tracking-wider text-muted">
            HOW IT WORKS
          </motion.span>
          <motion.h2 variants={fadeUp(0.06)} className="text-3xl font-bold md:text-5xl">
            The <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">all-in-one English super-app</span> you've been waiting for
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="mt-6 text-lg leading-relaxed text-muted">
            Stop juggling Duolingo + HelloTalk + grammar books + YouTube videos. Get everything in one place.
          </motion.p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.id}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp(0.06 * i)}
              className="card p-4 md:p-5 text-center"
            >
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="text-base font-semibold md:text-lg">{f.title}</h3>
              <p className="mt-2 text-xs text-muted md:text-sm">{f.body}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="section-divider"></div>
    </section>
  );
}
