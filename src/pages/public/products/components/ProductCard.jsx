import { useState } from "react";
import Stars from "./Stars";

export default function ProductCard({ product }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden
      transition-all duration-300 group cursor-pointer"
    >
      {/* Image */}
      <div className="relative bg-[#F7F9FB] flex items-center justify-center py-6 px-4 h-52">
        <span
          className={`absolute top-0 left-3 text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-bl-lg rounded-br-lg ${product.badgeColor}`}
        >
          {product.badge}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setWished((v) => !v);
          }}
          className="absolute top-3 right-3 text-gray-300 hover:text-red-400 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill={wished ? "#f87171" : "none"}
            stroke={wished ? "#f87171" : "currentColor"}
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <img
          src={product.img}
          alt={product.name}
          className="h-36 object-contain transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/200x200/f3f4f6/94a3b8?text=Phone";
          }}
        />
      </div>

      {/* Info */}
      <div className="px-4 pt-3 pb-4">
        <div className="flex items-center gap-1.5 mb-1">
          <Stars rating={product.rating} />
          <span className="text-xs md:text-sm text-gray-400">({product.reviews})</span>
        </div>
        <h3 className="text-sm md:text-base font-semibold text-gray-900 leading-tight">
          {product.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-400 mt-0.5">
          {product.storage} · {product.color}
        </p>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-lg md:text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          {product.oldPrice && (
            <span className="text-xs md:text-sm text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>
        <button
          onClick={handleAdd}
          className={`mt-3 w-full py-2 rounded-lg text-sm cursor-pointer font-medium transition-all duration-300
            ${
              added
                ? "bg-green-500 text-white"
                : "bg-custom active:scale-95 text-white"
            }`}
        >
          {added ? "✓ Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}