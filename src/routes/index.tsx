import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Heart, Sparkles, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const title =
  "Ahaar Amrit — Personalized Indian Nutrition";

const description =
  "Personalized Indian nutrition powered by modern science, food culture and optional Ayurveda.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title,
      },
      {
        name: "description",
        content: description,
      },
    ],
  }),

  component: Index,
});


const features = [
  {
    icon: Utensils,
    title: "Modern Nutrition",
    hindi: "आधुनिक पोषण",
    text: "Science-backed nutrition made for Indian lifestyles.",
  },

  {
    icon: Heart,
    title: "Indian Food Culture",
    hindi: "भारतीय भोजन",
    text: "Foods and habits connected to your region and routine.",
  },

  {
    icon: Sparkles,
    title: "Optional Ayurveda",
    hindi: "आयुर्वेद",
    text: "Traditional wellness insights when you choose.",
  },
];


function Index() {

  return (

    <main
      className="
      relative
      min-h-screen
      overflow-hidden
      px-6
      pt-28
      pb-20
      bg-[#f7f1df]
      "
    >


      {/* HERO IMAGE BACKGROUND */}

      <div
        className="
        absolute
        inset-0
        z-0
        bg-cover
        bg-center
        "
        style={{
          backgroundImage:
            "url('/ayurveda-hero.png')",
        }}
      />


      {/* IMAGE OVERLAY */}

      <div
        className="
        absolute
        inset-0
        z-10
        bg-gradient-to-r
        from-[#f7f1df]/95
        via-[#f7f1df]/80
        to-[#f7f1df]/30
        "
      />



      {/* CONTENT */}

      <section
        className="
        relative
        z-20
        mx-auto
        grid
        max-w-6xl
        items-center
        gap-12
        md:grid-cols-2
        "
      >


        {/* LEFT */}

        <div>

          <p
            className="
            mb-5
            font-hindi
            text-xl
            text-secondary
            "
          >
            स्वस्थ भारत, विकसित भारत
          </p>



          <h1
            className="
            font-display
            text-6xl
            font-bold
            leading-tight
            md:text-8xl
            "
          >

            आहार

            <span className="text-gradient-saffron">
              {" "}अमृत
            </span>

          </h1>



          <h2
            className="
            mt-4
            text-3xl
            font-semibold
            "
          >
            Ahaar Amrit
          </h2>



          <p
            className="
            mt-6
            max-w-xl
            text-lg
            text-muted-foreground
            "
          >
            Personalized nutrition for young India —
            combining modern science, Indian food wisdom,
            and optional Ayurvedic wellness.
          </p>




          <div className="mt-8 flex flex-wrap gap-4">


            <Button
              asChild
              size="xl"
              variant="hero"
            >

              <Link to="/onboarding">

                <Sparkles className="mr-2 h-5 w-5"/>

                Create Profile

              </Link>

            </Button>



            <Button
              asChild
              size="xl"
              variant="outline"
            >

              <Link to="/dosha">

                Explore Ayurveda

              </Link>

            </Button>


          </div>


        </div>





        {/* RIGHT IMAGE CARD */}


        <div
          className="
          rounded-[2.5rem]
          bg-white/40
          backdrop-blur-xl
          border
          border-white/50
          p-8
          shadow-2xl
          "
        >


          <div
            className="
            h-80
            overflow-hidden
            rounded-[2rem]
            "
          >

            <img
              src="/ayurveda-hero.png"
              alt="Ayurveda wellness"
              className="
              h-full
              w-full
              object-cover
              "
            />


          </div>




          <div
            className="
            mt-6
            grid
            grid-cols-3
            gap-3
            "
          >

            {
              [
                "Energy",
                "Balance",
                "Health",
              ].map((item)=>(

                <div
                  key={item}
                  className="
                  rounded-2xl
                  bg-white/50
                  backdrop-blur
                  p-4
                  text-center
                  "
                >

                  <p className="font-semibold">
                    {item}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    AI Plan
                  </p>


                </div>

              ))
            }


          </div>


        </div>


      </section>





      {/* FEATURES */}


      <section
        className="
        relative
        z-20
        mx-auto
        mt-20
        grid
        max-w-5xl
        gap-5
        md:grid-cols-3
        "
      >

        {
          features.map((feature)=>{

            const Icon = feature.icon;


            return (

              <div

                key={feature.title}

                className="
                rounded-3xl
                border
                border-white/40
                bg-white/50
                backdrop-blur-xl
                p-6
                text-center
                shadow-lg
                transition
                hover:-translate-y-2
                "
              >

                <Icon
                  className="
                  mx-auto
                  mb-4
                  h-9
                  w-9
                  text-primary
                  "
                />


                <h3 className="font-semibold">
                  {feature.title}
                </h3>


                <p
                  className="
                  mt-1
                  font-hindi
                  text-sm
                  text-muted-foreground
                  "
                >
                  {feature.hindi}
                </p>


                <p
                  className="
                  mt-3
                  text-sm
                  text-muted-foreground
                  "
                >
                  {feature.text}
                </p>


              </div>

            )

          })
        }


      </section>


    </main>

  );
}
