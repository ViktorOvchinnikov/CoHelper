import React from 'react';
import '../Styles/Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img alt='success' className='form-img-2' src='img/img-3.svg'/>
    </div>
  );
};

export default FormSuccess;