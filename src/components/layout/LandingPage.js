import React from 'react'
import NavbarContainer from './Navbar/NavbarContainer';
import ImageSlider from './ImageSlider';

function LandingPage() {
  return (
    <React.Fragment>
      <NavbarContainer />
      <div className="container-fluid px-0">
        <ImageSlider />
      </div>
    </React.Fragment>
  )
}

export default LandingPage;
