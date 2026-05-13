import { useState } from "react";
import Stars from "../../../../products/components/Stars";
import { usePageTransition } from "../../../../../../components/transitions";

const Card = ({ id, title, tag, badgeColor, variant, price, oldPrice, currency, rating, reviews, images }) => {
  const [wished, setWished] = useState(false);
  const { transitionTo } = usePageTransition();

  return (
    <div
      onClick={() => transitionTo("/product-details")}
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden
      transition-all duration-300 group cursor-pointer"
    >
      {/* Image */}
      <div className="relative bg-[#F7F9FB] flex items-center justify-center py-6 sm:px-4 h-52">
        <span
          className={`absolute top-0 left-3 text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-bl-lg rounded-br-lg ${badgeColor}`}
        >
          {tag}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setWished((v) => !v);
          }}
          className="absolute top-3 right-3 z-10 text-gray-300 hover:text-red-400 transition-colors"
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

        <figure className="hover-gallery">
          {images && images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="h-52 object-contain transition-transform duration-500"
            />
          ))}
        </figure>
      </div>

      {/* Info */}
      <div className="px-4 pt-3 pb-4">
        <div className="flex items-center gap-1.5 mb-1">
          <Stars rating={rating} />
          <span className="text-xs md:text-sm text-gray-400">({reviews})</span>
        </div>
        <h3 className="text-sm md:text-base font-semibold text-gray-900 leading-tight">
          {title}
        </h3>
        <p className="text-xs lg:text-sm text-[#767E97] mt-0.5 line-clamp-1">
          {variant}
        </p>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-lg md:text-xl font-bold text-[#1C2337]">
            £{price}
          </span>
          {oldPrice && (
            <span className="text-xs md:text-sm text-gray-400 line-through">
              £{oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
