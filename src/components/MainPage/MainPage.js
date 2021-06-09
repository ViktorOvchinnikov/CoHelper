import React from 'react';
import '../../App.css';
import Navbar from './Elements/Navbar.js';
import HelloSection from './Elements/HelloSection.js';
import Cards from './Elements/Cards.js';
import FAQ from './Elements/FAQ.js';
import AboutPlatform from './Elements/AboutPlatform.js'

function MainPage() {
  return (
    <>
      <>
        <Navbar />
        <HelloSection />
        <Cards />
        <AboutPlatform />
        <FAQ />
      </>
    </>
  );
}

export default MainPage;