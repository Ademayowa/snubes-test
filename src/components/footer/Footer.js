import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Img from '../../images/info-1.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='shadow-sm bg-white mt-3 pb-5'>
      <footer>
        <div className='footer container'>
          <div className='row'>
            <div className='col-lg-3 ps-lg-4'>
              <img src={Img} alt='form' className='img-fluid mt-lg-2' />
            </div>
            <div className='col-lg-3'>
              <ul>
                <li>About us</li>
                <li>Become a Partner</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div className='col-lg-3'>
              <ul>
                <li>Imprint</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className='col-lg-3'>
              <ul>
                <li>support@snubes.com</li>
                <li>+49 (0) 305 5645327</li>
                <li>Privacy Policy</li>

                <div>
                  <FaFacebookF />
                  <FaTwitter className='ms-3' />
                  <FaLinkedinIn className='ms-3' />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className='mt-5 mb-5 text-center'>
        <p>&copy; 2019 Snubes GmbH All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
