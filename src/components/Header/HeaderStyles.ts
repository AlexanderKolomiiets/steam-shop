import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 25px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding: 35px 15px;
    flex-wrap: no-wrap;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
`;
