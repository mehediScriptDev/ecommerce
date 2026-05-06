import React, { Suspense } from 'react';
import Featured from './sections/featured/Featured';

const Home = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}><Featured/></Suspense>
        </div>
    );
};

export default Home;