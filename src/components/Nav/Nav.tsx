import { NavContainer, StyledNavLink } from './NavStyles';

export const Nav: React.FC = () => {
  return (
    <NavContainer>
      <StyledNavLink to="/">Search</StyledNavLink>
      <StyledNavLink to="/favourites">Like list</StyledNavLink>
    </NavContainer>
  );
};
