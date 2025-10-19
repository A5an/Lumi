import { motion } from 'framer-motion';
import { fadeUp, stagger } from './AnimationConfig';

const STATS = [
  {
    id: 'followers',
    number: '580,000+',
    title: 'Followers',
    description: 'We\'ve built a thriving community on Instagram — over 350K people follow us for daily tips, insights, and motivation. It\'s not just a number — it\'s trust.'
  },
  {
    id: 'guides',
    number: '600,000+',
    title: 'Free guides downloaded',
    description: 'Our free guides have helped hundreds of thousands learn smarter and faster. With over 600K downloads, the value speaks for itself.'
  },
  {
    id: 'clients',
    number: '3,000+',
    title: 'Paying clients from 35 countries',
    description: 'Learners from 35+ countries trust us to guide their progress. More than 3,000 paying clients have chosen our proven system — and are seeing real results.'
  }
];

export default function TeamCredentials() {
  return (
    <section className="relative">
      <div className="container py-16 md:py-24 lg:py-28">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.08, 0)}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span variants={fadeUp(0.02)} className="mb-3 inline-block rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 text-xs tracking-wider text-muted">
            OUR TRACK RECORD
          </motion.span>
          <motion.h2 variants={fadeUp(0.06)} className="text-3xl font-bold md:text-5xl">
            From the Team Behind GetEnglish
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="mt-4 text-lg text-muted">
            #1 Self-Learning School in Eurasia
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp(0.06 * i)}
              className="card p-6 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent md:text-4xl">
                {stat.number}
              </div>
              <h3 className="mt-2 text-lg font-semibold">{stat.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp(0.3)}
          className="mt-12 text-center"
        >
          <a href="#whitelist" className="btn">Try for free</a>
        </motion.div>
      </div>
      
      <div className="section-divider"></div>
    </section>
  );
}
