import { useEffect, useRef } from 'react';

export default function CursorEffect() {
  const dot = useRef(null);

  useEffect(() => {
    const el = dot.current;
    if (!el) return;
    let x = 0, y = 0, tx = 0, ty = 0;
    const speed = 0.18; // adjust to match live

    const onMove = (e) => { tx = e.clientX, ty = e.clientY; };
    const raf = () => {
      x += (tx - x) * speed;
      y += (ty - y) * speed;
      el.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(raf);
    };
    window.addEventListener('mousemove', onMove);
    const id = requestAnimationFrame(raf);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(id); };
  }, []);

  return (
    <div
      aria-hidden
      ref={dot}
      className="pointer-events-none fixed left-0 top-0 z-[60] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background: 'radial-gradient(closest-side, rgba(126,92,255,.65), rgba(126,92,255,0))',
        filter: 'blur(1px)'
      }}
    />
  );
}
