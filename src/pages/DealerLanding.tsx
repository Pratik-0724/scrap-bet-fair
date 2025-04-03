
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Calendar, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface ScrapListing {
  id: number;
  institutionName: string;
  institutionType: string;
  location: string;
  materialType: string;
  quantity: string;
  postedDate: string;
  expiryDate: string;
  status: "active" | "completed" | "expired";
}

const ScrapListingCard = ({ listing }: { listing: ScrapListing }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "completed":
        return "bg-blue-500";
      case "expired":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all">
      <div className={`h-2 ${getStatusColor(listing.status)}`}></div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="outline" className="mb-2">
              {listing.materialType}
            </Badge>
            <h3 className="text-lg font-semibold">{listing.quantity}</h3>
            <div className="flex items-center text-gray-600 text-sm mt-1">
              <Building2 className="h-4 w-4 mr-1" />
              <span>{listing.institutionName}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm mt-1">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Posted: {listing.postedDate}</span>
            </div>
          </div>
          <Badge className={`${getStatusColor(listing.status)} text-white`}>
            {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
          </Badge>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p><strong>Location:</strong> {listing.location}</p>
          <p><strong>Institution Type:</strong> {listing.institutionType}</p>
          <p><strong>Expiry:</strong> {listing.expiryDate}</p>
        </div>

        <div className="mt-4">
          <Button asChild size="sm" variant="outline" className="mr-2">
            <Link to={`/signup?type=dealer&listing=${listing.id}`}>
              <FileText className="h-4 w-4 mr-1" />
              View Details
            </Link>
          </Button>
          {listing.status === "active" && (
            <Button asChild size="sm">
              <Link to={`/signup?type=dealer&listing=${listing.id}&bid=true`}>
                Place Bid
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const DealerLanding = () => {
  const listings: ScrapListing[] = [
    {
      id: 1,
      institutionName: "City General Hospital",
      institutionType: "Healthcare",
      location: "Mumbai",
      materialType: "Electronic Waste",
      quantity: "500kg of Electronic Waste",
      postedDate: "3 days ago",
      expiryDate: "Apr 15, 2025",
      status: "active",
    },
    {
      id: 2,
      institutionName: "National University",
      institutionType: "Education",
      location: "Delhi",
      materialType: "Paper Waste",
      quantity: "1200kg of Paper Waste",
      postedDate: "5 days ago",
      expiryDate: "Apr 12, 2025",
      status: "active",
    },
    {
      id: 3,
      institutionName: "Tech Solutions Inc.",
      institutionType: "IT Company",
      location: "Bangalore",
      materialType: "Computer Hardware",
      quantity: "350kg of Computer Hardware",
      postedDate: "1 week ago",
      expiryDate: "Apr 10, 2025",
      status: "active",
    },
    {
      id: 4,
      institutionName: "Central Research Lab",
      institutionType: "Research",
      location: "Hyderabad",
      materialType: "Laboratory Equipment",
      quantity: "200kg of Lab Equipment",
      postedDate: "2 weeks ago",
      expiryDate: "Mar 30, 2025",
      status: "completed",
    },
    {
      id: 5,
      institutionName: "State Bank Headquarters",
      institutionType: "Banking",
      location: "Chennai",
      materialType: "Paper & Plastic",
      quantity: "800kg of Mixed Waste",
      postedDate: "3 weeks ago",
      expiryDate: "Mar 25, 2025",
      status: "completed",
    },
    {
      id: 6,
      institutionName: "Manufacturing Plant",
      institutionType: "Manufacturing",
      location: "Pune",
      materialType: "Metal Scrap",
      quantity: "1500kg of Metal Scrap",
      postedDate: "1 month ago",
      expiryDate: "Feb 28, 2025",
      status: "expired",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-4">For Scrap Dealers</h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
              Discover scrap listings from trusted institutions and place competitive bids to grow your business.
            </p>
          </div>
        </div>

        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Available Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <ScrapListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Why Join ScrapBid?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quality Scrap Sources</h3>
                <p className="text-gray-600">
                  Connect directly with legitimate institutions offering high-quality scrap materials.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Fair Bidding Process</h3>
                <p className="text-gray-600">
                  Transparent auction system ensures fair competition and pricing for all dealers.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Growth Opportunities</h3>
                <p className="text-gray-600">
                  Build your reputation through our rating system and access more exclusive listings.
                </p>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" variant="default">
              <Link to="/signup?type=dealer">Sign Up as a Dealer</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DealerLanding;
