import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 8px 10px;
  background: #837f7f;
  border-radius: 10px;
`;

export const SearchBarInput = styled.input`
  width: 80%;
  color: #fff;
  background: none;
  border: none;
  outline: none;
  
  &::placeholder {
    color: #fff;
  }
`;
