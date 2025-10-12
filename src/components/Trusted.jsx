import { motion } from 'framer-motion';
import { fadeUp, stagger } from './AnimationConfig';

export default function Trusted() {
  return (
    <section aria-labelledby="trusted" className="relative">
      <div className="container py-12 md:py-16">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.06, 0)}
          className="grid gap-8 lg:grid-cols-[1fr,1.2fr] lg:items-center"
        >
          <div>
            <motion.h3 id="trusted" variants={fadeUp(0.02)} className="text-lg font-semibold tracking-wide text-muted">
              Trusted Worldwide
            </motion.h3>
            <motion.div variants={fadeUp(0.08)} className="mt-6 grid grid-cols-3 gap-4 md:gap-6">
              <div className="card p-4 text-center">
                <div className="text-3xl font-extrabold md:text-4xl">200+</div>
                <div className="mt-1 text-xs text-muted">Countries worldwide</div>
              </div>
              <div className="card p-4 text-center">
                <div className="text-3xl font-extrabold md:text-4xl">7M+</div>
                <div className="mt-1 text-xs text-muted">App Downloads</div>
              </div>
              <div className="card p-4 text-center">
                <div className="text-3xl font-extrabold md:text-4xl">4.7 ⭐️</div>
                <div className="mt-1 text-xs text-muted">App rating</div>
              </div>
            </motion.div>
          </div>

          <motion.a
            variants={fadeUp(0.12)} href="#press" 
            className="card flex items-center gap-4 p-4 hover:bg-[rgba(255,255,255,0.04)] transition-colors"
          >
            <img src="/assets/press-inc42.png" className="h-10 w-auto" alt="Press" />
            <p className="text-sm text-muted">
              Stimuler bags $3.75mn to strengthen its AI-led English tutor.
            </p>
          </motion.a>
        </motion.div>
      </div>

      <div className="section-divider"></div>
    </section>
  );
}
