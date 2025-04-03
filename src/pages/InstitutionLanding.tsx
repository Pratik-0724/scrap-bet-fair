
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star, ShieldCheck, TruckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DealerProfile = ({
  name,
  rating,
  specialty,
  location,
  completedPickups,
  verified,
}: {
  name: string;
  rating: number;
  specialty: string;
  location: string;
  completedPickups: number;
  verified: boolean;
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary/10">
            <div className="bg-primary/10 text-primary h-full w-full flex items-center justify-center text-xl font-semibold">
              {name.substring(0, 2).toUpperCase()}
            </div>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">{name}</h3>
              {verified && (
                <ShieldCheck className="h-4 w-4 text-green-500" />
              )}
            </div>
            <div className="flex items-center mt-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              <span className="ml-2 text-sm text-gray-600">({rating.toFixed(1)})</span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-gray-500">Specialty:</span>
            <p>{specialty}</p>
          </div>
          <div>
            <span className="text-gray-500">Location:</span>
            <p>{location}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm">
          <TruckIcon className="h-4 w-4 text-primary" />
          <span>{completedPickups} completed pickups</span>
        </div>

        <div className="mt-4">
          <Button asChild size="sm" className="w-full">
            <Link to="/signup?type=institution">Contact Dealer</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const InstitutionLanding = () => {
  const dealers = [
    {
      name: "Green Recyclers Ltd",
      rating: 4.8,
      specialty: "Electronic Waste",
      location: "Mumbai",
      completedPickups: 128,
      verified: true,
    },
    {
      name: "EcoScrap Solutions",
      rating: 4.5,
      specialty: "Metal & Paper",
      location: "Delhi",
      completedPickups: 95,
      verified: true,
    },
    {
      name: "Reliable Scrap Traders",
      rating: 4.2,
      specialty: "All Materials",
      location: "Bangalore",
      completedPickups: 67,
      verified: true,
    },
    {
      name: "Premium Metal Recyclers",
      rating: 4.9,
      specialty: "Metal & Hardware",
      location: "Chennai",
      completedPickups: 203,
      verified: true,
    },
    {
      name: "NextGen Waste Management",
      rating: 4.7,
      specialty: "E-waste & Plastics",
      location: "Hyderabad",
      completedPickups: 156,
      verified: true,
    },
    {
      name: "City Scrap Collectors",
      rating: 4.0,
      specialty: "Paper & Cardboard",
      location: "Pune",
      completedPickups: 82,
      verified: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-4">For Institutions</h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
              Connect with trusted scrap dealers who offer competitive rates and reliable service for your waste management needs.
            </p>
          </div>
        </div>

        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Top Rated Dealers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealers.map((dealer, index) => (
              <DealerProfile key={index} {...dealer} />
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Why Use ScrapBid?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Verified Dealers</h3>
                <p className="text-gray-600">
                  All our dealers go through a strict verification process to ensure quality service and reliability.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Competitive Prices</h3>
                <p className="text-gray-600">
                  Get the best value for your scrap materials through our transparent bidding system.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Seamless Process</h3>
                <p className="text-gray-600">
                  From listing to pickup, our platform makes waste management simple and hassle-free.
                </p>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" variant="default">
              <Link to="/signup?type=institution">Get Started as an Institution</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InstitutionLanding;
