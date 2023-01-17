import { useAppSelector } from '../../app/hooks';
import ProductCard from '../ProductCard';
import { ProductGrid } from '../ProductList/ProductListStyles';

export const FavouritesList: React.FC = () => {
  const favourites = useAppSelector((state) => state.favourites);

  return (
    <ProductGrid>
      {favourites.map((product) => (
        <ProductCard product={product} key={+product.appId} />
      ))}
    </ProductGrid>
  );
};
