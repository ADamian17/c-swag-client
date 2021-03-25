import { useWindowSize } from '../../hooks/useWinddowSize';
import { Link } from 'react-router-dom';

import { cartItemsCount } from '../../recoil/cart/cart.selectors';
import { useRecoilValue } from 'recoil'; 

import HamburgerMenu from '../UI/HamburgerMenu/HamburgerMenu';
import Cart from '../Cart/Cart';

import './Navbar.scss';

const Navbar = () => {
  const windowSize = useWindowSize()
  const itemsCount = useRecoilValue(cartItemsCount);

  return (
    <nav className="nav">
      {
        windowSize.width > 400 ? (
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/">Home</Link> 
            </li>
            <Cart itemsCount={itemsCount} />  
          </ul>
        ) : (
          <HamburgerMenu />
        )
      }
    </nav>
  )
}

export default Navbar;