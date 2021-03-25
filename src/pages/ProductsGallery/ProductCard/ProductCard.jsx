import './ProductCard.scss';

const ProductCard = ({ product }) => (
  // <Link className="card__link" to={{
  //   pathname: `/products/${product.defaultArticle.code}`,
  //   state: { img: product.images[0].url }
  // }}>
    <div className="card" key={product.pk}>
      <div className="card__img">
        <img src={product.images[0].url} alt="img" />
      </div>

      <div className="card__info">
        <div className="card__info__tex">
          <p>{product.name}</p>
          <small>{product.price.value} USD</small>
        </div>

        <button>add to cart</button>
      </div>
    </div>
  // </Link>
);

export default ProductCard;
