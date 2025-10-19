import { motion } from 'framer-motion';
import { fadeUp, stagger } from './AnimationConfig';
import { useState } from 'react';

export default function Whitelist() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Fake submission - just show success message
      console.log('Email collected:', email);
      setIsSubmitted(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id="whitelist" className="relative">
      <div className="container py-16 md:py-24">
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.08, 0)}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.span variants={fadeUp(0.02)} className="mb-3 inline-block rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 text-xs tracking-wider text-muted">
            LAUNCHING SOON
          </motion.span>
          <motion.h2 variants={fadeUp(0.06)} className="text-3xl font-bold md:text-5xl">
            Perfect for expats, remote workers & IELTS prep
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Join 1,200+ professionals getting first access. Whether you're preparing for IELTS, working remotely, or living abroad — get fluent faster.
          </motion.p>
          
          <motion.form 
            variants={fadeUp(0.14)} 
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 max-w-sm h-12 px-4 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.12)] rounded-pill text-sm text-fg placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            />
            <button 
              type="submit" 
              className="btn shrink-0"
              disabled={isSubmitted}
            >
              {isSubmitted ? 'You\'re in! 🎉' : 'Get Free Early Access'}
            </button>
          </motion.form>

          {isSubmitted && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-primary"
            >
              🎉 Welcome to the whitelist! We'll notify you when we launch.
            </motion.p>
          )}
        </motion.div>
      </div>
      
      <div className="section-divider"></div>
    </section>
  );
}
