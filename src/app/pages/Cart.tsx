import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Nasi Goreng Spesial", umkm: "Warung Bu Siti", price: 18000, quantity: 2, image: "🍜" },
    { id: 2, name: "Kopi Susu Gula Aren", umkm: "Kedai Kopi Lokal", price: 10000, quantity: 1, image: "☕" },
    { id: 3, name: "Tas Anyaman Rotan", umkm: "Kerajinan Desa", price: 84000, quantity: 1, image: "👜" },
  ]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 10000;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartItems.length} userType="customer" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/customer"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 mb-6 transition"
        >
          <ArrowLeft size={20} />
          <span>Lanjut Belanja</span>
        </Link>

        <h1 className="text-3xl font-bold mb-8">Keranjang Belanja</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Keranjang Kosong</h2>
            <p className="text-gray-500 mb-6">Yuk, mulai belanja dan dukung UMKM lokal!</p>
            <Link
              to="/customer"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition"
            >
              Mulai Belanja
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-orange-100 to-red-100 w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-4xl">{item.image}</div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.umkm}</p>
                      <div className="font-bold text-orange-500">{formatPrice(item.price)}</div>
                    </div>

                    <div className="flex flex-col items-end space-y-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600 transition"
                      >
                        <Trash2 size={20} />
                      </button>

                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:bg-gray-100 transition"
                        >
                          <Minus size={16} />
                        </button>
                        <div className="px-4 py-1 font-medium">{item.quantity}</div>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 hover:bg-gray-100 transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Ringkasan Belanja</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cartItems.length} item)</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Biaya Pengiriman</span>
                    <span className="font-medium">{formatPrice(deliveryFee)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">Total</span>
                      <span className="font-bold text-2xl text-orange-500">{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Checkout Sekarang
                </button>

                <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="text-sm text-green-700">
                    🎉 Anda mendukung {new Set(cartItems.map(i => i.umkm)).size} UMKM lokal!
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
