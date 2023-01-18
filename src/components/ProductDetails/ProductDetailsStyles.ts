import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25%;
  background: #17323a;
  border-radius: 10px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  border-radius: 10px;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;
