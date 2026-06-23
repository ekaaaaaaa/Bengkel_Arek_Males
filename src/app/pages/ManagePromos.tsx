import { ArrowLeft, Plus, Calendar, Percent, Bell, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ManagePromos() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [promos, setPromos] = useState([
    { id: 1, product: "Nasi Goreng Spesial", discount: 28, startDate: "2026-06-01", endDate: "2026-06-30", status: "Aktif", views: 450, sales: 120 },
    { id: 2, product: "Kopi Susu Gula Aren", discount: 33, startDate: "2026-06-01", endDate: "2026-06-25", status: "Aktif", views: 380, sales: 250 },
    { id: 3, product: "Mie Ayam Bakso", discount: 20, startDate: "2026-05-15", endDate: "2026-06-10", status: "Berakhir", views: 210, sales: 78 },
  ]);

  const [newPromo, setNewPromo] = useState({
    product: "",
    discount: "",
    startDate: "",
    endDate: "",
    sendNotification: true,
  });

  const handleCreatePromo = (e: React.FormEvent) => {
    e.preventDefault();
    const promo = {
      id: promos.length + 1,
      product: newPromo.product,
      discount: parseInt(newPromo.discount),
      startDate: newPromo.startDate,
      endDate: newPromo.endDate,
      status: "Aktif",
      views: 0,
      sales: 0,
    };
    setPromos([...promos, promo]);
    setShowCreateModal(false);
    setNewPromo({ product: "", discount: "", startDate: "", endDate: "", sendNotification: true });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="umkm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/umkm"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 mb-6 transition"
        >
          <ArrowLeft size={20} />
          <span>Kembali ke Dashboard</span>
        </Link>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Kelola Promo & Diskon</h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition flex items-center space-x-2"
          >
            <Plus size={20} />
            <span>Buat Promo Baru</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 shadow-lg">
            <p className="text-white/80 mb-2">Promo Aktif</p>
            <p className="text-4xl font-bold">{promos.filter(p => p.status === "Aktif").length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-gray-600 mb-2">Total Views</p>
            <p className="text-4xl font-bold text-orange-500">{promos.reduce((sum, p) => sum + p.views, 0)}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-gray-600 mb-2">Total Penjualan</p>
            <p className="text-4xl font-bold text-green-500">{promos.reduce((sum, p) => sum + p.sales, 0)}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Produk</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Diskon</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Periode</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Performa</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {promos.map((promo) => (
                  <tr key={promo.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <p className="font-medium">{promo.product}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Percent size={16} className="text-orange-500" />
                        <span className="font-bold text-orange-500">{promo.discount}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p>{new Date(promo.startDate).toLocaleDateString("id-ID")}</p>
                        <p className="text-gray-500">s/d {new Date(promo.endDate).toLocaleDateString("id-ID")}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        promo.status === "Aktif"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        {promo.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="flex items-center space-x-1 mb-1">
                          <Eye size={14} className="text-gray-400" />
                          <span>{promo.views} views</span>
                        </div>
                        <div className="text-green-600 font-medium">{promo.sales} terjual</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-orange-500 hover:text-orange-600 font-medium">
                        Detail →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold">Buat Promo Baru</h2>
                <p className="text-gray-600 mt-1">Tarik pelanggan dengan promo menarik!</p>
              </div>

              <form onSubmit={handleCreatePromo} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pilih Produk
                  </label>
                  <select
                    value={newPromo.product}
                    onChange={(e) => setNewPromo({ ...newPromo, product: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  >
                    <option value="">-- Pilih Produk --</option>
                    <option>Nasi Goreng Spesial</option>
                    <option>Kopi Susu Gula Aren</option>
                    <option>Mie Ayam Bakso</option>
                    <option>Es Teh Manis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center space-x-2">
                      <Percent size={16} />
                      <span>Persentase Diskon</span>
                    </div>
                  </label>
                  <input
                    type="number"
                    value={newPromo.discount}
                    onChange={(e) => setNewPromo({ ...newPromo, discount: e.target.value })}
                    placeholder="Contoh: 25"
                    min="1"
                    max="99"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>Tanggal Mulai</span>
                      </div>
                    </label>
                    <input
                      type="date"
                      value={newPromo.startDate}
                      onChange={(e) => setNewPromo({ ...newPromo, startDate: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>Tanggal Berakhir</span>
                      </div>
                    </label>
                    <input
                      type="date"
                      value={newPromo.endDate}
                      onChange={(e) => setNewPromo({ ...newPromo, endDate: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newPromo.sendNotification}
                      onChange={(e) => setNewPromo({ ...newPromo, sendNotification: e.target.checked })}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Bell size={18} className="text-orange-500" />
                        <span className="font-medium">Kirim Notifikasi ke Pelanggan</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Pelanggan yang mengikuti toko Anda akan mendapat notifikasi promo baru ini
                      </p>
                    </div>
                  </label>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition"
                  >
                    Buat Promo
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
