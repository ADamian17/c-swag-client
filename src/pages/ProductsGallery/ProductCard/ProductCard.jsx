import { cartItems } from '../../../recoil/cart/cart.atoms';
import { useRecoilState } from 'recoil';

import { addItem } from '../../../utils/functs';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const [ cart, setCart ] = useRecoilState(cartItems);
  
  const handleAddToCart = () => {
    const items = addItem( cart, product );
    setCart(items)
  }

  return (
    <div className="card" key={product.pk}>
      <div className="card__img">
        <img src={product.images[0].url} alt="img" />
      </div>

      <div className="card__info">
        <div className="card__info__tex">
          <p>{product.name}</p>
          <small>{product.price.value} USD</small>
        </div>

        <button onClick={handleAddToCart}>add to cart</button>
      </div>
    </div>
  )
};

export default ProductCard;
