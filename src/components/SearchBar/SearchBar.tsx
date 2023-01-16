import { useState } from 'react';
import {
  SearchBarContainer,
  SearchBarInput,
  SearchBarButton,
} from './SearchBarStyles';

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
        <img src="" alt="SearchBar button" />
      </SearchBarButton>
    </SearchBarContainer>
  );
};
