import { truncateString } from '../../../utils/functs.js';


import './CartItemCard.scss';

const CartItemCard = ({ item }) => {

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
        <small className="quantity">X {quantity}</small>
        <small className="price">
          {item.total} $
        </small>
      </section>
    </article>
  )
}

export default CartItemCard;
