import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 25px 10px;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    gap: 20px;
    padding: 35px 15px;
    flex-wrap: no-wrap;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  cursor: pointer;
`;
