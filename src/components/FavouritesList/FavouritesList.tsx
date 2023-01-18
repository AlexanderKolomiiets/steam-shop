import { useAppSelector } from '../../app/hooks';
import { ProductGrid } from './FavouritesListStyles';
import EmptyTitle from '../EmptyTitle';
import GoBackLink from '../GoBackLink';
import ProductCard from '../ProductCard';

export const FavouritesList: React.FC = () => {
  const favourites = useAppSelector((state) => state.favourites);

  return (
    <>
      <GoBackLink to="/" text="Back" />
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
