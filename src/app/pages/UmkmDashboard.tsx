import { TrendingUp, Package, ShoppingBag, DollarSign, Bell, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function UmkmDashboard() {
  const stats = [
    { label: "Total Penjualan", value: "Rp 4.250.000", icon: DollarSign, color: "from-green-500 to-emerald-500", change: "+12%" },
    { label: "Promo Aktif", value: "8", icon: TrendingUp, color: "from-orange-500 to-red-500", change: "+2" },
    { label: "Total Produk", value: "24", icon: Package, color: "from-blue-500 to-cyan-500", change: "+3" },
    { label: "Transaksi", value: "156", icon: ShoppingBag, color: "from-purple-500 to-pink-500", change: "+18%" },
  ];

  const salesData = [
    { month: "Jan", sales: 2400 },
    { month: "Feb", sales: 1398 },
    { month: "Mar", sales: 3800 },
    { month: "Apr", sales: 3908 },
    { month: "Mei", sales: 4800 },
    { month: "Jun", sales: 3800 },
  ];

  const promoPerformance = [
    { name: "Nasi Goreng", views: 450, sales: 120 },
    { name: "Kopi Susu", views: 380, sales: 250 },
    { name: "Batik Tulis", views: 220, sales: 45 },
    { name: "Tas Rotan", views: 190, sales: 67 },
  ];

  const recentOrders = [
    { id: "ORD156", customer: "Rina K.", product: "Nasi Goreng Spesial", amount: 36000, status: "Pending" },
    { id: "ORD155", customer: "Budi S.", product: "Kopi Susu x2", amount: 20000, status: "Selesai" },
    { id: "ORD154", customer: "Siti N.", product: "Batik Tulis", amount: 245000, status: "Dikirim" },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="umkm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard UMKM</h1>
            <p className="text-gray-600 mt-1">Warung Bu Siti</p>
          </div>
          <div className="flex space-x-3">
            <Link
              to="/umkm/products"
              className="bg-white border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50 transition flex items-center space-x-2"
            >
              <Package size={18} />
              <span>Kelola Produk</span>
            </Link>
            <Link
              to="/umkm/promos"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition flex items-center space-x-2"
            >
              <Plus size={18} />
              <span>Buat Promo</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <div className={`bg-gradient-to-r ${stat.color} text-white p-3 rounded-lg`}>
                  <stat.icon size={24} />
                </div>
                <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded">
                  {stat.change}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Grafik Penjualan</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#f97316" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Performa Promo</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={promoPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#fbbf24" />
                <Bar dataKey="sales" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                <span className="text-sm text-gray-600">Views</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-sm text-gray-600">Sales</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Pesanan Terbaru</h2>
              <button className="text-orange-500 font-medium hover:text-orange-600 transition">
                Lihat Semua →
              </button>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-orange-100 to-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <ShoppingBag className="text-orange-500" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.customer} - {order.product}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-orange-500">{formatPrice(order.amount)}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                      order.status === "Dikirim" ? "bg-blue-100 text-blue-700" :
                      "bg-green-100 text-green-700"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Notifikasi</h2>
              <Bell className="text-orange-500" size={20} />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="font-semibold text-sm">🎉 Promo Baru Aktif!</p>
                <p className="text-sm text-gray-600 mt-1">Nasi Goreng Spesial 28% off</p>
                <span className="text-xs text-gray-500">2 jam lalu</span>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-semibold text-sm">📦 Pesanan Baru</p>
                <p className="text-sm text-gray-600 mt-1">3 pesanan menunggu konfirmasi</p>
                <span className="text-xs text-gray-500">5 jam lalu</span>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="font-semibold text-sm">✅ Pembayaran Diterima</p>
                <p className="text-sm text-gray-600 mt-1">Rp 245.000 dari Siti N.</p>
                <span className="text-xs text-gray-500">1 hari lalu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
