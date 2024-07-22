import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/aboutus';
import Packages from './components/packages';
import Contactus from './components/Contactus';
import EmblaCarousel from './components/Carousel';
import Title from './components/CarouselTitle';
import './Landing.css'
function Landing() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Aboutus />
      <Title/>
      <EmblaCarousel />
      <Packages />
      <Contactus />
      {/* Add other components as needed */}
      <footer className="foot">
        All rights reserved by Binayak Vision
      </footer>
    </div>
  );
}

export default Landing;
