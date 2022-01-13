import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';

function App() {
  const [showUpBtn, setShowUpBtn] = useState<boolean>(false);
  const goUp = () => window.scrollTo(0, 0);

  return (
    <div className="App">
      <Navbar setShowUpBtn={setShowUpBtn} />
      <button
        onClick={goUp}
        className={`up-button ${showUpBtn ? 'active' : ''}`}
      >
        <i className="fas fa-angle-double-up"></i>
      </button>
      <Hero />
      <About />
      <Pricing />
    </div>
  );
}

export default App;
