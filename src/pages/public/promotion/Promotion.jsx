import promotion from '../../../assets/banner/promotions.jpg';
import Container from '../../../layout/Container';

const Promotion = () => {
    return (
        <div className='py-10 md:pb-16'>
          <Container>
            <div className='relative h-[300px] sm:h-[380px] lg:h-[380px] overflow-hidden rounded-xl'>
              <img
                src={promotion}
                alt="Promotion"
                className="w-full h-full object-cover object-top"
              />
              <div className='absolute inset-0 bg-black/5' />
              <div className='absolute right-6 sm:right-10 lg:right-25 2xl:right-70 top-1/2 w-full max-w-lg -translate-y-1/2 text-white'>
                <h2 className='text-3xl uppercase sm:text-4xl lg:text-5xl xl:text-[55px] font-extrabold tracking-wide drop-shadow'>
                  Sell Your Phone
                  <span className='block mt-2'>In Minutes</span>
                </h2>
                <p className='mt-4 text-sm sm:text-base lg:text-lg font-semibold text-white/90 leading-relaxed'>
                  Tired of your old device? Trading it in has never been easier.
                  We offer the best market rates and a seamless process.
                </p>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center rounded-lg bg-[#4bb9cf] px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition-all"
                >
                  Sell Your Phone
                </button>
              </div>
            </div>
          </Container>
        </div>
    );
};

export default Promotion;