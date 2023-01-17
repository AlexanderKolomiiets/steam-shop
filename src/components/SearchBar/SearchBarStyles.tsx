import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55%;
  padding: 8px 10px;
  background: #837f7f;
  border-radius: 10px;
`;

export const SearchBarInput = styled.input`
  color: #fff;
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
