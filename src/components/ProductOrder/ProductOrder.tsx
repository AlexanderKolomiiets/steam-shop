import { useState } from 'react';
import {
  OrderContainer,
  OrderIcon,
  OrderOption,
  OrderSelect,
} from './ProductOrderStyles';
import orderIcon from '../../images/order-icon.svg';

type OrderBy = 'toBigger' | 'toLower';

export const ProductOrder: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [orderBy, setOrderBy] = useState<null | OrderBy>(null);

  const handleOpen = () => setIsOpen(prevState => !prevState);

  const handleOrderChoose = (order: OrderBy) => {
    handleOpen();
    setOrderBy(order);
  };

  return (
    <OrderContainer>
      <OrderIcon onClick={handleOpen}>
        <img src={orderIcon} alt="order icon" />
      </OrderIcon>

      {isOpen && (
        <OrderSelect id="order">
          <OrderOption onClick={() => handleOrderChoose('toBigger')}>
            Lower to bigger
          </OrderOption>
          <OrderOption onClick={() => handleOrderChoose('toLower')}>
            Bigger to lower
            {orderBy}
          </OrderOption>
        </OrderSelect>
      )}
    </OrderContainer>
  );
};
