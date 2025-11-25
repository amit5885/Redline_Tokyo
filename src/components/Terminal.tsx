import React, { useState, useRef, useEffect } from "react";
import { X, Send, Terminal as TerminalIcon, Key } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

interface TerminalProps {
  onClose: () => void;
}

interface Message {
  role: "user" | "model" | "system";
  text: string;
}

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [hasKey, setHasKey] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", text: "REDLINE OS v9.0.1 INITIATED..." },
    { role: "system", text: "CONNECTING TO VEHICLE ECU..." },
    {
      role: "model",
      text: "Systems online. Awaiting driver input. Enter API KEY to engage conversational matrix.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim().length > 10) {
      setHasKey(true);
      setMessages((prev) => [
        ...prev,
        { role: "system", text: "API KEY ACCEPTED. NEURAL LINK ESTABLISHED." },
      ]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (!hasKey) return;

    const userMsg = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: apiKey });
      const model = "gemini-2.5-flash";

      const response = await ai.models.generateContent({
        model: model,
        contents: [
          {
            role: "user",
            parts: [
              {
                text: "System Instruction: You are the cynical, aggressive, yet highly competent onboard AI of a futuristic racing car called 'TransAm'. Talk about speed, engine stats, and the danger of the race. Keep it brief.",
              },
              { text: userMsg },
            ],
          },
        ],
      });

      const text = response.text;
      setMessages((prev) => [
        ...prev,
        { role: "model", text: text || "ERROR: SIGNAL INTERRUPTED" },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          text: `ERROR: CONNECTION FAILED. CHECK CREDENTIALS. \n\n ${error}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-100 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#050505] border border-[#333] shadow-[0_0_50px_rgba(255,0,60,0.2)] flex flex-col h-[600px] font-mono text-sm relative overflow-hidden">
        {/* CRT Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-size-[100%_2px,3px_100%] opacity-20"></div>

        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-[#333] bg-[#111] text-gray-400">
          <div className="flex items-center gap-2">
            <TerminalIcon size={16} className="text-[#FF003C]" />
            <span>ONBOARD_AI_TERMINAL.EXE</span>
          </div>
          <button onClick={onClose} className="hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* Output Area */}
        <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#333] text-[#00F0FF]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-3 ${msg.role === "user" ? "text-[#FCEE09] text-right" : msg.role === "system" ? "text-[#FF003C]" : "text-[#00F0FF]"}`}
            >
              <span className="opacity-50 text-xs mr-2">
                [
                {msg.role === "user"
                  ? "DRIVER"
                  : msg.role === "model"
                    ? "AI"
                    : "SYS"}
                ]
              </span>
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="text-[#FF003C] animate-pulse">
              PROCESSING_DATA...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-[#333] bg-[#0a0a0a] relative z-20">
          {!hasKey ? (
            <form onSubmit={handleKeySubmit} className="flex gap-2">
              <Key className="text-[#FF003C]" />
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="ENTER GEMINI API KEY TO INITIALIZE..."
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600"
              />
              <button
                type="submit"
                className="text-[#FF003C] font-bold hover:text-white"
              >
                AUTH
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <span className="text-[#FCEE09]">{">"}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Command interface..."
                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0"
                autoFocus
              />
              <button
                type="submit"
                disabled={loading}
                className="text-[#FCEE09] hover:text-white disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
