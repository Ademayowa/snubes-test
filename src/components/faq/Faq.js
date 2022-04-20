import Section from '../Section';
import Img from '../../images/info-1.png';
import './Faq.css';
import FaqForm from '../FaqForm';

const FAQ = () => {
  return (
    <section className='faq shadow-sm bg-white mt-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 mt-lg-5'>
            <h4 className='mt-5'>Frequently Asked Questions</h4>
            <Section
              title='Are the call centers verified?'
              info='All call centers in our database are checked by quality assurance
              experts. We also take a look at their data and track the key
              performance indicators. In addition, clients rate call centers and
              share their customer experience.'
            />
            <Section
              title='Which inbound services are offered at Snubes?'
              info='Our listed call centers offer a broad spectrum of customer services, such as technical support, first-level support, helpdesk, overflow/after-hours support, etc.'
            />
            <Section
              title='Are there any costs?'
              info='The services of Snubes are free of charge and our call center experts advise you independently and personally. Together we strive to find the optimal solution.'
            />

            <img
              src={Img}
              alt='form'
              className='img-fluid d-none d-lg-block mt-lg-2 mb-4'
            />
          </div>

          <div className='col-lg-5 d-none d-lg-block'>
            <FaqForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
