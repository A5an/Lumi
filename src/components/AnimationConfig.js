export const easeHero = [0.22, 1, 0.36, 1];
export const easeHover = [0.2, 0.8, 0.2, 1];

export const fadeUp = (delay = 0, y = 24) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease: easeHero } }
});

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1, scale: 1,
    transition: { duration: 0.8, delay, ease: easeHero }
  }
});

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  show: {
    transition: { staggerChildren, delayChildren }
  }
});
