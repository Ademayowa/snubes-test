import { useState, useEffect } from 'react';
import FormTwo from '../components/FormTwo';
import DisplayFormData from './DisplayFormData';
import './Form.css';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const toggleForm = () => {
    setSubmitted(true);
  };

  useEffect(() => {}, [submitted]);

  return (
    <>{submitted ? <DisplayFormData /> : <FormTwo toggleForm={toggleForm} />}</>
  );
};

export default Form;
