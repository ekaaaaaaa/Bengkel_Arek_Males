import { Users, Store, ShoppingCart, TrendingUp, Activity, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Pengguna", value: "12,450", icon: Users, color: "from-blue-500 to-cyan-500", change: "+245 baru" },
    { label: "Total UMKM", value: "1,823", icon: Store, color: "from-orange-500 to-red-500", change: "+67 baru" },
    { label: "Total Transaksi", value: "45,678", icon: ShoppingCart, color: "from-purple-500 to-pink-500", change: "+1.2k hari ini" },
    { label: "Promo Aktif", value: "3,456", icon: TrendingUp, color: "from-green-500 to-emerald-500", change: "+89 baru" },
  ];

  const transactionData = [
    { month: "Jan", amount: 45000 },
    { month: "Feb", amount: 52000 },
    { month: "Mar", amount: 48000 },
    { month: "Apr", amount: 61000 },
    { month: "Mei", amount: 55000 },
    { month: "Jun", amount: 67000 },
  ];

  const categoryData = [
    { name: "Makanan", value: 35, color: "#f97316" },
    { name: "Minuman", value: 25, color: "#fb923c" },
    { name: "Fashion", value: 15, color: "#fdba74" },
    { name: "Kerajinan", value: 12, color: "#fed7aa" },
    { name: "Lainnya", value: 13, color: "#ffedd5" },
  ];

  const recentActivities = [
    { id: 1, type: "user", message: "50 pengguna baru mendaftar", time: "5 menit lalu", icon: Users, color: "blue" },
    { id: 2, type: "umkm", message: "UMKM 'Warung Digital' divalidasi", time: "15 menit lalu", icon: Store, color: "orange" },
    { id: 3, type: "transaction", message: "1,234 transaksi berhasil hari ini", time: "1 jam lalu", icon: ShoppingCart, color: "green" },
    { id: 4, type: "promo", message: "89 promo baru dibuat", time: "2 jam lalu", icon: TrendingUp, color: "purple" },
    { id: 5, type: "alert", message: "Laporan spam dari 3 pengguna", time: "3 jam lalu", icon: AlertCircle, color: "red" },
  ];

  const pendingValidation = [
    { id: 1, umkm: "Kedai Kopi Nusantara", owner: "Ahmad Rizki", category: "Minuman", date: "2026-06-08" },
    { id: 2, umkm: "Batik Heritage", owner: "Siti Aminah", category: "Fashion", date: "2026-06-07" },
    { id: 3, umkm: "Kerajinan Bambu", owner: "Budi Santoso", category: "Kerajinan", date: "2026-06-07" },
  ];

  const getActivityColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-100 text-blue-600",
      orange: "bg-orange-100 text-orange-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-600",
    };
    return colors[color] || "bg-gray-100 text-gray-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard Admin</h1>
            <p className="text-gray-600 mt-1">Monitoring & Management System</p>
          </div>
          <div className="flex space-x-3">
            <Link
              to="/admin/users"
              className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center space-x-2"
            >
              <Users size={18} />
              <span>Kelola Pengguna</span>
            </Link>
            <Link
              to="/admin/system"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition flex items-center space-x-2"
            >
              <Activity size={18} />
              <span>Kelola Sistem</span>
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
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm text-green-600">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Grafik Transaksi (6 Bulan Terakhir)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={transactionData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="amount" stroke="#f97316" fillOpacity={1} fill="url(#colorAmount)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Distribusi Kategori</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Aktivitas Sistem</h2>
              <Activity className="text-orange-500" size={20} />
            </div>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition">
                  <div className={`p-2 rounded-lg ${getActivityColor(activity.color)}`}>
                    <activity.icon size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">UMKM Menunggu Validasi</h2>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                {pendingValidation.length} Pending
              </span>
            </div>
            <div className="space-y-3">
              {pendingValidation.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{item.umkm}</h3>
                      <p className="text-sm text-gray-600">{item.owner}</p>
                    </div>
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">{item.date}</p>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm hover:bg-green-600 transition">
                      Setujui
                    </button>
                    <button className="flex-1 border border-red-500 text-red-500 py-2 rounded-lg text-sm hover:bg-red-50 transition">
                      Tolak
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
