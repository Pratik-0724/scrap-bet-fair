
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrapCard, { ScrapItem } from "./ScrapCard";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const FeaturedListings = () => {
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ScrapItem | null>(null);
  const [bidAmount, setBidAmount] = useState("");
  
  const mockListings: ScrapItem[] = [
    {
      id: "1",
      title: "Waste Paper Collection",
      institution: {
        name: "Tech Engineering College",
        type: "Engineering"
      },
      type: "Mixed Paper",
      category: "Paper",
      quantity: 500,
      unit: "kg",
      minBid: 8000,
      currentBid: 8500,
      expiresAt: "2023-11-30T10:00:00",
      bidCount: 5,
      description: "Collection of waste paper including printouts, notebooks and packaging materials.",
      location: "Mumbai"
    },
    {
      id: "2",
      title: "Laboratory Equipment",
      institution: {
        name: "City Medical College",
        type: "Medical"
      },
      type: "Electronic Equipment",
      category: "Electronic",
      quantity: 15,
      unit: "pieces",
      minBid: 25000,
      expiresAt: "2023-12-05T18:00:00",
      bidCount: 2,
      description: "Used but functional lab equipment including microscopes and centrifuges.",
      location: "Delhi"
    },
    {
      id: "3",
      title: "Computer Hardware Scrap",
      institution: {
        name: "Science & Tech Institute",
        type: "Engineering"
      },
      type: "CPUs and Monitors",
      category: "Electronic",
      quantity: 30,
      unit: "sets",
      minBid: 15000,
      currentBid: 16500,
      expiresAt: "2023-12-01T15:30:00",
      bidCount: 8,
      description: "Old desktop computers, monitors and peripherals.",
      location: "Bangalore"
    },
    {
      id: "4",
      title: "Biohazard Waste",
      institution: {
        name: "National Medical Center",
        type: "Medical"
      },
      type: "Disposable Medical Items",
      category: "Medical",
      quantity: 200,
      unit: "kg",
      minBid: 3000,
      expiresAt: "2023-11-28T12:00:00",
      bidCount: 1,
      description: "Properly contained biohazard waste requiring specialized disposal.",
      location: "Chennai"
    }
  ];

  const handleBidClick = (id: string) => {
    const item = mockListings.find((listing) => listing.id === id);
    if (item) {
      setSelectedItem(item);
      setBidAmount(item.currentBid ? (item.currentBid + 100).toString() : item.minBid.toString());
      setDialogOpen(true);
    }
  };

  const handlePlaceBid = () => {
    const bidValue = parseFloat(bidAmount);
    
    if (!selectedItem) return;
    
    const minRequired = selectedItem.currentBid || selectedItem.minBid;
    
    if (isNaN(bidValue) || bidValue <= minRequired) {
      toast({
        title: "Invalid bid amount",
        description: `Your bid must be higher than ₹${minRequired}`,
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Bid placed successfully!",
      description: `You've bid ₹${bidValue} on ${selectedItem.title}`,
    });
    
    setDialogOpen(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Listings</h2>
            <p className="mt-2 text-lg text-gray-600">
              Latest scrap listings from various institutions
            </p>
          </div>
          <Button asChild variant="outline">
            <a href="/browse">View All Listings</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockListings.map((item) => (
            <ScrapCard key={item.id} item={item} onBidClick={handleBidClick} />
          ))}
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Place Bid</DialogTitle>
            <DialogDescription>
              {selectedItem && (
                <div className="py-2">
                  <p>Item: <span className="font-semibold">{selectedItem?.title}</span></p>
                  <p className="mt-1">
                    Current {selectedItem.currentBid ? "highest bid" : "minimum bid"}: 
                    <span className="font-semibold">₹{selectedItem.currentBid || selectedItem.minBid}</span>
                  </p>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="bidAmount" className="text-sm font-medium">Your Bid Amount (₹)</label>
              <Input 
                id="bidAmount"
                type="number" 
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder="Enter bid amount"
              />
              <p className="text-xs text-muted-foreground">
                Your bid must be higher than the current highest bid
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handlePlaceBid}>Place Bid</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturedListings;
