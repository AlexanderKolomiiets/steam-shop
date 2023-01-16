import { Product } from '../../types/product';
import { ProductGrid } from './ProductListStyles';
import { ProductCard } from '../Product/ProductCard';

type Props = {
  products: Product[];
};

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <ProductGrid>
      {products.map(product => (
        <ProductCard product={product} />
      ))}
    </ProductGrid>
  );
};
