import { useEffect } from 'react';
import { Product } from '../../types/product';
import {
  CardContainer,
  CardImage,
  FavouriteIcon,
  CardDescription,
} from './ProductCardStyles';
import like from '../../images/like-icon.svg';
import { useAppSelector } from '../../app/hooks';
// import liked from '../../images/liked-icon.svg';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const favourites = useAppSelector(state => state.favourites);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const handleAddToFavourite = () => {
    setFavoritePhones((prevPhones) => [...prevPhones, phone]);
  };

  const handleRemoveFromFavourite = () => {
    localStorage.setItem(
      'favoritePhones',
      JSON.stringify(favoritePhones.filter((item) => item.id !== id))
    );

    setFavoritePhones((prevPhones) =>
      prevPhones.filter((prevPhone) => prevPhone.id !== id)
    );
  };

  https://github.com/fe-jul22-team6/product_catalog/blob/main/frontend/src/components/PhoneCard/PhoneCard.tsx

  const {
    appId,
    title,
    imgUrl,
    released,
    price,
  } = product;

  return (
    <CardContainer>
      <CardImage to={appId}>
        <img
          src={imgUrl}
          alt={title}
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </CardImage>
      <CardDescription>
        <p style={{ fontSize: '18px' }}>{title}</p>
        <p>{released}</p>
        <p>{price}</p>
      </CardDescription>
      <FavouriteIcon src={like} />
    </CardContainer>
  );
};
