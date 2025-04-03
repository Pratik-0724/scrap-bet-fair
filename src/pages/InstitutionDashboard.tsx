
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Package, Gavel, History, Settings } from "lucide-react";

const InstitutionDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Institution Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your scrap listings and bids</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Total Listings</CardTitle>
                <Package className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-xs text-gray-500 mt-1">3 active, 9 completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Active Bids</CardTitle>
                <Gavel className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">28</div>
                <p className="text-xs text-gray-500 mt-1">Across 3 active listings</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Pending Pickups</CardTitle>
                <History className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
                <p className="text-xs text-gray-500 mt-1">Scheduled for this week</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Your Scrap Listings</h2>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Listing
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Placeholder cards for listings */}
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-2 bg-primary"></div>
                <CardContent className="pt-6">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Paper Waste ({20 + i}kg)</h3>
                      <p className="text-sm text-gray-500">Posted: {i} day{i > 1 ? "s" : ""} ago</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-primary">{5 + i} bids</p>
                      <p className="text-sm text-gray-500">Highest: ₹{i * 5 + 20}/kg</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline">View Bids</Button>
                    <Button size="sm" variant="outline">Edit</Button>
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

export default InstitutionDashboard;
