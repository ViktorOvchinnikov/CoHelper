import React, { useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import '../Styles/Form.css';
import '../Styles/Checkboxes.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const [checkProv, setCheckProv] = useState(true);
  const [checkClient, setCheckClient] = useState(true);
  const [checkInvest, setCheckInvest] = useState(true);
  const [checkAdv, setCheckAdv] = useState(true);

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Найдите бизнес-партнера сегодня!
          Создайте аккаунт своей компании, заполнив информацию ниже.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Название компании</label>{errors.username && <p className='form-error'>{errors.username}</p>}
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Введите название компании'
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Чем занимается Ваша компания?</label>{errors.activity && <p className='form-error'>{errors.activity}</p>}
          <select
            className='form-input'
            name='activity'
            onChange={e => values.activity = e.target.value}
          >
            <option className='form-input' value='0' selected disabled>Выберите род деятельности</option>
            <option className='form-input' value='1'>IT, компьютеры, интернет</option>
            <option className='form-input' value='2'>Гостинично-ресторанный бизнес, туризм</option>
            <option className='form-input' value='3'>Дизайн, творчество</option>
            <option className='form-input' value='4'>Красота, фитнес, спорт</option>
            <option className='form-input' value='5'>Образование, наука</option>
            <option className='form-input' value='6'>Сельское хозяйство, агробизнес</option>
            <option className='form-input' value='7'>Розничная торговля</option>
            <option className='form-input' value='8'>Сфера обслуживания</option>
            <option className='form-input' value='9'>Производство</option>
          </select>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Местоположение компании</label>{errors.city && <p className='form-error'>{errors.city}</p>}
          <input
            className='form-input'
            type='text'
            name='city'
            placeholder='Введите название населенного пункта'
            value={values.city}
            onChange={handleChange}
          // Validation like {errors.email && <p>{errors.email}</p>}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>{errors.email && <p>{errors.email}</p>}
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='email@address.com'
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Пароль</label>{errors.password && <p>{errors.password}</p>}
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Введите пароль'
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Подтверждение пароля</label>{errors.password2 && <p>{errors.password2}</p>}
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Введите пароль еще раз'
            value={values.password2}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Что Вы ищете?</label>{errors.findFor && <p>{errors.findFor}</p>}<br />
          <label className="checkbox-btn">
            <input type="checkbox" onChange={e => { e.target.checked = checkProv; setCheckProv(!checkProv); values.findFor.providers = checkProv }} />
            <span>Поставщики</span>
          </label>
          <label className="checkbox-btn">
            <input type="checkbox" onChange={e => {e.target.checked = checkClient; setCheckClient(!checkClient); values.findFor.clients = checkClient}}/>
            <span>Заказчики</span>
          </label>
          <label className="checkbox-btn">
            <input type="checkbox" onChange={e => {e.target.checked = checkInvest; setCheckInvest(!checkInvest); values.findFor.investors = checkInvest}}/>
            <span>Инвесторы</span>
          </label>
          <label className="checkbox-btn">
            <input type="checkbox" onChange={e => {e.target.checked = checkAdv; setCheckAdv(!checkAdv); values.findFor.advertising = checkAdv}}/>
            <span>Совместная реклама</span>
          </label>
        </div>

        <button className='form-input-btn' type='submit'>
          Зарегистрироваться
        </button>
        <span className='form-input-login'>
          Уже есть аккаунт? Войдите <a>здесь</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;