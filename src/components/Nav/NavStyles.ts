import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 12px 15px;
  background: #837f7f;
  border-radius: 10px;
`;

export const SearchButton = styled.div`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

export const FavouriteLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;
