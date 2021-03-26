import './Checkout.scss';

import { cartItems } from '../../recoil/cart/cart.atoms';
import { cartItemsTotal } from '../../recoil/cart/cart.selectors';
import { useRecoilValue } from 'recoil';

import CartItemCard from '../../components/Cart/CartItemCard/CartItemCard';

const Checkout = () => {
  const items = useRecoilValue( cartItems );
  const total = useRecoilValue( cartItemsTotal );
  
  return (
    <div className="checkout">
      <section className="checkout__aside">
        <div className="checkout__list">
          {
            items.map(item => <CartItemCard key={item.code} item={item} /> )
          }
        </div>

        <h4 className="checkout__total">total: {total}$</h4>
      </section>

      <section className="checkout__main">2</section>
    </div>
  );
};

export default Checkout;
