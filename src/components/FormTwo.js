import { useLocalStorage } from '../useLocalStorage';
import Title from './Title';
import './Form.css';

const Form = ({ toggleForm }) => {
  const [company, setCompany] = useLocalStorage('company', '');
  const [name, setName] = useLocalStorage('name', '');
  const [phone, setPhone] = useLocalStorage('phone', '');
  const [email, setEmail] = useLocalStorage('email', '');

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleForm();
  };

  return (
    <form className='form mt-5 mb-5 bg-white rounded py-5 px-4 shadow-sm'>
      <Title
        title='Find inbound call centers for your company'
        info='Use our AI and Big Data driven call center sourcing solution'
      />

      <div className='mb-3'>
        <label htmlFor='company' className='form-label'>
          Company
        </label>
        <input
          type='text'
          value={company}
          className='form-control'
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          value={name}
          className='form-control'
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='phone' className='form-label'>
          Phone
        </label>
        <input
          type='text'
          value={phone}
          className='form-control'
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          E-mail
        </label>
        <input
          type='text'
          value={email}
          className='form-control'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit} className='btn btn-primary'>
        Get informed
      </button>
    </form>
  );
};

export default Form;
