import { cartItems } from '../../recoil/cart/cart.atoms';
import { cartItemsTotal } from '../../recoil/cart/cart.selectors';
import { useRecoilValue } from 'recoil';

import StripePayment from '../../components/StripePayment/StripePayment';
import CartItemCard from '../../components/Cart/CartItemCard/CartItemCard';

import './Checkout.scss';

const Checkout = () => {
  const items = useRecoilValue( cartItems );
  const total = useRecoilValue( cartItemsTotal ).toFixed(2);
  
  return (
    <div className="checkout">
      <section className="checkout__aside">
        <div className="checkout__list">
          {
            items.map(item => <CartItemCard key={item.id} item={item} /> )
          }
        </div>

        <h4 className="checkout__total">total: {total}$</h4>
      </section>

      <section className="checkout__main">
        <h1>Use this card for payment</h1>
        <h2><span>card:</span> 4242 - 4242 - 4242 - 4242</h2>
        <small>CVC: 123</small>
        <small>Brand: Visa</small>
        <small>Exp: 05/23</small>
        <br />
        <StripePayment price={total} /> 
      </section>
    </div>
  );
};

export default Checkout;
