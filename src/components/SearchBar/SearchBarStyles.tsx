import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding: 8px 10px;
  background: #837f7f;
  border-radius: 10px;
`;

export const SearchBarInput = styled.input`
  color: #fff;
  width: 80%;
  background: none;
  border: none;
  outline: none;
  &::placeholder {
      color: #fff;
  }
`;

export const SearchBarButton = styled.button`
  display: flex;
  background: none;
  border: none;
`;
