import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  gap: 15px;
  padding: 13px 15px;
  font-size: 12px;
  background: #837f7f;
  border-radius: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;
