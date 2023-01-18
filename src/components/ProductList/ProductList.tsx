import { useMemo } from 'react';
import parsePrice from 'parse-price';
import { SortBy } from '../../types/sortBy';
import { OrderBy } from '../../types/orderBy';
import { ProductGrid } from './ProductListStyles';
import { ProductCard } from '../ProductCard/ProductCard';
import { useAppSelector } from '../../app/hooks';

export const ProductList: React.FC = () => {
  const products = useAppSelector((state) => state.products.products);
  const sortBy = useAppSelector((state) => state.filter.sortBy);
  const orderBy = useAppSelector((state) => state.filter.orderBy);

  const visibleProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      switch (true) {
        case (sortBy === SortBy.Date) && (orderBy === OrderBy.toLower):
          return Date.parse(b.released) - Date.parse(a.released);

        case (sortBy === SortBy.Date) && (orderBy === OrderBy.toBigger):
          return Date.parse(a.released) - Date.parse(b.released);

        case (sortBy === SortBy.Price) && (orderBy === OrderBy.toLower):
          return parsePrice(b.price) - parsePrice(a.price);

        case (sortBy === SortBy.Price) && (orderBy === OrderBy.toBigger):
          return parsePrice(a.price) - parsePrice(b.price);

        default:
          return 0;
      }
    });
  }, [products, sortBy, orderBy]);

  return (
    <ProductGrid>
      {visibleProducts.map((product) => (
        <ProductCard
          product={product}
          key={product.appId ? +product.appId : Math.random()}
        />
      ))}
    </ProductGrid>
  );
};
