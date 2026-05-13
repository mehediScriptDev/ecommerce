import { Link } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.webp';

const DashboardHeader = ({ userName = 'Atik Adnan', role = 'Admin', onMenuToggle, isSidebarOpen }) => {
    return (
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuToggle}
                    className="btn btn-ghost btn-circle btn-sm lg:hidden"
                    aria-label="Toggle menu"
                >
                    {isSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </button>
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
                </Link>
            </div>
            <div className="text-right">
                <p className="text-sm font-semibold text-gray-800">{userName}</p>
                <p className="text-xs capitalize text-gray-400">{role}</p>
            </div>
        </header>
    );
};

export default DashboardHeader;
