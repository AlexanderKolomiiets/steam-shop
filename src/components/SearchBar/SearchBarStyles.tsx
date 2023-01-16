import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    padding: 10px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #837f7f;
    border-radius: 10px;
`;

export const SearchBarInput = styled.input`
    color: #fff;
    height: inherit;
    background: none;
    border: none;
    outline: none;
    width: 100%;
    &::placeholder {
        color: #fff;
    }
`;

export const SearchBarButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    width: 25px;
    height: 25px;
    img {
        width: 100%;
        object-fit: cover;
    }
`;
