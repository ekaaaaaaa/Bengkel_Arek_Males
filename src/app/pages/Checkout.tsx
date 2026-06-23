import { ArrowLeft, Upload, CreditCard, MapPin, User, Phone } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Checkout() {
  const navigate = useNavigate();
  const [paymentProof, setPaymentProof] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "Rina Kusuma",
    phone: "081234567890",
    address: "Jl. Sudirman No. 123, Jakarta Pusat",
    notes: "",
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const orderItems = [
    { name: "Nasi Goreng Spesial", quantity: 2, price: 18000 },
    { name: "Kopi Susu Gula Aren", quantity: 1, price: 10000 },
    { name: "Tas Anyaman Rotan", quantity: 1, price: 84000 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 10000;
  const total = subtotal + deliveryFee;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPaymentProof(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentProof) {
      navigate("/orders");
    } else {
      alert("Silakan upload bukti pembayaran terlebih dahulu!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={3} userType="customer" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/cart"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 mb-6 transition"
        >
          <ArrowLeft size={20} />
          <span>Kembali ke Keranjang</span>
        </Link>

        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Data Pembeli</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>Nama Lengkap</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center space-x-2">
                      <Phone size={16} />
                      <span>Nomor Telepon</span>
                    </div>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>Alamat Pengiriman</span>
                    </div>
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Catatan (Opsional)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={2}
                    placeholder="Contoh: Jangan pakai cabe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Informasi Pembayaran</h2>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-dashed border-orange-300 rounded-xl p-6 mb-4">
                <div className="flex items-start space-x-3">
                  <CreditCard className="text-orange-500 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Transfer Bank</h3>
                    <div className="space-y-1 text-sm">
                      <p className="font-medium">Bank BCA</p>
                      <p className="font-mono text-lg">1234567890</p>
                      <p>a.n. DISKO Indonesia</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-orange-200">
                      <p className="text-xs text-gray-600">Total yang harus dibayar:</p>
                      <p className="text-2xl font-bold text-orange-500">{formatPrice(total)}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Bukti Pembayaran
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-500 transition cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                    id="payment-proof"
                  />
                  <label htmlFor="payment-proof" className="cursor-pointer">
                    <Upload className="mx-auto text-gray-400 mb-2" size={40} />
                    {paymentProof ? (
                      <p className="text-green-600 font-medium">✓ {paymentProof}</p>
                    ) : (
                      <>
                        <p className="text-gray-600 font-medium">Klik untuk upload</p>
                        <p className="text-sm text-gray-500 mt-1">PNG, JPG hingga 5MB</p>
                      </>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Ringkasan Pesanan</h2>

              <div className="space-y-3 mb-6 max-h-48 overflow-y-auto">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Biaya Pengiriman</span>
                  <span className="font-medium">{formatPrice(deliveryFee)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-2xl text-orange-500">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!paymentProof}
              >
                Konfirmasi Pembayaran
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Dengan melanjutkan, Anda menyetujui syarat dan ketentuan kami
              </p>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
