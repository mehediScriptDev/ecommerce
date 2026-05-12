import { NavLink, Link, useLocation } from 'react-router';
import {
    LayoutDashboard,
    List,
    ShoppingCart,
    Smartphone,
    Tag,
    Users,
    Settings,
    User,
    Star,
} from 'lucide-react';
import logo from '../assets/logo.webp';

const adminNavItems = [
    { label: 'Overview', icon: LayoutDashboard, path: '/dashboard/admin', end: true },
    { label: 'Listing', icon: List, path: '/dashboard/admin/listing', activePatterns: ['/dashboard/admin/listing', '/dashboard/admin/add-listing'] },
    { label: 'Order', icon: ShoppingCart, path: '/dashboard/admin/order' },
    { label: 'Sell Phone', icon: Smartphone, path: '/dashboard/admin/cell-phone' },
    { label: 'Promo Code', icon: Tag, path: '/dashboard/admin/promo-code' },
    { label: 'User Management', icon: Users, path: '/dashboard/admin/user-management' },
    { label: 'Settings', icon: Settings, path: '/dashboard/admin/settings' },
    { label: 'Profile', icon: User, path: '/dashboard/admin/profile' },
];

const userNavItems = [
    { label: 'Order', icon: ShoppingCart, path: '/dashboard/user', end: true },
    { label: 'Products to review', icon: Star, path: '/dashboard/user/reviews' },
    { label: 'Account', icon: User, path: '/dashboard/user/account' },
];

const DashboardSidebar = ({ role, isOpen, onClose }) => {
    const navItems = role === 'admin' ? adminNavItems : userNavItems;
    const location = useLocation();

    return (
        <>
            {/* Mobile backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed lg:static top-0 left-0 bottom-0 w-52 bg-white border-r border-gray-200 flex flex-col shrink-0 z-40 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Mobile Sidebar Header */}
                <div className="h-14 px-4 border-b border-gray-200 flex items-center lg:hidden">
                    <Link to="/" onClick={onClose}>
                        <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
                    </Link>
                </div>

                {/* Nav */}
                <nav className="flex-1 flex flex-col gap-0.5 px-3 py-6 overflow-y-auto">
                    {navItems.map(({ label, icon: Icon, path, end, activePatterns }) => {
                        const isActive = activePatterns 
                            ? activePatterns.some(pattern => location.pathname.startsWith(pattern))
                            : false;

                        return (
                            <NavLink
                                key={path}
                                to={path}
                                end={end}
                                onClick={onClose}
                                className={({ isActive: navIsActive }) => {
                                    const shouldBeActive = activePatterns ? isActive : navIsActive;
                                    return `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                        shouldBeActive
                                            ? 'bg-cyan-50 text-cyan-600'
                                            : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                                    }`;
                                }}
                            >
                                <Icon size={17} />
                                {label}
                            </NavLink>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
};

export default DashboardSidebar;
