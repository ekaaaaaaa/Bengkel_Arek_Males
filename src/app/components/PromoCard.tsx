import { Tag, ShoppingCart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface PromoCardProps {
  id: number;
  name: string;
  image: string;
  originalPrice: number;
  discountPrice: number;
  discount: number;
  sold?: number;
  category?: string;
  rating?: number;
}

export default function PromoCard({
  id,
  name,
  image,
  originalPrice,
  discountPrice,
  discount,
  sold,
  category,
  rating,
}: PromoCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/menu/${id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <div className="relative">
          {image.startsWith('http') ? (
            <img src={image} alt={name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
              <div className="text-6xl">{getImageEmoji(image)}</div>
            </div>
          )}
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
            <Tag size={14} />
            <span className="font-bold text-sm">{discount}%</span>
          </div>
          {sold && (
            <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center space-x-1 shadow-md">
              <TrendingUp size={14} className="text-orange-500" />
              <span className="text-xs font-medium">{sold} Sold</span>
            </div>
          )}
        </div>

        <div className="p-4">
          {category && (
            <p className="text-xs text-orange-600 font-medium mb-1">{category}</p>
          )}
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-orange-600 transition">
            {name}
          </h3>
          {rating && (
            <div className="flex items-center gap-1 mb-3">
              <span className="text-yellow-400">★</span>
              <span className="text-sm font-medium">{rating}</span>
            </div>
          )}

          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-xs text-gray-400 line-through">
                {formatPrice(originalPrice)}
              </div>
              <div className="text-lg font-bold text-orange-600">
                {formatPrice(discountPrice)}
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
            <ShoppingCart size={16} />
            <span className="font-medium">Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
}

function getImageEmoji(image: string): string {
  const emojiMap: Record<string, string> = {
    "food-1": "🍜",
    "coffee-1": "☕",
    "fashion-1": "👔",
    "craft-1": "👜",
    "tech-1": "🎧",
    "beauty-1": "💄",
  };
  return emojiMap[image] || "🛍️";
}
