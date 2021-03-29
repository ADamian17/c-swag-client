import useProduct from '../../hooks/useProduct';

import ProductsList from './ProductsList/ProductsList';
import Loading from '../../components/Loading/Loading';

import './ProductsGallery.scss'

const ClothesGallery = () => {

  const [products] = useProduct();
  console.log({ products });

  return (
    <>
      {
        products.length === 0 ? (
          <Loading />
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <ProductsList products={products} />
          </div>
        )
      }
    </>
  )
}

export default ClothesGallery;