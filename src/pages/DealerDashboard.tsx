
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Gavel, Award, Truck, Filter } from "lucide-react";

const DealerDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dealer Dashboard</h1>
            <p className="text-gray-600 mt-2">Discover and bid on available scrap listings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Active Bids</CardTitle>
                <Gavel className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
                <p className="text-xs text-gray-500 mt-1">On 5 different listings</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Won Auctions</CardTitle>
                <Award className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">14</div>
                <p className="text-xs text-gray-500 mt-1">Total value: ₹24,580</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Scheduled Pickups</CardTitle>
                <Truck className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
                <p className="text-xs text-gray-500 mt-1">This week</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">Available Listings</h2>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Search
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Placeholder cards for available listings */}
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-2 bg-secondary"></div>
                <CardContent className="pt-6">
                  <div className="flex justify-between">
                    <div>
                      <span className="px-2 py-1 bg-gray-100 text-xs rounded-full mb-2 inline-block">
                        {i % 2 === 0 ? "Electronic" : "Paper"} Waste
                      </span>
                      <h3 className="font-medium">
                        {i % 2 === 0 ? "Computer Hardware" : "Paper Waste"} ({30 * i}kg)
                      </h3>
                      <p className="text-sm text-gray-500">Institution: {["Engineering College", "Medical Institute", "Research Center", "Pharmaceutical Lab"][i - 1]}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Ends in {i + 1} day{i > 0 ? "s" : ""}</p>
                      <p className="text-sm font-medium">Current bid: ₹{i * 8 + 15}/kg</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm">Place Bid</Button>
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DealerDashboard;
