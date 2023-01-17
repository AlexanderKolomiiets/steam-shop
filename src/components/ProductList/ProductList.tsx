import { useMemo } from 'react';
import { Product } from '../../types/product';
import { SortBy } from '../../types/sortBy';
// import { OrderBy } from '../../types/orderBy';
import { ProductGrid } from './ProductListStyles';
import { ProductCard } from '../ProductCard/ProductCard';
import { useAppSelector } from '../../app/hooks';

export const ProductList: React.FC = () => {
  // const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);
  const query = useAppSelector((state) => state.filter.query);
  const sortBy = useAppSelector((state) => state.filter.sortBy);
  const orderBy = useAppSelector((state) => state.filter.orderBy);

  const compareInput = (
    title: string,
    inputValue: string,
  ) => title.toLowerCase().includes(inputValue.toLowerCase());

  const visibleProducts = useMemo(() => {
    return products.filter(({ title }) => {
      return compareInput(title, query);
    })
      .sort((a, b) => {
        switch (sortBy) {
          case SortBy.Date:
            return a.released.localeCompare(b.released);

          case SortBy.Price:
            return a.price.localeCompare(b.price);

          default:
            return 0;
        }
      });
  }, [products, query, sortBy, orderBy]);

  return (
    <ProductGrid>
      {visibleProducts.map((product: Product) => (
        <ProductCard key={product.appId} product={product} />
      ))}
    </ProductGrid>
  );
};
