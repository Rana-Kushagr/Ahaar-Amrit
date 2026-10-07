import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "fade" | "scale";
  threshold?: number;
}

// Global scroll watcher that coordinates top-of-page resets cleanly
const resetSubscribers = new Set<() => void>();
let isListeningToScroll = false;
let wasScrolledDown = false;

function setupTopScrollListener() {
  if (typeof window === "undefined" || isListeningToScroll) return;
  isListeningToScroll = true;

  const handleScroll = () => {
    const currentY = window.scrollY || document.documentElement.scrollTop;
    const isAtTop = currentY <= 60;

    if (currentY > 150) {
      wasScrolledDown = true;
    }

    // When the user has scrolled into the page and returns to the top, reset animations
    if (isAtTop && wasScrolledDown) {
      wasScrolledDown = false;
      resetSubscribers.forEach((callback) => callback());
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 850,
  direction = "up",
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Respect user's reduced motion settings
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setRevealed(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    // Register top-of-page reset listener
    setupTopScrollListener();

    const handleReset = () => {
      const target = ref.current;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      // If this element is below the visible top viewport, reset so it can re-animate
      if (rect.top > window.innerHeight * 0.6) {
        setRevealed(false);
      }
    };

    resetSubscribers.add(handleReset);

    return () => {
      resetSubscribers.delete(handleReset);
      observer.disconnect();
    };
  }, [threshold]);

  const getHiddenStyles = () => {
    switch (direction) {
      case "fade":
        return "opacity-0";
      case "scale":
        return "opacity-0 scale-[0.96] translate-y-6";
      case "up":
      default:
        return "opacity-0 translate-y-7";
    }
  };

  const getVisibleStyles = () => {
    switch (direction) {
      case "scale":
        return "opacity-100 scale-100 translate-y-0";
      case "fade":
      case "up":
      default:
        return "opacity-100 translate-y-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all will-change-[transform,opacity] ${
        revealed ? getVisibleStyles() : getHiddenStyles()
      } ${className}`}
    >
      {children}
    </div>
  );
}
