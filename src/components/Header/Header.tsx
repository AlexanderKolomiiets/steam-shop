import { Logo, HeaderContainer } from './HeaderStyles';
import SearchBar from '../SearchBar';
import Nav from '../Nav';
import logo from '../../images/steamLogo.png';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Steam logo" />
      </Logo>
      <SearchBar />
      <Nav />
    </HeaderContainer>
  );
};
