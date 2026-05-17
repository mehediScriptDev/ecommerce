import { Check } from 'lucide-react';
import React, { useState } from 'react';
import Container from '../../../layout/Container';

const Checkout = () => {
    const [shippingMethod, setShippingMethod] = useState('standard');
    const [total, setTotal] = useState(1480.76);

    return (
        <div className="min-h-screen bg-white">
            <Container>
        <div className="flex flex-col lg:flex-row gap-16 py-10 lg:py-14">
          {/* LEFT COLUMN */}
          <div className="flex-1 flex flex-col gap-16">
            {/* Contact Information */}
            <section className="flex flex-col gap-6">
              <div className="flex justify-between items-baseline">
                <h1 className="text-3xl font-bold text-[#151A2A]">Contact Information</h1>
                <a href="#" className="text-sm font-semibold text-custom hover:underline whitespace-nowrap ml-4">
                  Already have an account? Log in
                </a>
              </div>

                <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.55px] text-[#6B7280]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                    className="h-12 px-4 border border-[#E5E7EB] rounded-sm text-base text-[#151A2A] placeholder-[#6B7280] focus:outline-none focus:border-custom focus:ring-1 focus:ring-custom bg-white"
                />
              </div>
            </section>

            {/* Shipping Address */}
            <section className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-[#151A2A]">Shipping Address</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name — full width */}
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-[0.55px] text-[#6B7280]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="h-12 px-4 border border-[#E5E7EB] rounded-sm text-base text-[#151A2A] placeholder-[#6B7280] focus:outline-none focus:border-custom focus:ring-1 focus:ring-custom bg-white"
                  />
                </div>

                {/* Country/Region — full width */}
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-[0.55px] text-[#6B7280]">
                    Country / Region
                  </label>
                  <div className="relative">
                    <select className="h-14 w-full px-4 pr-10 border border-[#E5E7EB] rounded-sm text-base text-[#151A2A] focus:outline-none focus:border-custom focus:ring-1 focus:ring-custom bg-white appearance-none cursor-pointer">
                      <option value="UK">UK</option>
                      <option value="US">US</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7.2 9.6L12 14.4L16.8 9.6" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Street Address — full width */}
                  <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-[0.55px] text-[#6B7280]">
                    Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 tech lane"
                    className="h-12 px-4 border border-[#E5E7EB] rounded-sm text-base text-[#151A2A] placeholder-[#6B7280] focus:outline-none focus:border-custom focus:ring-1 focus:ring-custom bg-white"
                  />
                </div>

                {/* City */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-[0.55px] text-[#6B7280]">City</label>
                  <input
                    type="text"
                    placeholder="San Francisco"
                    className="h-12 px-4 border border-[#E5E7EB] rounded-sm text-base text-[#151A2A] placeholder-[#6B7280] focus:outline-none focus:border-custom focus:ring-1 focus:ring-custom bg-white"
                  />
                </div>

                {/* State + ZIP nested grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-[0.55px] text-[#6B7280]">State</label>
                    <input
                      type="text"
                      placeholder="CA"
                      className="h-12 px-4 border border-[#E5E7EB] rounded-sm text-base text-[#151A2A] placeholder-[#6B7280] focus:outline-none focus:border-custom focus:ring-1 focus:ring-custom bg-white"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-[0.55px] text-[#6B7280]">ZIP</label>
                    <input
                      type="text"
                      placeholder="94103"
                      className="h-12 px-4 border border-[#E5E7EB] rounded-sm text-base text-[#151A2A] placeholder-[#6B7280] focus:outline-none focus:border-custom focus:ring-1 focus:ring-custom bg-white"
                    />
                  </div>
                </div>

                {/* Phone Number — full width */}
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-[0.55px] text-[#6B7280]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="h-12 px-4 border border-[#E5E7EB] rounded-sm text-base text-[#151A2A] placeholder-[#6B7280] focus:outline-none focus:border-custom focus:ring-1 focus:ring-custom bg-white"
                  />
                </div>
              </div>
            </section>

            {/* Shipping Method */}
            <section className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-[#151A2A]">Shipping Method</h2>

              <div className="flex flex-col gap-3">
                {/* Standard Delivery */}
                <button
                  type="button"
                  onClick={() => setShippingMethod("standard")}
                  className={`flex justify-between items-center p-4 border-2 transition-colors text-left ${
                    shippingMethod === "standard"
                      ? "border-custom"
                      : "border-[#E5E7EB]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center border-4 transition-colors ${
                        shippingMethod === "standard"
                          ? "border-custom"
                          : "border-[#D1D5DB]"
                      }`}
                    />
                    <div>
                      <p className={`text-sm font-bold leading-5 ${shippingMethod === "standard" ? "text-[#151A2A]" : "text-[#9CA3AF]"}`}>
                        Standard Delivery
                      </p>
                      <p className={`text-xs leading-4 ${shippingMethod === "standard" ? "text-[#6B7280]" : "text-[#9CA3AF]"}`}>
                        3-5 Business Days
                      </p>
                    </div>
                  </div>
                  <span className={`text-sm font-bold ${shippingMethod === "standard" ? "text-[#151A2A]" : "text-[#9CA3AF]"}`}>
                    Free
                  </span>
                </button>

                {/* Express Delivery */}
                <button
                  type="button"
                  onClick={() => setShippingMethod("express")}
                  className={`flex justify-between items-center p-4 border-2 transition-colors text-left ${
                    shippingMethod === "express"
                      ? "border-custom"
                      : "border-[#E5E7EB]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center border-4 transition-colors ${
                        shippingMethod === "express"
                          ? "border-custom"
                          : "border-[#D1D5DB]"
                      }`}
                    />
                    <div>
                      <p className={`text-sm font-bold leading-5 ${shippingMethod === "express" ? "text-[#151A2A]" : "text-[#9CA3AF]"}`}>
                        Express Delivery
                      </p>
                      <p className={`text-xs leading-4 ${shippingMethod === "express" ? "text-[#6B7280]" : "text-[#9CA3AF]"}`}>
                        1-2 Business Days
                      </p>
                    </div>
                  </div>
                  <span className={`text-sm font-bold ${shippingMethod === "express" ? "text-[#151A2A]" : "text-[#9CA3AF]"}`}>
                    $15.00
                  </span>
                </button>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN — Order Summary */}
          <aside className="w-full lg:w-143 lg:shrink-0">
            <div className="bg-[#F0F4F6] rounded-xl shadow-sm p-8 flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-[#171C1E]">Order Summary</h2>

              {/* Line Items */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-base text-[#3D494C]">Subtotal</span>
                  <span className="text-base text-[#3D494C]">$1,298.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base text-[#3D494C]">Shipping</span>
                  <span className="text-base font-medium text-[#006878]">
                    {shippingMethod === "standard" ? "Free" : "$15.00"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base text-[#3D494C]">Estimated Tax</span>
                  <span className="text-base text-[#3D494C]">$167.76</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-1 h-12 px-4 border border-[#BDC9CC] rounded-lg text-sm text-[#151A2A] placeholder-[#6B7280] focus:outline-none focus:border-custom focus:ring-1 focus:ring-custom bg-white"
                />
                <button className="px-4 py-2 bg-[#171C1E] text-white text-sm rounded-lg hover:bg-[#2a3035] transition-colors whitespace-nowrap">
                  Apply
                </button>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-6 border-t border-[#BDC9CC]">
                <span className="text-base text-[#171C1E]">Total</span>
                <span className="text-[40px] font-bold text-[#171C1E] leading-[1.2] tracking-[-0.4px]">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Place Order */}
              <button className="w-full h-12 bg-custom hover:bg-[#2fa3bb] text-white text-sm font-bold uppercase tracking-wide rounded-lg transition-colors">
                Place Order
              </button>
            </div>
          </aside>
        </div>
            </Container>
        </div>
    );
};

export default Checkout;