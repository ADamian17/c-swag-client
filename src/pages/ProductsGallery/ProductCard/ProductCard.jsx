import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react'

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
    <Card>
      <Image src={product.image} size="medium" ui={false} />
   </Card>
    // <div className="card" key={product.id}>
    //   <div className="card__img">
    //     <img src={product.image} alt="img" />
    //   </div>
    //     <div className="card__info">
    //       <Link className="card__link" to={`/products/${product.id}`}>
    //         <div className="card__info__tex">
    //           <p>{itemName}</p>
    //           <small>{product.price} USD</small>
    //         </div>
    //       </Link>
    //         <button onClick={handleAddToCart}>add to cart</button>
    //     </div>
    // </div>
  )
};

export default ProductCard;

// {/* <Card.Content>
//       <Card.Header>Matthew</Card.Header>
//       <Card.Meta>
//         <span className='date'>Joined in 2015</span>
//       </Card.Meta>
//       {/* <Card.Description>
//         Matthew is a musician living in Nashville.
//       </Card.Description> */}
//     </Card.Content>
//     <Card.Content extra>
//     </Card.Content> */}
