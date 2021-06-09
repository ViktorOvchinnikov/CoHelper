import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const AuthForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className='sign-up'>
        <div className='form-container'>
          <Link to='/' className='close-btn'>
            <span className='close-btn'>×</span>
          </Link>
          <div className='form-content-left'>
            <img className='form-img' src='images/img13.png' alt='business' />
          </div>
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Введите данные аккаунта своей компании
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Название компании</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Введите название компании'
                    />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Пароль</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Введите пароль'

                    />
                </div>

                <button className='form-input-btn' type='submit'>
                    Войти
            </button>
            </form>
        </div>
        </div>
        </div>
    );
};
export default AuthForm;