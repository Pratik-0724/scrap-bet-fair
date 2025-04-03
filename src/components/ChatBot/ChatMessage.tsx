
import { User, Bot } from "lucide-react";

type MessageType = "user" | "bot";

interface ChatMessageProps {
  message: string;
  type: MessageType;
  timestamp: Date;
}

const ChatMessage = ({ message, type, timestamp }: ChatMessageProps) => {
  return (
    <div
      className={`flex gap-3 ${
        type === "user" ? "flex-row-reverse" : "flex-row"
      } mb-4`}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          type === "user" ? "bg-primary/10" : "bg-secondary/10"
        }`}
      >
        {type === "user" ? (
          <User className="h-4 w-4 text-primary" />
        ) : (
          <Bot className="h-4 w-4 text-secondary" />
        )}
      </div>
      <div
        className={`p-3 rounded-lg max-w-[80%] ${
          type === "user"
            ? "bg-primary text-primary-foreground"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <p className="text-sm">{message}</p>
        <p className="text-xs mt-1 opacity-70">
          {timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
