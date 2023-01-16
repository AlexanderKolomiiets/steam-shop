import styled from 'styled-components';

export const NavContainer = styled.nav`
    gap: 15px;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    height: inherit;
    background: #837f7f;
    border-radius: 10px;
`;

export const StyledNavLink = styled.a`
    color: #ffffff;
    text-transform: capitalize;
    transition: 0.3s all;
    &.active {
        color: #000;
    }
`;
