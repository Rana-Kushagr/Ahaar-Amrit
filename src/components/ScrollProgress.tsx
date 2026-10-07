import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    let ticking = false;
    let frame = 0;

    const updateScrollProgress = () => {
      ticking = false;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }
      const currentScroll = window.scrollY;
      const pct = Math.min(100, Math.max(0, (currentScroll / scrollHeight) * 100));
      setProgress(pct);
    };

    const onScroll = () => {
      if (!ticking) {
        frame = window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const resizeObserver = new ResizeObserver(onScroll);
    resizeObserver.observe(document.body);
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      resizeObserver.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <div
      className="scroll-progress-track pointer-events-none fixed left-0 top-0 z-[60] h-[3px] w-full"
      aria-hidden="true"
    >
      <div
        className="scroll-progress-fill h-full transition-[width] duration-150 ease-out motion-reduce:transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
