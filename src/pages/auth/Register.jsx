// src/pages/Register.jsx
import leftsideImage from '../../assets/register.png';

const Register = () => {
    return (
        <div className="flex h-screen w-full">
            {/* Left - Image */}
            <div className="hidden md:block w-1/2 h-full">
                <img
                    src={leftsideImage}
                    className="w-full h-full object-cover"
                    alt="Register"
                />
            </div>

            {/* Right - Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-10 overflow-y-auto">
                <div className="w-full max-w-md py-10">
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">
                        Register Account
                    </h1>
                    <p className="text-sm text-gray-500 mb-6">
                        Provide your basic personal details to create your user profile.
                    </p>

                    {/* First Name & Last Name */}
                    <div className="flex gap-3 mb-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="input w-full bg-gray-100 border-none focus:outline-none"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                className="input w-full bg-gray-100 border-none focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your business email.."
                            className="input w-full bg-gray-100 border-none focus:outline-none"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Number
                        </label>
                        <input
                            type="tel"
                            placeholder="Enter your Phone number.."
                            className="input w-full bg-gray-100 border-none focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="write password"
                            className="input w-full bg-gray-100 border-none focus:outline-none"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="confirm password"
                            className="input w-full bg-gray-100 border-none focus:outline-none"
                        />
                    </div>

                    {/* Sign Up Button */}
                    <button className="btn btn-custom w-full text-base font-semibold">
                        Sign UP
                    </button>

                    {/* Log In */}
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already Have an account{' '}
                        <a href="/login" className="text-custom font-semibold hover:underline">
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;