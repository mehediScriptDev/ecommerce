import React, { useState } from 'react';
import Modal from './component/Modal';
const orders = [
    {
        id: '#ord-001',
        title: 'iPhone 8 Plus – Classic Performance, Timeless Design',
        description:
            'Experience smooth performance with the powerful A11 Bionic chip, a stunning Retina HD display, and a reliable dual-camera system.',
        price: '$199',
        image: 'https://placehold.co/260x200/1a1a2e/ffffff?text=iPhone+8+Plus',
    },
    {
        id: '#ord-001',
        title: 'Samsung Galaxy – Power, Performance, and Innovation',
        description:
            'Enjoy stunning display quality, powerful performance, and advanced camera features with Samsung Galaxy devices.',
        price: '$199',
        image: 'https://placehold.co/260x200/1a1a2e/ffffff?text=Samsung+Galaxy',
    },
    {
        id: '#ord-001',
        title: 'Samsung Galaxy – Built for Everyday Excellence',
        description:
            'Capture sharp photos, experience smooth performance, and enjoy long-lasting battery life. Samsung brings you reliability and innovation in one sleek device.',
        price: '$199',
        image: 'https://placehold.co/260x200/1a1a2e/ffffff?text=Samsung+Galaxy',
    },
];



const UserOrders = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const openCancelModal = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    const handleSend = (reason) => {
        // TODO: send cancel request to API
        console.log('Cancel order', selectedOrder?.id, 'reason:', reason);
        handleClose();
    };

    return (
        <div className="max-w-4xl">
            {orders.map((order, i) => (
                <div
                    key={i}
                    className="flex gap-5 bg-white border-b border-gray-200 py-6 px-4"
                >
                    <img
                        src={order.image}
                        alt={order.title}
                        className="w-52 h-40 object-cover rounded-md shrink-0"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-xs text-gray-400 mb-1">Order ID: {order.id}</p>
                        <h2 className="text-lg font-bold text-gray-900 mb-1">{order.title}</h2>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{order.description}</p>
                        <p className="text-xl font-bold text-gray-900 mb-3">{order.price}</p>
                        <button
                            onClick={() => openCancelModal(order)}
                            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-md w-fit transition-colors"
                        >
                            Cancel Order
                        </button>
                    </div>
                </div>
            ))}

            <Modal isOpen={isModalOpen} onClose={handleClose} onSend={handleSend} />
        </div>
    );
};

export default UserOrders;
