import { Link } from 'react-router-dom';

import './ProductCard.scss';

const ProductCard = ({ product }) => (
  <Link className="card__link" to={{
    pathname: `/products/${product.defaultArticle.code}`,
    state: { img: product.images[0].url }
  }}>
    <div className="card" key={product.pk}>
      <div className="card__img">
        <img src={product.images[0].url} alt="img" />
      </div>

      <div className="card__info">
        <p>{product.name}</p>
        <small>{product.price.value} USD</small>
      </div>
    </div>
  </Link>
);

export default ProductCard;
