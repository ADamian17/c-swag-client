import ProductCard from '../ProductCard/ProductCard';

const ProductsList = ({ products }) => (products.map(product => <ProductCard key={product.pk} product={product} />));

export default ProductsList;