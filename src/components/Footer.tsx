
import { Link } from "react-router-dom";
import { Recycle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">ScrapBid</span>
            </div>
            <p className="text-gray-500 text-sm">
              Connecting institutions and scrap dealers through efficient bidding.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Institutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/institutions" className="text-gray-500 hover:text-primary text-sm">
                  List Your Scrap
                </Link>
              </li>
              <li>
                <Link to="/institutions/dashboard" className="text-gray-500 hover:text-primary text-sm">
                  Institution Dashboard
                </Link>
              </li>
              <li>
                <Link to="/help/institutions" className="text-gray-500 hover:text-primary text-sm">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Dealers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dealers" className="text-gray-500 hover:text-primary text-sm">
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link to="/dealers/dashboard" className="text-gray-500 hover:text-primary text-sm">
                  Dealer Dashboard
                </Link>
              </li>
              <li>
                <Link to="/help/dealers" className="text-gray-500 hover:text-primary text-sm">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-500 hover:text-primary text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-primary text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-primary text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-primary text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ScrapBid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
