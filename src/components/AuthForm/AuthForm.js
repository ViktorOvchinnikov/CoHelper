import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import authImg from '../../images/img13.png';

const AuthForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className='sign-in'>
        <div className='form-container-auth'>
          <Link to='/' className='close-btn-auth'>
            <span className='close-btn-auth'>×</span>
          </Link>
          <div className='form-content-left-auth'>
            <img className='form-img-auth' src={authImg} alt='business' />
          </div>
        <div className='form-content-right-auth'>
            <form onSubmit={handleSubmit} className='form-auth' noValidate>
                <h1>
                    Введите данные аккаунта своей компании
                </h1>
                <div className='form-inputs-auth'>
                    <label className='form-label-auth'>Название компании</label>
                    <input
                        className='form-input-auth'
                        type='text'
                        name='username'
                        placeholder='Введите название компании'
                    />
                </div>
                <div className='form-inputs-auth'>
                    <label className='form-label-auth'>Пароль</label>
                    <input
                        className='form-input-auth'
                        type='password'
                        name='password'
                        placeholder='Введите пароль'

                    />
                </div>

                <button className='form-input-btn-auth' type='submit'>
                    Войти
            </button>
            </form>
        </div>
        </div>
        </div>
    );
};
export default AuthForm;