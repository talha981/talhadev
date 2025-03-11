import React, { useEffect } from 'react';
import Home from '../components/Home';
import AboutHome from '../components/AboutHome';
import TechStackMarquee from '../components/TechStack';

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Home />
      <AboutHome />
      <TechStackMarquee />
    </div>
  );
}

export default HomePage;
