import { useState } from 'react';
import { FormField, TextInput } from '../../../components/shared/form';
import ProfileHeader from './components/ProfileHeader';
import AdminDashboardTitle from '../../../components/dashboards/AdminDashboardTitle';

const AdminProfile = () => {
    const [formData, setFormData] = useState({
        fullName: 'John Industries',
        email: 'admin@johnindustries.com',
        newPassword: '',
        confirmPassword: '',
    });

    const updateField = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile updated:', formData);
    };

    return (
        <div className="space-y-6">
            <div className=''>
                <AdminDashboardTitle title="Admin Profile" subtitle={"Manage your account and store preferences."} />
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-8">
                <ProfileHeader />

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <h3 className="mb-6 text-base font-semibold text-gray-900">Personal Information</h3>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <FormField label="Full Name">
                                <TextInput
                                    name="fullName"
                                    placeholder="John Industries"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </FormField>
                            <FormField label="Email">
                                <TextInput
                                    name="email"
                                    type="email"
                                    placeholder="admin@johnindustries.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </FormField>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-6 text-base font-semibold text-gray-900">Change Password</h3>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <FormField label="New Password">
                                <TextInput
                                    name="newPassword"
                                    type="password"
                                    placeholder="••••••"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                />
                            </FormField>
                            <FormField label="Confirm New Password">
                                <TextInput
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="••••••"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </FormField>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="rounded-lg btn-custom px-6 py-2.5 text-sm font-medium text-white  transition"
                    >
                        Save Preferences
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminProfile;
