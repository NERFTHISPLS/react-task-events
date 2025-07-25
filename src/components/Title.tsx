import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 7.8rem;
  font-size: 5.6rem;
  font-weight: 700;
  padding-top: 10rem;

  &::before {
    content: '';
    background-image: linear-gradient(var(--color-blue), var(--color-purple));
    width: 5px;
    height: 100%;
  }
`;
