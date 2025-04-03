
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Building2,
  Gavel,
  LogIn,
  Menu,
  Package,
  Recycle,
  UserPlus,
  X,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">ScrapBid</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium"
            >
              Contact Sales
            </Link>
            <Link
              to="/browse"
              className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium"
            >
              Browse Listings
            </Link>
            <div className="ml-4 flex items-center space-x-2">
              <Button asChild variant="outline">
                <Link to="/login" className="flex items-center space-x-2">
                  <LogIn className="h-4 w-4" />
                  <span>Log In</span>
                </Link>
              </Button>
              <Button asChild>
                <Link to="/signup" className="flex items-center space-x-2">
                  <UserPlus className="h-4 w-4" />
                  <span>Sign Up</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Contact Sales
            </Link>
            <Link
              to="/browse"
              className="block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Browse Listings
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
