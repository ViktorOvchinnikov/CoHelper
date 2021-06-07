import React from 'react';
import Footer from './components/Footer';
//import './App.css';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/RegistrationForm/Elements/Form.js';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/sign-up' component={Form} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
