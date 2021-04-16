import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { cartItems } from '../../recoil/cart/cart.atoms';
import { useResetRecoilState } from 'recoil';

import StripeCheckout from 'react-stripe-checkout';

import './StripePayment.scss';

const StripPayment = ({ price }) => {
  const history = useHistory()
  const resetCart = useResetRecoilState(cartItems);

  const [ returnToken, setReturnToken ] = useState(null);
  
  const StripePrice = price * 100;

  const onToken = ( token ) => {
    setReturnToken( token );
    resetCart();
    return history.push('/');
  }
  
  console.log({returnToken});
  return (
    <StripeCheckout 
      lable="Pay Nom"
      name="C-Swag"
      ComponentClass="div"
      billingAddress
      shippingAddress
      description={`Your price is ${price}`} 
      amount={StripePrice} 
      panelLabel="Pay Now"
      token={onToken} 
      stripeKey={ process.env.REACT_APP_PUBLISHABLE_KEY }/>
  )

}

export default StripPayment;
