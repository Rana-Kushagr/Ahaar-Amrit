import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold">
        Welcome to Ahaar Amrit Dashboard 🌿
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Your personalized nutrition journey starts here.
      </p>
    </div>
  );
}
