import React from "react";

const CTASection = () => {
	return (
		<div className="flex flex-col items-center self-stretch bg-[#2E395B] py-16 px-[168px] gap-5">
			<div className="flex flex-col items-center">
				<span className="text-white text-3xl sm:text-4xl font-bold">
					{"Ready To Sell Your Device?"}
				</span>
			</div>
			<div className="flex flex-col items-center">
				<span className="text-white text-sm lg:text-base">
					{"Get started with a fast online quote today."}
				</span>
			</div>
			<button className="flex items-center bg-[#3DB4CC] text-left py-3 px-7 gap-2 rounded-lg border-0 cursor-pointer hover:brightness-110 transition-all duration-300"
				onClick={()=>alert("Pressed!")}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/9idl49vl_expires_30_days.png"} 
					className="w-5 h-5 rounded-lg object-fill"
				/>
				<span className="text-white text-sm lg:text-base font-bold">
					{"Sell Your Phone Now"}
				</span>
			</button>
		</div>
	);
};

export default CTASection;
