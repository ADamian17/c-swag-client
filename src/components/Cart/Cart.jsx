import { Link } from 'react-router-dom';

import { Dropdown, Button } from 'semantic-ui-react'

import { cartItemsCount } from '../../recoil/cart/cart.selectors';
import { toggleCart } from '../../recoil/cart/cart.atoms';
import { useRecoilValue, useRecoilState } from 'recoil'; 

import CartPreview from './CartPreview/CartPreview';

import './Cart.scss';

const Cart = () => {
  const itemsCount = useRecoilValue(cartItemsCount);
  const [ show, setShow ] = useRecoilState(toggleCart)

  return (
    <>
    { itemsCount !== 0 ? <div className="cart__count">{itemsCount}</div> : '' }
    <Dropdown 
      item 
      text='Cart'
      icon='cart'>
      <Dropdown.Menu>
       {
         itemsCount > 0 ?
         <> 
          <Dropdown.Item>
            <Link to="/checkout">
              <div className="cart__link">
                Go to Checkout
              </div>
            </Link>
          </Dropdown.Item>

              <div className="cart__preview__list">
                <CartPreview />
              </div>
            </> 
          : 
          <div className="cart__empty">Cart is Empty</div> 
        }
      </Dropdown.Menu>
    </Dropdown>
    {/* <Dropdown.Item>Electronics</Dropdown.Item>
    
    <Dropdown.Item>Home</Dropdown.Item> */}
    </>
    
  )
}

export default Cart;
