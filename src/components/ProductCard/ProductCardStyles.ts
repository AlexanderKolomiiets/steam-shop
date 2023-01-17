import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #17323a;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  border-radius: 10px;
`;

export const CardDescription = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FavouriteIcon = styled.img`
  position: absolute;
  height: 20px;
  bottom: 10px;
  right: 10px;
`;
