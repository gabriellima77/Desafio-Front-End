import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a
              href="https://hublocal.com.br/"
              className="social-logo"
              target="_blank"
              rel="noreferrer"
              aria-label="HubLocal"
            >
              <img
                className="footer-logo"
                src="images/hublocal-logo.png"
                alt="HubLocal"
              />
            </a>
          </div>
          <small className="website-rights">Gabriel Lima © 2022</small>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/HubLocalOficial/"
              className="social-icon-link facebook"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/hub.local/?hl=pt"
              className="social-icon-link instagram"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/hublocaloficial"
              className="social-icon-link linkedin"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
