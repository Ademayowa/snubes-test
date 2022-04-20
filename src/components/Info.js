import Img1 from '../images/sign-up.svg';
import Img2 from '../images/offers.svg';
import Img3 from '../images/smarter.svg';
import './Info.css';

const Info = () => {
  return (
    <section className='shadow-sm bg-white'>
      <div className='info container mt-3 py-5'>
        <div className='row'>
          <div className='col text-center'>
            <img src={Img1} alt='sign-up' />
            <h4 className='mt-4'>Sign up for free</h4>
            <p>
              Signing up and setting up your project takes less than 5 minutes
            </p>
          </div>

          <div className='col text-center'>
            <img src={Img3} alt='smarter' />
            <h4 className='mt-4'>Source smarter</h4>
            <p>
              Our data-based AI and our experts will help you find exactly what
              you are looking for
            </p>
          </div>

          <div className='col text-center'>
            <img src={Img2} alt='offers' />
            <h4 className='mt-4'>Receive offers</h4>
            <p>
              With our insights you always receive high-quality proposals at the
              best price
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
