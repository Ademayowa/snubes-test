import Logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-info shadow-sm bg-white'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img src={Logo} alt='logo' className='img-fluid' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span />
          <span className='navbar-toggler-icon fas fa-bars mt-3 text-secondary' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mt-3'>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                About Us
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                How it works
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                Become a Partner
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                EUR
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                EN
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                Sign In
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                Get Access
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
