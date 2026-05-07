import { FiHeart } from "react-icons/fi";

const Card = ({ id, title, tag, variant, price, currency, images }) => {
  let textcl = " ";
  switch(tag){
    case "BEST SELLER":
      case "NEW ARRIVAL":
      textcl = "text-[#006878]";
      break;
    default:  textcl = "text-[#914D09]";
     
  }
  return (
    <div className="relative card card-sm w-full bg-white sm:max-w-96 border border-[#F1F5F9]">
      <figure className="hover-gallery h-53">
        {images && images.map((img, index) => (
          <img key={index} src={img} className="h-auto object-contain transition-transform duration-500" />
        ))}
      </figure>
      <span className="absolute top-0 left-3 text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-bl-lg rounded-br-lg bg-custom">Top-Rated</span>
      <div className="card-body">
        <p className={`text-xs ${textcl}`}>{tag}</p>
        <h2 className="text-sm md:text-base font-semibold text-gray-900 leading-tight">{title}</h2>
        <p className="text-xs lg:text-sm text-[#767E97] -mt-1 line-clamp-1">
          {variant}
        </p>
        <div className="flex items-center justify-between mt-1 lg:mt-2">
            <h3 className="text-lg md:text-xl font-bold text-[#1C2337] ">
          £{price}
        </h3>
        <button className="text-xl cursor-pointer">
          <FiHeart className="hover:scale-105" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
