
import { ArrowRight, Building2, Clipboard, Gavel, ThumbsUp, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Building2,
      title: "Institutions List Scrap",
      description: "Educational and medical institutions list their available scrap materials including type, quantity, condition, and minimum price.",
    },
    {
      icon: Clipboard,
      title: "Dealers Browse Listings",
      description: "Certified scrap dealers browse through available listings filtered by material type, location, and quantity.",
    },
    {
      icon: Gavel,
      title: "Competitive Bidding",
      description: "Dealers place bids on available scrap. The highest bidder within the timeframe wins the right to collect.",
    },
    {
      icon: Truck,
      title: "Collection & Payment",
      description: "Winner collects the scrap from the institution and completes payment through our secure platform.",
    },
    {
      icon: ThumbsUp,
      title: "Rating & Feedback",
      description: "Both parties rate the experience, building trust and reputation within the platform.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How ScrapBid Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform streamlines the scrap bidding process, creating value for institutions and dealers alike.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-100" aria-hidden="true"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4 relative z-10">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 right-0 transform translate-x-1/2">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
