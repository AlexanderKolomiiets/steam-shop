import { useState } from 'react';
import {
  SortContainer,
  SortIcon,
  SortOption,
  SortSelect,
} from './ProductSortStyles';
import open from '../../images/dropdown-open.svg';
import close from '../../images/dropdown-close.svg';
import priceIcon from '../../images/price-icon.svg';
import dateIcon from '../../images/date-icon.svg';
import { SortBy } from '../../types/sortBy';
import { useAppDispatch } from '../../app/hooks';
import { actions as filterActions } from '../../features/filterSlice';

export const ProductSort: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(prevState => !prevState);

  const handleSortChoose = (sort: SortBy) => {
    handleOpen();
    dispatch(filterActions.sortBy(sort));
  };

  return (
    <SortContainer>
      <SortIcon onClick={handleOpen}>
        Price
        <img src={isOpen ? close : open} alt="open icon" />
      </SortIcon>

      {isOpen && (
        <SortSelect id="Sort">
          <SortOption onClick={() => handleSortChoose(SortBy.Date)}>
            Price
            <img src={priceIcon} alt="price icon" />
          </SortOption>
          <SortOption onClick={() => handleSortChoose(SortBy.Date)}>
            Publish Date
            <img src={dateIcon} alt="date icon" />
          </SortOption>
        </SortSelect>
      )}
    </SortContainer>
  );
};
