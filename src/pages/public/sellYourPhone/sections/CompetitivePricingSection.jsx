import React from "react";

const CompetitivePricingSection = () => {
	return (
		<div className="flex flex-col items-center bg-white py-10 px-12 rounded-3xl" 
			style={{
				boxShadow: "0px 1px 2px #0000001A"
			}}>
			<div className="flex flex-col items-start px-48 mb-6">
				<span className="text-[#2E395B] text-3xl sm:text-4xl font-bold" >
					{"Competitive Market Pricing"}
				</span>
			</div>
			<div className="flex flex-col items-start pr-[15px] mb-6">
				<span className="text-[#2E395B] text-sm lg:text-base max-w-[700px]" >
					{"We continuously monitor the UK mobile market to ensure our prices remain fair and competitive. Our transparent valuation system means you always know exactly what your device is worth."}
				</span>
			</div>
			<div className="flex flex-col items-center pb-[5px]">
				<div className="flex flex-col items-center gap-5">
					<div className="flex items-center gap-6">
						<div className="flex shrink-0 items-center px-[100px] gap-3">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/7pfyrg5y_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<div className="flex flex-col shrink-0 items-center">
								<span className="text-[#2E395B] text-sm lg:text-base" >
									{"Fair & transparent valuations"}
								</span>
							</div>
						</div>
						<div className="flex shrink-0 items-center px-[130px] gap-3">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/yffqcdze_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<div className="flex flex-col shrink-0 items-center">
								<span className="text-[#2E395B] text-sm lg:text-base" >
									{"No hidden charges"}
								</span>
							</div>
						</div>
					</div>
					<div className="flex items-center gap-6">
						<div className="flex shrink-0 items-center px-[100px] gap-3">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/jxe6vicg_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<div className="flex flex-col shrink-0 items-start pr-[50px]">
								<span className="text-[#2E395B] text-sm lg:text-base" >
									{"Instant online quotes"}
								</span>
							</div>
						</div>
						<div className="flex shrink-0 items-center px-[130px] gap-3">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/wuu9s0sv_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<div className="flex flex-col shrink-0 items-center">
								<span className="text-[#2E395B] text-sm lg:text-base" >
									{"Quotes locked for 7 days"}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CompetitivePricingSection;
