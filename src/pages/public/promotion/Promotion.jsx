
import promotion from '../../../assets/banner/promotion.jpg';
import Container from '../../../layout/Container';

const Promotion = () => {
    return (
        <div className='py-10 md:pb-16'>
            
               <Container>
                 <div className='relative'>
                    <img className='rounded-xl text-custom' src={promotion} alt="Promotion" />
                    {/* <button className='text-white font-normal rounded-lg btn-custom  bottom-12  left-164 border-none shadow-none'>Sell your phone</button> */}
                 </div>
               </Container>
            
        </div>
    );
};

export default Promotion;