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
      <NavDropdown title="Cart" id="dropdown-basic">
        {
          itemsCount > 0 ?
            <>
              <Dropdown.Item>
                <Link to="/checkout">
                  <div className="cart__link text-uppercase">
                    go to checkout
                  </div>
                </Link>
              </Dropdown.Item>


              <CartPreview />
              {/* <div className="cart__preview__list">
              </div> */}
            </>
            :
            <div className="cart__empty">Cart is Empty</div>
        }
      </NavDropdown>
    </>
    // <li className="nav__item cart" onClick={() => setShow(!show) }>
    //   Cart 

    // </li>
  )
}

export default Cart;
