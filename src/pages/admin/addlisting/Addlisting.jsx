import React, { useState, useRef } from 'react';
import DashboardHeader from '../../../layout/DashboardHeader';
import AdminDashboardTitle from '../../../components/dashboards/AdminDashboardTitle';

const inputCls = 'w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 bg-white';
const labelCls = 'block text-sm font-medium text-gray-700 mb-1';

const Addlisting = () => {
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        productTitle: '',
        category: 'New',
        series: 'iPhone',
        model: '15 pro',
        condition: 'New',
        price: '',
        color: 'Black',
        stockQuantity: '',
        storageOptions: '',
        ramOption: '',
        introduction: '',
    });
    const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);
    const [specImages, setSpecImages] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFaqChange = (index, field, value) => {
        const updated = [...faqs];
        updated[index][field] = value;
        setFaqs(updated);
    };

    const addFaq = () => setFaqs([...faqs, { question: '', answer: '' }]);

    const handleImageDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        setSpecImages(prev => [...prev, ...files]);
    };

    const handleImageSelect = (e) => {
        const files = Array.from(e.target.files);
        setSpecImages(prev => [...prev, ...files]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', { ...formData, faqs, specImages });
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Breadcrumb + Back */}
            <div className=" pb-3">
                <p className="text-xs text-gray-400 mb-2">Listing &gt; Create Listing</p>
                <button type="button" className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                    ← Back
                </button>
            </div>

            <form onSubmit={handleSubmit} className="pb-10">
                <AdminDashboardTitle title="Add New Listing" />

                {/* Row 1: Product Title | Category | Series */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className={labelCls}>Product Title</label>
                        <input
                            type="text"
                            name="productTitle"
                            placeholder="E.g. iPhone 15 Pro Max"
                            value={formData.productTitle}
                            onChange={handleInputChange}
                            className={inputCls}
                        />
                    </div>
                    <div>
                        <label className={labelCls}>Category</label>
                        <select name="category" value={formData.category} onChange={handleInputChange} className={inputCls}>
                            <option>New</option>
                            <option>Used</option>
                        </select>
                    </div>
                    <div>
                        <label className={labelCls}>Series</label>
                        <select name="series" value={formData.series} onChange={handleInputChange} className={inputCls}>
                            <option>iPhone</option>
                            <option>iPad</option>
                            <option>Samsung</option>
                        </select>
                    </div>
                </div>

                {/* Row 2: Model | Condition | Price */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className={labelCls}>Model</label>
                        <select name="model" value={formData.model} onChange={handleInputChange} className={inputCls}>
                            <option>15 pro</option>
                            <option>15 pro max</option>
                            <option>15</option>
                            <option>14 pro</option>
                        </select>
                    </div>
                    <div>
                        <label className={labelCls}>Condition</label>
                        <select name="condition" value={formData.condition} onChange={handleInputChange} className={inputCls}>
                            <option>New</option>
                            <option>Excellent (Like New)</option>
                            <option>Very Good</option>
                            <option>Broken</option>
                        </select>
                    </div>
                    <div>
                        <label className={labelCls}>Price</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="1200000"
                            value={formData.price}
                            onChange={handleInputChange}
                            className={inputCls}
                        />
                    </div>
                </div>

                {/* Row 3: Color | Stock Quantity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className={labelCls}>Color</label>
                        <select name="color" value={formData.color} onChange={handleInputChange} className={inputCls}>
                            <option>Black</option>
                            <option>White</option>
                            <option>Silver</option>
                            <option>Gray / Space Gray</option>
                            <option>Green</option>
                        </select>
                    </div>
                    <div>
                        <label className={labelCls}>Stock Quantity</label>
                        <input
                            type="number"
                            name="stockQuantity"
                            placeholder="0"
                            value={formData.stockQuantity}
                            onChange={handleInputChange}
                            className={inputCls}
                        />
                    </div>
                </div>

                {/* Row 4: Storage Options | RAM Option */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className={labelCls}>Storage Options</label>
                        <select name="storageOptions" value={formData.storageOptions} onChange={handleInputChange} className={inputCls}>
                            <option value="" disabled>e.g. 128GB, 256GB</option>
                            <option>128GB</option>
                            <option>256GB</option>
                            <option>512GB</option>
                            <option>1TB</option>
                        </select>
                    </div>
                    <div>
                        <label className={labelCls}>RAM Option</label>
                        <select name="ramOption" value={formData.ramOption} onChange={handleInputChange} className={inputCls}>
                            <option value="" disabled>e.g. 8GB, 12GB</option>
                            <option>2GB</option>
                            <option>4GB</option>
                            <option>8GB</option>
                            <option>16GB</option>
                        </select>
                    </div>
                </div>

                {/* Introduction */}
                <div className="mb-6">
                    <label className={labelCls}>Introduction</label>
                    <textarea
                        name="introduction"
                        placeholder="Write something about the phone..."
                        value={formData.introduction}
                        onChange={handleInputChange}
                        rows={4}
                        className={inputCls}
                    />
                </div>

                {/* FAQ */}
                <div className="mb-6">
                    <h2 className="text-base font-semibold text-gray-900 mb-3">Frequently Asked Question</h2>
                    {faqs.map((faq, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                            <div>
                                <label className={labelCls}>Question</label>
                                <input
                                    type="text"
                                    placeholder="Write question"
                                    value={faq.question}
                                    onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                                    className={inputCls}
                                />
                            </div>
                            <div>
                                <label className={labelCls}>Answer</label>
                                <input
                                    type="text"
                                    placeholder="Write answer"
                                    value={faq.answer}
                                    onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                                    className={inputCls}
                                />
                            </div>
                        </div>
                    ))}
                    <button type="button" onClick={addFaq} className="text-sm text-teal-600 hover:text-teal-700 font-medium mt-1">
                        Add Another Question
                    </button>
                </div>

                {/* Technical Specification — Image Upload */}
                <div className="mb-8">
                    <label className={labelCls}>Technical Specification</label>
                    <div
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleImageDrop}
                        onClick={() => fileInputRef.current.click()}
                        className="w-full border border-gray-200 rounded-lg bg-white cursor-pointer flex flex-col items-center justify-center py-16 gap-2 hover:border-teal-400 transition-colors"
                    >
                        <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span>⊕ JPEG, PNG</span>
                            <span>⊕ Max 20 photos</span>
                            <span>⊕ 1920×1080px recommended</span>
                        </div>
                        {specImages.length > 0 && (
                            <p className="text-xs text-teal-600 mt-1">{specImages.length} file(s) selected</p>
                        )}
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png"
                        multiple
                        className="hidden"
                        onChange={handleImageSelect}
                    />
                </div>

                {/* Save */}
                <button
                    type="submit"
                    className="btn-custom text-white text-sm font-medium py-2 px-6 rounded-md transition"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default Addlisting;