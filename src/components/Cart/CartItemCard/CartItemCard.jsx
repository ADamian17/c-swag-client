import { cartItems } from '../../../recoil/cart/cart.atoms';
import { useRecoilState } from 'recoil';

import { truncateString, removeItem } from '../../../utils/functs.js';

import './CartItemCard.scss';

const CartItemCard = ({ item }) => {

  const [items, setItems] = useRecoilState(cartItems);

  const { quantity } =  item;
  const itemName = truncateString( item.title, 12 );
  
  return (
    <article className="preview">
      <section className="preview__aside">
        <div className="preview__img">
          <img src={item.image} alt="avatar" />
        </div>

        <small>{ itemName }</small>
      </section>

      <section className="preview__main">
        <small className="quantity">
          <strong className="arrow">&#10094;</strong>
          {quantity}
          <strong className="arrow">&#10095;</strong>
        </small>
        <small className="price">
          {item.total}$
        </small>
        <small onClick={() => setItems( removeItem( items, item.id ))}>&#10005;</small>
      </section>
    </article>
  )
}

export default CartItemCard;
