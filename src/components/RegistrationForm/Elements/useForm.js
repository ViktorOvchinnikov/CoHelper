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
    findFor: { providers: false, clients: false, investors: false, advertising: false },
  });
  const db = firebase.firestore();

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let valid_em = []
    const querySnapshot = await db.collection("users").get();
    querySnapshot.forEach((doc) => {
      valid_em.push(doc.data().email);
    });
    setErrors(validate(values, valid_em));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        let generatedId = db.collection('users').doc().id;
        db.collection('users').doc(generatedId).set({
          'token': generatedId,
          'city': values.city,
          'activity': values.activity,
          'email': values.email,
          'password': values.password,
          'companyName': values.username,
          'findFor': values.findFor,
        });
      }

    },
    [errors]
  );
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;