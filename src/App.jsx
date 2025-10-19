import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Testimonials from './components/Testimonials.jsx';
import Whitelist from './components/Whitelist.jsx';
import Footer from './components/Footer.jsx';
import BackgroundEffects from './components/BackgroundEffects.jsx';
import CursorEffect from './components/CursorEffect.jsx';

export default function App() {
  return (
    <div className="relative min-h-dvh overflow-x-clip">
      <BackgroundEffects />
      <CursorEffect />
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* <HowItWorks /> */}
        {/* <Testimonials /> */}
        <Whitelist />
      </main>
      <Footer />
    </div>
  );
}
