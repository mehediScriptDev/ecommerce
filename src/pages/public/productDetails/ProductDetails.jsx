import React, { useState } from 'react';
import Container from '../../../layout/Container';
import { FiMinus, FiPlus, FiChevronDown, FiChevronUp, FiCheckCircle, FiTruck } from 'react-icons/fi';
import { MdOutlineSmartphone, MdOutlineCameraAlt, MdOutlineCreate } from 'react-icons/md';
import { FaMicrochip } from 'react-icons/fa';
import { HiChip } from 'react-icons/hi';
import RelatedProducts from './sections/relatedProduct/RelatedProducts';

const ProductDetails = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [condition, setCondition] = useState('NEW (SEALED)');
    const [color, setColor] = useState('NATURAL TITANIUM');
    const [storage, setStorage] = useState('256GB');
    const [quantity, setQuantity] = useState(1);
    const [activeFaq, setActiveFaq] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1598327105666-5b89351cb315?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=1000"
    ];

    const conditions = ['NEW (SEALED)', 'Excellent (Like New)', 'Very Good'];
    const colors = [
        { name: 'TITANIUM GRAY', hex: '#b5b2a9' },
        { name: 'NATURAL TITANIUM', hex: '#485055' },
        { name: 'TITANIUM BLACK', hex: '#262626' },
        { name: 'TITANIUM SILVER', hex: '#e8e8e8' }
    ];
    const storages = ['256GB', '512GB', '1TB'];

    const faqs = [
        {
            q: "What's in the box?",
            a: "The retail package includes the Samsung Galaxy S26 Ultra 5G, an integrated S Pen, a USB-C to USB-C cable, and a SIM ejection tool. Please note that a wall charger is sold separately."
        },
        {
            q: "Does it support global 5G networks?",
            a: "Yes, the device is fully unlocked and supports all major 5G bands globally, ensuring seamless connectivity wherever you go."
        },
        {
            q: "Warranty Information",
            a: "This product comes with a standard 1-year manufacturer warranty covering hardware defects. Additional extended warranty options are available at checkout."
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-20">
            <Container>
                
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 pt-8 md:pt-12 mb-20">
                    
                    {/* Left: Image Gallery */}
                    <div className="w-full lg:w-1/2 shrink-0">
                        <div className="rounded-xl overflow-hidden mb-3 aspect-4/3 flex items-center justify-center">
                            <img 
                                src={images[selectedImage]} 
                                alt="Galaxy S26 Ultra" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-2 md:gap-3">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`aspect-4/3 rounded-lg border-2 overflow-hidden transition-all p-0.5 ${
                                        selectedImage === idx ? 'border-custom' : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover rounded-md" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Details */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-start">
                        <div className="mb-6">
                            <p className="text-sm font-bold tracking-widest text-[#94A3B8] uppercase mb-1">Samsung</p>
                            <h1 className="text-3xl md:text-4xl lg:text-[42px] xl:text-[56px] font-semibold text-[#151A2A] mb-2 tracking-tight">Galaxy S26 Ultra</h1>
                            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#151A2A]">$999.00</p>
                        </div>

                        {/* Condition */}
                        <div className="mb-6">
                            <p className="text-sm font-bold tracking-widest text-[#151A2A] uppercase mb-2">Condition</p>
                            <div className="flex flex-wrap gap-2">
                                {conditions.map(c => (
                                    <button
                                        key={c}
                                        onClick={() => setCondition(c)}
                                        className={`px-4 py-2 rounded-sm text-[13px] border transition-colors ${
                                            condition === c 
                                                ? 'border-[#151A2A] text-[#151A2A]' 
                                                : 'border-gray-300 text-gray-500 hover:border-gray-400'
                                        }`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color */}
                        <div className="mb-6">
                            <p className="text-[11px] font-bold tracking-widest text-[#151A2A] uppercase mb-3">
                                COLOR: <span className="text-[#9CA3AF] font-normal">{color}</span>
                            </p>
                            <div className="flex gap-3">
                                {colors.map(c => (
                                    <button
                                        key={c.name}
                                        onClick={() => setColor(c.name)}
                                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                                            color === c.name ? 'ring-[1.5px] ring-gray-400 ring-offset-2' : 'hover:ring-[1.5px] hover:ring-gray-300 hover:ring-offset-1'
                                        }`}
                                    >
                                        <span 
                                            className="w-full h-full rounded-full border border-gray-200 shadow-sm" 
                                            style={{ backgroundColor: c.hex }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Storage */}
                        <div className="mb-8">
                            <p className="text-[11px] font-bold tracking-widest text-[#151A2A] uppercase mb-2">Storage</p>
                            <div className="flex flex-wrap gap-2">
                                {storages.map(s => (
                                    <button
                                        key={s}
                                        onClick={() => setStorage(s)}
                                        className={`w-20 py-2 rounded-sm text-[13px] border transition-colors ${
                                            storage === s 
                                                ? 'bg-custom border-custom text-white' 
                                                : 'border-gray-300 text-gray-500 hover:border-gray-400 bg-white'
                                        }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-3">
                            <div className="flex items-center border border-gray-300 rounded-sm px-3 py-2 w-full sm:w-24 justify-between shrink-0 h-11.5">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-500 hover:text-[#151A2A]">
                                    <FiMinus size={14} />
                                </button>
                                <span className="text-sm font-semibold text-[#151A2A]">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="text-gray-500 hover:text-[#151A2A]">
                                    <FiPlus size={14} />
                                </button>
                            </div>
                            <button className="sm:flex-1 bg-[#47B5C9] hover:bg-[#349eab] text-white rounded-sm font-medium text-sm transition-colors h-11.5">
                                Add to Cart
                            </button>
                        </div>
                        <button className="w-full border border-gray-800 text-[#151A2A] hover:bg-gray-50 rounded-sm font-medium text-sm transition-colors h-11.5">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* ── MIDDLE SECTION: Introducing ── */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="title-custom text-[#151A2A] mb-4">Introducing the New Galaxy S26 Ultra</h2>
                    <p className="subtitle-custom">
                        The ultimate Ultra experience, enhanced with artificial intelligence and precision engineering for the modern creator.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <div className="bg-[#F0F4F6] rounded-2xl p-8">
                        <HiChip className="text-custom w-6 h-6 mb-4" />
                        <h3 className="text-base font-bold text-[#595E71] mb-2">Snapdragon 8 Elite</h3>
                        <p className="text-sm text-[#64748B] leading-relaxed">
                            The fastest chip ever in a Galaxy, optimized for AAA gaming and heavy multitasking.
                        </p>
                    </div>
                    <div className="bg-[#F0F4F6] rounded-2xl p-8">
                        <MdOutlineCameraAlt className="text-custom w-6 h-6 mb-4" />
                        <h3 className="text-base font-bold text-[#595E71] mb-2">200MP Pro Camera</h3>
                        <p className="text-sm text-[#64748B] leading-relaxed">
                            Capture details that were previously invisible to the human eye, even in low light.
                        </p>
                    </div>
                    <div className="bg-[#F0F4F6] rounded-2xl p-8">
                        <MdOutlineCreate className="text-custom w-6 h-6 mb-4" />
                        <h3 className="text-base font-bold text-[#595E71] mb-2">S Pen Integrated</h3>
                        <p className="text-sm text-[#64748B] leading-relaxed">
                            The legacy lives on. Write, sketch, and navigate with unmatched precision.
                        </p>
                    </div>
                </div>

                {/* ── TECHNICAL SPECS ── */}
                <div className="mb-24">
                    <h2 className="text-xl font-bold text-[#151A2A] mb-8">Technical Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        <div className="bg-[#F0F4F6] px-5 py-3.5 rounded flex justify-between items-center">
                            <span className="text-base text-[#64748B]">Brand</span>
                            <span className="text-base font-medium text-[#171C1E]">Samsung</span>
                        </div>
                        <div className="bg-[#F0F4F6] px-5 py-3.5 rounded flex justify-between items-center">
                            <span className="text-base text-[#64748B]">Network</span>
                            <span className="text-base font-medium text-[#171C1E]">GSM / HSPA / LTE / 5G</span>
                        </div>
                        <div className="bg-[#F0F4F6] px-5 py-3.5 rounded flex justify-between items-center">
                            <span className="text-base text-[#64748B]">Dimensions</span>
                            <span className="text-base font-medium text-[#171C1E]">162.3 x 79.0 x 8.6 mm</span>
                        </div>
                        <div className="bg-[#F0F4F6] px-5 py-3.5 rounded flex justify-between items-center">
                            <span className="text-base text-[#64748B]">Display</span>
                            <span className="text-base font-medium text-[#171C1E]">6.8" Dynamic LTPO AMOLED 2X</span>
                        </div>
                        <div className="bg-[#F0F4F6] px-5 py-3.5 rounded flex justify-between items-center">
                            <span className="text-base text-[#64748B]">Resolution</span>
                            <span className="text-base font-medium text-[#171C1E]">1440 x 3120 pixels</span>
                        </div>
                        <div className="bg-[#F0F4F6] px-5 py-3.5 rounded flex justify-between items-center">
                            <span className="text-base text-[#64748B]">OS</span>
                            <span className="text-base font-medium text-[#171C1E]">Android 15, One UI 7.1</span>
                        </div>
                        <div className="bg-[#F0F4F6] px-5 py-3.5 rounded flex justify-between items-center">
                            <span className="text-base text-[#64748B]">Main Camera</span>
                            <span className="text-base font-medium text-[#171C1E]">200MP + 50MP + 10MP + 12MP</span>
                        </div>
                        <div className="bg-[#F0F4F6] px-5 py-3.5 rounded flex justify-between items-center">
                            <span className="text-base text-[#64748B]">Battery</span>
                            <span className="text-base font-medium text-[#171C1E]">5000 mAh Li-Ion</span>
                        </div>
                    </div>
                </div>

                {/* ── BOTTOM SECTION: Why Choose & FAQ ── */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    
                    {/* Left: Why Choose */}
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-[#151A2A] mb-6">Why Choose ZEPHYR?</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#e8f6f8] flex items-center justify-center shrink-0 text-custom">
                                    <FiCheckCircle size={20} />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-[#151A2A] mb-1.5">Authentic Products</h3>
                                    <p className="text-base text-[#64748B]">
                                        We guarantee 100% genuine Samsung products sourced directly from authorized channels.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#e8f6f8] flex items-center justify-center shrink-0 text-custom">
                                    <FiTruck size={20} />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-[#151A2A] mb-1.5">Express Delivery</h3>
                                    <p className="text-base text-[#64748B]">
                                        Get your device within 24-48 hours with our premium logistics partners.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: FAQ */}
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-[#151A2A] mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-3">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                    <button 
                                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-base font-medium text-[#151A2A] pr-4">{faq.q}</span>
                                        {activeFaq === idx ? (
                                            <FiChevronUp className="text-gray-400 shrink-0" />
                                        ) : (
                                            <FiChevronDown className="text-gray-400 shrink-0" />
                                        )}
                                    </button>
                                    {activeFaq === idx && (
                                        <div className="p-4 pt-0 text-base text-[#64748B] leading-relaxed border-t border-gray-100">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                   <div className='mt-4'>
                     <RelatedProducts/>
                   </div>
            </Container>
        </div>
    );
};

export default ProductDetails;