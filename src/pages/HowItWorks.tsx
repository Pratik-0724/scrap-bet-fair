
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Gavel, CheckCircle, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Institutions List Scrap",
      description:
        "Educational and medical institutions list their available scrap materials, specifying type, quantity, and minimum bid requirements.",
      icon: Building2,
    },
    {
      title: "Dealers Place Bids",
      description:
        "Certified scrap dealers review listings and place competitive bids, offering their best price per unit.",
      icon: Gavel,
    },
    {
      title: "Auctions Close",
      description:
        "When the auction period ends, institutions review all bids and select the winning dealer based on price and reputation.",
      icon: CheckCircle,
    },
    {
      title: "Pickup & Payment",
      description:
        "The winning dealer schedules pickup, collects the materials, and completes payment through our secure platform.",
      icon: Truck,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How ScrapBid Works</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our platform connects institutions with certified scrap dealers through a transparent, competitive bidding process.
            </p>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Simple Process, Powerful Results</h2>
                <div className="space-y-8">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <step.icon className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold mb-6">Benefits for Everyone</h3>
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold mb-2">For Institutions</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Maximize value from waste materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Transparent bidding process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Simplified documentation & compliance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold mb-2">For Dealers</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Direct access to institutional scrap</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Compete fairly based on offering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Build reputation and recurring relationships</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
