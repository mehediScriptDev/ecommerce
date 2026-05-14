import Container from '../../../../layout/Container';
import heroImage from '../../../../assets/aboutUs.webp';
import bgCircle from "../../../../assets/circle.png"
import { usePageTransition } from '../../../../components/transitions';

const HeroSection = () => {
    const { transitionTo } = usePageTransition();

    return (
        <section className='relative overflow-hidden bg-linear-to-r from-[#ECFEFF] via-[#F3FBFC] to-[#FFFFFF]'>
            <Container>
                <div className='grid items-center gap-8 py-16 lg:grid-cols-2'>
                    <div className='pr-6 max-w-2xl'>
                        <p className='text-xs font-semibold uppercase tracking-widest text-custom mb-4'>
                            UK Mobile &amp; Electronics Retailer
                        </p>

                        <h1 className='relative z-10 text-4xl font-extrabold leading-tight text-[#243048] sm:text-5xl lg:text-6xl'>
                            About <span className='relative inline-block'>Zephyr
                                <span className='absolute left-0 bottom-0 z-0 block w-full -translate-y-1'>
                                    <svg viewBox="0 0 200 10" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className='w-full h-3'>
                                        <path d="M0 7 C30 0, 50 10, 100 6 C150 2, 180 8, 200 6" fill="none" stroke="#2BB4C9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
                                    </svg>
                                </span>
                            </span>
                            <br />
                            Technology
                        </h1>

                        <p className='mt-6 text-lg text-[#536171] max-w-xl'>
                            Pioneering a cleaner, more transparent way to buy and sell premium consumer electronics across the United Kingdom.
                        </p>

                        <button
                            type='button'
                            onClick={() => transitionTo('/products')}
                            className='mt-6 inline-flex items-center rounded-md bg-custom px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 cursor-pointer'
                        >
                            Shop Now
                        </button>
                    </div>

                    <div className='relative flex items-center justify-end'>
                       
                        <div className='absolute right-6 top-20 h-64 w-44 rotate-3 rounded-md bg-[#1EB5D0]/60 blur-xl' />
                        <img
                            src={heroImage}
                            alt='phones'
                            className='relative z-10 w-105 max-w-[45vw] object-contain'
                        />
                    </div>
                </div>
            </Container>

            <div className='pointer-events-none absolute left-0 right-0 bottom-0 h-36 bg-linear-to-t from-white/90 to-transparent' />
        </section>
    );
};

export default HeroSection;
