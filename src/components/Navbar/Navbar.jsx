import { Navbar, Nav } from 'react-bootstrap';


// import { useWindowSize } from '../../hooks/useWinddowSize';
// // import { Link } from 'react-router-dom';

// import HamburgerMenu from '../UI/HamburgerMenu/HamburgerMenu';
import Cart from '../Cart/Cart';
// import HomeIcon from '../../Icons/HomeIcon';

// import './Navbar.scss';

const NavbarComponent = () => {

  return (
    <Navbar className="justify-content-center shadow-sm" bg="light" fixed="top">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Cart />  
    </Navbar>
  )
}

export default NavbarComponent;
