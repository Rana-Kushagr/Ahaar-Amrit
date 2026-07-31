import { Link, useLocation } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Nutrition Plan", to: "/nutrition-plan" },
  { label: "Ayurveda", to: "/dosha" },
  { label: "Profile", to: "/profile" },
] as const;

export function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 transition-smooth hover:opacity-80"
        >
          <div className="rounded-full bg-gradient-hero p-2 shadow-warm">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>

          <div>
            <p className="font-display text-lg font-bold leading-none text-foreground">
              Ahaar Amrit
            </p>
            <p className="font-hindi text-[10px] text-muted-foreground">
              आहार अमृत
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-end gap-1">
          {links.map((link) => {
            const isActive =
              link.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.to);

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-full px-3 py-2 text-xs font-medium transition-smooth sm:px-4 sm:text-sm ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
