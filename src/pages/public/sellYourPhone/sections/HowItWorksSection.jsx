import React from "react";

const HowItWorksSection = () => {
	return (
		<div className="flex flex-col items-center self-stretch max-w-[1528px] mx-auto gap-10">
			<span className="text-black text-3xl sm:text-4xl font-bold" >
				{"How it works?"}
			</span>
			<div className="self-stretch">
				<div className="flex items-start self-stretch mb-[40px] mx-[85px]">
					<button className="flex flex-col shrink-0 items-start bg-[#7DCDDD] text-left p-7 mr-[47px] rounded-[20px] border-0 cursor-pointer" 
						style={{
							boxShadow: "0px 1.8518518209457397px 3px #72EAFF03"
						}}
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/0dojnwzf_expires_30_days.png"} 
							className="w-5 h-5 object-fill"
						/>
					</button>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/cv8b505j_expires_30_days.png"} 
						className="flex-1 h-[11px] mt-[36px] mr-[72px] object-fill"
					/>
					<button className="flex flex-col shrink-0 items-start bg-[#4DDFFD] text-left p-7 mr-[55px] rounded-[20px] border-0 cursor-pointer" 
						style={{
							boxShadow: "0px 1.8518518209457397px 3px #4DDFFD03"
						}}
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/69z615nr_expires_30_days.png"} 
							className="w-5 h-5 object-fill"
						/>
					</button>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/ukps2g9e_expires_30_days.png"} 
						className="flex-1 h-[11px] mt-[36px] mr-16 object-fill"
					/>
					<button className="flex flex-col shrink-0 items-start bg-[#2E395B] text-left p-7 mr-[55px] rounded-[20px] border-0 cursor-pointer" 
						style={{
							boxShadow: "0px 1.8518518209457397px 3px #4F467403"
						}}
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/coyv8tf9_expires_30_days.png"} 
							className="w-5 h-5 object-fill"
						/>
					</button>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/go5sbm4o_expires_30_days.png"} 
						className="flex-1 h-[11px] mt-[40px] mr-[74px] object-fill"
					/>
					<button className="flex flex-col shrink-0 items-start bg-[#0CA161] text-left p-7 rounded-[20px] border-0 cursor-pointer" 
						style={{
							boxShadow: "0px 1.8518518209457397px 3px #0CA26103"
						}}
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MkyIKCPWw5/u27oipt3_expires_30_days.png"} 
							className="w-5 h-5 object-fill"
						/>
					</button>
				</div>
				<div className="flex justify-between items-center self-stretch mb-3 ml-[66px] mr-[89px]">
					<span className="text-black text-base lg:text-lg font-bold" >
						{"Get A Quote"}
					</span>
					<span className="text-black text-base lg:text-lg font-bold" >
						{"Send Your Device"}
					</span>
					<span className="text-black text-base lg:text-lg font-bold" >
						{"Device Inspection"}
					</span>
					<span className="text-black text-base lg:text-lg font-bold" >
						{"Get Paid"}
					</span>
				</div>
				<div className="flex justify-between items-start self-stretch">
					<span className="text-[#333333] text-sm lg:text-base text-center w-[230px]" >
						{"Select your device model and condition to receive an instant quote online."}
					</span>
					<span className="text-[#333333] text-sm lg:text-base text-center w-[230px]" >
						{"Use our free postage service to send your phone safely to our facility."}
					</span>
					<span className="text-[#333333] text-sm lg:text-base text-center w-[210px]" >
						{"Our experts carefully inspect your device and verify its condition."}
					</span>
					<span className="text-[#333333] text-sm lg:text-base text-center w-[230px]" >
						{"Receive payment within 24–48 hours after your device is inspected."}
					</span>
				</div>
			</div>
		</div>
	);
};

export default HowItWorksSection;
