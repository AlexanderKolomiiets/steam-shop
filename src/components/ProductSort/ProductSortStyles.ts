import styled from 'styled-components';

export const SortContainer = styled.div`
  position: relative;
`;

export const SortIcon = styled.div`
  display: flex;
  gap: 100px;
  padding: 12px;
  background: #837f7f;
  border-radius: 10px;
  cursor: pointer;
`;

export const SortSelect = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  position: absolute;
  top: 60px;
  z-index: 1;
  width: max-content;
  padding: 10px 15px;
  background: #837f7f;
  border-radius: 10px;
`;

export const SortOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  cursor: pointer;
`;
