import { SortContainer, SortSelect, SortOption } from './ProductSortStyles';

export const ProductSort: React.FC = () => {
  return (
    <SortContainer>
      <SortSelect id="order">
        <SortOption>
          Price
        </SortOption>
        <SortOption>
          Publish Date
        </SortOption>
      </SortSelect>
    </SortContainer>
  );
};
