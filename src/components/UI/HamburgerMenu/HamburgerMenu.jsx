import { useState } from 'react';

import './HamburgerMenu.scss';

const HamburgerMenu = () => {
  const [ animate, setAnimate ] = useState(false);
  return (
  <div
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#nav__items" 
    aria-controls="nav__items" 
    aria-expanded="false"
    aria-label="Toggle navigation" 
    onClick={() => setAnimate(!animate)} 
    className={`HamburgerMenu ${ animate ? 'HamburgerMenu__animate' : ''}`}>
    <div className="bar-1" />
    <div className="bar-2" />
    <div className="bar-3" />
  </div>
  );
};

export default HamburgerMenu;
