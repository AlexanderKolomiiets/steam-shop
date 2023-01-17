import {
  SearchBarContainer,
  SearchBarInput,
} from './SearchBarStyles';
import searchIcon from '../../images/search-icon.svg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as filterActions } from '../../features/filterSlice';

export const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector(state => state.filter.query);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterActions.query(event.target.value));
  };

  return (
    <SearchBarContainer>
      <SearchBarInput
        type="text"
        placeholder="Enter an app name..."
        id="SearchBar-input"
        onChange={handleInputChange}
        value={query}
      />

      <img src={searchIcon} alt="SearchBar button" />
    </SearchBarContainer>
  );
};
