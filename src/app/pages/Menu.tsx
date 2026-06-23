import { useState } from "react";
import { Search, Star, ShoppingCart, Filter } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { categories, menuItems } from "../data/mockData";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar cartCount={0} />

      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-white/90 mb-8">
            Jelajahi koleksi menu terbaik kami dengan harga spesial
          </p>

          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Cari menu favorit Anda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-gray-800 pr-14 shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="absolute right-2 top-2 bg-white text-orange-600 p-3 rounded-full hover:shadow-lg transition">
              <Search size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="text-orange-600" size={24} />
            <h3 className="font-bold text-xl text-gray-900">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              onClick={() => setSelectedCategory("All")}
              className={selectedCategory === "All"
                ? "bg-orange-600 hover:bg-orange-700 rounded-full"
                : "rounded-full border-orange-300 text-gray-700 hover:bg-orange-50"}
            >
              All Menu
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className={selectedCategory === category.name
                  ? "bg-orange-600 hover:bg-orange-700 rounded-full"
                  : "rounded-full border-orange-300 text-gray-700 hover:bg-orange-50"}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredItems.length} Menu Items
            </h2>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Tidak ada menu yang sesuai dengan pencarian Anda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
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
                      <Badge className="bg-red-500 text-white border-0 shadow-lg font-bold">
                        {item.discount}% OFF
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white text-gray-900 border-0 shadow-lg">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                        {item.rating}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700 rounded-full shadow-xl">
                        <ShoppingCart size={16} className="mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                  <div className="p-5">
                    <Badge variant="outline" className="mb-2 text-xs border-orange-300 text-orange-700 bg-orange-50">
                      {item.category}
                    </Badge>
                    <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-orange-600 transition line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-xs text-gray-400 line-through">
                          Rp {item.originalPrice.toLocaleString()}
                        </div>
                        <div className="text-xl font-bold text-orange-600">
                          Rp {item.discountPrice.toLocaleString()}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50 text-xs">
                        {item.sold} sold
                      </Badge>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
