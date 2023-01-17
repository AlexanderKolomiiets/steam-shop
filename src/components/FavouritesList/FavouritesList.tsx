import { useAppSelector } from '../../app/hooks';
import ProductCard from '../ProductCard';
import { CardLink, ProductGrid } from './FavouritesListStyles';
import EmptyTitle from '../EmptyTitle';

export const FavouritesList: React.FC = () => {
  const favourites = useAppSelector((state) => state.favourites);

  return (
    <>
      <CardLink to="/">Back</CardLink>
      {favourites.length ? (
        <ProductGrid>
          {favourites.map((product) => (
            <ProductCard product={product} key={+product.appId} />
          ))}
        </ProductGrid>
      ) : <EmptyTitle text="No items yet" />}
    </>
  );
};
