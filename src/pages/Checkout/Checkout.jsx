import { cartItems } from '../../recoil/cart/cart.atoms';
import { cartItemsTotal } from '../../recoil/cart/cart.selectors';
import { useRecoilValue } from 'recoil';

import StripePayment from '../../components/StripePayment/StripePayment';
import CartItemCard from '../../components/Cart/CartItemCard/CartItemCard';

import './Checkout.scss';

const Checkout = () => {
  const items = useRecoilValue(cartItems);
  const total = useRecoilValue(cartItemsTotal).toFixed(2);

  return (
    <div className="row featurette details-wrapper">
      <div className="col-md-5">
        <div className="checkout__list">
          {
            items.map(item => <CartItemCard key={item.id} item={item} />)
          }
        </div>
        <h4 className="checkout__total">total: <span className="text-danger">{total}$</span></h4>
      </div>

      <div className="col-md-7 text-info text-center">
        <h2>*** Use this Card for payment ***</h2>
        <h4 className="lead">test Card: <span className="text-danger">( 4242 - 4242 - 4242 - 4242 )</span></h4>

        <p className="lead">CVC: 123</p>
        <p className="lead">Exp: 05/23</p>

        <StripePayment price={total} />
      </div>
    </div>
  );
};

export default Checkout;
