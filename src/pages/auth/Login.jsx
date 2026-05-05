// src/pages/Login.jsx
import { Link } from 'react-router';
import leftImage from '../../assets/auth/login.jpg';

const Login = () => {
    return (
        <div className="flex h-screen w-full overflow-hidden">
            {/* Left - Image */}
            <div className="hidden md:block w-1/2 h-full overflow-hidden">
                <img
                    src={leftImage}
                    className="w-full h-full ken-burns-image object-cover"
                    alt="Login"
                />
            </div>

            {/* Right - Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-10 overflow-y-auto">
                <div className="w-full max-w-sm form-stagger">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                        Login to Continue
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 mb-6 lg:mb-8">
                        Sign in to your account to view contact details.
                    </p>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email here..."
                            className="input w-full bg-[#ebecf0] border-none focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-2">
                        <label className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password here..."
                            className="input w-full bg-[#ebecf0] border-none focus:outline-none"
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right mb-5">
                        <Link to="/forget-password" className="text-sm font-semibold text-custom hover:underline">
                            Forget Password?
                        </Link>
                    </div>

                    {/* Sign In Button */}
                    <button className="btn btn-custom w-full text-base font-semibold">
                        Sign In
                    </button>

                    {/* Sign Up */}
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't Have an account{' '}
                        <Link to="/register" className="text-custom font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;