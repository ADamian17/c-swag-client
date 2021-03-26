import { truncateString } from '../../../utils/functs.js';


import './CartItemCard.scss';

const CartItemCard = ({ item }) => {

  const { defaultArticle, quantity } =  item;
  const itemName = truncateString( defaultArticle.name, 12 );
  console.log({item});
  return (
    <article className="preview">
      <section className="preview__aside">
        <div className="preview__img">
          <img src={defaultArticle.images[0].url} alt="avatar" />
        </div>

        <small>{ itemName }</small>
      </section>

      <section className="preview__main">
        <small className="quantity">X {quantity}</small>
        <small className="price">
          {item.total} {defaultArticle.whitePrice.currencyIso}
        </small>
      </section>
    </article>
  )
}

export default CartItemCard;
