import { Package, Clock, Truck, CheckCircle, ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { orders } from "../data/mockData";

export default function OrderStatus() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Menunggu Verifikasi":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "Diproses":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "Dikirim":
        return "text-purple-600 bg-purple-50 border-purple-200";
      case "Selesai":
        return "text-green-600 bg-green-50 border-green-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Menunggu Verifikasi":
        return <Clock size={20} />;
      case "Diproses":
        return <Package size={20} />;
      case "Dikirim":
        return <Truck size={20} />;
      case "Selesai":
        return <CheckCircle size={20} />;
      default:
        return <Package size={20} />;
    }
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

        <h1 className="text-3xl font-bold mb-8">Status Pesanan</h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Order ID: {order.id}</h3>
                    <p className="text-sm text-white/80">{order.date}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full border-2 ${getStatusColor(order.status)} flex items-center space-x-2`}>
                    {getStatusIcon(order.status)}
                    <span className="font-semibold">{order.status}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">Jumlah: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-orange-500">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-600">Total Pembayaran</p>
                    <p className="text-2xl font-bold text-orange-500">{formatPrice(order.total)}</p>
                  </div>
                  <button className="flex items-center space-x-2 px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition">
                    <Eye size={18} />
                    <span>Detail</span>
                  </button>
                </div>

                {order.status === "Dikirim" && (
                  <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-sm font-medium text-purple-700 mb-2">📦 Paket dalam perjalanan</p>
                    <p className="text-sm text-purple-600">No. Resi: JNE1234567890</p>
                    <button className="mt-2 text-sm text-purple-700 font-semibold hover:underline">
                      Lacak Paket →
                    </button>
                  </div>
                )}

                {order.status === "Selesai" && (
                  <div className="mt-4 flex space-x-3">
                    <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                      Beli Lagi
                    </button>
                    <button className="flex-1 border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-50 transition">
                      Beri Ulasan
                    </button>
                  </div>
                )}
              </div>

              {order.status !== "Selesai" && (
                <div className="px-6 pb-6">
                  <div className="flex justify-between items-center">
                    {["Menunggu Verifikasi", "Diproses", "Dikirim", "Selesai"].map((step, index) => {
                      const currentIndex = ["Menunggu Verifikasi", "Diproses", "Dikirim", "Selesai"].indexOf(order.status);
                      const isActive = index <= currentIndex;

                      return (
                        <div key={step} className="flex-1 relative">
                          <div className={`w-full h-1 ${isActive ? "bg-orange-500" : "bg-gray-200"} ${index === 0 ? "rounded-l" : ""} ${index === 3 ? "rounded-r" : ""}`} />
                          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center ${isActive ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-400"}`}>
                            {isActive ? "✓" : index + 1}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {orders.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <Package size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Belum Ada Pesanan</h2>
            <p className="text-gray-500 mb-6">Yuk, mulai belanja dan dukung UMKM lokal!</p>
            <Link
              to="/customer"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition"
            >
              Mulai Belanja
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
