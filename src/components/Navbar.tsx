import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const shadowSize = 10;

  useEffect(() => {
    window.onscroll = () => {
      const homeSection = document.querySelector('.hero-section');
      const navHeight = document.querySelector('.navbar')?.clientHeight;
      if (homeSection && navHeight) {
        const height = window.pageYOffset;
        const positionToChange = homeSection.clientHeight - navHeight + shadowSize;
        if (homeSection && height >= positionToChange) setIsActive(true);
        else if (homeSection && height < positionToChange) setIsActive(false);
      }
    };
  });

  const handleClick = () => setIsClicked((prev) => !prev);
  const closeMobileMenu = () => setIsClicked(false);

  const goToBegin = () => {
    window.scrollTo(0, 0);
  };

  const scrollToAbout = () => {
    const y = document.querySelector('.hero-section')?.scrollHeight;
    const navHeight = document.querySelector('.navbar')?.clientHeight;
    if (y && navHeight) window.scrollTo(0, y - navHeight + shadowSize);
  };

  const scrollToAdvantages = () => {
    const y = window.innerHeight * 2;
    window.scrollTo(0, y);
  };

  return (
    <>
      <nav className={`navbar ${isClicked || isActive ? 'active' : ''}`}>
        <div className="navbar-container">
          <a className="navbar-logo" onClick={closeMobileMenu} href=".">
            <img
              className="logo-img"
              src={`images/${
                isActive ? 'hublocal-logo.png' : 'transparent-logo.gif'
              }`}
              alt="HubLocal"
            />
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
