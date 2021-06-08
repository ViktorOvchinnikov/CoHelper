import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import '../Styles/Form.css';
import '../Styles/Checkboxes.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Найдите бизнес-партнера сегодня!
          Создайте аккаунт своей компании, заполнив информацию ниже.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Название компании</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Введите название компании'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Чем занимается Ваша компания?</label>
          <select
            className='form-input'
            name='activity'
          >
            <option className='form-input' selected disabled>Выберите род деятельности</option>
            <option className='form-input' value='IT, компьютеры, интернет'>IT, компьютеры, интернет</option>
            <option className='form-input' value='Гостинично-ресторанный бизнес, туризм'>Гостинично-ресторанный бизнес, туризм</option>
            <option className='form-input' value='Дизайн, творчество'>Дизайн, творчество</option>
            <option className='form-input' value='Красота, фитнес, спорт'>Красота, фитнес, спорт</option>
            <option className='form-input' value='Образование, наука'>Образование, наука</option>
            <option className='form-input' value='Сельское хозяйство, агробизнес'>Сельское хозяйство, агробизнес</option>
            <option className='form-input' value='Розничная торговля'>Розничная торговля</option>
            <option className='form-input' value='Сфера обслуживания'>Сфера обслуживания</option>
            <option className='form-input' value='Производство'>Производство</option>
          </select>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Местоположение компании</label>
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
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='email@address.com'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Пароль</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Введите пароль'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Подтверждение пароля</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Введите пароль еще раз'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Что Вы ищете?</label><br />
          <label class="checkbox-btn">
            <input type="checkbox" />
            <span>Поставщики</span>
          </label>
          <label class="checkbox-btn">
            <input type="checkbox" />
            <span>Заказчики</span>
          </label>
          <label class="checkbox-btn">
            <input type="checkbox" />
            <span>Инвесторы</span>
          </label>
          <label class="checkbox-btn">
            <input type="checkbox" />
            <span>Совместная реклама</span>
          </label>
        </div>

        <button className='form-input-btn' type='submit'>
          Зарегистрироваться
        </button>
        <span className='form-input-login'>
          Уже есть аккаунт? Войдите <a href='#'>здесь</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;