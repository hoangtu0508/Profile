import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
  const selectedComponent = useSelector((state) => state.header);

  const elements = document.getElementsByClassName(selectedComponent);
    if (elements.length > 0) {
      elements[0].scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <div className="App">
      <div className="content">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;