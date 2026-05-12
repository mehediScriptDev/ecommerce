import React, { useState } from 'react';
import AdminDashboardTitle from '../../../components/dashboards/AdminDashboardTitle';
import ViewDetailsModal from './components/ViewDetailsModal';

const CellPhoneMange = () => {
    const [openActionMenu, setOpenActionMenu] = useState(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedPhoneIndex, setSelectedPhoneIndex] = useState(null);

    const [phonesData, setPhonесData] = useState([
        {
            id: '#PHO-001',
            customer: 'Darlene Robertson',
            phoneNumber: 'iPhone 15 Pro Max',
            email: '150,000',
            date: '2024-03-24',
            status: 'Contracted',
        },
        {
            id: '#PHO-002',
            customer: 'Cameron Williamson',
            phoneNumber: 'Samsung Galaxy S24 Ultra',
            email: '190,000',
            date: '2024-03-24',
            status: 'New',
        },
        {
            id: '#PHO-003',
            customer: 'Darlene Robertson',
            phoneNumber: 'iPhone 15 Pro Max',
            email: '150,000',
            date: '2024-03-24',
            status: 'Contracted',
        },
        {
            id: '#PHO-004',
            customer: 'Cameron Williamson',
            phoneNumber: 'Samsung Galaxy S24 Ultra',
            email: '190,000',
            date: '2024-03-24',
            status: 'New',
        },
        {
            id: '#PHO-005',
            customer: 'Cameron Williamson',
            phoneNumber: 'Samsung Galaxy S24 Ultra',
            email: '190,000',
            date: '2024-03-24',
            status: 'New',
        },
        {
            id: '#PHO-006',
            customer: 'Cameron Williamson',
            phoneNumber: 'Samsung Galaxy S24 Ultra',
            email: '190,000',
            date: '2024-03-24',
            status: 'New',
        },
        {
            id: '#PHO-007',
            customer: 'Cameron Williamson',
            phoneNumber: 'Samsung Galaxy S24 Ultra',
            email: '190,000',
            date: '2024-03-24',
            status: 'New',
        },
        {
            id: '#PHO-008',
            customer: 'Cameron Williamson',
            phoneNumber: 'Samsung Galaxy S24 Ultra',
            email: '190,000',
            date: '2024-03-24',
            status: 'New',
        },
    ]);

    const statusOptions = ['Contracted', 'New'];
    const phoneDetailImage = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=470&hei=556&fmt=png&qlt=95&.v=1692923777972';
    const selectedPhone = selectedPhoneIndex !== null ? phonesData[selectedPhoneIndex] : null;

    const getStatusColor = (status) => {
        const colors = {
            'Contracted': 'bg-purple-100 text-purple-800',
            'New': 'bg-blue-100 text-blue-800',
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    const getStatusDotColor = (status) => {
        const colors = {
            'Contracted': 'bg-purple-500',
            'New': 'bg-blue-500',
        };
        return colors[status] || 'bg-gray-500';
    };

    const handleStatusChange = (index, newStatus) => {
        setPhonесData((prev) => prev.map((item, i) => (
            i === index ? { ...item, status: newStatus } : item
        )));
        setOpenActionMenu(null);
    };

    const handleViewDetails = (index) => {
        setSelectedPhoneIndex(index);
        setIsDetailsModalOpen(true);
        setOpenActionMenu(null);
    };

    const closeDetailsModal = () => {
        setIsDetailsModalOpen(false);
    };

    return (
        <div>
            <AdminDashboardTitle
                title="Sell Phone Manage"
                subtitle="Track and manage all customer Sell phone"
            />

            <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 bg-white">
                <table className="w-full">
                    <thead className="border-b border-gray-200 bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Phone Number</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Phone Number</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {phonesData.map((phone, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition">
                                <td className="px-6 py-4 text-sm text-gray-700">{phone.customer}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{phone.phoneNumber}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{phone.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{phone.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(phone.status)}`}>
                                        {phone.status}
                                    </span>
                                </td>
                                <td className="relative px-6 py-4">
                                    <button
                                        type="button"
                                        onClick={() => setOpenActionMenu(openActionMenu === index ? null : index)}
                                        className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100"
                                    >
                                        <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
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
                                                        phone.status === status
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

            <ViewDetailsModal
                isOpen={isDetailsModalOpen}
                selectedPhone={selectedPhone}
                onClose={closeDetailsModal}
                handleStatusChange={handleStatusChange}
                statusOptions={statusOptions}
                phoneDetailImage={phoneDetailImage}
                selectedPhoneIndex={selectedPhoneIndex}
            />
        </div>
    );
};

export default CellPhoneMange;