import banner from '../../../../../../src/assets/banner/herobanner.png'
import Container from '../../../../../layout/Container';

const Hero = () => {
    return (
        <Container>
            <div className='mt-3.5'>
            <img src={banner} className='rounded-lg' alt="Hero Banner" />
        </div>
        </Container>
    );
};

export default Hero;