import useProduct from '../../hooks/useProduct';

import ProductsList from './ProductsList/ProductsList';

import './ProductsGallery.scss'

const ClothesGallery = () => {

  const [products] = useProduct();
  console.log( { products: products } )
  return (
    <>
      {
        products.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className="gallery">
            <ProductsList products={products} />
          </div>
        )
      }
    </>
  )
}

export default ClothesGallery;