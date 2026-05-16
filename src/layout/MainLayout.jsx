
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
    return (
        <>
            <ScrollToTop />
            <div>
                <Navbar/>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default MainLayout;