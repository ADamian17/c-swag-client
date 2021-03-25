import { Link } from 'react-router-dom';

import { cartItemsCount } from '../../recoil/cart/cart.selectors';
import { toggleCart } from '../../recoil/cart/cart.atoms';
import { useRecoilValue, useRecoilState } from 'recoil'; 

import './Cart.scss';

const Cart = () => {
  const itemsCount = useRecoilValue(cartItemsCount);
  const [ show, setShow ] = useRecoilState(toggleCart)

  return (
    <li className="nav__item cart" onClick={() => setShow(!show) }>
      <p>Cart { itemsCount !== 0 ? <div className="cart__count">{itemsCount}</div> : '' }</p>
      {
        show ? 
          <div className="cart__preview">
            {
              itemsCount > 0 ?
                <> 
                  <Link to="/checkout">
                    <div className="cart__link">
                      go to checkout
                    </div>
                  </Link>

                  <div className="cart__preview__list">
                    1
                  </div>
                </> 
              : 
              <div className="cart__empty">Cart is Empty</div> 
            }
          </div> : 
          '' 
      } 
    </li>
  )
}

export default Cart;
