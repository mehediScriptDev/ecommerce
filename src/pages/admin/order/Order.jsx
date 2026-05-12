import React, { useState } from 'react';
import AdminDashboardTitle from '../../../components/dashboards/AdminDashboardTitle';
import Stats from './components/Stats';
import OrderTabs from './components/OrderTabs';
import ViewModal from './components/ViewModal';

const Order = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [openActionMenu, setOpenActionMenu] = useState(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);

    const statsData = [
        { label: 'Pending', value: 12 },
        { label: 'Processing', value: 8 },
        { label: 'Shipped', value: 45 },
        { label: 'Delivered', value: 134 },
    ];

    const [ordersData, setOrdersData] = useState([
        {
            id: '#ORD-001',
            customer: 'Darlene Robertson',
            product: 'iPhone 15 Pro Max',
            price: '150,000',
            date: '2024-03-24',
            status: 'Pending',
        },
        {
            id: '#ORD-002',
            customer: 'Cameron Williamson',
            product: 'Samsung Galaxy S24 Ultra',
            price: '190,000',
            date: '2024-03-24',
            status: 'Delivered',
        },
        {
            id: '#ORD-004',
            customer: 'Robert Fox',
            product: 'Google Pixel 8 Pro',
            price: '170,000',
            date: '2024-03-24',
            status: 'Shipped',
        },
        {
            id: '#ORD-001',
            customer: 'Darlene Robertson',
            product: 'iPhone 15 Pro Max',
            price: '150,000',
            date: '2024-03-24',
            status: 'Pending',
        },
        {
            id: '#ORD-002',
            customer: 'Cameron Williamson',
            product: 'Samsung Galaxy S24 Ultra',
            price: '190,000',
            date: '2024-03-24',
            status: 'Delivered',
        },
        {
            id: '#ORD-004',
            customer: 'Robert Fox',
            product: 'Google Pixel 8 Pro',
            price: '170,000',
            date: '2024-03-24',
            status: 'Processing',
        },
    ]);

    const statusOptions = ['Pending', 'Processing', 'Delivered', 'Shipped', 'Cancelled'];
    const orderDetailImage = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=470&hei=556&fmt=png&qlt=95&.v=1692923777972';
    const selectedOrder = selectedOrderIndex !== null ? ordersData[selectedOrderIndex] : null;

    const getStatusColor = (status) => {
        const colors = {
            'Pending': 'bg-yellow-100 text-yellow-800',
            'Processing': 'bg-blue-100 text-blue-800',
            'Shipped': 'bg-purple-100 text-purple-800',
            'Delivered': 'bg-green-100 text-green-800',
            'Cancelled': 'bg-red-100 text-red-800',
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    const getStatusDotColor = (status) => {
        const colors = {
            'Pending': 'bg-yellow-500',
            'Processing': 'bg-blue-500',
            'Shipped': 'bg-purple-500',
            'Delivered': 'bg-green-500',
            'Cancelled': 'bg-red-500',
        };
        return colors[status] || 'bg-gray-500';
    };

    const formatOrderPrice = (price) => {
        const value = Number(String(price).replace(/,/g, ''));
        return `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const handleStatusChange = (index, newStatus) => {
        setOrdersData((prev) => prev.map((item, i) => (
            i === index ? { ...item, status: newStatus } : item
        )));
        setOpenActionMenu(null);
    };

    const handleViewDetails = (index) => {
        setSelectedOrderIndex(index);
        setIsDetailsModalOpen(true);
        setOpenActionMenu(null);
    };

    const closeDetailsModal = () => {
        setIsDetailsModalOpen(false);
    };

    return (
        <div>
            <AdminDashboardTitle 
                title="Order Management"
                subtitle="Track and manage all customer orders in one place."
            />

            <Stats stats={statsData} />

            <OrderTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="border-b border-gray-200 bg-gray-50">
                        <tr>
                            <th className="text-left px-6 py-3 font-semibold text-gray-700">Order ID</th>
                            <th className="text-left px-6 py-3 font-semibold text-gray-700">Customer</th>
                            <th className="text-left px-6 py-3 font-semibold text-gray-700">Product</th>
                            <th className="text-left px-6 py-3 font-semibold text-gray-700">Price</th>
                            <th className="text-left px-6 py-3 font-semibold text-gray-700">Date</th>
                            <th className="text-left px-6 py-3 font-semibold text-gray-700">Status</th>
                            <th className="text-center px-6 py-3 font-semibold text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.map((order, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition">
                                <td className="px-6 py-4 text-gray-900 font-medium">{order.id}</td>
                                <td className="px-6 py-4 text-gray-700">{order.customer}</td>
                                <td className="px-6 py-4 text-gray-700">{order.product}</td>
                                <td className="px-6 py-4 text-gray-700">{order.price}</td>
                                <td className="px-6 py-4 text-gray-700">{order.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center relative">
                                    <button
                                        type="button"
                                        onClick={() => setOpenActionMenu(openActionMenu === index ? null : index)}
                                        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
                                        aria-haspopup="menu"
                                        aria-expanded={openActionMenu === index}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <circle cx="12" cy="5" r="2" />
                                            <circle cx="12" cy="12" r="2" />
                                            <circle cx="12" cy="19" r="2" />
                                        </svg>
                                    </button>

                                    {openActionMenu === index && (
                                        <div className="absolute right-0 top-10 z-20 w-44 rounded-xl border border-gray-200 bg-white p-1 shadow-lg">
                                            <button
                                                type="button"
                                                onClick={() => handleViewDetails(index)}
                                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
                                            >
                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                View Details
                                            </button>
                                            <div className="my-1 border-t border-gray-200" />
                                            <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                                                Change Status
                                            </p>
                                            {statusOptions.map((status) => (
                                                <button
                                                    key={status}
                                                    type="button"
                                                    onClick={() => handleStatusChange(index, status)}
                                                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                                                        order.status === status
                                                            ? 'bg-cyan-50 text-cyan-700'
                                                            : 'text-gray-700 hover:bg-gray-50'
                                                    }`}
                                                >
                                                    <span className={`h-2 w-2 rounded-full ${getStatusDotColor(status)}`} />
                                                    <span>{status}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ViewModal
                isOpen={isDetailsModalOpen}
                selectedOrder={selectedOrder}
                onClose={closeDetailsModal}
                handleStatusChange={handleStatusChange}
                statusOptions={statusOptions}
                formatOrderPrice={formatOrderPrice}
                orderDetailImage={orderDetailImage}
                selectedOrderIndex={selectedOrderIndex}
            />
        </div>
    );
};

export default Order;