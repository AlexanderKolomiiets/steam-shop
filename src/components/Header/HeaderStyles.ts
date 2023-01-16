import styled from 'styled-components';
import '../../mixin.scss';

export const HeaderContainer = styled.header`
  padding: 35px 12px;
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  @include onTablet {
    padding: 25px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Logo = styled.a`
  display: flex;
  width: 150px;
  height: 35px;
`;
