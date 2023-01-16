import { Logo, HeaderContainer } from './HeaderStyles';
import logo from '../../images/steamLogo.png';
import '../../mixin.scss';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Steam logo" />
      </Logo>
    </HeaderContainer>
  );
};
