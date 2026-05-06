import React, { Suspense } from 'react';
import Featured from './sections/featured/Featured';
import Container from '../../../layout/Container';

const Home = () => {
    return (
        <Container>
            <div>
            <Suspense fallback={<div>Loading...</div>}><Featured/></Suspense>
        </div>
        </Container>
    );
};

export default Home;