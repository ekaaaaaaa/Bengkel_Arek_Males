import { Mail, Lock, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/customer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-white mb-6 hover:text-white/80 transition"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-3xl px-4 py-2 rounded-lg inline-block mb-4">
              DISKO
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Selamat Datang Kembali!</h2>
            <p className="text-gray-600 mt-2">Login untuk melanjutkan</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">Ingat saya</span>
              </label>
              <a href="#" className="text-sm text-orange-500 hover:text-orange-600">
                Lupa password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Belum punya akun?{" "}
              <Link to="/register" className="text-orange-500 font-semibold hover:text-orange-600">
                Daftar Sekarang
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex space-x-4">
              <button
                onClick={() => navigate("/customer")}
                className="flex-1 py-2 px-4 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition text-sm"
              >
                Demo Pelanggan
              </button>
              <button
                onClick={() => navigate("/umkm")}
                className="flex-1 py-2 px-4 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition text-sm"
              >
                Demo UMKM
              </button>
              <button
                onClick={() => navigate("/admin")}
                className="flex-1 py-2 px-4 border border-gray-500 text-gray-500 rounded-lg hover:bg-gray-50 transition text-sm"
              >
                Demo Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
