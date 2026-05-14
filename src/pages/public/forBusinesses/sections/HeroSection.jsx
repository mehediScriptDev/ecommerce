import Container from '../../../../layout/Container';
import { usePageTransition } from '../../../../components/transitions';
import printer from '../../../../assets/printer.png';

const HeroSection = () => {
    const { transitionTo } = usePageTransition();

    return (
        <section className='bg-linear-to-b from-[#ECFEFF] via-[#EFF6FF] to-[#FFFFFF] py-12 lg:py-20'>
            <Container>
                <div className='grid items-center gap-10 lg:grid-cols-2'>
                    <div>
                        <span className='inline-flex rounded-full bg-[#CEFAFE] px-4 py-1.5 text-sm font-medium text-[#007595]'>
                            UK&apos;s Trusted Technology Partner
                        </span>
                        <h1 className='mt-5 text-4xl font-bold leading-tight text-[#0A0A0A] sm:text-5xl lg:text-6xl'>
                            Supplying
                            <br />
                            Technology
                            <br />
                            Solutions for
                            <br />
                            <span className='text-[#00B8DB]'>UK Businesses</span>
                        </h1>
                        <p className='mt-5 max-w-2xl text-base leading-8 text-[#4A5565] lg:text-xl'>
                            From cutting-edge hardware to comprehensive support, we
                            deliver technology solutions that power your business
                            forward.
                        </p>
                        <button
                            type='button'
                            onClick={() => transitionTo('/contact')}
                            className='mt-6 inline-flex items-center rounded-lg bg-linear-to-b from-[#00B8DB] to-custom hover:scale-105 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:brightness-110 cursor-pointer'
                        >
                            Get Started Today
                        </button>
                    </div>

                    <div className='relative mx-auto flex w-full max-w-3xl items-center justify-center rounded-[28px] lg:p-12'>
                        <img src={printer} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
