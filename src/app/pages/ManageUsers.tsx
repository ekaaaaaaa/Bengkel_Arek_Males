import { ArrowLeft, Search, Filter, Edit, Ban, CheckCircle, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: "Rina Kusuma", email: "rina@email.com", type: "Pelanggan", status: "Aktif", joinDate: "2026-01-15", transactions: 45 },
    { id: 2, name: "Budi Santoso", email: "budi@email.com", type: "UMKM", status: "Aktif", joinDate: "2026-02-20", transactions: 156 },
    { id: 3, name: "Siti Nurhaliza", email: "siti@email.com", type: "Pelanggan", status: "Aktif", joinDate: "2026-03-10", transactions: 23 },
    { id: 4, name: "Ahmad Rizki", email: "ahmad@email.com", type: "UMKM", status: "Nonaktif", joinDate: "2026-01-05", transactions: 89 },
    { id: 5, name: "Dewi Lestari", email: "dewi@email.com", type: "Pelanggan", status: "Aktif", joinDate: "2026-04-12", transactions: 67 },
  ]);

  const [filterType, setFilterType] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(user => {
    const matchesType = filterType === "Semua" || user.type === filterType;
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const toggleUserStatus = (id: number) => {
    setUsers(users.map(user =>
      user.id === id
        ? { ...user, status: user.status === "Aktif" ? "Nonaktif" : "Aktif" }
        : user
    ));
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

        <h1 className="text-3xl font-bold mb-8">Kelola Pengguna</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600 text-sm mb-2">Total Pengguna</p>
            <p className="text-3xl font-bold text-orange-500">{users.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600 text-sm mb-2">Pelanggan</p>
            <p className="text-3xl font-bold text-blue-500">{users.filter(u => u.type === "Pelanggan").length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600 text-sm mb-2">UMKM</p>
            <p className="text-3xl font-bold text-green-500">{users.filter(u => u.type === "UMKM").length}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari pengguna..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex space-x-2">
              {["Semua", "Pelanggan", "UMKM"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-3 rounded-lg transition ${
                    filterType === type
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Pengguna</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tipe</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Bergabung</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Transaksi</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.type === "UMKM"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {user.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          user.status === "Aktif" ? "bg-green-500" : "bg-red-500"
                        }`}></div>
                        <span className={user.status === "Aktif" ? "text-green-600" : "text-red-600"}>
                          {user.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(user.joinDate).toLocaleDateString("id-ID")}
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-orange-500">{user.transactions}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition">
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => toggleUserStatus(user.id)}
                          className={`p-2 rounded-lg transition ${
                            user.status === "Aktif"
                              ? "text-red-500 hover:bg-red-50"
                              : "text-green-500 hover:bg-green-50"
                          }`}
                        >
                          {user.status === "Aktif" ? <Ban size={18} /> : <CheckCircle size={18} />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredUsers.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center mt-6">
            <User size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Tidak ada pengguna ditemukan</h3>
            <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
