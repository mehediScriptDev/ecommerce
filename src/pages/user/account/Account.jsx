import React, { useState } from 'react';
import Container from '../../../layout/Container';

const Account = () => {
    const [profile, setProfile] = useState({
        firstName: 'Kevin',
        lastName: 'Display name',
        email: 'customer@gmail.com',
        phone: '+1-202-555-0118',
        region: 'Alabama',
        city: 'Montgomery',
        zip: '1000',
        address: 'Road No. 13/x, House no. 1320/C, Flat No. 5D',
    });

    const [passwords, setPasswords] = useState({
        current: '',
        newPass: '',
        confirm: '',
    });

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile((p) => ({ ...p, [name]: value }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords((s) => ({ ...s, [name]: value }));
    };

    const saveProfile = (e) => {
        e.preventDefault();
        console.log('Saving profile', profile);
    };

    const changePassword = (e) => {
        e.preventDefault();
        if (passwords.newPass.length < 8) {
            alert('New password must be at least 8 characters');
            return;
        }
        if (passwords.newPass !== passwords.confirm) {
            alert('New password and confirm password do not match');
            return;
        }
        console.log('Change password', passwords);
        setPasswords({ current: '', newPass: '', confirm: '' });
    };

    return (
       
            <div className="space-y-6">
                <section className="rounded border border-gray-200 bg-white p-6">
                    <h3 className="mb-4 text-sm font-semibold text-gray-700">ACCOUNT SETTING</h3>
                    <div className="flex gap-8">
                        <div className="shrink-0">
                            <div className="relative w-28">
                                <img src="https://placehold.co/128x128/87d4d6/fff?text=Avatar" alt="avatar" className="h-28 w-28 rounded-full object-cover" />
                                <button className="absolute bottom-0 right-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V8.414A2 2 0 0016.414 7L14 4.586A2 2 0 0012.586 4H4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <form onSubmit={saveProfile} className="flex-1">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-xs font-medium text-gray-600">First name</label>
                                    <input name="firstName" value={profile.firstName} onChange={handleProfileChange} className="w-full rounded border border-gray-200 px-3 py-2 text-sm" />
                                </div>

                                <div>
                                    <label className="mb-1 block text-xs font-medium text-gray-600">Last name</label>
                                    <input name="lastName" value={profile.lastName} onChange={handleProfileChange} className="w-full rounded border border-gray-200 px-3 py-2 text-sm" />
                                </div>

                                <div>
                                    <label className="mb-1 block text-xs font-medium text-gray-600">Email</label>
                                    <input name="email" value={profile.email} onChange={handleProfileChange} className="w-full rounded border border-gray-200 px-3 py-2 text-sm" />
                                </div>

                                <div>
                                    <label className="mb-1 block text-xs font-medium text-gray-600">Phone Number</label>
                                    <input name="phone" value={profile.phone} onChange={handleProfileChange} className="w-full rounded border border-gray-200 px-3 py-2 text-sm" />
                                </div>

                                <div>
                                    <label className="mb-1 block text-xs font-medium text-gray-600">Region/State</label>
                                    <select name="region" value={profile.region} onChange={handleProfileChange} className="w-full rounded border border-gray-200 px-3 py-2 text-sm">
                                        <option>Alabama</option>
                                        <option>California</option>
                                        <option>Texas</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="mb-1 block text-xs font-medium text-gray-600">City</label>
                                    <input name="city" value={profile.city} onChange={handleProfileChange} className="w-full rounded border border-gray-200 px-3 py-2 text-sm" />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="mb-1 block text-xs font-medium text-gray-600">Address</label>
                                    <input name="address" value={profile.address} onChange={handleProfileChange} className="w-full rounded border border-gray-200 px-3 py-2 text-sm" />
                                </div>

                                <div>
                                    <label className="mb-1 block text-xs font-medium text-gray-600">Zip Code</label>
                                    <input name="zip" value={profile.zip} onChange={handleProfileChange} className="w-full rounded border border-gray-200 px-3 py-2 text-sm" />
                                </div>

                            </div>

                            <div className="mt-4">
                                <button className="rounded bg-custom px-4 py-2 text-sm font-medium text-white">SAVE CHANGES</button>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="rounded border border-gray-200 bg-white p-6">
                    <h3 className="mb-4 text-sm font-semibold text-gray-700">CHANGE PASSWORD</h3>
                    <form onSubmit={changePassword} className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="mb-1 block text-xs font-medium text-gray-600">Current Password</label>
                            <input name="current" type="password" value={passwords.current} onChange={handlePasswordChange} className="w-full rounded border border-gray-200 px-3 py-2 text-sm" />
                        </div>

                        <div>
                            <label className="mb-1 block text-xs font-medium text-gray-600">New Password</label>
                            <input name="newPass" type="password" value={passwords.newPass} onChange={handlePasswordChange} className="w-full rounded border border-gray-200 px-3 py-2 text-sm" placeholder="8+ characters" />
                        </div>

                        <div>
                            <label className="mb-1 block text-xs font-medium text-gray-600">Confirm Password</label>
                            <input name="confirm" type="password" value={passwords.confirm} onChange={handlePasswordChange} className="w-full rounded border border-gray-200 px-3 py-2 text-sm" />
                        </div>

                        <div>
                            <button className="mt-2 rounded bg-custom px-4 py-2 text-sm font-medium text-white">CHANGE PASSWORD</button>
                        </div>
                    </form>
                </section>
            </div>
  
    );
};

export default Account;
