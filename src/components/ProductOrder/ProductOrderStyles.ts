import styled from 'styled-components';

export const OrderContainer = styled.div`
  position: relative;
`;

export const OrderIcon = styled.div`
  display: flex;
  padding: 8px;
  background: #837f7f;
  border-radius: 10px;
  cursor: pointer;
`;

export const OrderSelect = styled.div`
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

export const OrderOption = styled.div`
  cursor: pointer;
`;
