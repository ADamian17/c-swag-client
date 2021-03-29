import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import Cart from '../Cart/Cart';

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
