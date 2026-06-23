import { ArrowLeft, Plus, Edit, Trash2, CheckCircle, X, Tag, Store } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ManageSystem() {
  const [activeTab, setActiveTab] = useState<"categories" | "promos" | "validation">("categories");

  const [categories, setCategories] = useState([
    { id: 1, name: "Makanan", count: 456, active: true },
    { id: 2, name: "Minuman", count: 234, active: true },
    { id: 3, name: "Fashion", count: 189, active: true },
    { id: 4, name: "Kerajinan", count: 145, active: true },
    { id: 5, name: "Elektronik", count: 98, active: true },
    { id: 6, name: "Kecantikan", count: 167, active: true },
  ]);

  const [promoData, setPromoData] = useState([
    { id: 1, title: "Flash Sale Makanan", discount: "30%", startDate: "2026-06-01", endDate: "2026-06-30", active: true },
    { id: 2, title: "Promo Minuman Segar", discount: "25%", startDate: "2026-06-05", endDate: "2026-06-25", active: true },
    { id: 3, title: "Diskon Fashion Week", discount: "40%", startDate: "2026-05-20", endDate: "2026-06-10", active: false },
  ]);

  const [umkmValidation, setUmkmValidation] = useState([
    { id: 1, name: "Kedai Kopi Nusantara", owner: "Ahmad Rizki", category: "Minuman", docs: "✓ Lengkap", date: "2026-06-08" },
    { id: 2, name: "Batik Heritage", owner: "Siti Aminah", category: "Fashion", docs: "✓ Lengkap", date: "2026-06-07" },
    { id: 3, name: "Kerajinan Bambu", owner: "Budi Santoso", category: "Kerajinan", docs: "⚠ Kurang KTP", date: "2026-06-07" },
    { id: 4, name: "Warung Digital", owner: "Dewi Lestari", category: "Makanan", docs: "✓ Lengkap", date: "2026-06-06" },
  ]);

  const handleValidateUmkm = (id: number, action: "approve" | "reject") => {
    if (action === "approve") {
      alert("UMKM berhasil divalidasi!");
    } else {
      alert("UMKM ditolak!");
    }
    setUmkmValidation(umkmValidation.filter(u => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/admin"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 mb-6 transition"
        >
          <ArrowLeft size={20} />
          <span>Kembali ke Dashboard</span>
        </Link>

        <h1 className="text-3xl font-bold mb-8">Kelola Sistem</h1>

        <div className="bg-white rounded-xl shadow-md mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("categories")}
              className={`flex-1 px-6 py-4 font-semibold transition ${
                activeTab === "categories"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Tag size={20} />
                <span>Kategori Produk</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("promos")}
              className={`flex-1 px-6 py-4 font-semibold transition ${
                activeTab === "promos"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Tag size={20} />
                <span>Data Promo</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("validation")}
              className={`flex-1 px-6 py-4 font-semibold transition relative ${
                activeTab === "validation"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Store size={20} />
                <span>Validasi UMKM</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {umkmValidation.length}
                </span>
              </div>
            </button>
          </div>
        </div>

        {activeTab === "categories" && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Kategori Produk</h2>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition flex items-center space-x-2">
                <Plus size={18} />
                <span>Tambah Kategori</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nama Kategori</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Jumlah Produk</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {categories.map((category) => (
                    <tr key={category.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-medium">{category.name}</td>
                      <td className="px-6 py-4">
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                          {category.count} produk
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          category.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                        }`}>
                          {category.active ? "Aktif" : "Nonaktif"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition">
                            <Edit size={18} />
                          </button>
                          <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "promos" && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Data Promo Platform</h2>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition flex items-center space-x-2">
                <Plus size={18} />
                <span>Tambah Promo</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Judul Promo</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Diskon</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Periode</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {promoData.map((promo) => (
                    <tr key={promo.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-medium">{promo.title}</td>
                      <td className="px-6 py-4">
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                          {promo.discount}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <p>{new Date(promo.startDate).toLocaleDateString("id-ID")}</p>
                        <p className="text-gray-500">s/d {new Date(promo.endDate).toLocaleDateString("id-ID")}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          promo.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                        }`}>
                          {promo.active ? "Aktif" : "Berakhir"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition">
                            <Edit size={18} />
                          </button>
                          <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "validation" && (
          <div className="space-y-4">
            {umkmValidation.map((umkm) => (
              <div key={umkm.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                        {umkm.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{umkm.name}</h3>
                        <p className="text-sm text-gray-600">Pemilik: {umkm.owner}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Kategori</p>
                        <p className="font-medium">{umkm.category}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Dokumen</p>
                        <p className={`font-medium ${umkm.docs.includes("✓") ? "text-green-600" : "text-yellow-600"}`}>
                          {umkm.docs}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Tanggal Daftar</p>
                        <p className="font-medium">{new Date(umkm.date).toLocaleDateString("id-ID")}</p>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleValidateUmkm(umkm.id, "approve")}
                        className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center space-x-2"
                      >
                        <CheckCircle size={18} />
                        <span>Setujui UMKM</span>
                      </button>
                      <button
                        onClick={() => handleValidateUmkm(umkm.id, "reject")}
                        className="flex-1 border-2 border-red-500 text-red-500 py-3 rounded-lg hover:bg-red-50 transition flex items-center justify-center space-x-2"
                      >
                        <X size={18} />
                        <span>Tolak</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {umkmValidation.length === 0 && (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <Store size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Tidak ada UMKM menunggu validasi</h3>
                <p className="text-gray-500">Semua pendaftaran UMKM telah diproses</p>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
