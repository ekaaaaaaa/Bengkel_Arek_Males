import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-2xl px-4 py-2 rounded-xl shadow-md">
                DISKO
              </div>
              <div>
                <div className="font-bold text-lg text-orange-500">FOOD</div>
                <div className="text-xs text-gray-400 -mt-1">Taste The Best</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Menghadirkan cita rasa autentik Indonesia dengan harga terjangkau. Nikmati kelezatan setiap hari!
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
              <li><Link to="/menu" className="hover:text-orange-500 transition">Menu</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition">About Us</Link></li>
              <li><Link to="/promos" className="hover:text-orange-500 transition">Promotions</Link></li>
              <li><Link to="/account" className="hover:text-orange-500 transition">My Account</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Customer Service</h3>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><Link to="/orders" className="hover:text-orange-500 transition">Track Order</Link></li>
              <li><a href="#" className="hover:text-orange-500 transition">Help & FAQ</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Delivery Info</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-orange-500" />
                <span>Jl. Raya Merdeka No. 123<br />Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-orange-500" />
                <a href="tel:+6281234567890" className="hover:text-orange-500 transition">+62 812-3456-7890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-orange-500" />
                <a href="mailto:info@diskofood.com" className="hover:text-orange-500 transition">info@diskofood.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0 text-orange-500" />
                <span>Open Daily<br />10:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2026 DISKO FOOD. All rights reserved. Made with ❤️ in Indonesia
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition bg-gray-800 p-2.5 rounded-full hover:bg-gray-700">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition bg-gray-800 p-2.5 rounded-full hover:bg-gray-700">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition bg-gray-800 p-2.5 rounded-full hover:bg-gray-700">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
