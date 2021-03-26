import { cartItems } from '../../../recoil/cart/cart.atoms';
import { useRecoilValue } from 'recoil';

import CartItemCard from '../CartItemCard/CartItemCard';

const CartPreview = () => {
  const items = useRecoilValue(cartItems);

  return (
    items.map( item => <CartItemCard key={item.code} item={item} />)
  )
}

export default CartPreview
