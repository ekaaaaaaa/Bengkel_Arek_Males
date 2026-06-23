import { Search, Filter, Bell, X } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PromoCard from "../components/PromoCard";
import { categories, menuItems } from "../data/mockData";

export default function CustomerDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showNotifications, setShowNotifications] = useState(false);

  const filteredPromos = menuItems.filter((promo) => {
    const matchesSearch = promo.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || promo.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const notifications = [
    { id: 1, title: "Promo Baru!", message: "Nasi Goreng Spesial diskon 28%", time: "5 menit lalu" },
    { id: 2, title: "Flash Sale", message: "Kopi Susu Gula Aren hanya Rp 10.000", time: "1 jam lalu" },
    { id: 3, title: "Pesanan Dikirim", message: "Pesanan #ORD002 sedang dalam perjalanan", time: "2 jam lalu" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={3} userType="customer" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 mb-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-2">Selamat Datang, Rina! 👋</h1>
          <p className="text-white/90">Temukan promo terbaik untuk Anda hari ini</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari produk atau UMKM..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button className="bg-white border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition flex items-center justify-center space-x-2">
            <Filter size={20} />
            <span>Filter</span>
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Kategori</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg transition ${
                !selectedCategory
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:border-orange-500"
              }`}
            >
              Semua
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-lg transition ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:border-orange-500"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {selectedCategory ? `Promo ${selectedCategory}` : "Semua Promo"}
          </h2>
          <span className="text-gray-600">{filteredPromos.length} promo ditemukan</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPromos.map((promo) => (
            <PromoCard key={promo.id} {...promo} />
          ))}
        </div>

        {showNotifications && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-end p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mt-20 mr-4">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="font-bold text-lg">Notifikasi</h3>
                <button onClick={() => setShowNotifications(false)}>
                  <X size={20} />
                </button>
              </div>
              <div className="divide-y max-h-96 overflow-y-auto">
                {notifications.map((notif) => (
                  <div key={notif.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                    <h4 className="font-semibold text-sm">{notif.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
                    <span className="text-xs text-gray-400 mt-2 block">{notif.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
