import Container from '../../../../layout/Container';

const steps = [
    {
        title: 'Contact Us',
        description: 'Reach out and tell us your needs or get a quote',
    },
    {
        title: 'Get a Quote',
        description: 'We provide detailed pricing tailored to your requirements',
    },
    {
        title: 'Confirm Order',
        description: 'Review and approve your customized solution',
    },
    {
        title: 'Delivery',
        description: 'Fast delivery with professional setup',
    },
];

const HowItWorksSection = () => {
    return (
        <section className='bg-linear-to-b from-[#F9FAFB] to-[#FFFFFF] py-14 lg:py-20'>
            <Container>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-[#0A0A0A] sm:text-4xl'>
                        How It Works
                    </h2>
                    <p className='mt-3 text-base text-[#4A5565]'>
                        Simple process, powerful results
                    </p>
                </div>

                <div className='mx-auto mt-10 max-w-5xl space-y-4'>
                    {steps.map(({ title, description }, idx) => (
                        <div
                            key={title}
                            className='flex items-start gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.1)]'
                        >
                            <span className='inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-linear-to-b from-[#00B8DB] to-[#155DFC] text-2xl font-bold text-white'>
                                {idx + 1}
                            </span>
                            <div>
                                <h3 className='text-xl font-bold text-[#0A0A0A]'>
                                    {title}
                                </h3>
                                <p className='mt-1 text-base text-[#4A5565]'>
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default HowItWorksSection;
