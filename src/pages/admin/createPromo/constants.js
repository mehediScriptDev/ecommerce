export const DISCOUNT_TYPES = [
    { label: 'Percentage (%)', value: 'percentage' },
    { label: 'Fixed Amount ($)', value: 'fixed' },
];

export const USER_OPTIONS = ['All User', 'New User', 'Existing User'];

export const CATEGORY_OPTIONS = ['iPhone', 'Samsung', 'Google Pixel'];

export const PRODUCT_OPTIONS = [
    'iPhone 16 plus',
    'iPhone 16 Pro',
    'iPhone 16',
    'iPhone 15 Pro Max',
];

export const INITIAL_FORM = {
    promoCode: '',
    discountType: 'percentage',
    discountValue: '',
    minimumOrder: '',
    expiryDate: '',
    usageLimit: '',
    unlimited: false,
    applicableUsers: 'All User',
    applicableCategory: 'iPhone',
    applicableProduct: 'iPhone 16 plus',
};

export const INITIAL_PRODUCTS = Array(9).fill('iPhone 16 plus');
