import { Product } from '../../types/product';
import {
  CardContainer,
  CardImage,
  FavouriteIcon,
  CardDescription,
} from './ProductCardStyles';
import like from '../../images/like-icon.svg';
// import liked from '../../images/liked-icon.svg';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    appId,
    title,
    imgUrl,
    released,
    price,
  } = product;

  return (
    <CardContainer to={appId}>
      <CardImage src={imgUrl} alt={title} />
      <CardDescription>
        <p style={{ fontSize: '18px' }}>{title}</p>
        <p>{released}</p>
        <p>{price}</p>
      </CardDescription>
      <FavouriteIcon src={like} />
    </CardContainer>
  );
};
