
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { PageTransitionProvider } from '../components/transitions';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
    return (
        <PageTransitionProvider>
            <ScrollToTop />
            <div>
                <Navbar/>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </PageTransitionProvider>
    );
};

export default MainLayout;