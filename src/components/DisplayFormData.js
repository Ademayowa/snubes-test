import './DisplayForm.css';

const DisplayFormData = () => {
  const name = JSON.parse(localStorage.getItem('name'));
  const company = JSON.parse(localStorage.getItem('company'));
  const email = JSON.parse(localStorage.getItem('email'));
  const phone = JSON.parse(localStorage.getItem('phone'));

  return (
    <div className='container displayForm mt-4 mb-4'>
      <div className='row'>
        <div className='col-lg-12'>
          <h4>Thank you for your request!</h4>
          <p>
            You’ve taken the first step. Our experts will get in touch with you
            soon.
          </p>
          <hr />

          <ul>
            <li>
              Company <span>{company}</span>
            </li>
            <li>
              Name <span>{name}</span>
            </li>
            <li>
              Phone <span>{phone}</span>
            </li>
            <li>
              Email <span>{email}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisplayFormData;
