import { motion } from 'framer-motion';
import { fadeUp, stagger, scaleIn, easeHero } from './AnimationConfig';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          variants={stagger(0.08, 0)}
          className="grid items-center gap-10 lg:grid-cols-[1.05fr,1fr]"
        >
          <div className="relative z-10">
            <motion.span variants={fadeUp(0.05, 10)} className="mb-3 inline-block rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 text-xs tracking-wider text-muted">
              AI POWERED
            </motion.span>

            <motion.h1 variants={fadeUp(0.1, 12)} className="text-balance text-4xl font-extrabold leading-[1.05] md:text-6xl lg:text-7xl">
              World&apos;s fastest way to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Speak English better!</span>
            </motion.h1>

            <motion.p variants={fadeUp(0.18, 16)} className="mt-5 max-w-prose text-base leading-relaxed text-muted md:text-lg">
              Practice, get instant feedback, and improve daily with your AI speech coach.
            </motion.p>

            <motion.div variants={fadeUp(0.26, 18)} className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#download" className="btn">Let's Begin</a>
              <a href="#learn" className="inline-flex h-12 items-center rounded-pill border border-[rgba(255,255,255,0.12)] px-5 text-sm text-fg hover:bg-[rgba(255,255,255,0.04)] transition-[background]">Learn more</a>
            </motion.div>
          </div>

          <div className="relative">
            <motion.img
              src="/assets/device-1.png" alt=""
              className="relative z-30 mx-auto w-[78%] max-w-[420px] drop-shadow-[0_40px_120px_rgba(90,60,255,.35)]"
              initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: easeHero } }}
              whileInView={{ y: 0 }} viewport={{ once: true }}
            />
            <motion.img
              src="/assets/device-2.png" alt=""
              className="absolute left-1/2 top-1/2 z-20 w-[55%] -translate-x-[70%] -translate-y-[12%] rotate-[-6deg]"
              initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 1.0, delay: 0.06, ease: easeHero } }}
            />
            <motion.img
              src="/assets/device-3.png" alt=""
              className="absolute left-1/2 top-1/2 z-10 w-[52%] -translate-x-[5%] -translate-y-[18%] rotate-[7deg]"
              initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 1.05, delay: 0.1, ease: easeHero } }}
            />
          </div>
        </motion.div>
      </div>

      <div className="section-divider"></div>
    </section>
  );
}
