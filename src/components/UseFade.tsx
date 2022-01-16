import { useState, useEffect } from 'react';

type Distance = number;

export default function UseFade(distance: Distance) {
  const [isActive, setIsActive] = useState(false);
  const fadeEvent = () => {
    let y =
      distance > 0
        ? document.querySelector<HTMLElement>('.cards-container')?.offsetTop
        : document.querySelector<HTMLElement>('.pricing')?.offsetTop;
    const height = window.pageYOffset;
    if (y) {
      const position = Math.round(y + distance);
      if (height >= position) setIsActive(true);
      else setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fadeEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isActive };
}
