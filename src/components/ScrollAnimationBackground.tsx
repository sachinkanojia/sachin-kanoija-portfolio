import { useEffect, useRef } from 'react';

const TOTAL = 151;

export function ScrollAnimationBackground() {
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg1 = bg1Ref.current;
    const bg2 = bg2Ref.current;
    if (!bg1 || !bg2) return;

    let cancelled = false;
    let rafId = 0;

    const frames: HTMLImageElement[] = [];
    for (let i = 1; i <= TOTAL; i++) {
      const img = new Image();
      img.src = '/bgAnimation/ezgif-frame-' + String(i).padStart(3, '0') + '.jpg';
      frames.push(img);
    }

    bg1.style.backgroundImage = "url('" + frames[0].src + "')";

    let current = 0;

    const raf = () => {
      if (cancelled) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const target = Math.min(1, Math.max(0, window.scrollY / max));
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.0005) current = target;

      const f = current * (TOTAL - 1);
      const base = Math.min(TOTAL - 1, Math.floor(f));
      const blend = f - base;
      const next = Math.min(TOTAL - 1, base + 1);

      bg1.style.backgroundImage = "url('" + frames[base].src + "')";
      if (next !== base) {
        bg2.style.backgroundImage = "url('" + frames[next].src + "')";
        bg2.style.opacity = blend.toFixed(3);
      } else {
        bg2.style.opacity = '0';
      }
      rafId = requestAnimationFrame(raf);
    };

    const start = () => {
      if (cancelled) return;
      rafId = requestAnimationFrame(raf);
    };

    Promise.all(
      frames.map((img) =>
        img.complete && img.naturalWidth > 0 ? Promise.resolve() : img.decode().catch(() => {}),
      ),
    ).then(start);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={bg1Ref} className="scroll-animation-bg" />
      <div ref={bg2Ref} className="scroll-animation-bg" style={{ opacity: 0 }} />
    </>
  );
}