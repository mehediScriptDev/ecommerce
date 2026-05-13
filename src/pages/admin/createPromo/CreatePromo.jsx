import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import FormField from './components/FormField';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import DateInput from './components/DateInput';
import SegmentedControl from './components/SegmentedControl';
import ProductTagList from './components/ProductTagList';
import {
    DISCOUNT_TYPES,
    USER_OPTIONS,
    CATEGORY_OPTIONS,
    PRODUCT_OPTIONS,
    INITIAL_FORM,
    INITIAL_PRODUCTS,
} from './constants';

const CreatePromo = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [selectedProducts, setSelectedProducts] = useState(INITIAL_PRODUCTS);

    const updateField = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        updateField(name, type === 'checkbox' ? checked : value);
    };

    const handleProductSelect = (e) => {
        const { value } = e.target;
        updateField('applicableProduct', value);
        if (value && !selectedProducts.includes(value)) {
            setSelectedProducts((prev) => [...prev, value]);
        }
    };

    const handleRemoveProduct = (index) => {
        setSelectedProducts((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { ...formData, products: selectedProducts };
        console.log('Create promo payload:', payload);
        navigate('/dashboard/admin/promo-code');
    };

    const isPercentage = formData.discountType === 'percentage';

    return (
        <div className="">
            <p className="mb-4 text-sm text-gray-500">Promo Code &gt; Create Promo Code</p>


            <button
                type="button"
                onClick={() => navigate(-1)}
                className="mb-3 flex items-center gap-1.5 text-sm font-medium text-cyan-500 hover:text-cyan-600"
            >
                <ArrowLeft size={16} />
                Back
            </button>

            <h1 className="mb-8 text-2xl font-bold text-gray-900">Create Promo Code</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <FormField label="Promo Code">
                    <TextInput
                        name="promoCode"
                        value={formData.promoCode}
                        onChange={handleChange}
                        placeholder="SAVE10"
                    />
                </FormField>

                <FormField label="Discount Type">
                    <SegmentedControl
                        options={DISCOUNT_TYPES}
                        value={formData.discountType}
                        onChange={(value) => updateField('discountType', value)}
                    />
                </FormField>

                <FormField label="Discount Value">
                    <TextInput
                        name="discountValue"
                        value={formData.discountValue}
                        onChange={handleChange}
                        placeholder={isPercentage ? '10 %' : '10 $'}
                    />
                </FormField>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    <FormField label="Minimum Order Amount">
                        <TextInput
                            name="minimumOrder"
                            value={formData.minimumOrder}
                            onChange={handleChange}
                            placeholder="$ 50"
                        />
                    </FormField>

                    <FormField label="Expiry Date">
                        <DateInput
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                        />
                    </FormField>

                    <FormField
                        label="Usage Limit"
                        action={
                            <label className="flex items-center gap-1.5 text-sm text-gray-700">
                                <input
                                    type="checkbox"
                                    name="unlimited"
                                    checked={formData.unlimited}
                                    onChange={handleChange}
                                    className="h-4 w-4 rounded border-gray-300 accent-cyan-500"
                                />
                                Unlimited
                            </label>
                        }
                    >
                        <TextInput
                            name="usageLimit"
                            value={formData.usageLimit}
                            onChange={handleChange}
                            placeholder="100"
                            disabled={formData.unlimited}
                        />
                    </FormField>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <FormField label="Applicable Users">
                        <SelectInput
                            name="applicableUsers"
                            value={formData.applicableUsers}
                            onChange={handleChange}
                            options={USER_OPTIONS}
                        />
                    </FormField>

                    <FormField label="Applicable Category">
                        <SelectInput
                            name="applicableCategory"
                            value={formData.applicableCategory}
                            onChange={handleChange}
                            options={CATEGORY_OPTIONS}
                        />
                    </FormField>
                </div>

                <FormField label="Applicable Product">
                    <SelectInput
                        name="applicableProduct"
                        value={formData.applicableProduct}
                        onChange={handleProductSelect}
                        options={PRODUCT_OPTIONS}
                    />
                    <ProductTagList products={selectedProducts} onRemove={handleRemoveProduct} />
                </FormField>

                <div className="flex justify-end gap-3 border-t border-gray-200 pt-6">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-lg bg-cyan-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-cyan-600 transition"
                    >
                        Create Promo Code
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePromo;

