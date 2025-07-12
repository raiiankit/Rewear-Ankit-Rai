
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, User, LogOut, Heart, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // In real app, this would come from auth context
  const [userPoints] = useState(250); // Mock points

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-orange-500 rounded-full"></div>
            <span className="text-xl font-bold text-gray-800">ReWear</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/browse" className="text-gray-600 hover:text-green-600 transition-colors">
              Browse Items
            </Link>
            <Link to="/list-item" className="text-gray-600 hover:text-green-600 transition-colors">
              List Item
            </Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-green-600 transition-colors">
              How It Works
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {userPoints} points
                </Badge>
                <Link to="/wishlist">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4" />
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/browse" 
                className="text-gray-600 hover:text-green-600 transition-colors"
                onClick={toggleMenu}
              >
                Browse Items
              </Link>
              <Link 
                to="/list-item" 
                className="text-gray-600 hover:text-green-600 transition-colors"
                onClick={toggleMenu}
              >
                List Item
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-gray-600 hover:text-green-600 transition-colors"
                onClick={toggleMenu}
              >
                How It Works
              </Link>
              
              <div className="pt-4 border-t border-gray-200">
                {isLoggedIn ? (
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Points Balance</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {userPoints}
                      </Badge>
                    </div>
                    <Link to="/dashboard" onClick={toggleMenu}>
                      <Button variant="outline" className="w-full">
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => {
                        setIsLoggedIn(false);
                        toggleMenu();
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <Link to="/login" onClick={toggleMenu}>
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                    <Link to="/register" onClick={toggleMenu}>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Sign Up</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
