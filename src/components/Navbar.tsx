import { Link, useLocation } from "@tanstack/react-router";
import { Leaf, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

// All links for the mobile menu
const allLinks = [
  { label: "Home", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Nutrition", to: "/nutrition-plan" },
  { label: "Swasthya", to: "/swasthya" },
  { label: "Ayurveda", to: "/dosha" },
  { label: "Quests", to: "/wellness-challenge" },
  { label: "Explorer", to: "/regional-explorer" },
  { label: "Profile", to: "/profile" },
] as const;

// Visible links for the main desktop navbar
const mainLinks = [
  { label: "Home", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Nutrition", to: "/nutrition-plan" },
] as const;

// Links tucked inside the "Discover" dropdown for desktop
const dropdownLinks = [
  { label: "Swasthya", to: "/swasthya" },
  { label: "Ayurveda", to: "/dosha" },
  { label: "Quests", to: "/wellness-challenge" },
  { label: "Explorer", to: "/regional-explorer" },
] as const;

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed
        top-4
        left-1/2
        z-50
        w-[calc(100%-2rem)]
        max-w-5xl
        -translate-x-1/2

        rounded-[2rem]

        border
        border-white/40

        bg-white/25
        backdrop-blur-xl
        backdrop-saturate-150

        shadow-[0_12px_40px_rgba(60,45,20,0.15)]

        transition-all
        duration-300
      "
    >
      <div
        className="
          flex
          h-[72px]
          items-center
          justify-between
          px-5
          sm:px-7
        "
      >
        {/* =====================================================
            LOGO
        ====================================================== */}

        <Link
          to="/"
          className="
            group
            flex
            items-center
            gap-3
            transition-transform
            duration-300
            hover:scale-[1.02]
          "
        >
          {/* Logo icon */}
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-2xl

              bg-gradient-to-br
              from-orange-400
              via-orange-500
              to-green-600

              shadow-[0_8px_20px_rgba(230,110,35,0.25)]

              transition-all
              duration-300

              group-hover:shadow-[0_10px_28px_rgba(230,110,35,0.35)]
            "
          >
            <Leaf className="h-6 w-6 text-white" />
          </div>

          {/* Logo text */}
          <div className="hidden sm:block">
            <p className="font-display text-xl font-bold leading-none tracking-tight text-[#332719]">
              Ahaar Amrit
            </p>
            <p className="mt-1 font-hindi text-[11px] font-medium text-[#665744]">
              आहार अमृत
            </p>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION (WITH DROPDOWN)
        ====================================================== */}

        <nav className="hidden items-center gap-1 md:flex">
          
          {/* Main Links */}
          {mainLinks.map((link) => {
            const active =
              location.pathname === link.to ||
              (link.to !== "/" && location.pathname.startsWith(link.to));

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`
                  relative rounded-full px-3 lg:px-4 py-2.5 text-sm font-medium transition-all duration-300
                  ${
                    active
                      ? "bg-gradient-to-r from-orange-400 via-orange-500 to-green-600 text-white shadow-[0_6px_18px_rgba(226,110,40,0.25)] hover:shadow-[0_8px_24px_rgba(226,110,40,0.35)]"
                      : "text-[#514638] hover:bg-white/35 hover:text-[#2f2419] hover:shadow-sm"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}

          {/* "Discover" Dropdown Menu */}
          <div className="relative group">
            <button 
              className="flex items-center gap-1 rounded-full px-3 lg:px-4 py-2.5 text-sm font-medium text-[#514638] transition-all duration-300 hover:bg-white/35 hover:text-[#2f2419] hover:shadow-sm"
            >
              Discover 
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Box */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <div className="flex flex-col min-w-[160px] p-2 bg-white/85 backdrop-blur-2xl backdrop-saturate-150 rounded-2xl shadow-xl border border-white/40">
                {dropdownLinks.map((link) => {
                  const active =
                    location.pathname === link.to ||
                    (link.to !== "/" && location.pathname.startsWith(link.to));

                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`
                        rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 mb-1 last:mb-0
                        ${
                          active
                            ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-sm"
                            : "text-[#514638] hover:bg-white/50 hover:text-orange-600"
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Profile Link (Always Visible at the end) */}
          <Link
            to="/profile"
            className={`
              relative rounded-full px-3 lg:px-4 py-2.5 text-sm font-medium transition-all duration-300
              ${
                location.pathname.startsWith("/profile")
                  ? "bg-gradient-to-r from-orange-400 via-orange-500 to-green-600 text-white shadow-[0_6px_18px_rgba(226,110,40,0.25)] hover:shadow-[0_8px_24px_rgba(226,110,40,0.35)]"
                  : "text-[#514638] hover:bg-white/35 hover:text-[#2f2419] hover:shadow-sm"
              }
            `}
          >
            Profile
          </Link>

        </nav>

        {/* =====================================================
            MOBILE MENU TOGGLE BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open navigation menu"
          className="
            flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/25 text-[#403426] backdrop-blur-md transition-all duration-300 hover:bg-white/45 hover:shadow-md md:hidden
          "
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE DROPDOWN MENU
      ====================================================== */}

      {mobileMenuOpen && (
        <div
          className="
            absolute top-[84px] left-0 w-full rounded-[2rem] border border-white/40 bg-white/85 p-4 shadow-xl backdrop-blur-2xl backdrop-saturate-150 flex flex-col gap-2 md:hidden
          "
        >
          {allLinks.map((link) => {
            const active =
              location.pathname === link.to ||
              (link.to !== "/" && location.pathname.startsWith(link.to));

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  rounded-xl px-4 py-3 text-base font-medium transition-all duration-200
                  ${
                    active
                      ? "bg-gradient-to-r from-orange-400 via-orange-500 to-green-600 text-white shadow-md"
                      : "text-[#514638] hover:bg-white/60 hover:text-[#2f2419]"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
