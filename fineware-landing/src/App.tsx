// src/App.tsx
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import * as gtag from "./utils/gtag"

/**
 * App - root component that assembles all page sections.
 * @returns {JSX.Element}
 */
const App: React.FC = () => {

  useEffect(() => {
    // on every navigation, tell GA about the new virtual page
    gtag.pageview(location.pathname + location.search);
  }, [location])

  return (
    <>  
    <Header />
    <Hero />
    <About />
    <Services />
    <Contact />
    <Footer />
  </>
  )
  
};

export default App;