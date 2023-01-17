import styled from 'styled-components';

export const SortContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const SortIcon = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 50px;
  padding: 12px;
  background: #837f7f;
  border-radius: 10px;
  cursor: pointer;
`;

export const SortSelect = styled.div`
  position: absolute;
  display: flex;
  gap: 4px;
  flex-direction: column;
  width: max-content;
  padding: 10px 15px;
  top: 60px;
  background: #837f7f;
  border-radius: 10px;
`;

export const SortOption = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
