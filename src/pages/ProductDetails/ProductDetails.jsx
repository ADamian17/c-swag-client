import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Product from '../../Models/Product';

import Container from '../../components/Container/Container'; 

import './ProductDetails.scss';

const ProductDetails = () => {

  const params = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetchProduct()
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  /* fetch api details */
  const fetchProduct = async () => {
    try {
      const res = await Product.show(params.id);
      setProduct(res.product);
      
    } catch (error) {
      console.log(error);
    }
  };
  
  console.log({ product });

  return (
    product &&
    <Container>
      <article className="details-wrapper">

        <section className="details-wrapper__gallery">
          <div className="details-wrapper__item">
            <img src={product.articlesList[1].galleryDetails[0].url} alt=""/>
          </div>
        </section>

        <section className="details-wrapper__info">
          <p>{product.name}</p>
          <p>{product.description}</p>
          {product.inStock ? 'in stock' : 'out of stock'}
          <small>{product.whitePrice.price} {product.whitePrice.currency}</small>
        </section>
        
      </article>
    </Container>
  );
};

export default ProductDetails;
