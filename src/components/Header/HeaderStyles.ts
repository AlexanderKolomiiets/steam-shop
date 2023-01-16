import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 25px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    padding: 35px 12px;
    width: 100%;
    gap: 15px;
    flex-wrap: no-wrap;
  }
`;

export const Logo = styled.a`
  display: flex;
  width: 150px;
  height: 35px;
`;
