import { useState } from 'react';
import {
  OrderContainer,
  OrderIcon,
  OrderOption,
  OrderSelect,
} from './ProductOrderStyles';
import orderIcon from '../../images/order-icon.svg';
import { OrderBy } from '../../types/orderBy';
import { useAppDispatch } from '../../app/hooks';
import { actions as filterActions } from '../../features/filterSlice';

export const ProductOrder: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(prevState => !prevState);

  const handleOrderChoose = (order: OrderBy) => {
    handleOpen();
    dispatch(filterActions.orderBy(order));
  };

  return (
    <OrderContainer>
      <OrderIcon onClick={handleOpen}>
        <img src={orderIcon} alt="order icon" />
      </OrderIcon>

      {isOpen && (
        <OrderSelect id="order">
          <OrderOption onClick={() => handleOrderChoose(OrderBy.toBigger)}>
            Lower to bigger
          </OrderOption>
          <OrderOption onClick={() => handleOrderChoose(OrderBy.toLower)}>
            Bigger to lower
          </OrderOption>
        </OrderSelect>
      )}
    </OrderContainer>
  );
};
