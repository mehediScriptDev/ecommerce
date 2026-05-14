import Container from '../../../../layout/Container';
import { usePageTransition } from '../../../../components/transitions';

const CommunityCtaSection = () => {
    const { transitionTo } = usePageTransition();

    return (
        <section className='relative overflow-hidden bg-[#253462] py-16 lg:py-20'>
            <div className='pointer-events-none absolute inset-0 opacity-30'>
                <div className='absolute -left-16 -top-10 h-64 w-64 rounded-full border border-[#7CA1D9]' />
                <div className='absolute left-24 top-20 h-56 w-56 rounded-full border border-[#7CA1D9]' />
                <div className='absolute right-20 top-8 h-72 w-72 rounded-full border border-[#7CA1D9]' />
                <div className='absolute -right-10 bottom-6 h-52 w-52 rounded-full border border-[#7CA1D9]' />
                <div className='absolute bottom-2 left-1/3 h-80 w-80 rounded-full border border-[#7CA1D9]' />
            </div>
            <Container>
                <div className='relative z-10 text-center'>
                    <h3 className='text-3xl font-bold text-white sm:text-5xl'>
                        Join The Zephyr Community
                    </h3>
                    <p className='mt-3 text-sm text-[#B9C7E6]'>
                        Follow Zephyr Technology for the latest devices, updates, and offers.
                    </p>
                    <div className='mt-7 flex flex-wrap items-center justify-center gap-3'>
                        <button
                            type='button'
                            onClick={() => transitionTo('/products')}
                            className='rounded-sm bg-custom px-6 py-2 text-xs font-medium text-white transition-all duration-300 hover:brightness-110 cursor-pointer'
                        >
                            Shop Now
                        </button>
                        <button
                            type='button'
                            onClick={() => transitionTo('/sell')}
                            className='rounded-sm bg-[#1f2d56] px-6 py-2 text-xs font-medium text-white ring-1 ring-white/30 transition-all duration-300 hover:bg-[#243462] cursor-pointer'
                        >
                            Sell Your Phone
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CommunityCtaSection;
