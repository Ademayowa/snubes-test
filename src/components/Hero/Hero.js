import Form from '../Form';
import Banner from '../Banner';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <Form />
          </div>

          <div className='col-lg-6 heroRight d-none d-lg-block'>
            <Banner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
