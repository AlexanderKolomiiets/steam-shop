import { useState } from 'react';
import {
  SearchBarContainer,
  SearchBarInput,
  SearchBarButton,
} from './SearchBarStyles';
import searchIcon from '../../images/search-icon.svg';

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
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

      <SearchBarButton>
        <img src={searchIcon} alt="SearchBar button" />
      </SearchBarButton>
    </SearchBarContainer>
  );
};
