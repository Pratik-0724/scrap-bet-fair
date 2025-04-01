
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Package, Scale, Building, Calendar, Tag } from "lucide-react";
import { Button } from "./ui/button";

export interface ScrapItem {
  id: string;
  title: string;
  institution: {
    name: string;
    type: string;
  };
  type: string;
  category: string;
  quantity: number;
  unit: string;
  minBid: number;
  currentBid?: number;
  expiresAt: string;
  description?: string;
  image?: string;
  bidCount: number;
  location?: string;
}

interface ScrapCardProps {
  item: ScrapItem;
  onBidClick?: (id: string) => void;
}

const ScrapCard: React.FC<ScrapCardProps> = ({ item, onBidClick }) => {
  const getBadgeColor = (category: string) => {
    switch (category) {
      case "Paper":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "Metal":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
      case "Electronic":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "Medical":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "Plastic":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      default:
        return "bg-purple-100 text-purple-800 hover:bg-purple-100";
    }
  };

  const getInstitutionBadgeColor = (type: string) => {
    switch (type) {
      case "Engineering":
        return "bg-indigo-100 text-indigo-800 hover:bg-indigo-100";
      case "Medical":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "Pharmacy":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const expiryDate = new Date(item.expiresAt);
  const daysLeft = Math.max(0, Math.floor((expiryDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24)));

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <CardHeader className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg truncate">{item.title}</h3>
            <Badge className={getBadgeColor(item.category)}>{item.category}</Badge>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Building className="h-4 w-4" />
            <span>{item.institution.name}</span>
            <Badge variant="outline" className={getInstitutionBadgeColor(item.institution.type)}>
              {item.institution.type}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Quantity</span>
            <div className="flex items-center space-x-1">
              <Scale className="h-4 w-4 text-gray-400" />
              <span className="font-medium">
                {item.quantity} {item.unit}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Type</span>
            <div className="flex items-center space-x-1">
              <Package className="h-4 w-4 text-gray-400" />
              <span className="font-medium">{item.type}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Minimum Bid</span>
            <div className="flex items-center space-x-1">
              <Tag className="h-4 w-4 text-gray-400" />
              <span className="font-medium">₹{item.minBid}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Expires In</span>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span className="font-medium">{daysLeft} days</span>
            </div>
          </div>
        </div>
        {item.description && (
          <p className="mt-3 text-sm text-gray-600 line-clamp-2">{item.description}</p>
        )}
      </CardContent>
      <CardFooter className="p-4 bg-gray-50 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {item.currentBid ? (
            <span>
              Current Bid: <span className="font-semibold text-bid">₹{item.currentBid}</span>
            </span>
          ) : (
            <span>No bids yet</span>
          )}
          <span className="ml-2 text-xs">({item.bidCount} bids)</span>
        </div>
        <Button 
          onClick={() => onBidClick && onBidClick(item.id)}
          className="bg-bid hover:bg-bid/90"
        >
          Place Bid
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ScrapCard;
