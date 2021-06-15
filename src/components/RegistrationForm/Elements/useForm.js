import { useState, useEffect } from 'react';
import firebase from 'firebase';
import firestore from "firebase";

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

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        let token = db.collection('users').doc().id;
        db.collection("users").add({
          'token': token,
          'city': values.city,
          'activity': values.activity,
          'email': values.email,
          'password': values.password,
          'companyName': values.username,
          'findFor': values.findFor,
        })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;