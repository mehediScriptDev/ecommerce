import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "../../../layout/Container";
import { Link } from "react-router";

const SellWorth = () => {
  const [selectedCategory, setSelectedCategory] = useState("iPhone");

  const categories = [
    {
      name: "iPhone",
      icon: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04047b4a-8c11-4747-bb7c-5086eb5b27d0",
    },
    {
      name: "iPad",
      icon: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e055d17-1b68-4dcd-8ed7-e7f00f9774d6",
    },
    {
      name: "Samsung",
      icon: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ca94c4d-ce70-45cf-876f-631ffb0ee1c8",
    },
  ];

  return (
    <div className="bg-[#FBFDFF] min-h-screen py-10 lg:py-16">
      <Container>
        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto pb-4 sm:pb-0">
          <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap">
            {/* Step 1 */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#006878] text-white flex items-center justify-center text-sm font-bold">
                1
              </div>
              <span className="text-[#171C1E] text-sm font-semibold">
                Device Details
              </span>
            </div>
            <div className="w-8 sm:w-12 h-px bg-[#BDC9CC] mx-1 sm:mx-2"></div>
            {/* Step 2 */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#DFE3E5] text-[#3D494C] flex items-center justify-center text-sm font-bold">
                2
              </div>
              <span className="text-[#8D9A9D] text-sm">Condition</span>
            </div>
            <div className="w-8 sm:w-12 h-px bg-[#BDC9CC] mx-1 sm:mx-2"></div>
            {/* Step 3 */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#DFE3E5] text-[#3D494C] flex items-center justify-center text-sm font-bold">
                3
              </div>
              <span className="text-[#8D9A9D] text-sm">Summary</span>
            </div>
          </div>
        </div>

        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-[#171C1E] mb-6 leading-tight">
            How much is your device worth?
          </h1>
          <p className="text-[#3D494C] text-base md:text-lg">
            Select your category to begin. We offer the UK's most competitive
            rates for premium consumer electronics.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex flex-col items-center justify-center py-8 rounded-xl border-2 transition-all duration-300 ${
                selectedCategory === cat.name
                  ? "border-custom bg-[#F0F4F6] shadow-sm"
                  : "border-transparent bg-[#F0F4F6] hover:border-gray-300"
              }`}
            >
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <img
                  src={cat.icon}
                  alt={cat.name}
                  className="h-6 object-contain"
                />
              </div>
              <span className="text-[#2E395B] text-xl font-medium">
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* Model Selection */}
        <div className="max-w-2xl mx-auto mb-10">
          <label className="block text-xs font-bold text-[#3D494C] mb-3 uppercase tracking-wide">
            SELECT YOUR MODEL
          </label>
          <div className="relative">
            <input
              type="text"
              readOnly
              placeholder="Start typing or select from list..."
              className="w-full bg-white border border-[#BDC9CC] rounded-lg py-4 px-6 text-[#171C1E] text-base outline-none cursor-pointer hover:border-custom transition-colors"
            />
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Reveal Price Button */}
        <div className="flex flex-col items-center mb-20">
          <Link
            to={"/confirm-sale"}
            className="w-full sm:w-auto bg-custom text-white text-lg md:text-xl font-semibold py-4 px-12 md:px-32 rounded-lg hover:brightness-110 transition-all duration-300 mb-4 shadow-md cursor-pointer"
          >
            Reveal Price
          </Link>
          <div className="flex items-center gap-2">
            <img
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b29d6407-9548-4b2b-9525-128bce1da365"
              alt="Guarantee"
              className="w-3 object-contain"
            />
            <span className="text-[#3D494C] text-sm">
              Highest price guarantee within the UK
            </span>
          </div>
        </div>

        {/* Banner */}
        <div className="relative w-full rounded-2xl overflow-hidden min-h-75 md:min-h-100 flex items-center shadow-lg">
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ceb5a280-2880-4976-b709-8da7578e1a6f"
            alt="Sustainable Tech"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#171C1E]/60 to-transparent"></div>

          <div className="relative z-10 p-8 md:p-16 max-w-xl">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Sustainable Tech Cycle
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              Every device recycled with us helps reduce global e-waste while
              putting value back in your pocket.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SellWorth;
