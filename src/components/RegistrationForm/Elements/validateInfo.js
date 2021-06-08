export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Введите название!';
    }

    if (!values.city.trim()) {
      errors.city = 'Введите местоположение!';
    }
  
    if (!values.email) {
      errors.email = 'Введите email!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email введен неверно!';
    }
    if (!values.password) {
      errors.password = 'Введите пароль!';
    } else if (values.password.length < 6) {
      errors.password = 'Минимум 6 символов!';
    }
  
    if (!values.password2) {
      errors.password2 = 'Введите пароль!';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Пароль не подтвержден!';
    }
    return errors;
  }