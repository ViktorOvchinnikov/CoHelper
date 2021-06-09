import { useState, useEffect } from 'react';
import firebase from 'firebase';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    activity: '',
    email: '',
    city: '',
    password: '',
    password2: '',
    findFor: { providers: '', clients: '', investors: '', advertising: '' },
  });
  const db = firebase.database();

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        // db.ref('Users').child('Data').push({});
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;