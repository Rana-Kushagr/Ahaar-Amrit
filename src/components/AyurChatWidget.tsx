import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, User, Leaf, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const title = "Ahaar Amrit — Ayurveda & Nutrition";
const description = "Your personal Ayurvedic and nutrition AI assistant.";

export const Route = createFileRoute("/__root")({
  // Root route remains clean; we mount the widget here or via layout
});

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const initialMessages: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content: "Namaste! 🙏 I am Ayur, your personal Ahaar Amrit guide. Ask me about Doshas, healthy Indian food swaps, or nutrition tips!",
  },
];

const AYUR_SYSTEM_PROMPT = `
You are Ayur, the friendly AI wellness assistant for Ahaar Amrit.
- Help teenagers learn about Indian nutrition, healthy eating, Ayurveda, and traditional Indian foods.
- Explain Doshas (Vata, Pitta, Kapha) in a simple, educational way.
- Suggest healthier alternatives to junk food and recommend balanced Indian meal ideas.
- Be friendly, warm, encouraging, concise, and use occasional emojis.
- Never diagnose medical conditions or recommend extreme diets.
`;

export function AyurChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userText = inputValue.trim();
    setInputValue("");

    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userText,
    };

    const updatedMessages = [...messages, newUserMsg];
    setMessages(updatedMessages);
    setIsTyping(true);

    try {
      // Direct call to OpenRouter API
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer sk-or-v1-YOUR_OPENROUTER_API_KEY_HERE`, // Replace with your OpenRouter key if not using backend env
          "Content-Type": "application/json",
          "HTTP-Referer": "https://ahaar-amrit.lovable.app",
          "X-Title": "Ahaar Amrit - Ayur AI",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash", // Reliable free-tier model on OpenRouter
          messages: [
            { role: "system", content: AYUR_SYSTEM_PROMPT },
            ...updatedMessages
              .filter((msg) => msg.id !== "welcome")
              .map((msg) => ({
                role: msg.role,
                content: msg.content,
              })),
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error?.message || `OpenRouter error: ${response.status}`);
      }

      const assistantContent = data?.choices?.[0]?.message?.content;
      if (!assistantContent) {
        throw new Error("Received empty response from OpenRouter.");
      }

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: assistantContent,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error: any) {
      console.error("Ayur OpenRouter Chat Error:", error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `I'm sorry! 🌿 I couldn't connect right now. (${error.message || "Please check your OpenRouter key."})`,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 flex h-[500px] w-[360px] flex-col overflow-hidden rounded-[2rem] border border-emerald-500/30 bg-emerald-950/90 shadow-2xl backdrop-blur-2xl transition-all sm:w-[380px]">
          <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-5 py-4 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-emerald-100 flex items-center gap-1.5">
                  Ayur AI <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                </h3>
                <p className="text-[10px] text-emerald-300/80">OpenRouter Powered</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full text-emerald-200 hover:bg-white/10 hover:text-white"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-emerald-700/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex max-w-[85%] gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border shadow-sm mt-0.5 ${
                      msg.role === "user"
                        ? "bg-amber-600 border-amber-400/40 text-white"
                        : "bg-emerald-700 border-emerald-500/40 text-white"
                    }`}
                  >
                    {msg.role === "user" ? <User className="h-4 w-4" /> : <Leaf className="h-4 w-4" />}
                  </div>

                  <div
                    className={`rounded-2xl p-3.5 text-xs leading-relaxed shadow-md backdrop-blur-md whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "rounded-tr-none bg-amber-600 text-white border border-amber-500/30"
                        : "rounded-tl-none bg-black/40 text-emerald-50 border border-white/10"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex w-full justify-start">
                <div className="flex max-w-[85%] flex-row gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-700 text-white shadow-sm">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-none border border-white/10 bg-black/40 p-3.5 shadow-md backdrop-blur-md">
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:-0.3s]"></div>
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:-0.15s]"></div>
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/10 bg-black/30 p-3 backdrop-blur-md">
            <form onSubmit={handleSendMessage} className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about diet, doshas, or food swaps..."
                className="w-full rounded-full border border-white/15 bg-black/40 py-3 pl-4 pr-12 text-xs text-white placeholder-emerald-200/40 shadow-inner outline-none backdrop-blur-md transition-all focus:border-emerald-400/50 focus:bg-black/60"
                disabled={isTyping}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-1.5 h-8 w-8 rounded-full bg-amber-500 text-white shadow-md hover:bg-amber-400 disabled:opacity-40"
              >
                <Send className="h-3.5 w-3.5" />
              </Button>
            </form>
            <div className="mt-2 text-center text-[9px] text-emerald-200/40 uppercase tracking-widest">
              Ahaar Amrit • OpenRouter AI
            </div>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-emerald-500 hover:to-emerald-400 focus:outline-none"
        aria-label="Toggle Ayur Chat"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-amber-500 text-[9px] font-bold items-center justify-center text-white">
            AI
          </span>
        </span>
        {isOpen ? <X className="h-6 w-6 transition-transform group-hover:rotate-90" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
}
