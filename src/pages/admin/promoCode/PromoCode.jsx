import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import AdminDashboardTitle from '../../../components/dashboards/AdminDashboardTitle';
import ViewDetailsModal from './components/ViewDetailsModal';

const PromoCode = () => {
    const navigate = useNavigate();
    const [openActionMenu, setOpenActionMenu] = useState(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedCodeIndex, setSelectedCodeIndex] = useState(null);
    const [statusFilter, setStatusFilter] = useState('All Status');

    const [promoData, setPromoData] = useState([
        {
            id: '#PRO-001',
            code: 'OLD2025',
            discountType: 'Percentage',
            discountValue: '15%',
            minOrder: '$20',
            usageLimit: '100',
            usedCount: '75/100',
            status: 'Active',
            expiryDate: 'Dec 31, 2025',
        },
        {
            id: '#PRO-002',
            code: 'OLD2025',
            discountType: 'Percentage',
            discountValue: '15%',
            minOrder: '$20',
            usageLimit: '100',
            usedCount: '75/100',
            status: 'Disabled',
            expiryDate: 'Dec 31, 2025',
        },
        {
            id: '#PRO-003',
            code: 'Ismail',
            discountType: 'Fixed',
            discountValue: '$100',
            minOrder: '$0',
            usageLimit: 'Unlimited',
            usedCount: '75/unlimited',
            status: 'Expired',
            expiryDate: 'Dec 31, 2025',
        },
        {
            id: '#PRO-004',
            code: 'OLD2025',
            discountType: 'Percentage',
            discountValue: '15%',
            minOrder: '$20',
            usageLimit: '100',
            usedCount: '75/100',
            status: 'Disabled',
            expiryDate: 'Dec 31, 2025',
        },
        {
            id: '#PRO-005',
            code: 'Ismail',
            discountType: 'Fixed',
            discountValue: '$100',
            minOrder: '$0',
            usageLimit: 'Unlimited',
            usedCount: '75/unlimited',
            status: 'Active',
            expiryDate: 'Dec 31, 2025',
        },
        {
            id: '#PRO-006',
            code: 'OLD2025',
            discountType: 'Percentage',
            discountValue: '15%',
            minOrder: '$20',
            usageLimit: '100',
            usedCount: '75/100',
            status: 'Disabled',
            expiryDate: 'Dec 31, 2025',
        },
        {
            id: '#PRO-007',
            code: 'Ismail',
            discountType: 'Fixed',
            discountValue: '$100',
            minOrder: '$0',
            usageLimit: 'Unlimited',
            usedCount: '75/unlimited',
            status: 'Active',
            expiryDate: 'Dec 31, 2025',
        },
        {
            id: '#PRO-008',
            code: 'OLD2025',
            discountType: 'Percentage',
            discountValue: '15%',
            minOrder: '$20',
            usageLimit: '100',
            usedCount: '75/100',
            status: 'Disabled',
            expiryDate: 'Dec 31, 2025',
        },
        {
            id: '#PRO-009',
            code: 'Ismail',
            discountType: 'Fixed',
            discountValue: '$100',
            minOrder: '$0',
            usageLimit: 'Unlimited',
            usedCount: '75/unlimited',
            status: 'Active',
            expiryDate: 'Dec 31, 2025',
        },
        {
            id: '#PRO-010',
            code: 'OLD2025',
            discountType: 'Percentage',
            discountValue: '15%',
            minOrder: '$20',
            usageLimit: '100',
            usedCount: '75/100',
            status: 'Disabled',
            expiryDate: 'Dec 31, 2025',
        },
        {
            id: '#PRO-011',
            code: 'OLD2025',
            discountType: 'Percentage',
            discountValue: '15%',
            minOrder: '$20',
            usageLimit: '100',
            usedCount: '75/100',
            status: 'Active',
            expiryDate: 'Dec 31, 2025',
        },
    ]);

    const statusOptions = ['Active', 'Disabled', 'Expired'];
    const selectedPromo = selectedCodeIndex !== null ? promoData[selectedCodeIndex] : null;

    const getStatusColor = (status) => {
        const colors = {
            'Active': 'bg-green-100 text-green-800',
            'Disabled': 'bg-gray-100 text-gray-800',
            'Expired': 'bg-red-100 text-red-800',
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    const getStatusDotColor = (status) => {
        const colors = {
            'Active': 'bg-green-500',
            'Disabled': 'bg-gray-500',
            'Expired': 'bg-red-500',
        };
        return colors[status] || 'bg-gray-500';
    };

    const handleStatusChange = (index, newStatus) => {
        setPromoData((prev) => prev.map((item, i) => (
            i === index ? { ...item, status: newStatus } : item
        )));
        setOpenActionMenu(null);
    };

    const handleViewDetails = (index) => {
        setSelectedCodeIndex(index);
        setIsDetailsModalOpen(true);
        setOpenActionMenu(null);
    };

    const closeDetailsModal = () => {
        setIsDetailsModalOpen(false);
    };

    const filteredData = statusFilter === 'All Status'
        ? promoData
        : promoData.filter(item => item.status === statusFilter || statusFilter === 'Expired');

    return (
        <div>
            <AdminDashboardTitle
                title="Promo Code Management"
                subtitle="Create and manage promotional codes for your e-commerce platform"
            />

            {/* Filters and Button */}
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex gap-3">
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="rounded-lg border border-gray-300 bg-white px-4 py-1.5 text-sm text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-custom"
                    >
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Disabled</option>
                        <option>Expired</option>
                    </select>
                </div>
                <button 
                    type="button"
                    onClick={() => navigate('/dashboard/admin/create-promo')}
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-600 transition">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create Promo Code
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
                <table className="w-full">
                    <thead className="border-b border-gray-200 bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Promo Code</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Discount Type</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Discount Value</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Min Order</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Usage Limit</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Used Count</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Expiry Date</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((promo, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition">
                                <td className="px-6 py-4 text-sm font-medium text-gray-700">{promo.code}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{promo.discountType}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{promo.discountValue}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{promo.minOrder}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{promo.usageLimit}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{promo.usedCount}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(promo.status)}`}>
                                        {promo.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">{promo.expiryDate}</td>
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
                                                        promo.status === status
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
                selectedPromo={selectedPromo}
                onClose={closeDetailsModal}
                handleStatusChange={handleStatusChange}
                statusOptions={statusOptions}
                selectedCodeIndex={selectedCodeIndex}
            />
        </div>
    );
};

export default PromoCode;