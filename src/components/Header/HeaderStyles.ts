import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  padding: 25px 10px;
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
