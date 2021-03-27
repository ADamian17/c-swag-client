import { Link } from 'react-router-dom';

import { cartItems } from '../../../recoil/cart/cart.atoms';
import { useRecoilState } from 'recoil';

import { addItem, truncateString } from '../../../utils/functs';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const [ cart, setCart ] = useRecoilState(cartItems);
  
  const handleAddToCart = () => {
    const items = addItem( cart, product );
    setCart(items)
  }

  const itemName = truncateString(product.title, 15)

  return (
    <div className="card" key={product.id}>
      <div className="card__img">
        <img src={product.image} alt="img" />
      </div>
        <div className="card__info">
          <Link className="card__link" to={`/products/${product.id}`}>
            <div className="card__info__tex">
              <p>{itemName}</p>
              <small>{product.price} USD</small>
            </div>
          </Link>
            <button onClick={handleAddToCart}>add to cart</button>
        </div>
    </div>
  )
};

export default ProductCard;
