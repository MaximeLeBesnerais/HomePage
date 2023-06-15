import React, { useEffect, useState } from 'react';

const Scroll = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setScrollTop(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollTop > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollTop === 0 && isScrolled) {
      setIsScrolled(false);
    }
  }, [scrollTop, isScrolled]);

  return (
    <h1 className={`name ${isScrolled ? 'scrolled' : ''}`}>
      Maxime Le Besnerais
    </h1>
  );
};

export default Scroll;
