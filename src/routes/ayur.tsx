import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send, Sparkles, User, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const title = "Chat with Ayur — Ahaar Amrit";
const description = "Your personal Ayurvedic and nutrition AI assistant.";

export const Route = createFileRoute("/ayur")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
    ],
  }),
  component: AyurChatPage,
});

type Message = {
  id: string;
  role: "user" | "ayur";
  content: string;
};

const initialMessages: Message[] = [
  {
    id: "1",
    role: "ayur",
    content: "Namaste! 🙏 I am Ayur, your personal Ahaar Amrit guide. Whether you want to know about your Dosha, regional healthy foods, or need a quick junk food swap, I am here to help. What's on your mind today?",
  },
];

const AYUR_SYSTEM_PROMPT = `
You are Ayur, an expert Indian Ayurvedic and nutrition AI assistant for teenagers. 
Your goal is to help them with diet, Dosha analysis, junk food swaps, and healthy habits. 
Keep your answers friendly, engaging, and relatively concise. 
Use formatting like bolding and emojis to make your text easy to read. 
Always stay in character. If asked about non-health related topics, gently steer the conversation back to wellness and nutrition.
`;

function AyurChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setInputValue("");
    setIsTyping(true);

    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userText,
    };
    
    const updatedMessages = [...messages, newUserMsg];
    setMessages(updatedMessages);

    const geminiHistory = updatedMessages.map((msg) => ({
      role: msg.role === "ayur" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    try {
      const apiKey = "AQ.Ab8RN6ImAi49JeqHWsP_ij65FR7V2X_aL5FYVRLt6vq7t5OO6Q";
      
      if (!apiKey) {
        throw new Error("API key is missing!");
      }

      // Endpoint updated to gemini-1.5-pro-latest
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: AYUR_SYSTEM_PROMPT }]
            },
            contents: geminiHistory,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const ayurText = data.candidates[0].content.parts[0].text;

      const ayurResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "ayur",
        content: ayurText,
      };
      
      setMessages((prev) => [...prev, ayurResponse]);

    } catch (error: any) {
      console.error("Gemini API Error:", error);
      
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "ayur",
        content: `Oops! I lost connection to my AI brain. 🧠⚡\n\nError: ${error.message}`,
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden px-4 pb-6 pt-28 sm:px-6 sm:pt-36">
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-emerald-950/60" />
      </div>

      <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col space-y-6">
        <div className="flex items-center justify-between">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-emerald-950/60 px-4 py-2 text-sm text-emerald-50 shadow-lg backdrop-blur-md transition-all hover:-translate-x-1 hover:bg-emerald-900/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          
          <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-black/40 px-5 py-2 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="font-display text-sm font-bold text-amber-200 uppercase tracking-widest">
              Ayur AI (Pro)
            </span>
          </div>
        </div>

        <section className="flex min-h-[500px] flex-1 flex-col overflow-hidden rounded-[2rem] border border-white/20 bg-black/40 shadow-2xl backdrop-blur-xl">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-emerald-700/50 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex max-w-[85%] gap-3 sm:max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border shadow-md mt-1 ${
                    msg.role === "user" 
                      ? "bg-amber-600/80 border-amber-400/50 text-white" 
                      : "bg-emerald-600/80 border-emerald-400/50 text-white"
                  }`}>
                    {msg.role === "user" ? <User className="h-5 w-5" /> : <Leaf className="h-5 w-5" />}
                  </div>

                  <div 
                    className={`rounded-2xl p-4 text-sm leading-relaxed shadow-lg backdrop-blur-md whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "rounded-tr-none bg-amber-600/90 text-white border border-amber-400/30"
                        : "rounded-tl-none bg-emerald-950/80 text-emerald-50 border border-emerald-500/30"
                    }`}
                  >
                    {msg.content.split('**').map((part, index) => 
                      index % 2 === 1 ? <strong key={index} className="text-white font-bold">{part}</strong> : part
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex w-full justify-start">
                <div className="flex max-w-[85%] flex-row gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-600/80 text-white shadow-md">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-none border border-emerald-500/30 bg-emerald-950/80 p-4 shadow-lg backdrop-blur-md">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-emerald-400 [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-emerald-400 [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-emerald-400"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/10 bg-black/20 p-4 sm:p-6">
            <form 
              onSubmit={handleSendMessage}
              className="relative flex items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Ayur about your diet or dosha..."
                className="w-full rounded-full border border-white/20 bg-emerald-950/50 py-4 pl-6 pr-14 text-sm text-white placeholder-emerald-100/50 shadow-inner outline-none backdrop-blur-md transition-all focus:border-emerald-400/50 focus:bg-emerald-950/70"
                disabled={isTyping}
              />
              <Button 
                type="submit" 
                size="icon"
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-2 h-10 w-10 rounded-full bg-amber-500 text-white shadow-md hover:bg-amber-400 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <p className="mt-3 text-center text-[10px] text-emerald-200/50 uppercase tracking-widest">
              Ayur AI can make mistakes. Always consult a real doctor for medical advice.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
