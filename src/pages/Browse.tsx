
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Menubar, 
  MenubarContent, 
  MenubarItem, 
  MenubarMenu, 
  MenubarTrigger 
} from "@/components/ui/menubar";
import { Search, Filter, ArrowUpDown } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Browse = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    // In a real app, we would fetch listings based on the category
    console.log("Fetching listings for category:", category || "all");
  }, [category]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-4">Browse Scrap Listings</h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search for listings..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Menubar className="border-gray-200">
                  <MenubarMenu>
                    <MenubarTrigger className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filter
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>All Categories</MenubarItem>
                      <MenubarItem>Paper Waste</MenubarItem>
                      <MenubarItem>Electronic Waste</MenubarItem>
                      <MenubarItem>Metal/Steel</MenubarItem>
                      <MenubarItem>Medical Disposables</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
                <Menubar className="border-gray-200">
                  <MenubarMenu>
                    <MenubarTrigger className="flex items-center gap-2">
                      <ArrowUpDown className="h-4 w-4" />
                      Sort
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Newest First</MenubarItem>
                      <MenubarItem>Ending Soon</MenubarItem>
                      <MenubarItem>Price: Low to High</MenubarItem>
                      <MenubarItem>Price: High to Low</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {category && (
            <div className="mb-6">
              <p className="text-lg">
                Showing results for <span className="font-semibold">{category}</span>
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards for listings */}
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="h-2 bg-primary/60"></div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between">
                      <div>
                        <span className="px-2 py-1 bg-gray-100 text-xs rounded-full mb-2 inline-block">
                          {["Paper Waste", "Electronic Waste", "Metal/Steel", "Medical Disposables"][i % 4]}
                        </span>
                        <h3 className="font-medium">
                          {["Paper Waste", "Computer Hardware", "Steel Scrap", "Lab Disposables"][i % 4]} ({Math.floor(Math.random() * 100) + 10}kg)
                        </h3>
                        <p className="text-sm text-gray-500">
                          {["Engineering College", "Medical Institute", "Research Center", "Pharmaceutical Lab"][i % 4]}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm text-gray-500">Bidding Ends: April {i + 5}, 2025</p>
                      <p className="text-sm font-medium">Starting Price: ₹{Math.floor(Math.random() * 50) + 10}/kg</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Browse;
