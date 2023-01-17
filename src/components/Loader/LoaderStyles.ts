import styled, { keyframes } from 'styled-components';

const loadAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const LoaderContent = styled.div`
  width: 4em;
  height: 4em;
  margin: 1em auto;
  border: 0.3em solid #ddd;
  border-radius: 50%;
  border-left-color: #000;
  animation: ${loadAnimation} 1.2s infinite linear;
`;
