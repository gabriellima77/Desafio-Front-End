import React, { useState, useEffect } from 'react';

type type = 'top' | 'left';

export default function UseFade(type: type) {
  const [isActive, setIsActive] = useState(false);

  const fadeEvent = () => {
    let y = document.querySelector('.hero-section')?.scrollHeight;
    const navHeight = document.querySelector('.navbar')?.clientHeight;
    const height = window.pageYOffset;
    const percentage = 3 / 5;

    if (type === 'left') {
      y = document.querySelector<HTMLElement>('.pricing')?.offsetTop;
    }

    if (y && navHeight) {
      if (type === 'top') {
        const position = Math.round((y - navHeight) * percentage);
        if (height >= position) setIsActive(true);
        else setIsActive(false);
      } else {
        if (height >= y) setIsActive(true);
        else setIsActive(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fadeEvent);
  }, []);

  return { isActive };
}
