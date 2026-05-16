import HeroSection from './sections/HeroSection';
import OurPromiseSection from './sections/OurPromiseSection';
import CompetitivePricingSection from './sections/CompetitivePricingSection';
import HowItWorksSection from './sections/HowItWorksSection';
import WhySellSection from './sections/WhySellSection';
import BeforeSendingSection from './sections/BeforeSendingSection';
import CTASection from './sections/CTASection';

const Sell = () => {
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#FBFDFF]">
				<div className="self-stretch">
					<div className="flex flex-col items-center self-stretch mb-[130px]">
						<div className="self-stretch mb-[77px]">
							<div className="self-stretch mb-[79px]">
								<div className="flex flex-col items-center self-stretch pb-[1px] mb-20">
									<div className="flex flex-col self-stretch pb-[1px] mb-20 gap-0.5">
										<HeroSection />
										<OurPromiseSection />
									</div>
									<CompetitivePricingSection />
								</div>
								<HowItWorksSection />
							</div>
							<WhySellSection />
						</div>
						<BeforeSendingSection />
					</div>
					<CTASection />
				</div>
			</div>
		</div>
	);
};

export default Sell;