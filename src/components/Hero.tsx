
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Gavel } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Efficient Scrap Management Through Competitive Bidding
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Connect institutions with certified scrap dealers through our transparent auction platform. Monetize waste and support sustainability.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="group"
              >
                <Link to="/institutions" className="flex items-center">
                  <Building2 className="mr-2 h-5 w-5" />
                  <span>I'm an Institution</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white/20 group"
              >
                <Link to="/dealers" className="flex items-center">
                  <Gavel className="mr-2 h-5 w-5" />
                  <span>I'm a Dealer</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-white rounded-lg overflow-hidden opacity-10"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-4">For Institutions</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="mr-2 h-5 w-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
                      <span>List various types of scrap</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-5 w-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
                      <span>Receive competitive bids</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-5 w-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
                      <span>Track disposal records</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-4">For Dealers</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="mr-2 h-5 w-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
                      <span>Discover available scrap</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-5 w-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
                      <span>Place competitive bids</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-5 w-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</div>
                      <span>Manage pickups efficiently</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
