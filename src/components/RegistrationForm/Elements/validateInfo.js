import firebase from 'firebase';

export default function validateInfo(values) {
  let errors = {};
  const db = firebase.firestore();
  
  if (!values.username.trim()) {
    errors.username = 'Введите название!';
  }


  if (!(values.activity !== '0')) {
    errors.activity = 'Сделайте выбор!'
  }

  if (!values.city.trim()) {
    errors.city = 'Введите местоположение!';
  }

  if (!values.email) {
    errors.email = 'Введите email!';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email введен неверно!';
  } else {
    const t = async () => {
       await db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(db.collection("users").get())
          if (values.email == doc.data().email) {
            errors.email = 'Email уже есть в базе!';
          }
        })
      })
    }
    t();
  }
  const logCities = async () => {
    let citiesRef = db.collection('users');
    let allCities = await citiesRef.get();
    for(const doc of allCities.docs){
      // console.log(doc.id, '=>', doc.data());
    }
  }
  logCities();
  // function timeoutPromise(interval) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(function(){
  //       resolve("done");
  //     }, interval);
  //   });
  // };

  // async function timeTest() {
  //   const timeoutPromise1 = timeoutPromise(3000);
  //   const timeoutPromise2 = timeoutPromise(3000);
  //   const timeoutPromise3 = timeoutPromise(3000);
  
  //   await timeoutPromise1;
  //   await timeoutPromise2;
  //   await timeoutPromise3;
  //   alert('ready')
  // }

  // timeTest();
  // console.log('next')

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

  if (!(values.findFor.advertising || values.findFor.clients || values.findFor.providers || values.findFor.investors)) {
    errors.findFor = 'Выберите хотя бы один вариант';
  }
  console.log(errors);
  return errors;
}