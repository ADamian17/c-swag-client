import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

<<<<<<< HEAD
import Cart from '../Cart/Cart';
=======

// import { useWindowSize } from '../../hooks/useWinddowSize';

// import HamburgerMenu from '../UI/HamburgerMenu/HamburgerMenu';
import Cart from '../Cart/Cart';
// import HomeIcon from '../../Icons/HomeIcon';

// import './Navbar.scss';
>>>>>>> master

const NavbarComponent = () => {

  return (
    <Navbar className="justify-content-center shadow-sm" bg="light" fixed="top">
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Cart />
    </Navbar>
  )
}

export default NavbarComponent;
