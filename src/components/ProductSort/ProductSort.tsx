import { useState } from 'react';
import {
  SortContainer,
  SortIcon,
  SortOption,
  SortSelect,
} from './ProductSortStyles';
import open from '../../images/dropdown-open.svg';
// import close from '../../images/dropdown-close.svg';
import priceIcon from '../../images/price-icon.svg';
import dateIcon from '../../images/date-icon.svg';

export const ProductSort: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(prevState => !prevState);

  return (
    <SortContainer>
      <SortIcon onClick={handleOpen}>
        Price
        <img src={open} alt="open icon" />
      </SortIcon>

      {isOpen && (
        <SortSelect id="Sort">
          <SortOption>
            Price
            <img src={priceIcon} alt="price icon" />
          </SortOption>
          <SortOption>
            Publish Date
            <img src={dateIcon} alt="date icon" />
          </SortOption>
        </SortSelect>
      )}
    </SortContainer>
  );
};
