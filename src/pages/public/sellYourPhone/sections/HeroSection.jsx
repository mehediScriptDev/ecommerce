import React from "react";
import sellBg from "../../../../assets/sellBg.webp"

const HeroSection = () => {
	return (
		<div className="flex flex-col items-center self-stretch bg-cover bg-center pb-[120px]"
			style={{
				backgroundImage: `url(${sellBg})`,
			}}
			>
			<div className="flex justify-between items-start self-stretch mb-[50px]">
				<div className="w-[87px] h-[200px]">
				</div>
				<div className="flex flex-col shrink-0 items-center mt-[70px] gap-5">
					<div className="flex flex-col items-center">
						<span className="text-[#2E395B] text-4xl sm:text-5xl lg:text-6xl font-bold text-center" >
							{"Sell Your Phone With Confidence"}
						</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-[#2E395B] text-base lg:text-lg text-center max-w-[700px]" >
							{"Get a fast quote, fair grading, and payment within 24–48 hours after delivery with Zephyr Technology."}
						</span>
					</div>
				</div>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/w466u3qx_expires_30_days.png"} 
					className="w-[87px] h-[200px] object-fill"
				/>
			</div>
			<div className="flex items-center self-stretch max-w-[1460px] mb-[40px] mx-auto">
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/1kr3fmz8_expires_30_days.png"} 
					className="w-5 h-5 mr-[12px] object-fill"
				/>
				<div className="flex flex-col shrink-0 items-start pr-[20px] mr-[60px]">
					<span className="text-[#2E395B] text-sm lg:text-base" >
						{"Fast UK Payments"}
					</span>
				</div>
				<div className="flex flex-1 justify-center items-center py-[10px] mr-[30px] gap-[12px]">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/67yq4722_expires_30_days.png"} 
						className="w-5 h-5 object-fill"
					/>
					<span className="text-[#2E395B] text-sm lg:text-base" >
						{"Competitive Market Pricing"}
					</span>
				</div>
				<div className="flex flex-1 justify-center items-center py-[10px] mr-[30px] gap-[12px]">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/ykupqma0_expires_30_days.png"} 
						className="w-5 h-5 object-fill"
					/>
					<span className="text-[#2E395B] text-sm lg:text-base" >
						{"Competitive Market Pricing"}
					</span>
				</div>
				<div className="flex flex-1 justify-center items-center py-[10px] mr-[40px] gap-[12px]">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/30l3zg77_expires_30_days.png"} 
						className="w-5 h-5 object-fill"
					/>
					<span className="text-[#2E395B] text-sm lg:text-base" >
						{"Free Returns On Revised Offers"}
					</span>
				</div>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/jiiu5nsr_expires_30_days.png"} 
					className="w-5 h-5 mr-[12px] object-fill"
				/>
				<span className="text-[#2E395B] text-sm lg:text-base" >
					{"Trusted UK Mobile Retailer"}
				</span>
			</div>
			<button className="flex items-center bg-[#3DB4CC] text-left py-3.5 px-8 gap-2.5 rounded-lg border-0 cursor-pointer hover:brightness-110 transition-all duration-300"
				onClick={()=>alert("Pressed!")}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/yxxrzywi_expires_30_days.png"} 
					className="w-5 h-5 rounded-lg object-fill"
				/>
				<span className="text-white text-base font-bold" >
					{"Sell Your Phone Now"}
				</span>
			</button>
		</div>
	);
};

export default HeroSection;
