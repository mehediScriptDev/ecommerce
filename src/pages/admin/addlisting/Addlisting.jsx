import { useState } from 'react';
import AdminDashboardTitle from '../../../components/dashboards/AdminDashboardTitle';
import FormField from './components/FormField';
import TextInput from './components/TextInput';
import NumberInput from './components/NumberInput';
import SelectInput from './components/SelectInput';
import Textarea from './components/Textarea';
import FaqItem from './components/FaqItem';
import ImageUpload from './components/ImageUpload';
import {
    CATEGORY_OPTIONS,
    SERIES_OPTIONS,
    MODEL_OPTIONS,
    CONDITION_OPTIONS,
    COLOR_OPTIONS,
    STORAGE_OPTIONS,
    RAM_OPTIONS,
    INITIAL_FORM,
    INITIAL_FAQS,
} from './constants';

const Addlisting = () => {
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [faqs, setFaqs] = useState(INITIAL_FAQS);
    const [specImages, setSpecImages] = useState([]);

    const updateField = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateField(name, value);
    };

    const handleFaqQuestionChange = (index, value) => {
        const updated = [...faqs];
        updated[index].question = value;
        setFaqs(updated);
    };

    const handleFaqAnswerChange = (index, value) => {
        const updated = [...faqs];
        updated[index].answer = value;
        setFaqs(updated);
    };

    const handleRemoveFaq = (index) => {
        setFaqs((prev) => prev.filter((_, i) => i !== index));
    };

    const addFaq = () => setFaqs([...faqs, { question: '', answer: '' }]);

    const handleImageAdd = (files) => {
        setSpecImages((prev) => [...prev, ...files]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', { ...formData, faqs, specImages });
    };


    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="pb-3">
                <p className="text-xs text-gray-400 mb-2">Listing &gt; Create Listing</p>
                <button
                    type="button"
                    className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                >
                    ← Back
                </button>
            </div>

            <form onSubmit={handleSubmit} className="pb-10">
                <AdminDashboardTitle title="Add New Listing" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <FormField label="Product Title">
                        <TextInput
                            name="productTitle"
                            placeholder="E.g. iPhone 15 Pro Max"
                            value={formData.productTitle}
                            onChange={handleChange}
                        />
                    </FormField>
                    <FormField label="Category">
                        <SelectInput
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            options={CATEGORY_OPTIONS}
                        />
                    </FormField>
                    <FormField label="Series">
                        <SelectInput
                            name="series"
                            value={formData.series}
                            onChange={handleChange}
                            options={SERIES_OPTIONS}
                        />
                    </FormField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <FormField label="Model">
                        <SelectInput
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            options={MODEL_OPTIONS}
                        />
                    </FormField>
                    <FormField label="Condition">
                        <SelectInput
                            name="condition"
                            value={formData.condition}
                            onChange={handleChange}
                            options={CONDITION_OPTIONS}
                        />
                    </FormField>
                    <FormField label="Price">
                        <NumberInput
                            name="price"
                            placeholder="1200000"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </FormField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <FormField label="Color">
                        <SelectInput
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                            options={COLOR_OPTIONS}
                        />
                    </FormField>
                    <FormField label="Stock Quantity">
                        <NumberInput
                            name="stockQuantity"
                            placeholder="0"
                            value={formData.stockQuantity}
                            onChange={handleChange}
                        />
                    </FormField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <FormField label="Storage Options">
                        <SelectInput
                            name="storageOptions"
                            value={formData.storageOptions}
                            onChange={handleChange}
                            options={['', ...STORAGE_OPTIONS]}
                        />
                    </FormField>
                    <FormField label="RAM Option">
                        <SelectInput
                            name="ramOption"
                            value={formData.ramOption}
                            onChange={handleChange}
                            options={['', ...RAM_OPTIONS]}
                        />
                    </FormField>
                </div>

                <div className="mb-6">
                    <FormField label="Introduction">
                        <Textarea
                            name="introduction"
                            placeholder="Write something about the phone..."
                            value={formData.introduction}
                            onChange={handleChange}
                            rows={4}
                        />
                    </FormField>
                </div>

                <div className="mb-6">
                    <h2 className="text-base font-semibold text-gray-900 mb-3">Frequently Asked Question</h2>
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            index={index}
                            faq={faq}
                            onQuestionChange={handleFaqQuestionChange}
                            onAnswerChange={handleFaqAnswerChange}
                            onRemove={handleRemoveFaq}
                        />
                    ))}
                    <button
                        type="button"
                        onClick={addFaq}
                        className="text-sm text-teal-600 hover:text-teal-700 font-medium mt-1"
                    >
                        Add Another Question
                    </button>
                </div>

                <div className="mb-8">
                    <FormField label="Technical Specification">
                        <ImageUpload images={specImages} onFilesAdded={handleImageAdd} />
                    </FormField>
                </div>

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