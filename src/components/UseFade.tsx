import { useState, useEffect } from 'react';

type type = 'top' | 'left';

export default function UseFade(type: type) {
  const [isActive, setIsActive] = useState(false);

  const fadeEvent = () => {
    let y = document.querySelector('.hero-section')?.scrollHeight;
    const navHeight = document.querySelector('.navbar')?.clientHeight;
    const height = window.pageYOffset;
    const distance = 300;

    if (type === 'left') {
      y = document.querySelector<HTMLElement>('.pricing')?.offsetTop;
    }

    if (y && navHeight) {
      if (type === 'top') {
        const position = Math.round(y - navHeight - distance);
        if (height >= position) setIsActive(true);
        else setIsActive(false);
      } else {
        const position = Math.round(y - distance);
        if (height >= position) setIsActive(true);
        else setIsActive(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fadeEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isActive };
}
