import ProductCard from '../ProductCard/ProductCard';

const ProductsList = ({ products }) => (products.map(product => <ProductCard key={product.id} product={product} />));

export default ProductsList;
