import { useEffect, useRef, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ScrollProgress } from "@/components/ScrollProgress";

/** Enhance existing sections in-place, preserving grid tracks and fixed layers. */
export function PageScrollEffects({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || pathname === "/" || !window.IntersectionObserver) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;

    const targets = new Set<HTMLElement>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.dataset.scrollReveal = "visible";
        }
      }
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });

    const discover = () => {
      const candidates = root.querySelectorAll<HTMLElement>(
        'section, article, .glass, [class*="rounded"][class*="border"], [data-slot="card"]'
      );
      for (const el of Array.from(candidates).reverse()) {
        if (targets.has(el) || el.matches("button, a, input, select, textarea") ||
          el.closest('[data-scroll-reveal], [role="dialog"], .fixed, .sticky') ||
          el.querySelector('.fixed, .sticky, [role="dialog"], [data-scroll-reveal]')) continue;
        const rect = el.getBoundingClientRect();
        if (rect.height < 70 || rect.height > window.innerHeight * 1.2 || rect.width < 120) continue;
        targets.add(el);
        // Content already on screen stays visible; only upcoming sections reveal.
        el.dataset.scrollReveal = rect.top < window.innerHeight - 40 ? "visible" : "pending";
        observer.observe(el);
      }
    };
    discover();
    // New quiz steps, tabs, and generated results receive the same enhancement.
    const mutations = new MutationObserver(discover);
    mutations.observe(root, { childList: true, subtree: true });
    let wasBelowTop = window.scrollY > 150;
    const reset = () => {
      if (window.scrollY > 150) wasBelowTop = true;
      if (window.scrollY <= 60 && wasBelowTop) {
        wasBelowTop = false;
        targets.forEach((el) => {
          if (el.getBoundingClientRect().top > window.innerHeight) {
            el.dataset.scrollReveal = "pending";
            observer.unobserve(el);
            observer.observe(el);
          }
        });
      }
    };
    const revealFocused = (event: FocusEvent) => {
      if (event.target instanceof HTMLElement) {
        const el = event.target.closest<HTMLElement>("[data-scroll-reveal]");
        if (el) el.dataset.scrollReveal = "visible";
      }
    };
    const reduceMotion = () => {
      if (motion.matches) targets.forEach((el) => { delete el.dataset.scrollReveal; });
    };
    window.addEventListener("scroll", reset, { passive: true });
    root.addEventListener("focusin", revealFocused);
    motion.addEventListener("change", reduceMotion);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      window.removeEventListener("scroll", reset);
      root.removeEventListener("focusin", revealFocused);
      motion.removeEventListener("change", reduceMotion);
      targets.forEach((el) => { delete el.dataset.scrollReveal; });
    };
  }, [pathname]);

  return <div ref={ref} className="contents" data-page-scroll-effects><ScrollProgress />{children}</div>;
}