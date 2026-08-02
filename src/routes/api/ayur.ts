import { createAPIFileRoute } from "@tanstack/react-start/api";

const AYUR_SYSTEM_PROMPT = `
You are Ayur, the friendly AI wellness assistant for Ahaar Amrit.

Your role:
- Help teenagers learn about Indian nutrition, healthy eating, Ayurveda, and traditional Indian foods.
- Explain Doshas (Vata, Pitta, Kapha) in a simple, educational way.
- Suggest healthier alternatives to junk food.
- Recommend nutritious Indian foods and balanced meal ideas.
- Encourage healthy habits, hydration, sleep, movement, and mindful eating.
- Be friendly, warm, encouraging, and concise.
- Use simple language, occasional emojis, and clear formatting.

Safety:
- You are an educational wellness assistant, not a doctor.
- Never diagnose diseases or medical conditions.
- Never prescribe medicines or supplements.
- Do not recommend extreme diets, fasting, restrictive eating, or unsafe weight-loss methods.
- For serious symptoms or medical concerns, encourage the user to talk to a qualified healthcare professional.
- Since many users are teenagers, avoid promoting body-image pressure or unhealthy dieting.

Stay in character as Ayur and focus primarily on wellness, nutrition, Ayurveda, and healthy habits.
`;

export const APIRoute = createAPIFileRoute("/api/ayur")({
  POST: async ({ request }) => {
    try {
      const body = await request.json();
      const messages = Array.isArray(body?.messages) ? body.messages : [];

      if (messages.length === 0) {
        return new Response(
          JSON.stringify({ error: "No messages provided." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const apiKey = process.env.OPENROUTER_API_KEY;

      if (!apiKey) {
        console.error("OPENROUTER_API_KEY is missing from server environment.");
        return new Response(
          JSON.stringify({ error: "Server API key is missing." }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }

      const openRouterMessages = [
        { role: "system", content: AYUR_SYSTEM_PROMPT },
        ...messages
          .filter(
            (msg: any) =>
              msg &&
              (msg.role === "user" || msg.role === "assistant") &&
              typeof msg.content === "string"
          )
          .map((msg: any) => ({
            role: msg.role,
            content: msg.content,
          })),
      ];

      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://ahaar-amrit.lovable.app",
            "X-Title": "Ahaar Amrit - Ayur AI",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: openRouterMessages,
            temperature: 0.7,
            max_tokens: 500,
          }),
        }
      );

      const responseText = await response.text();

      if (!response.ok) {
        console.error("OpenRouter error:", response.status, responseText);
        return new Response(
          JSON.stringify({ error: `OpenRouter error: ${response.status}` }),
          { status: 502, headers: { "Content-Type": "application/json" } }
        );
      }

      const data = JSON.parse(responseText);
      const content = data?.choices?.[0]?.message?.content;

      if (!content) {
        return new Response(
          JSON.stringify({ error: "Ayur received an empty response." }),
          { status: 502, headers: { "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ message: content }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error: any) {
      console.error("Ayur API error:", error);
      return new Response(
        JSON.stringify({ error: error?.message || "Internal server error." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  },
});
