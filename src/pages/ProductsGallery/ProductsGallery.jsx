import useProduct from '../../hooks/useProduct';

import ProductsList from './ProductsList/ProductsList';

import './ProductsGallery.scss'

const ClothesGallery = () => {

  const [products] = useProduct();
  console.log({ products });

  return (
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {
        products.length === 0 ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status" />
          </div>
        ) : (
          <ProductsList products={products} />
        )
      }
    </div>
  )
}

export default ClothesGallery;