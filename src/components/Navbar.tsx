import { Link, useLocation } from "@tanstack/react-router";
import { Leaf, Menu } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Nutrition", to: "/nutrition-plan" },
  { label: "Ayurveda", to: "/dosha" },
  { label: "Profile", to: "/profile" },
] as const;

export function Navbar() {
  const location = useLocation();

  return (
    <header
      className="
        fixed top-5 left-1/2 z-50
        w-[94%] max-w-5xl
        -translate-x-1/2
        rounded-2xl
        border border-white/50
        bg-white/45
        backdrop-blur-2xl
        shadow-[0_15px_50px_rgba(70,50,20,0.12)]
        transition-all duration-300
      "
    >
      <div className="flex items-center justify-between px-5 py-3 md:px-6 md:py-3.5">

        {/* Logo */}
        <Link
          to="/"
          className="
            group
            flex items-center gap-3
            transition-transform duration-300
            hover:scale-[1.02]
          "
        >
          <div
            className="
              flex h-11 w-11 items-center justify-center
              rounded-xl
              bg-gradient-hero
              shadow-[0_8px_25px_rgba(255,120,40,0.28)]
              transition-transform duration-300
              group-hover:rotate-3
            "
          >
            <Leaf className="h-5 w-5 text-white" />
          </div>

          <div className="leading-tight">
            <p className="font-display text-lg font-bold tracking-tight md:text-xl">
              Ahaar Amrit
            </p>

            <p className="font-hindi text-[11px] text-muted-foreground">
              आहार अमृत
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1.5 md:flex">
          {links.map((link) => {
            const active = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`
                  relative rounded-full
                  px-4 py-2
                  text-sm font-medium
                  transition-all duration-300
                  ${
                    active
                      ? `
                        bg-gradient-hero
                        text-white
                        shadow-[0_6px_20px_rgba(255,120,40,0.25)]
                      `
                      : `
                        text-foreground/70
                        hover:bg-white/60
                        hover:text-foreground
                        hover:shadow-sm
                      `
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="
            flex h-10 w-10 items-center justify-center
            rounded-xl
            border border-white/50
            bg-white/40
            text-foreground
            transition-all duration-300
            hover:bg-white/70
            hover:shadow-md
            md:hidden
          "
        >
          <Menu className="h-5 w-5" />
        </button>

      </div>
    </header>
  );
}
