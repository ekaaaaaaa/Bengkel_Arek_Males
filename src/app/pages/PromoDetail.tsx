import { ArrowLeft, ShoppingCart, Calendar, Package, Store, Tag, TrendingUp, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { menuItems } from "../data/mockData";

export default function PromoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const promo = menuItems.find((p) => p.id === Number(id));

  if (!promo) {
    return <div>Promo tidak ditemukan</div>;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const savings = (promo.originalPrice - promo.discountPrice) * quantity;

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={3} userType="customer" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/customer"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 mb-6 transition"
        >
          <ArrowLeft size={20} />
          <span>Kembali ke Dashboard</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div>
              <div className="rounded-xl h-96 overflow-hidden mb-4 shadow-lg">
                {promo.image.startsWith('http') ? (
                  <img src={promo.image} alt={promo.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 w-full h-full flex items-center justify-center">
                    <div className="text-9xl">{getImageEmoji(promo.image)}</div>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg h-20 overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500 shadow-md"
                  >
                    {promo.image.startsWith('http') ? (
                      <img src={promo.image} alt={promo.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="bg-gradient-to-br from-orange-100 to-red-100 w-full h-full flex items-center justify-center">
                        <div className="text-3xl">{getImageEmoji(promo.image)}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  {promo.category}
                </span>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <Tag size={14} />
                  <span className="font-bold text-sm">Diskon {promo.discount}%</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">{promo.name}</h1>

              <div className="flex items-center space-x-2 mb-6">
                <Store size={18} className="text-gray-500" />
                <span className="text-gray-700">DISKO FOOD</span>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 mb-6">
                <div className="flex items-baseline space-x-3 mb-2">
                  <div className="text-3xl font-bold text-orange-500">
                    {formatPrice(promo.discountPrice)}
                  </div>
                  <div className="text-lg text-gray-400 line-through">
                    {formatPrice(promo.originalPrice)}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Hemat {formatPrice(promo.originalPrice - promo.discountPrice)} per item!
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-gray-500" size={20} />
                  <div>
                    <div className="text-sm text-gray-500">Berlaku hingga</div>
                    <div className="font-medium">{new Date(promo.validUntil).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    })}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Package className="text-gray-500" size={20} />
                  <div>
                    <div className="text-sm text-gray-500">Stok tersedia</div>
                    <div className="font-medium">{promo.stock} unit</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-gray-500" size={20} />
                  <div>
                    <div className="text-sm text-gray-500">Terjual</div>
                    <div className="font-medium">{promo.sold} produk</div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mb-6">
                <h3 className="font-semibold mb-2">Deskripsi Produk</h3>
                <p className="text-gray-700">{promo.description}</p>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="font-medium">Jumlah:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition"
                  >
                    <Minus size={18} />
                  </button>
                  <div className="px-6 py-2 font-medium">{quantity}</div>
                  <button
                    onClick={() => setQuantity(Math.min(promo.stock, quantity + 1))}
                    className="p-2 hover:bg-gray-100 transition"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  Total: <span className="font-bold text-orange-500">{formatPrice(promo.discountPrice * quantity)}</span>
                </div>
              </div>

              {savings > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                  <div className="text-green-700 font-medium">
                    🎉 Anda hemat {formatPrice(savings)} dengan promo ini!
                  </div>
                </div>
              )}

              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={20} />
                <span>Tambah ke Keranjang</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function getImageEmoji(image: string): string {
  const emojiMap: Record<string, string> = {
    "food-1": "🍜",
    "coffee-1": "☕",
    "fashion-1": "👔",
    "craft-1": "👜",
    "tech-1": "🎧",
    "beauty-1": "💄",
  };
  return emojiMap[image] || "🛍️";
}
