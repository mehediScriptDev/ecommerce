import React from "react";

const OurPromiseSection = () => {
	return (
		<div className="self-stretch bg-white py-14 lg:py-20 px-[168px]">
			<div className="flex justify-between items-start self-stretch gap-10">
				<div className="flex flex-col shrink-0 items-center">
					<span className="text-[#3DB4CC] text-sm font-bold uppercase tracking-wide" >
						{"Our Promise"}
					</span>
				</div>
				<div className="flex flex-col shrink-0 items-center gap-5">
					<div className="flex flex-col items-center">
						<span className="text-[#2E395B] text-base lg:text-lg max-w-[900px] leading-8" >
							{"At Zephyr Technology, we believe in making the mobile trade-in process simple, transparent, and trustworthy. We've built our service around fairness, speed, and reliability, ensuring you receive competitive market value for your device without hidden fees or unexpected surprises."}
						</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-[#2E395B] text-base lg:text-lg max-w-[900px] leading-8" >
							{"Whether you're upgrading to the latest model or simply looking to trade in an old device, we're committed to providing a seamless experience from quote to payment. Your satisfaction is our priority, and we stand behind every valuation we make."}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurPromiseSection;
