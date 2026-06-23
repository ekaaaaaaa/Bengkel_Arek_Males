import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ShoppingCart, Heart, Share2, Clock, Award, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { menuItems } from "../data/mockData";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function MenuDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const item = menuItems.find((item) => item.id === parseInt(id || "0"));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Menu not found</h2>
          <Button onClick={() => navigate("/menu")}>Back to Menu</Button>
        </div>
      </div>
    );
  }

  const relatedItems = menuItems.filter(
    (i) => i.category === item.category && i.id !== item.id
  ).slice(0, 4);

  const customerReviews = [
    { name: "Sarah M.", rating: 5, date: "2 days ago", comment: "Enak banget! Porsinya besar dan rasanya mantap!" },
    { name: "Ahmad R.", rating: 5, date: "1 week ago", comment: "Selalu pesen ini, ga pernah ngecewain. Recommended!" },
    { name: "Dina L.", rating: 4, date: "2 weeks ago", comment: "Rasanya enak, tapi agak lama pesanannya datang." },
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar cartCount={0} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link to="/menu" className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-2">
            ← Back to Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-square">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-6 left-6 bg-red-500 text-white border-0 shadow-lg text-lg px-4 py-2">
                {item.discount}% OFF
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Badge className="mb-3 border-orange-300 text-orange-700 bg-orange-50">
                {item.category}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">{item.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-lg">{item.rating}</span>
                  <span className="text-gray-500">({item.reviews} reviews)</span>
                </div>
                <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">
                  <TrendingUp size={14} className="mr-1" />
                  {item.sold} sold
                </Badge>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-200">
              <div className="flex items-end gap-4 mb-3">
                <div className="text-3xl font-bold text-orange-600">
                  Rp {item.discountPrice.toLocaleString()}
                </div>
                <div className="text-xl text-gray-400 line-through mb-1">
                  Rp {item.originalPrice.toLocaleString()}
                </div>
              </div>
              <p className="text-sm text-gray-600">
                You save Rp {(item.originalPrice - item.discountPrice).toLocaleString()} ({item.discount}%)
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
              <Clock className="text-orange-600" size={24} />
              <div>
                <div className="font-semibold text-gray-900">Delivery Time</div>
                <div className="text-sm text-gray-600">30-45 minutes</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
              <Award className="text-orange-600" size={24} />
              <div>
                <div className="font-semibold text-gray-900">Stock Available</div>
                <div className="text-sm text-gray-600">{item.stock} items left</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-gray-900 mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-12 w-12 rounded-full border-2"
                  >
                    <Minus size={20} />
                  </Button>
                  <span className="text-2xl font-bold w-16 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.min(item.stock, quantity + 1))}
                    className="h-12 w-12 rounded-full border-2"
                  >
                    <Plus size={20} />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-lg py-6 rounded-full shadow-xl"
                >
                  <ShoppingCart className="mr-2" size={20} />
                  Add to Cart - Rp {(item.discountPrice * quantity).toLocaleString()}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`h-14 w-14 rounded-full ${isFavorite ? 'bg-red-50 border-red-300' : ''}`}
                >
                  <Heart
                    size={24}
                    className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                  />
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14 rounded-full">
                  <Share2 size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Customer Reviews</h2>
          <div className="space-y-4">
            {customerReviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {relatedItems.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Related Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedItems.map((relatedItem) => (
                <Link
                  key={relatedItem.id}
                  to={`/menu/${relatedItem.id}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={relatedItem.image}
                      alt={relatedItem.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 left-3 bg-red-500 text-white border-0">
                      {relatedItem.discount}% OFF
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-1">{relatedItem.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-orange-600">
                        Rp {relatedItem.discountPrice.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{relatedItem.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
