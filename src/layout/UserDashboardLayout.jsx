import { useState } from 'react';
import { Outlet } from 'react-router';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

const UserDashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <DashboardHeader
                userName="Atik Adnan"
                role="User"
                onMenuToggle={toggleSidebar}
                isSidebarOpen={sidebarOpen}
            />
            <div className="flex flex-1 overflow-hidden">
                <DashboardSidebar role="user" isOpen={sidebarOpen} onClose={closeSidebar} />
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default UserDashboardLayout;