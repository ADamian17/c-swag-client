import { useWindowSize } from '../../hooks/useWinddowSize';
import { Link } from 'react-router-dom'; 

import HamburgerMenu from '../UI/HamburgerMenu/HamburgerMenu';

import './Navbar.scss';

const Navbar = () => {
  const windowSize = useWindowSize()
  console.log(windowSize);

  return (
    <nav className="nav">
      {
        windowSize.width > 400 ? (
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/">Home</Link> 
            </li>
            <li className="nav__item">
              <Link to="#">Categories</Link> 
            </li>
            <li className="nav__item">
              <Link to="#">Cart</Link>  
            </li>
          </ul>
        ) : (
          <HamburgerMenu />
        )
      }
    </nav>
  )
}

export default Navbar;