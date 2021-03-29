import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';

import { cartItems } from '../../../recoil/cart/cart.atoms';
import { useRecoilState } from 'recoil';

import { addItem, truncateString } from '../../../utils/functs';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const [cart, setCart] = useRecoilState(cartItems);

  const handleAddToCart = () => {
    const items = addItem(cart, product);
    setCart(items)
  }

  const itemName = truncateString(product.title, 15)

  return (
    <Col className="mb-5">
      <Card className="shadow-sm">
        <img className="my-card-img img-fluid img-thumbnail" src={product.image} alt="avatar" />

        <Card.Body>
          <Link className='card__link' to={`/products/${product.id}`}>
            <p className="card-text">{itemName}</p>
            <small className="price">{product.price} USD</small>
          </Link>

          <div className="d-flex justify-content-end align-items-center">
            <Button onClick={handleAddToCart} className="btn btn-sm btn-primary">Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
};

export default ProductCard;
