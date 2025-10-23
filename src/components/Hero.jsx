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
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span variants={fadeUp(0.05, 10)} className="mb-3 inline-block rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 text-xs tracking-wider text-muted">
            ALL-IN-ONE SUPER-APP
          </motion.span>

          <motion.h1 variants={fadeUp(0.1, 12)} className="text-balance text-4xl font-extrabold leading-[1.05] md:text-6xl lg:text-7xl">
            Stop bouncing between <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">5 different English apps.</span>
          </motion.h1>

          <motion.p variants={fadeUp(0.18, 16)} className="mt-5 max-w-prose mx-auto text-base leading-relaxed text-muted md:text-lg">
            One AI-powered super-app with 7 specialist coaches. Learn, practice, and get fluent — all in one place. No more app-hopping.
          </motion.p>

          <motion.div variants={fadeUp(0.26, 18)} className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a href="#whitelist" className="btn">End App-Hopping Forever</a>
            <a href="#features" className="inline-flex h-12 items-center rounded-pill border border-[rgba(255,255,255,0.12)] px-5 text-sm text-fg hover:bg-[rgba(255,255,255,0.04)] transition-[background]">Learn more</a>
          </motion.div>

          <motion.div 
            variants={fadeUp(0.32, 20)}
            className="relative mt-12 max-w-2xl mx-auto"
          >
            <motion.video
              src="/assets/demo.mp4"
              className="relative z-30 mx-auto w-[60%] max-w-[320px] drop-shadow-[0_40px_120px_rgba(90,60,255,.35)]"
              controls
              autoPlay
              muted
              loop
              playsInline
              initial={{ y: 24, opacity: 0 }} 
              animate={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: easeHero } }}
              whileInView={{ y: 0 }} 
              viewport={{ once: true }}

            />
            {/* <motion.img
              src="/assets/device-2.png" alt="AI Teaching Interface"
              className="absolute left-1/2 top-1/2 z-20 w-[40%] -translate-x-[80%] -translate-y-[12%] rotate-[-6deg]"
              initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 1.0, delay: 0.06, ease: easeHero } }}
            /> */}
            {/* <motion.img
              src="/assets/device-3.png" alt="Personalized Learning Path"
              className="absolute left-1/2 top-1/2 z-10 w-[38%] -translate-x-[5%] -translate-y-[18%] rotate-[7deg]"
              initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 1.05, delay: 0.1, ease: easeHero } }}
            /> */}
          </motion.div>
        </motion.div>
      </div>

      <div className="section-divider"></div>
    </section>
  );
}
