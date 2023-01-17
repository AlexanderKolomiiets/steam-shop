import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const CardLink = styled(Link)`
  position: fixed;
  font-size: 24px;
  left: 20px;
  top: 20px;
  text-decoration: none;
  color: #fff;
`;

export const CardDescription = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
