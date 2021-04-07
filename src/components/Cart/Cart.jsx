import { NavDropdown, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { cartItemsCount } from '../../recoil/cart/cart.selectors';
import { useRecoilValue } from 'recoil';

import CartPreview from './CartPreview/CartPreview';

import './Cart.scss';

const Cart = () => {
  const itemsCount = useRecoilValue(cartItemsCount);

  return (
    <>
      {itemsCount !== 0 ? <div className="cart__count">{itemsCount}</div> : ''}

     <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" 
          href="#" id="dropdown08" 
          data-bs-toggle="dropdown" 
          aria-expanded="false">Cart</a>

        <ul className="dropdown-menu p-2" aria-labelledby="dropdown08">
          <li>
            <Link to="/checkout">
              <button className="btn btn-block btn-danger text-uppercase">
                go to checkout
              </button>
            </Link>
          </li>
          {
          itemsCount > 0 ?
            <>
              <CartPreview />
            </>
            :
            <div className="cart__empty">Cart is Empty</div>
          }
        </ul>
      </li>
    </>
  )
}

export default Cart;
