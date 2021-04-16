import { Link } from 'react-router-dom';

import Cart from '../Cart/Cart';

const NavbarComponent = () => {

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm" 
      aria-label="Tenth navbar example">
      <div className="container-fluid">
        <button 
          className="navbar-toggler collapsed" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#nav__items" 
          aria-controls="nav__items" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      <div className="navbar-collapse justify-content-md-center collapse" id="nav__items" >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          
          <Cart />
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavbarComponent;
