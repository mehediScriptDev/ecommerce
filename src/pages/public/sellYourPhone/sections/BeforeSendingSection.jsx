import React from "react";

const BeforeSendingSection = () => {
	return (
		<div className="flex flex-col items-center bg-white py-10 px-[47px] rounded-2xl" 
			style={{
				boxShadow: "0px 1px 2px #0000001A"
			}}>
			<div className="flex flex-col items-start px-[120px] mb-6">
				<span className="text-[#2E395B] text-3xl sm:text-4xl font-bold">
					{"Before Sending Your Device"}
				</span>
			</div>
			<div className="flex flex-col items-center mb-6">
				{[
					"Back up all your personal data and photos",
					"Sign out of all accounts (iCloud, Google, etc.)",
					"Perform a factory reset to erase all data",
					"Remove SIM card and memory card if applicable",
					"Clean your device and include all original accessories",
					"Package securely to prevent damage during shipping",
				].map((item, idx) => (
					<div key={idx} className="flex items-center mb-3 self-start">
						<div className="bg-[#3DB4CC] w-2 h-2 mr-3 rounded-full shrink-0" />
						<span className="text-[#2E395B] text-sm lg:text-base">{item}</span>
					</div>
				))}
			</div>
			<div className="flex flex-col items-start pr-[30px]">
				<span className="text-[#2E395B] text-xs lg:text-sm max-w-[700px]">
					{"Please note: Zephyr Technology is not responsible for any data left on devices. Ensure all personal information is removed before sending."}
				</span>
			</div>
		</div>
	);
};

export default BeforeSendingSection;
