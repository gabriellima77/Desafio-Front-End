import React, { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => setIsClicked((prev) => !prev);
  const closeMobileMenu = () => setIsClicked(false);

  const goToBegin = () => {
    window.scrollTo(0, 0);
  };

  const scrollToAbout = () => {
    const y = document.querySelector('.hero-container')?.scrollHeight;
    if (y) window.scrollTo(0, y);
  };

  const scrollToAdvantages = () => {
    const y = window.innerHeight * 2;
    window.scrollTo(0, y);
  };

  return (
    <>
      <nav className={`navbar ${isClicked ? 'active' : ''}`}>
        <div className="navbar-container">
          <a className="navbar-logo" onClick={closeMobileMenu} href=".">
            <img className="logo-img" src="images/transparent-logo.gif" alt="HubLocal" />
          </a>
          <button className="menu-icon" onClick={handleClick}>
            <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
          <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <button
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  goToBegin();
                }}
              >
                Início
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  scrollToAbout();
                }}
              >
                Sobre
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  scrollToAdvantages();
                }}
              >
                Vantagens
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
