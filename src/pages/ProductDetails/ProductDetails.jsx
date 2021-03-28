import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { cartItems } from '../../recoil/cart/cart.atoms';
import { useRecoilState } from 'recoil';

import { addItem } from '../../utils/functs';

import Product from '../../Models/Product';

import './ProductDetails.scss';

const ProductDetails = () => {

  const params = useParams();
  const [product, setProduct] = useState(null)
  const [cart, setCart] = useRecoilState(cartItems);

  useEffect(() => {
    fetchProduct()
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  /* fetch api details */
  const fetchProduct = async () => {
    try {
      const res = await Product.show(params.id);
      setProduct(res);

    } catch (error) {
      console.log(error);
    }
  };

  console.log({ product });

  return (
    product &&
    <article className="row">

      <div className="col">
        <div className="details-wrapper__item">
          <img src={product.image} alt="avatar" />
        </div>
      </div>

      <div className="col">
        <p className="h1 p-2">{product.title}</p>
        <p className="p-2 lh-lg">
          <span className="fw-bold mt-2">
            Description:
          </span> {product.description}
        </p>
        <small className="p-2">Price: {product.price}$</small>

        <div className="row p-2">
          <div className="col">
            <button
              onClick={() => setCart(addItem(cart, product))}
              className="btn btn-secondary bg-dark bg-gradient" >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

    </article>
  );
};

export default ProductDetails;
