import { ShoppingCart, User, Menu, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface NavbarProps {
  cartCount?: number;
  userType?: "customer" | "umkm" | "admin" | null;
}

export default function Navbar({ cartCount = 0, userType = null }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-2xl px-4 py-2 rounded-xl shadow-md">
              DISKO
            </div>
            <div>
              <div className="font-bold text-lg text-orange-600">FOOD</div>
              <div className="text-xs text-gray-500 -mt-1">Taste The Best</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition">
              Home
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-orange-600 font-medium transition">
              Menu
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium transition">
              About Us
            </Link>
            <Link to="/promos" className="text-gray-700 hover:text-orange-600 font-medium transition">
              Promotions
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {userType && (
              <button className="relative p-2 text-gray-700 hover:text-orange-500 transition">
                <Bell size={20} />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            )}

            {userType === "customer" && (
              <Link to="/cart" className="relative p-2 text-gray-700 hover:text-orange-500 transition">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            )}

            {!userType ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:shadow-lg transition"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link to="/account" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition">
                <User size={20} className="text-gray-700" />
                <span className="text-gray-700 font-medium hidden md:block">Account</span>
              </Link>
            )}

            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Home
            </Link>
            <Link to="/menu" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Menu
            </Link>
            <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              About Us
            </Link>
            <Link to="/promos" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Promotions
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
