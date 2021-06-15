import React from 'react';
import '../Styles/Form.css';
import { Link } from 'react-router-dom';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Поздравляем!<br />Вы успешно зарегистрировались<br />на нашей платформе<br />
      </h1>
      <h1 className='form-success'>Для продолжения <Link className='form-input-login-link' to='/sign-in'>войдите</Link> <br /> в личный кабинет.</h1>
    </div>
  );
};

export default FormSuccess;