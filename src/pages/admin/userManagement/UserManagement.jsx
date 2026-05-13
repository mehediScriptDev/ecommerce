import { useState } from 'react';
import AdminDashboardTitle from '../../../components/dashboards/AdminDashboardTitle';

const UserManagement = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Cameron Williamson',
            phone: '(406) 555-0120',
            email: 'michael.mitc@example.com',
            status: 'Suspended',
            joinedDate: 'Dec 31, 2025',
        },
        {
            id: 2,
            name: 'Arlene McCoy',
            phone: '(684) 555-0102',
            email: 'michelle.rivera@example.com',
            status: 'Active',
            joinedDate: 'Dec 31, 2025',
        },
        {
            id: 3,
            name: 'Jerome Bell',
            phone: '(316) 555-0116',
            email: 'sara.cruz@example.com',
            status: 'Active',
            joinedDate: 'Dec 31, 2025',
        },
        {
            id: 4,
            name: 'Devon Lane',
            phone: '(209) 555-0104',
            email: 'dolores.chambers@example.com',
            status: 'Active',
            joinedDate: 'Dec 31, 2025',
        },
        {
            id: 5,
            name: 'Kathryn Murphy',
            phone: '(207) 555-0119',
            email: 'nathan.roberts@example.com',
            status: 'Active',
            joinedDate: 'Dec 31, 2025',
        },
        {
            id: 6,
            name: 'Esther Howard',
            phone: '(201) 555-0124',
            email: 'georgia.young@example.com',
            status: 'Active',
            joinedDate: 'Dec 31, 2025',
        },
        {
            id: 7,
            name: 'Annette Black',
            phone: '(480) 555-0103',
            email: 'debra.holt@example.com',
            status: 'Active',
            joinedDate: 'Dec 31, 2025',
        },
        {
            id: 8,
            name: 'Wade Warren',
            phone: '(603) 555-0123',
            email: 'nevaeh.simmons@example.com',
            status: 'Active',
            joinedDate: 'Dec 31, 2025',
        },
        {
            id: 9,
            name: 'Ralph Edwards',
            phone: '(219) 555-0114',
            email: 'felicia.reid@example.com',
            status: 'Active',
            joinedDate: 'Dec 31, 2025',
        },
        {
            id: 10,
            name: 'Kristin Watson',
            phone: '(702) 555-0122',
            email: 'jackson.graham@example.com',
            status: 'Suspended',
            joinedDate: 'Dec 31, 2025',
        },
        {
            id: 11,
            name: 'Courtney Henry',
            phone: '(239) 555-0108',
            email: 'debbie.baker@example.com',
            status: 'Suspended',
            joinedDate: 'Dec 31, 2025',
        },
    ]);

    const [openActionMenu, setOpenActionMenu] = useState(null);

    const getStatusColor = (status) => {
        const colors = {
            'Active': 'bg-green-100 text-green-800',
            'Suspended': 'bg-red-100 text-red-800',
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    const handleStatusChange = (id, newStatus) => {
        setUsers((prev) =>
            prev.map((user) =>
                user.id === id ? { ...user, status: newStatus } : user
            )
        );
        setOpenActionMenu(null);
    };

    return (
        <div>
            <AdminDashboardTitle title="User Management" />

            <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
                <table className="w-full">
                    <thead className="border-b border-gray-200 bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Phone Number</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Joined Date</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.phone}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                                            user.status
                                        )}`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.joinedDate}</td>
                                <td className="relative px-6 py-4">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenActionMenu(
                                                openActionMenu === user.id ? null : user.id
                                            )
                                        }
                                        className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100"
                                    >
                                        <svg
                                            className="h-5 w-5 text-gray-500"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="12" cy="5" r="2" />
                                            <circle cx="12" cy="12" r="2" />
                                            <circle cx="12" cy="19" r="2" />
                                        </svg>
                                    </button>
                                    {openActionMenu === user.id && (
                                        <div className="absolute right-0 top-10 z-10 rounded-lg border border-gray-200 bg-white shadow-lg">
                                            <button
                                                type="button"
                                                onClick={() => handleStatusChange(user.id, 'Active')}
                                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg"
                                            >
                                                Active
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleStatusChange(user.id, 'Suspended')}
                                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                                            >
                                                Suspend User
                                            </button>
                                            <button
                                                type="button"
                                                className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 last:rounded-b-lg"
                                            >
                                                Delete User
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;