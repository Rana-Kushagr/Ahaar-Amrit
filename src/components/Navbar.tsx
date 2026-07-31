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
    <header className="
      fixed top-5 left-1/2 z-50
      w-[92%] max-w-6xl
      -translate-x-1/2
      rounded-3xl
      border border-white/30
      bg-white/60
      backdrop-blur-2xl
      shadow-xl
    ">

      <div className="
        flex items-center justify-between
        px-6 py-4
      ">

        <Link 
          to="/"
          className="flex items-center gap-3"
        >

          <div className="
            rounded-2xl
            bg-gradient-hero
            p-3
            shadow-glow
          ">
            <Leaf className="
              h-6 w-6 
              text-white
            "/>
          </div>


          <div>
            <p className="
              font-display
              text-xl
              font-bold
            ">
              Ahaar Amrit
            </p>

            <p className="
              font-hindi
              text-xs
              text-muted-foreground
            ">
              आहार अमृत
            </p>
          </div>

        </Link>


        <nav className="
          hidden
          md:flex
          items-center
          gap-2
        ">

        {
          links.map((link)=>{

            const active =
              location.pathname === link.to;


            return (
              <Link
              key={link.to}
              to={link.to}
              className={`
                rounded-full
                px-5 py-2
                text-sm
                transition-all

                ${
                active
                ?
                "bg-primary text-white shadow-lg"
                :
                "hover:bg-primary/10"
                }
              `}
              >

                {link.label}

              </Link>
            )

          })
        }

        </nav>


        <Menu className="
          md:hidden
          h-6 w-6
        "/>


      </div>

    </header>
  );
}
