import React, { useState } from 'react';
import '../Styles/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { Link } from 'react-router-dom';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className='sign-up'>
      <div className='form-container'>
        <Link to='/' className='close-btn'>
        <span className='close-btn'>×</span>
        </Link>
        <div className='form-content-left'>
          <img className='form-img' src='images/img-12.jpg' alt='business' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </div>
  );
};

export default Form;