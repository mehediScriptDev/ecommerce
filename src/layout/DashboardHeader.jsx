import logo from '../assets/logo.webp';
import { Link } from "react-router";
import { FiMenu, FiX } from 'react-icons/fi';

const DashboardHeader = ({ userName = 'Atik Adnan', role = 'Admin', onMenuToggle, isSidebarOpen }) => {
    return (
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center gap-4">
                {/* Mobile menu button */}
                <button
                    onClick={onMenuToggle}
                    className="lg:hidden btn btn-ghost btn-circle btn-sm"
                >
                    {isSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </button>
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
                </Link>
            </div>
            <div className="text-right">
                <p className="text-sm font-semibold text-gray-800">{userName}</p>
                <p className="text-xs text-gray-400 capitalize">{role}</p>
            </div>
        </header>
    );
};

export default DashboardHeader;
