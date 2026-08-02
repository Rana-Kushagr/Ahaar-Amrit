import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, User, Leaf, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";


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
      // Secure server route — the OpenRouter key stays on the backend
      const response = await fetch("/api/ayur", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages
            .filter((msg) => msg.id !== "welcome")
            .map((msg) => ({ role: msg.role, content: msg.content })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || `Ayur service error: ${response.status}`);
      }

      const assistantContent = data?.message;
      if (!assistantContent) {
        throw new Error("Received an empty response.");
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
        <div className="mb-4 flex h-[500px] w-[360px] flex-col overflow-hidden rounded-[2rem] border border-amber-300/20 bg-emerald-950/85 shadow-[0_20px_60px_rgba(6,40,28,0.55)] ring-1 ring-emerald-400/10 backdrop-blur-2xl transition-all sm:w-[380px]">
          <div className="flex items-center justify-between border-b border-amber-300/15 bg-gradient-to-r from-emerald-900/80 to-emerald-950/80 px-5 py-4 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-[0_6px_16px_rgba(16,120,80,0.45)] ring-1 ring-amber-300/30">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-amber-100 flex items-center gap-1.5">
                  Ayur AI <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                </h3>
                <p className="text-[10px] text-emerald-300/70">Ayurveda &amp; nutrition guide</p>

              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full text-amber-200/80 hover:bg-amber-300/10 hover:text-amber-100"
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
                        ? "bg-gradient-to-br from-amber-400 to-amber-600 border-amber-200/40 text-emerald-950"
                        : "bg-gradient-to-br from-emerald-600 to-emerald-800 border-emerald-400/30 text-amber-50"
                    }`}
                  >
                    {msg.role === "user" ? <User className="h-4 w-4" /> : <Leaf className="h-4 w-4" />}
                  </div>

                  <div
                    className={`rounded-2xl p-3.5 text-xs leading-relaxed shadow-md backdrop-blur-md whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "rounded-tr-none bg-amber-400 text-emerald-950 font-medium border border-amber-200/40"
                        : "rounded-tl-none bg-emerald-900/50 text-emerald-50 border border-emerald-400/15"
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
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 bg-gradient-to-br from-emerald-600 to-emerald-800 text-amber-50 shadow-sm">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-none border border-emerald-400/15 bg-emerald-900/50 p-3.5 shadow-md backdrop-blur-md">
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-amber-300 [animation-delay:-0.3s]"></div>
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-amber-300 [animation-delay:-0.15s]"></div>
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-amber-300"></div>

                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-amber-300/15 bg-emerald-950/70 p-3 backdrop-blur-md">
            <form onSubmit={handleSendMessage} className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about diet, doshas, or food swaps..."
                className="w-full rounded-full border border-emerald-400/20 bg-emerald-900/50 py-3 pl-4 pr-12 text-xs text-emerald-50 placeholder-emerald-200/40 shadow-inner outline-none backdrop-blur-md transition-all focus:border-amber-300/50 focus:bg-emerald-900/70"
                disabled={isTyping}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-1.5 h-8 w-8 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-emerald-950 shadow-md hover:from-amber-200 hover:to-amber-400 disabled:opacity-40"
              >
                <Send className="h-3.5 w-3.5" />
              </Button>
            </form>
            <div className="mt-2 text-center text-[9px] uppercase tracking-widest text-amber-200/40">
              Ahaar Amrit • Educational guidance only

            </div>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-amber-50 shadow-[0_12px_32px_rgba(6,40,28,0.5)] ring-1 ring-amber-300/30 transition-all duration-300 hover:scale-105 hover:ring-amber-300/60 focus:outline-none"
        aria-label="Toggle Ayur Chat"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-[9px] font-bold text-emerald-950">
            AI
          </span>

        </span>
        {isOpen ? <X className="h-6 w-6 transition-transform group-hover:rotate-90" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
}
