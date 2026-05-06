import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import leftsideImage from '../../assets/auth/forgetpass.jpg';

const ForgetPass = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setError('Email address is required');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }
        setError('');
        console.log('Send code to:', email);
        navigate('/otp-verification'); 
    };

    return (
        <div className="flex h-screen w-full overflow-hidden">
            {/* Left - Image */}
            <div className="hidden md:block w-1/2 h-full overflow-hidden">
                <img
                    src={leftsideImage}
                    className="w-full h-full ken-burns-image object-cover"
                    alt="Forget Password"
                />
            </div>

            {/* Right - Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-10 overflow-y-auto">
                <div className="w-full max-w-sm form-stagger">

                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                        Forgot Password
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 mb-6 md:mb-8">
                        Enter your email address linked to your account.
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                placeholder='Enter your registered email'
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError('');
                                }}
                                className={`input w-full bg-[#ebecf0] border-none focus:outline-none ${error ? 'border! border-red-400!' : ''}`}
                            />
                            {error && (
                                <p className="text-red-500 text-xs mt-1">{error}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn-custom w-full text-base font-semibold"
                        >
                            Send Code →
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-4">
                        Already have an account?{' '}
                        <Link to="/login" className="text-custom font-semibold hover:underline">
                            Sign In
                        </Link>
                    </p>
                    <p className="text-center text-sm text-gray-500 mt-2">
                        New to Zephyr?{' '}
                        <Link to="/register" className="text-custom font-semibold hover:underline">
                            Create an account
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default ForgetPass;