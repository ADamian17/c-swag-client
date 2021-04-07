import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { cartItems } from '../../recoil/cart/cart.atoms';
import { useRecoilState } from 'recoil';

import { addItem } from '../../utils/functs';

import Loading from '../../components/Loading/Loading';

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

  return (
    <>
      {
        product ? (
          <div className="row featurette details-wrapper">
            <div className="col-md-5">
              <div className="col">
                <div className="details-wrapper__item">
                  <img src={product.image} alt="avatar" />
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <h2 className="featurette-heading">{product.title}</h2>

              <p className="lead">{product.description}</p>

              <p className="lead">Price: {product.price}$</p>

              <div className="row">
                <div className="col">
                  <button
                    onClick={() => setCart(addItem(cart, product))}
                    className="btn btn-secondary bg-dark bg-gradient">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )
      }
    </>
  );
};

export default ProductDetails;
