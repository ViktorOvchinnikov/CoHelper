import { useState, useEffect } from 'react';
import firebase from 'firebase';

const UseAuthForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    
    const db = firebase.firestore();
    
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [curUser, setCurUser] = useState('')
   
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        let flag=false;
        const querySnapshot = await db.collection("users").get();
        querySnapshot.forEach((doc) => {
            if (doc.data().email == values.email && doc.data().password == values.password) {
                setCurUser(doc.data().token);
                setIsSubmitting(true);
                setError('');
                flag=true;

            }
        });
        if(!flag){setError('Email или пароль введен неверно!')} 
    };

    useEffect(
        () => {
            if (error.length === 0 && isSubmitting) {
                localStorage.setItem("token", curUser)
                window.location.href="/homepage";

            }
        }, [error,isSubmitting]
    );
    return { handleChange, handleSubmit, values, error };
};

export default UseAuthForm;