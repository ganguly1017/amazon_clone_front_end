import React from 'react'
import LandingPage from './components/layout/LandingPage';
import {useTranslation} from "react-i18next";
import NavbarContainer from './components/layout/Navbar/NavbarContainer';
import Footer from './components/layout/Footer';
import LoginContainer from './components/Login/LoginContainer';

function App() {
  const [t, i18n] = useTranslation('common');

  return (
    <div>
      {/* <LandingPage t={t} i18n={i18n} /> */}
      <NavbarContainer t={t} i18n={i18n} />
      <LoginContainer  t={t} i18n={i18n}  />
      <Footer t={t} i18n={i18n} />
    </div>
  )
}

export default App;