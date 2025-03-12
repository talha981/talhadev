import React, { useEffect } from 'react';
import Home from '../components/Home';
import AboutHome from '../components/AboutHome';
import TechStackMarquee from '../components/TechStack';
import Testimonials from '../components/ProjectShowCase';

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Home />
      <AboutHome />
<Testimonials/>
    </div>
  );
}

export default HomePage;
