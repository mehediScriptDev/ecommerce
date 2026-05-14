import Container from '../../../../layout/Container';

const ContactFormSection = () => {
    return (
        <section className='bg-white py-14 lg:py-20'>
            <Container>
                <div className='mx-auto max-w-3xl text-center'>
                    <h2 className='text-3xl font-bold text-[#0A0A0A] sm:text-4xl'>
                        Looking for a trusted technology supplier?
                    </h2>
                    <p className='mt-4 text-xl text-[#4A5565]'>Let&apos;s talk.</p>
                </div>

                <form
                    className='mx-auto mt-10 max-w-4xl space-y-5'
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div>
                        <label className='mb-2 block text-sm text-[#0A0A0A]'>
                            Company Name
                        </label>
                        <input
                            type='text'
                            className='h-12.5 w-full rounded-[14px] border border-gray-200 bg-white px-4 text-sm text-[#0A0A0A] outline-none focus:border-[#00B8DB]'
                        />
                    </div>

                    <div>
                        <label className='mb-2 block text-sm text-[#0A0A0A]'>
                            Name
                        </label>
                        <input
                            type='text'
                            className='h-12.5 w-full rounded-[14px] border border-gray-200 bg-white px-4 text-sm text-[#0A0A0A] outline-none focus:border-[#00B8DB]'
                        />
                    </div>

                    <div>
                        <label className='mb-2 block text-sm text-[#0A0A0A]'>
                            Email
                        </label>
                        <input
                            type='email'
                            className='h-12.5 w-full rounded-[14px] border border-gray-200 bg-white px-4 text-sm text-[#0A0A0A] outline-none focus:border-[#00B8DB]'
                        />
                    </div>

                    <div>
                        <label className='mb-2 block text-sm text-[#0A0A0A]'>
                            Phone Number
                        </label>
                        <input
                            type='text'
                            className='h-12.5 w-full rounded-[14px] border border-gray-200 bg-white px-4 text-sm text-[#0A0A0A] outline-none focus:border-[#00B8DB]'
                        />
                    </div>

                    <div>
                        <label className='mb-2 block text-sm text-[#0A0A0A]'>
                            Requirements
                        </label>
                        <textarea
                            rows={5}
                            className='w-full rounded-[14px] border border-gray-200 bg-white px-4 py-3 text-sm text-[#0A0A0A] outline-none focus:border-[#00B8DB] resize-none'
                        />
                    </div>

                    <button
                        type='submit'
                        className='inline-flex w-full items-center justify-center rounded-[14px] bg-linear-to-b from-[#00B8DB] to-[#155DFC] py-4 text-base font-medium text-white transition-all duration-300 hover:brightness-110 cursor-pointer'
                    >
                        Submit
                    </button>
                </form>
            </Container>
        </section>
    );
};

export default ContactFormSection;
