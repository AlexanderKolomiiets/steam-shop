import { HeaderContainer, Logo } from './HeaderStyles';
import SearchBar from '../SearchBar';
import Nav from '../Nav';
import ProductOrder from '../ProductOrder';
import ProductSort from '../ProductSort';
import logo from '../../images/steam-logo.png';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Steam logo" />
      <SearchBar />
      <ProductOrder />
      <ProductSort />
      <Nav />
    </HeaderContainer>
  );
};
