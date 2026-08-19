import { useEffect, useRef } from "react";

/**
 * Ambient background video that only decodes while it is on screen and the
 * tab is visible. Keeps the hero motion without burning GPU/CPU continuously,
 * which is what made the preview stutter and reload.
 */
export function HeroVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    let onScreen = false;

    const sync = () => {
      if (onScreen && !document.hidden) {
        void el.play().catch(() => {});
      } else {
        el.pause();
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { threshold: 0.01 },
    );
    io.observe(el);
    document.addEventListener("visibilitychange", sync);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <video
      ref={ref}
      loop
      muted
      playsInline
      preload="none"
      poster="/videos/hero-poster.jpg"
      disablePictureInPicture
      aria-hidden
      className={`object-cover w-full h-full transform-gpu ${className}`}
    >
      <source src="/videos/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}
