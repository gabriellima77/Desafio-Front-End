import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

interface setValue {
  setShowUpBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setShowUpBtn }: setValue) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const shadowSize = 10;

  // Change Nav color and logo based on window location
  useEffect(() => {
    window.onscroll = () => {
      const homeSection = document.querySelector('.hero-section');
      const navHeight = document.querySelector('.navbar')?.clientHeight;
      if (homeSection && navHeight) {
        const height = window.pageYOffset;

        // Active upButton at scroll distance of navHeight
        if (height >= navHeight) setShowUpBtn(true);
        else setShowUpBtn(false);

        // Change Navbar and logo at scroll distece of positionToChange
        const positionToChange =
          homeSection.clientHeight - navHeight + shadowSize;
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

  const scrollToPricing = () => {
    const y = document.querySelector<HTMLElement>('.pricing')?.offsetTop;
    if (y) {
      window.scrollTo(0, y);
    }
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
          <button aria-label="menu" className="menu-icon" onClick={handleClick}>
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
                  scrollToPricing();
                }}
              >
                Planos
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
