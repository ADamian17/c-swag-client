import { Card } from 'semantic-ui-react'

import useProduct from '../../hooks/useProduct';

import ProductsList from './ProductsList/ProductsList';

import './ProductsGallery.scss'

const ClothesGallery = () => {

  const [products] = useProduct();
  console.log({products});
  
  return (
    <>
      {
        products.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <Card.Group centered itemsPerRow={3}>
            <ProductsList products={products} />
          </Card.Group>
        )
      }
    </>
  )
}

export default ClothesGallery;