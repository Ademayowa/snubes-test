import { useState } from 'react';
import './FormInput.css';

const FormInput = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handlefocus = (e) => {
    setFocus(true);
  };

  return (
    <div className='formInput'>
      <label htmlFor='input' className='form-label mt-3 mb-2'>
        {label}
      </label>

      <input
        {...inputProps}
        onFocus={() => inputProps.name === 'errorMessage' && setFocus(true)}
        onChange={onChange}
        onBlur={handlefocus}
        focus={focus.toString()}
        className='form-control form-control-lg'
        required
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
