import { Award, Heart, TrendingUp, Users, Clock, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";

export default function About() {
  const achievements = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Award, label: "Awards Received", value: "15+" },
    { icon: TrendingUp, label: "Menu Variations", value: "50+" },
    { icon: Clock, label: "Years of Experience", value: "6+" },
  ];

  const team = [
    {
      name: "Chef Ahmad Rizki",
      role: "Head Chef",
      avatar: "AR",
      description: "20+ years experience in Indonesian cuisine",
    },
    {
      name: "Siti Nurhaliza",
      role: "Co-Founder & Manager",
      avatar: "SN",
      description: "Passionate about bringing authentic taste",
    },
    {
      name: "Budi Santoso",
      role: "Kitchen Manager",
      avatar: "BS",
      description: "Expert in traditional recipes",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />

      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-1.5">
            <Heart className="w-4 h-4 mr-2" />
            Our Story
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About DISKO FOOD</h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto">
            Menghadirkan cita rasa autentik Indonesia dengan sentuhan modern dan harga terjangkau
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  DISKO FOOD dimulai pada tahun 2020 dengan visi sederhana: menghadirkan makanan Indonesia berkualitas
                  tinggi dengan harga yang ramah di kantong. Kami percaya bahwa setiap orang berhak menikmati
                  hidangan lezat tanpa harus merogoh kocek terlalu dalam.
                </p>
                <p className="text-lg">
                  Berawal dari sebuah warung kecil, kini kami telah melayani lebih dari 10,000 pelanggan dengan
                  lebih dari 50 variasi menu. Setiap hidangan kami dibuat dengan bahan-bahan pilihan dan bumbu
                  rempah tradisional yang diolah dengan resep turun-temurun.
                </p>
                <p className="text-lg">
                  Komitmen kami adalah konsistensi kualitas, pelayanan terbaik, dan harga yang bersahabat. Kepuasan
                  pelanggan adalah prioritas utama kami.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1539755530862-00f623c00f52?w=600&q=80"
                  alt="Restaurant"
                  className="rounded-2xl shadow-xl object-cover aspect-square"
                />
                <img
                  src="https://images.unsplash.com/photo-1682139710677-cb02f6bc4211?w=600&q=80"
                  alt="Food preparation"
                  className="rounded-2xl shadow-xl object-cover aspect-square mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-gray-600 text-lg">Pencapaian yang kami raih bersama pelanggan setia kami</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center border border-orange-100 hover:shadow-2xl transition-all"
              >
                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <achievement.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-2">{achievement.value}</div>
                <div className="text-gray-700 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
            <p className="text-gray-600 text-lg">Nilai-nilai yang kami pegang teguh</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-2xl border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Menjadi brand kuliner Indonesia terkemuka yang dikenal dengan kualitas terbaik, harga terjangkau,
                dan pelayanan prima di seluruh nusantara.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-2xl border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Mission</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Menyajikan hidangan berkualitas dengan bahan pilihan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Memberikan harga yang ramah di kantong</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Mengutamakan kepuasan pelanggan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Melestarikan cita rasa tradisional Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">Tim profesional di balik kelezatan setiap hidangan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all border border-orange-100"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-xl">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-orange-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-12 rounded-3xl shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <MapPin className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Visit Our Location</h3>
                  <p className="text-white/90 text-lg">Jl. Raya Merdeka No. 123, Jakarta Selatan</p>
                  <p className="text-white/90">Open Daily: 10:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+6281234567890"
                  className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition text-center"
                >
                  Call: +62 812-3456-7890
                </a>
                <a
                  href="mailto:info@diskofood.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-orange-600 transition text-center"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
