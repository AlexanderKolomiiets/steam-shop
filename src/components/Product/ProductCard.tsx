import { Product } from '../../types/product';
import {
  CardContainer,
  CardImage,
  CardDescription,
} from './ProductCardStyles';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    title,
    imgUrl,
    released,
    price,
  } = product;

  return (
    <CardContainer>
      <CardImage src={imgUrl} alt={title} />
      <CardDescription>
        <p style={{ fontSize: '18px' }}>{title}</p>
        <p>{released}</p>
        <p>{price}</p>
      </CardDescription>
    </CardContainer>
  );
};
