import nutritionWallpaper from "@/assets/nutrition.png.asset.json";

export function PageWallpaper({ variant = "home" }: { variant?: "home" | "nutrition" }) {
  return (
    <div
      className="page-wallpaper"
      style={{ backgroundImage: `url('${variant === "nutrition" ? nutritionWallpaper.url : "/ayurveda-hero-bg.png"}')` }}
      aria-hidden="true"
    />
  );
}