import { useEffect } from 'react';
import { Product } from '../../types/product';
import {
  CardContainer,
  CardImage,
  FavouriteIcon,
  CardDescription,
} from './ProductCardStyles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as favouritesActions } from '../../features/favouritesSlice';
import like from '../../images/like-icon.svg';
import liked from '../../images/liked-icon.svg';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(state => state.favourites);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const handleAddToFavourite = (item: Product) => {
    dispatch(favouritesActions.add(item));
  };

  const handleRemoveFromFavourite = (item: Product) => {
    dispatch(favouritesActions.remove(item.appId));
  };

  return (
    <CardContainer>
      <CardImage to={`products/${product.appId}`}>
        <img
          src={product.imgUrl}
          alt={product.title}
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </CardImage>
      <CardDescription>
        <p style={{ fontSize: '18px' }}>{product.title}</p>
        <p>{product.released}</p>
        <p>{product.price}</p>
      </CardDescription>
      {!favourites.map(({ appId }) => appId).includes(product.appId) ? (
        <FavouriteIcon
          src={like}
          onClick={() => handleAddToFavourite(product)}
        />
      ) : (
        <FavouriteIcon
          src={liked}
          onClick={() => handleRemoveFromFavourite(product)}
        />
      )}
    </CardContainer>
  );
};
