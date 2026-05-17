import React, { useState } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { FiMinus, FiPlus, FiTrash2, FiLock, FiTruck, FiShield, FiCornerUpLeft, FiAward } from 'react-icons/fi';
import { Link } from 'react-router';


const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Samsung Galaxy S23 FE',
            color: 'Titanium Blue',
            storage: '256GB',
            price: 1099.00,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=1000',
            saveForLater: true,
            checked: false
        },
        {
            id: 2,
            name: 'Samsung Galaxy S23 FE Ear Buds',
            color: 'Midnight Black',
            price: 199.00,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1598327105666-5b89351cb315?auto=format&fit=crop&q=80&w=1000',
            saveForLater: true,
            checked: true
        }
    ]);

    const [promoCode, setPromoCode] = useState('');

    const updateQuantity = (id, change) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    const toggleCheck = (id) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = 167.76;
    const shipping = 0;
    const total = subtotal + tax;

    return (
        <div className="bg-white min-h-screen pb-20 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
                
                <h1 className="text-[32px] md:text-[40px] font-semibold text-gray-900 mb-10 tracking-tight">
                    Your Cart ({cartItems.length} items)
                </h1>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    {/* Main Cart Items */}
                    <div className="flex-1">
                        <div className="border-t border-gray-200">
                            {cartItems.map((item, index) => (
                                <div key={item.id} className="flex items-start gap-4 py-8 border-b border-gray-200">
                                    <input 
                                        type="checkbox" 
                                        className="w-4.5 h-4.5 mt-10.5 rounded border-gray-300 text-[#47B5C9] focus:ring-[#47B5C9] accent-[#47B5C9] cursor-pointer" 
                                        checked={item.checked}
                                        onChange={() => toggleCheck(item.id)}
                                    />
                                    
                                    <div className="w-24 h-28 shrink-0 flex items-center justify-center p-2">
                                        <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain rounded" />
                                    </div>
                                    
                                    <div className="flex-1 flex flex-col md:flex-row justify-between">
                                        {/* Left Info */}
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-lg font-semibold text-gray-900 tracking-tight">{item.name}</h3>
                                            <p className="text-[13px] text-gray-500 mt-1">{item.color} {item.storage ? `/ ${item.storage}` : ''}</p>
                                            <div className="mt-5 flex items-center border border-gray-300 rounded-sm px-2 py-1 w-fit">
                                                <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-500 hover:text-gray-700 w-6 flex justify-center"><FiMinus size={14}/></button>
                                                <span className="w-8 text-center text-sm font-medium text-gray-700">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-500 hover:text-gray-700 w-6 flex justify-center"><FiPlus size={14}/></button>
                                            </div>
                                        </div>
                                        
                                        {/* Right Info */}
                                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between mt-4 md:mt-0">
                                            <span className="text-[17px] font-medium text-gray-900">
                                                ${(item.price * item.quantity).toLocaleString('en-US', {minimumFractionDigits: 2})}
                                            </span>
                                            <div className="flex items-center gap-4">
                                                <button className="text-[13px] text-[#47B5C9] hover:underline font-medium">Save for later</button>
                                                <button onClick={() => removeItem(item.id)} className="text-[#f05252] hover:text-red-700 transition-colors">
                                                    <FiTrash2 className="w-4.5 h-4.5"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-8">
                            <button className="flex items-center gap-2 text-[14px] text-[#47B5C9] font-medium hover:text-[#349eab] transition-colors">
                                <IoChevronBack size={16} />
                                Continue Shopping
                            </button>
                        </div>
                    </div>

                    {/* Sidebar Summary */}
                    <div className="w-full lg:w-100 shrink-0">
                        <div className="bg-[#F6F7F9] rounded-xl p-8">
                            <h3 className="text-xl font-medium text-gray-900 mb-6">Order Summary</h3>
                            
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-[14px]">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span className="text-gray-600">${subtotal.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                                </div>
                                <div className="flex justify-between text-[14px]">
                                    <span className="text-gray-500">Shipping</span>
                                    <span className="text-[#47B5C9]">Free</span>
                                </div>
                                <div className="flex justify-between text-[14px]">
                                    <span className="text-gray-500">Estimated Tax</span>
                                    <span className="text-gray-600">${tax.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                                </div>
                            </div>
                            
                            <div className="flex gap-3 mb-6">
                                <input 
                                    type="text" 
                                    placeholder="Promo code" 
                                    className="flex-1 border border-gray-300 bg-white rounded-md px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#47B5C9] focus:ring-1 focus:ring-[#47B5C9]"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                />
                                <button className="bg-[#1C2337] text-white px-6 py-2.5 rounded-md text-[14px] font-medium hover:bg-gray-800 transition-colors">
                                    Apply
                                </button>
                            </div>
                            
                            <div className="border-t border-gray-200 pt-5 mb-8">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-900 font-medium text-[15px]">Total</span>
                                    <span className="text-[28px] font-bold text-gray-900 tracking-tight">
                                        {total.toLocaleString('en-US', {minimumFractionDigits: 2})}
                                    </span>
                                </div>
                            </div>
                            
                            <Link to={"/checkout"} className="w-full bg-[#47B5C9] hover:bg-[#349eab] text-white py-3.5 rounded-md text-[15px] font-medium flex justify-center items-center gap-2 transition-colors">
                                <FiLock className="w-4.5 h-4.5"/>
                                Checkout Securely
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Features below */}
                <div className="mt-20 pt-16 border-t border-gray-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <FiTruck className="w-7 h-7 text-[#47B5C9] mb-4" strokeWidth={1.5} />
                            <h4 className="text-[15px] font-medium text-gray-900 mb-1">Free Shipping</h4>
                            <p className="text-[13px] text-gray-500">On all orders over $500</p>
                        </div>
                        
                        <div className="flex flex-col items-center text-center">
                            <FiShield className="w-7 h-7 text-[#47B5C9] mb-4" strokeWidth={1.5} />
                            <h4 className="text-[15px] font-medium text-gray-900 mb-1">Secure Payment</h4>
                            <p className="text-[13px] text-gray-500">Your security is our priority</p>
                        </div>
                        
                        <div className="flex flex-col items-center text-center">
                            <FiCornerUpLeft className="w-7 h-7 text-[#47B5C9] mb-4" strokeWidth={1.5} />
                            <h4 className="text-[15px] font-medium text-gray-900 mb-1">Easy Returns</h4>
                            <p className="text-[13px] text-gray-500">30-day money-back guarantee</p>
                        </div>
                        
                        <div className="flex flex-col items-center text-center">
                            <FiAward className="w-7 h-7 text-[#47B5C9] mb-4" strokeWidth={1.5} />
                            <h4 className="text-[15px] font-medium text-gray-900 mb-1">Warranty Included</h4>
                            <p className="text-[13px] text-gray-500">1-2 year manufacturer coverage</p>
                        </div>
                    </div>
                </div>
                            
            </div>
        </div>
    );
};

export default Cart;