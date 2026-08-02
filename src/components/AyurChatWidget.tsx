import { FormEvent, useEffect, useRef, useState } from "react";
import { Leaf, MessageCircle, Send, X, User } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Namaste! 🙏 I'm Ayur, your Ahaar Amrit wellness guide. Ask me about Indian nutrition, Ayurveda, Doshas, healthy food swaps, or your daily wellness habits. How can I help you today?",
};

export function AyurChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, isLoading, isOpen]);

  const sendMessage = async (event: FormEvent) => {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput || isLoading) {
      return;
    }

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      role: "user",
      content: trimmedInput,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ayur", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages
            .filter((message) => message.id !== "welcome")
            .map((message) => ({
              role: message.role,
              content: message.content,
            })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Ayur could not respond right now.",
        );
      }

      const assistantMessage: Message = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: data.message,
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("Ayur chat error:", error);

      const errorMessage: Message = {
        id: `${Date.now()}-error`,
        role: "assistant",
        content:
          "I'm sorry! 🌿 I couldn't connect right now. Please try sending your message again in a moment.",
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        errorMessage,
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Ayur Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Ayur AI chat"
          className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-300/70 bg-gradient-to-br from-emerald-700 to-emerald-950 text-white shadow-2xl shadow-emerald-950/40 transition-all duration-300 hover:scale-110 hover:shadow-emerald-900/60 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        >
          <Leaf className="h-7 w-7" />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-emerald-950">
            AI
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-[9999] flex h-[min(680px,calc(100vh-32px))] w-[min(420px,calc(100vw-32px))] flex-col overflow-hidden rounded-[1.75rem] border border-emerald-300/20 bg-emerald-950 shadow-2xl shadow-black/40">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-emerald-800 to-emerald-950 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/40 bg-emerald-700 text-amber-200">
                <Leaf className="h-6 w-6" />
              </div>

              <div>
                <h2 className="font-display text-lg font-bold text-white">
                  Ayur
                </h2>

                <p className="text-xs text-emerald-200/70">
                  Ahaar Amrit Wellness Guide
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Ayur AI chat"
              className="flex h-9 w-9 items-center justify-center rounded-full text-emerald-100 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-emerald-950 to-emerald-900/90 p-4">
            {messages.map((message) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={message.id}
                  className={`flex gap-2 ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {!isUser && (
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-amber-200">
                      <Leaf className="h-4 w-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-md ${
                      isUser
                        ? "rounded-tr-sm bg-amber-500 text-white"
                        : "rounded-tl-sm border border-emerald-500/20 bg-black/20 text-emerald-50"
                    }`}
                  >
                    {message.content}
                  </div>

                  {isUser && (
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-600 text-white">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-amber-200">
                  <Leaf className="h-4 w-4" />
                </div>

                <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-black/20 px-4 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-300" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-300 [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-300 [animation-delay:300ms]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/10 bg-emerald-950 p-3">
            <form
              onSubmit={sendMessage}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                disabled={isLoading}
                placeholder="Ask Ayur anything about wellness..."
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-emerald-100/40 focus:border-emerald-400/50 focus:bg-white/15 disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white transition-all hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-2 text-center text-[9px] uppercase tracking-wider text-emerald-200/40">
              Ayur provides general wellness information, not medical advice.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
