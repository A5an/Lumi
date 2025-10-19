import { motion } from 'framer-motion';
import { fadeUp } from './AnimationConfig';

const ITEMS = [
  { name: 'Nazgul Tan', handle: '@nazgultan', avatar: '/assets/avatar-1.png', text: 'I really liked the app — I remembered so many words and grammar rules! It would be amazing if @aleem could also give more practice like a textbook. Thank you! 😘' },
  { name: 'Dilara', handle: '@dilaraa', avatar: '/assets/avatar-2.png', text: 'Hello! I really love @aleem. I often feel shy in real classes, so this is a real lifesaver for me. Just one thing — sometimes it says "great job" even when I make a mistake.' },
  { name: 'Guzel Amirova', handle: '@guzelami', avatar: '/assets/avatar-3.png', text: 'Good evening! @aleem is a total gem — I\'m seriously impressed 😍. In just 15 days, it became a friend, a coach, even a therapist. How does it give such life advice?! Thank you to the whole team ❤️' },
  { name: 'Maxim Orlov', handle: '@orlovmax', avatar: '/assets/avatar-1.png', text: 'Been using @aleem every day on the subway. It\'s addictive! I\'ve never stayed consistent this long with any English app.' },
  { name: 'Aigerim S.', handle: '@aigerim_s', avatar: '/assets/avatar-2.png', text: 'What I love about @aleem is how it adapts to me. Feels like a private tutor who actually listens — and never judges.' },
  { name: 'Roman K.', handle: '@rom4ik', avatar: '/assets/avatar-3.png', text: 'Tried so many apps, but @aleem is the first one that gets my mistakes. It doesn\'t just mark wrong — it explains why.' },
  { name: 'Amina Tulegenova', handle: '@amina.t', avatar: '/assets/avatar-1.png', text: 'Big thanks to @aleem! I finally stopped translating everything in my head. Thinking in English now feels... natural 😌' },
  { name: 'Zarina K.', handle: '@zark', avatar: '/assets/avatar-2.png', text: 'The feedback from @aleem is 🔥. It points out grammar and helps me fix it with examples. So much better than just red underlines.' },
  { name: 'Timur Iskakov', handle: '@timiskk', avatar: '/assets/avatar-3.png', text: 'I love how @aleem gives little life quotes after each session. Like, okay, language + therapy in one? I\'m here for it.' }
];

export default function Testimonials() {
  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...ITEMS, ...ITEMS];
  
  return (
    <section id="testimonials" className="relative">
      <div className="container py-16 md:py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <motion.span variants={fadeUp(0.02)} className="mb-3 inline-block rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 text-xs tracking-wider text-muted">
            TESTIMONIALS
          </motion.span>
          <motion.h2 variants={fadeUp(0.06)} className="text-3xl font-bold md:text-5xl">
            Beta Users Are Loving It
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-8 overflow-hidden"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex gap-5"
            animate={{
              x: [0, -((320 + 20) * ITEMS.length)]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {duplicatedItems.map((t, i) => (
              <article key={i} className="w-[320px] shrink-0 p-5 rounded-2xl bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.02)]">
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
          <a href="#whitelist" className="btn">Join the Whitelist</a>
        </div>
      </div>

      <div className="section-divider"></div>
    </section>
  );
}
