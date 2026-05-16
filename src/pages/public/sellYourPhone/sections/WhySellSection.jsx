import React from "react";

const WhySellSection = () => {
	return (
		<div className="flex flex-col items-center self-stretch bg-white pt-14 pb-20 px-[168px]">
			<div className="flex flex-col items-center gap-10">
				<div className="flex flex-col items-start">
					<span className="text-[#2E395B] text-3xl sm:text-4xl font-bold" >
						{"Why Sell To Zephyr Technology?"}
					</span>
				</div>
				<div className="flex flex-col items-start gap-4">
					<div className="flex items-center mr-[23px] gap-[23px]">
						<div className="flex shrink-0 items-center">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/ua0ck55h_expires_30_days.png"} 
								className="w-5 h-5 mr-3 object-fill"
							/>
							<div className="flex flex-col shrink-0 items-center mr-[45px]">
								<span className="text-[#2E395B] text-sm lg:text-base" >
									{"Fast, secure UK payments within 24–48 hours"}
								</span>
							</div>
						</div>
						<div className="flex shrink-0 items-center">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/2bkfkigx_expires_30_days.png"} 
								className="w-5 h-5 mr-3 object-fill"
							/>
							<div className="flex flex-col shrink-0 items-center mr-[67px]">
								<span className="text-[#2E395B] text-sm lg:text-base" >
									{"Trusted and established UK mobile retailer"}
								</span>
							</div>
						</div>
					</div>
					<div className="flex items-center">
						<div className="flex shrink-0 items-center mr-[104px] gap-3">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/h4tv4rl8_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<div className="flex flex-col shrink-0 items-center">
								<span className="text-[#2E395B] text-sm lg:text-base" >
									{"Free returns if you decline a revised offer"}
								</span>
							</div>
						</div>
						<div className="flex shrink-0 items-center gap-3">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/p7d5ttyx_expires_30_days.png"} 
								className="w-5 h-5 object-fill"
							/>
							<div className="flex flex-col shrink-0 items-center">
								<span className="text-[#2E395B] text-sm lg:text-base" >
									{"Fair grading process with transparent communication"}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-start px-[55px]">
					<span className="text-[#6A7282] text-xs lg:text-sm" >
						{"We aim to make the trade-in process simple, fair, and reliable from start to finish."}
					</span>
				</div>
			</div>
		</div>
	);
};

export default WhySellSection;
