import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import LandingPage from './components/layout/LandingPage';
import {useTranslation} from "react-i18next";
import NavbarContainer from './components/layout/Navbar/NavbarContainer';
import Footer from './components/layout/Footer';
import LoginContainer from './components/Login/LoginContainer';
import RegisterContainer from './components/Register/RegisterContainer';

function App() {
  const [t, i18n] = useTranslation('common');
  
  const Login = () => (<LoginContainer  t={t} i18n={i18n}  />)
  const Landing = () => (<LandingPage t={t} i18n={i18n} />)
  const Register = () => (<RegisterContainer t={t} i18n={i18n} />)

  return (
    <Router>
      <div>
        <NavbarContainer t={t} i18n={i18n} />
          <Route exact path="/" component={Landing}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        <Footer t={t} i18n={i18n} />
      </div>
    </Router>
  )
}

export default App;