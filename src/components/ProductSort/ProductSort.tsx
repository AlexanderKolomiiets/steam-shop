import { useState } from 'react';
import {
  SortContainer,
  SortIcon,
  SortOption,
  SortSelect,
} from './ProductSortStyles';
import { SortBy } from '../../types/sortBy';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as filterActions } from '../../features/filterSlice';
import open from '../../images/dropdown-open.svg';
import close from '../../images/dropdown-close.svg';
import priceIcon from '../../images/price-icon.svg';
import dateIcon from '../../images/date-icon.svg';

export const ProductSort: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector((state) => state.filter.sortBy);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(prevState => !prevState);

  const handleSortChoose = (sort: SortBy) => {
    handleOpen();
    dispatch(filterActions.sortBy(sort));
  };

  return (
    <SortContainer>
      <SortIcon onClick={handleOpen}>
        {sortBy}
        <img src={isOpen ? close : open} alt="open icon" />
      </SortIcon>

      {isOpen && (
        <SortSelect id="Sort">
          <SortOption onClick={() => handleSortChoose(SortBy.Price)}>
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
