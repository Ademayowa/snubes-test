import { useState } from 'react';
import FormInput from './FormInput';
import Title from './Title';
import './Form.css';

const FaqForm = () => {
  const [values, setValues] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: 'company',
      type: 'text',
      placeholder: 'Company',
      errorMessage:
        'Company should be 7-80 characters and numbers are not allowed.',
      label: 'Company',
      pattern: '^[a-zA-Z]{7,80}$',
      required: true,
    },
    {
      id: 2,
      name: 'name',
      type: 'text',
      placeholder: 'Full name',
      errorMessage:
        'Name should be 3-50 characters and all characters are allowed.',
      label: 'Name',
      pattern: '^.{3,50}$',
      required: true,
    },
    {
      id: 3,
      name: 'phone',
      type: 'text',
      placeholder: 'phone',
      errorMessage: 'Only numbers is required.',
      label: 'Phone',
      pattern: '^(@"^d$")',
      required: true,
    },
    {
      id: 4,
      name: 'email',
      type: 'email',
      placeholder: 'name@mail.com',
      errorMessage: 'Email field is required.',
      label: 'E-mail',
      required: true,
    },
  ];

  return (
    <div className='card'>
      <div class='card-header bg-primary text-white text-center'>
        <Title title='Find inbound call centers' />
      </div>

      <form className='form mb-5 rounded px-4'>
        <div className='form-group mb-3'>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>

        <button className='btn btn-primary'>Get informed</button>
      </form>
    </div>
  );
};

export default FaqForm;
