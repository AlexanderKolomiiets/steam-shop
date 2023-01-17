import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: #fff;
  background: #17323a;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled(Link)`
  cursor: pointer;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;

export const FavouriteIcon = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 20px;
  cursor: pointer;
`;
