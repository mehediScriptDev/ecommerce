import newPhone from '../../../assets/category/newPhone.webp';
import usedPhone from '../../../assets/category/usedPhone.webp'
import Container from '../../../layout/Container';
import { usePageTransition } from '../../../components/transitions';

const Category = () => {
    const { transitionTo } = usePageTransition();

    return (
        <section className="py-10 lg:py-16">
            <Container>
                <div className="text-center">
                    <h2 className="title-custom">Explore Categories</h2>
                    <p className="subtitle-custom mt-1">
                        Find the perfect device that fits your budget and style.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="relative overflow-hidden rounded-xl">
                        <img
                            src={newPhone}
                            alt="New phones"
                            className="block w-full h-auto"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                            <button
                                type="button"
                                onClick={() => transitionTo('/products')}
                                className="inline-flex cursor-pointer hover:scale-105 transform transition-all duration-300 items-center rounded-lg bg-[#323F64] px-4 py-2 text-sm font-semibold text-white"
                            >
                                Browse New
                            </button>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl">
                        <img
                            src={usedPhone}
                            alt="Used phones"
                            className="block w-full h-auto"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                            <button
                                type="button"
                                onClick={() => transitionTo('/products')}
                                className="inline-flex items-center rounded-lg bg-[#323F64] px-4 py-2 text-sm font-semibold text-white cursor-pointer hover:scale-105 transform transition-all duration-300"
                            >
                                Browse Used Phones
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Category;