import { Tag, Star, Clock, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { menuItems } from "../data/mockData";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";

export default function Promotions() {
  const activePromos = menuItems.filter((item) => item.discount >= 20);
  const limitedTimeOffers = menuItems.filter((item) => item.discount >= 25).slice(0, 3);

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />

      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-1.5">
            <Tag className="w-4 h-4 mr-2" />
            Special Deals
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Active Promotions</h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto">
            Dapatkan diskon hingga 33% untuk menu pilihan. Promo terbatas, buruan pesan sekarang!
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="text-orange-600 w-8 h-8" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Limited Time Offers</h2>
              <p className="text-gray-600">Promo spesial yang tidak boleh dilewatkan!</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {limitedTimeOffers.map((item) => (
              <Link
                key={item.id}
                to={`/menu/${item.id}`}
                className="group relative bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-orange-200"
              >
                <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-3 rounded-bl-3xl font-bold text-xl shadow-xl">
                  {item.discount}% OFF
                </div>
                <div className="p-8">
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square shadow-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-400 line-through">
                        Rp {item.originalPrice.toLocaleString()}
                      </div>
                      <div className="text-3xl font-bold text-orange-600">
                        Rp {item.discountPrice.toLocaleString()}
                      </div>
                    </div>
                    <Badge className="bg-green-500 text-white border-0">
                      Save Rp {(item.originalPrice - item.discountPrice).toLocaleString()}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>Valid until: {item.validUntil}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="text-orange-600 w-8 h-8" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">All Active Promotions</h2>
              <p className="text-gray-600">{activePromos.length} menu dengan promo menarik</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activePromos.map((item) => (
              <Link
                key={item.id}
                to={`/menu/${item.id}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-red-500 text-white border-0 shadow-lg font-bold text-base px-3 py-1">
                      {item.discount}% OFF
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white text-gray-900 border-0 shadow-lg">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                      {item.rating}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <Badge variant="outline" className="mb-2 text-xs border-orange-300 text-orange-700 bg-orange-50">
                    {item.category}
                  </Badge>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-orange-600 transition line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <div className="text-xs text-gray-400 line-through">
                        Rp {item.originalPrice.toLocaleString()}
                      </div>
                      <div className="text-xl font-bold text-orange-600">
                        Rp {item.discountPrice.toLocaleString()}
                      </div>
                    </div>
                    <Badge className="bg-green-500 text-white border-0 text-xs">
                      -{(item.originalPrice - item.discountPrice).toLocaleString()}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>Until: {item.validUntil}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-12 rounded-3xl shadow-2xl text-center">
            <Tag className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Want More Exclusive Deals?</h2>
            <p className="text-xl mb-8 text-white/95">
              Daftar sekarang dan dapatkan voucher diskon 25% untuk pemesanan pertama Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105">
                Sign Up Now
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
