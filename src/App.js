import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import LandingPage from './components/layout/LandingPage';
import { useTranslation } from "react-i18next";
import NavbarContainer from './components/layout/Navbar/NavbarContainer';
import Footer from './components/layout/Footer';
import LoginContainer from './components/Login/LoginContainer';
import RegisterContainer from './components/Register/RegisterContainer';
import YourAccountContainer from './components/YourAccount/YourAccountContainer';
import setAuthToken from './utils/setAuthToken'
import { SET_LOGIN_USER } from  './redux/actions/types'
import PasswordChangeContainer from './components/PasswordChange/PasswordChangeContainer'
import SellerIntroContainer from './components/SellerAccount/SellerIntroContainer'

// check localStorage for data
if (localStorage.jwtToken && localStorage.user){
  // setAuthToken to HTTP header
  setAuthToken(localStorage.jwtToken)

  // redux setup for user data
  store.dispatch({ type: SET_LOGIN_USER, payload: JSON.parse(localStorage.user) })

}

function App() {
  const [t, i18n] = useTranslation('common');

  const Login = () => (<LoginContainer t={t} i18n={i18n} />)
  const Landing = () => (<LandingPage t={t} i18n={i18n} />)
  const Register = () => (<RegisterContainer t={t} i18n={i18n} />)
  const yourAccount = () => (<YourAccountContainer t={t} i18n={i18n} />)
  const PassChange = () => ( <PasswordChangeContainer t={t} i18n={i18n} /> )
  const SellerIntro = () => ( <SellerIntroContainer t={t} i18n={i18n} /> )

  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavbarContainer t={t} i18n={i18n} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/your_account" component={yourAccount} />
          <Route exact path="/password_change" component={PassChange} />
          <Route exact path="/seller_intro" component={SellerIntro} />
          <Footer t={t} i18n={i18n} />
        </div>
      </Router>
    </Provider>
  )
}

export default App;