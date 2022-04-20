import Section from '../components/Section';
import Img from '../images/snubes-desk.png';
import Img2 from '../images/snubes-mobile.png';
import './Whysnubes.css';

const Whysnubes = () => {
  return (
    <section className='whySnubes shadow-sm bg-white mt-3'>
      <div className='container py-5'>
        <div className='row'>
          {/* remove margin later */}
          <div className='col-lg-6'>
            <h4>Why Snubes</h4>

            <Section
              title='Trusted Know-How'
              info='We have more than 20 years of experience and continuously check call centers for their quality and capabilities. Customers like Allianz trust Snubes industry knowledge.'
            />
            <Section
              title='Time and cost savings'
              info='With Snubes you can easily compare prices, quality and availability, and find more potential suppliers. Reach your goal faster and save resources.'
            />
            <Section
              title='Satisfaction guaranteed'
              info='We offer a validated data-based approach to procurement, rather than awarding contracts only based on the lowest price, an existing relationship or "gut feeling".'
            />
          </div>

          <div className='col-lg-6'></div>
        </div>
      </div>

      {/* Show on desktop only */}
      <img
        src={Img}
        alt='laptop'
        className='img-fluid desktop-img d-none d-lg-block'
      />
      <img src={Img2} alt='laptop' className='img-fluid mobile-img' />
    </section>
  );
};

export default Whysnubes;
