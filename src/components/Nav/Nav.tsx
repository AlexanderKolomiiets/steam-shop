import { NavContainer, StyledNavLink } from './NavStyles';

export const Nav: React.FC = () => {
  return (
    <NavContainer>
      <StyledNavLink>Search</StyledNavLink>
      <StyledNavLink>Like list</StyledNavLink>
    </NavContainer>
  );
};
