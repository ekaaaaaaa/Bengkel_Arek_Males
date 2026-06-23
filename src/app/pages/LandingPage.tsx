import { Search, Utensils, Coffee, Cookie, Cake, Package, Sparkles, Star, Clock, Award, TrendingUp, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { categories, menuItems, testimonials } from "../data/mockData";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const categoryIcons = {
    utensils: Utensils,
    coffee: Coffee,
    cookie: Cookie,
    cake: Cake,
    package: Package,
    sparkles: Sparkles,
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />

      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI4YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek04IDQyYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTI4YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-1.5">
              <Award className="w-4 h-4 mr-2" />
              Trusted Local Food Business Since 2020
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Nikmati Promo Makanan<br />Terbaik Setiap Hari
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto">
              Cita rasa autentik Indonesia dengan harga yang ramah di kantong. Pesan sekarang dan rasakan kelezatannya!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 rounded-full shadow-xl">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Order Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6 rounded-full">
                View Menu
              </Button>
            </div>

            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Cari menu favorit Anda..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-800 pr-14 shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50 bg-white"
              />
              <button className="absolute right-2 top-2 bg-gradient-to-r from-orange-600 to-red-600 text-white p-3 rounded-full hover:shadow-lg transition-all hover:scale-105">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600 text-lg">Temukan menu sesuai selera Anda</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.icon as keyof typeof categoryIcons];
              return (
                <Link
                  key={category.id}
                  to="/menu"
                  className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group hover:scale-105 border border-orange-100"
                >
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm leading-tight">{category.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Best Sellers</h2>
              <p className="text-gray-600 text-lg">Menu paling digemari pelanggan kami</p>
            </div>
            <Link
              to="/menu"
              className="text-orange-600 font-semibold hover:text-orange-700 transition flex items-center gap-2"
            >
              View All Menu <TrendingUp size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...menuItems].sort((a, b) => b.sold - a.sold).slice(0, 6).map((item) => (
              <Link
                key={item.id}
                to={`/menu/${item.id}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white border-0 shadow-lg">
                      {item.discount}% OFF
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-gray-900 border-0 shadow-lg">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                      {item.rating}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-orange-600 transition">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400 line-through">Rp {item.originalPrice.toLocaleString()}</div>
                      <div className="text-2xl font-bold text-orange-600">Rp {item.discountPrice.toLocaleString()}</div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">
                      {item.sold} sold
                    </Badge>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Testimoni dari pelanggan setia kami</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-orange-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold mr-3 text-xl shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI4YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek04IDQyYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTI4YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Clock className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-2xl mx-auto">
            Pesan sekarang dan nikmati promo spesial hari ini! Gratis ongkir untuk pembelian di atas Rp 50.000
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-10 py-6 rounded-full hover:scale-105 transition-transform">
              Call Us: +62 812-3456-7890
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
