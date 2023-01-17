import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductGrid = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 260px);
  justify-content: center;
  column-gap: 20px;
  row-gap: 15px;
  padding: 0 24px;
`;

export const CardLink = styled(Link)`
  position: fixed;
  font-size: 24px;
  left: 20px;
  top: 20px;
  text-decoration: none;
  color: #fff;
`;
