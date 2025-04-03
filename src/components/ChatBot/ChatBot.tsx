
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import ChatMessage from "./ChatMessage";
import { getChatbotResponse } from "@/utils/chatbotResponses";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  content: string;
  type: "user" | "bot";
  timestamp: Date;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Add initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const initialResponse = getChatbotResponse("");
      setMessages([
        {
          id: "welcome",
          content: initialResponse.response,
          type: "bot",
          timestamp: new Date(),
        },
      ]);
      setSuggestions(initialResponse.followUpQuestions || []);
    }
  }, [messages.length]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: input,
      type: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = getChatbotResponse(userMessage.content);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: botResponse.response,
        type: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setSuggestions(botResponse.followUpQuestions || []);
    }, 700);
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: suggestion,
      type: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = getChatbotResponse(suggestion);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: botResponse.response,
        type: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setSuggestions(botResponse.followUpQuestions || []);
    }, 700);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast({
        title: "ScrapBid Assistant",
        description: "How can I help you today?",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <Card className="w-80 md:w-96 shadow-lg flex flex-col h-[500px] max-h-[80vh]">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center bg-primary text-primary-foreground">
            <h3 className="font-medium">ScrapBid Assistant</h3>
            <Button variant="ghost" size="sm" onClick={toggleChat} className="h-8 w-8 p-0">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.content}
                type={message.type}
                timestamp={message.timestamp}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2 flex items-center">
                <ChevronDown className="h-3 w-3 mr-1" />
                Suggested questions
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="text-xs py-1 h-auto"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t mt-auto">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow"
              />
              <Button type="submit" size="icon" className="h-10 w-10">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      ) : (
        <Button
          onClick={toggleChat}
          className="h-14 w-14 rounded-full shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;
