import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FiShoppingCart, FiX, FiMenu } from 'react-icons/fi';
import logo from '../assets/logo.webp';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/products', label: 'Products' },
        { to: '/for-businesses', label: 'For Businesses' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <div className="navbar container mx-auto px-4 lg:px-6">

                {/* LEFT — hamburger + logo */}
                <div className="navbar-start">
                    {/* Mobile hamburger */}
                    <button
                        className="btn btn-ghost btn-circle lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <FiMenu size={22} />
                    </button>

                    {/* Logo */}
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
                    </Link>
                </div>

                {/* CENTER — desktop nav */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1 px-1">
                        {navLinks.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-custom font-semibold border-b-2 border-custom rounded-none bg-transparent'
                                            : 'hover:bg-transparent hover:text-custom'
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT — cart + buttons */}
                <div className="navbar-end gap-2 lg:gap-3">
                    <button className="btn btn-ghost hover:bg-gray-100 border-none btn-circle">
                        <FiShoppingCart size={20} />
                    </button>
                    <Link
                        to="/login"
                        className="btn bg-[#2E395B] hover:bg-[#1C253B] text-white border-none text-sm font-medium px-4"
                    >
                        Log In
                    </Link>
                    <Link
                        to="/sell"
                        className="btn btn-custom text-white border-none text-sm font-medium px-4 hidden sm:flex"
                    >
                        Sell Your Phone
                    </Link>
                </div>
            </div>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300
                    ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white z-50 lg:hidden
                    flex flex-col shadow-2xl
                    transition-transform duration-300 ease-in-out
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Sidebar header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <Link to="/" onClick={() => setSidebarOpen(false)}>
                        <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
                    </Link>
                    <button
                        className="btn btn-ghost btn-circle btn-sm"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <FiX size={20} />
                    </button>
                </div>

                {/* Sidebar nav links */}
                <ul className="flex flex-col px-4 py-6 gap-1 flex-1">
                    {navLinks.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                    `block px-4 py-3 rounded-lg text-base font-medium transition-colors
                                    ${isActive
                                        ? 'text-custom bg-teal-50 border-l-4 border-custom'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-custom'
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Sidebar bottom buttons */}
                <div className="flex flex-col gap-3 px-6 py-6 border-t border-gray-100">
                    <Link
                        to="/login"
                        onClick={() => setSidebarOpen(false)}
                        className="btn bg-gray-800 hover:bg-gray-700 text-white border-none w-full"
                    >
                        Log In / Sign Up
                    </Link>
                    <Link
                        to="/sell"
                        onClick={() => setSidebarOpen(false)}
                        className="btn btn-custom text-white border-none w-full"
                    >
                        Sell Your Phone
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;