
type ChatbotTopic = 
  | "bidding"
  | "account"
  | "pricing"
  | "marketplace"
  | "fraud"
  | "auction"
  | "general";

interface ChatResponse {
  response: string;
  followUpQuestions?: string[];
}

const detectTopic = (message: string): ChatbotTopic => {
  message = message.toLowerCase();
  
  if (message.includes("bid") || message.includes("offer") || message.includes("strategy")) {
    return "bidding";
  } else if (message.includes("register") || message.includes("account") || message.includes("verification") || message.includes("sign up")) {
    return "account";
  } else if (message.includes("price") || message.includes("cost") || message.includes("value") || message.includes("worth")) {
    return "pricing";
  } else if (message.includes("fraud") || message.includes("scam") || message.includes("report")) {
    return "fraud";
  } else if (message.includes("auction") || message.includes("ongoing") || message.includes("active")) {
    return "auction";
  } else if (message.includes("marketplace") || message.includes("platform") || message.includes("work")) {
    return "marketplace";
  } else {
    return "general";
  }
};

export const getChatbotResponse = (message: string): ChatResponse => {
  const topic = detectTopic(message);
  
  switch(topic) {
    case "bidding":
      return {
        response: "Our bidding system allows you to place competitive bids on available scrap listings. We recommend starting with a reasonable bid and incrementing based on item value. The highest bid at auction close wins the right to purchase the materials.",
        followUpQuestions: [
          "What's a good bidding strategy?",
          "How do I know if my bid is competitive?",
          "Can I retract my bid?"
        ]
      };
    
    case "account":
      return {
        response: "To register on ScrapBid, click the 'Sign up' button and select whether you're an institution or dealer. Complete the verification process by uploading required documents. Institutions need to provide institutional ID and dealers need valid scrap handling permits.",
        followUpQuestions: [
          "What documents do I need for verification?",
          "How long does verification take?",
          "Can I change my account type later?"
        ]
      };
    
    case "pricing":
      return {
        response: "Scrap prices vary based on material type, quality, quantity, and market demand. For current estimates: Paper (₹5-15/kg), Metal (₹150-500/kg), Electronics (₹50-2000/item), and Plastic (₹10-30/kg). These are general ranges, and specific items may differ.",
        followUpQuestions: [
          "What affects scrap prices?",
          "When is the best time to sell?",
          "Do you offer price guarantees?"
        ]
      };
    
    case "marketplace":
      return {
        response: "ScrapBid is a specialized marketplace connecting educational and medical institutions with certified scrap dealers. Institutions list available scrap materials, and dealers place competitive bids. Our platform ensures transparent transactions, secure payments, and proper documentation.",
        followUpQuestions: [
          "How do you verify dealers?",
          "What types of materials can be listed?",
          "How is payment processed?"
        ]
      };
    
    case "fraud":
      return {
        response: "We take fraud prevention seriously. If you suspect fraudulent activity, click the 'Report' button on any listing or profile. Our team investigates all reports within 24 hours. All users undergo strict verification, and our secure payment system holds funds until both parties confirm successful transaction.",
        followUpQuestions: [
          "How do you verify users?",
          "What happens after I report someone?",
          "How are disputes resolved?"
        ]
      };
    
    case "auction":
      return {
        response: "Active auctions are displayed in the 'Browse' section with time remaining clearly marked. You'll receive notifications for auctions you're participating in. When an auction ends, both winning bidder and seller are notified of next steps for collection and payment.",
        followUpQuestions: [
          "Can I set auction alerts?",
          "What happens if the winning bidder backs out?",
          "How long do typical auctions run?"
        ]
      };
    
    case "general":
      return {
        response: "Welcome to ScrapBid! I can help with information about our bidding process, account setup, pricing estimates, marketplace features, fraud prevention, or ongoing auctions. What specific information are you looking for today?",
        followUpQuestions: [
          "How does the bidding system work?",
          "How do I register as a dealer?",
          "What are current scrap prices?"
        ]
      };
  }
};
