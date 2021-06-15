import React from 'react';
import Footer from './components/Footer';
//import './App.css';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/RegistrationForm/Elements/Form.js';
import AuthForm from './components/AuthForm/AuthForm.js'

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/sign-up' component={Form} />
          <Route path='/sign-in' component={AuthForm} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
