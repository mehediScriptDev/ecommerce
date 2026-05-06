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
    <div className="card card-sm w-full bg-white sm:max-w-96 border border-[#F1F5F9]">
      <figure className="hover-gallery">
        {images && images.map((img, index) => (
          <img key={index} src={img} className="aspect-4/3 object-cover" />
        ))}
      </figure>
      <div className="card-body">
        <p className={`text-xs ${textcl}`}>{tag}</p>
        <h2 className="card-title flex text-2xl justify-between">{title}</h2>
        <p className="text-sm md:text-base text-[#767E97] -mt-1 line-clamp-1">
          {variant}
        </p>
        <div className="flex items-center justify-between mt-1 lg:mt-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1C2337] ">
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
