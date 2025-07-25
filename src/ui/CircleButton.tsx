import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  border: 1px solid gray;
  padding: 1.5rem;
  border-radius: 50%;

  transition: all 0.1s;

  &:hover {
    background-color: var(--color-light-grey);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

function CircleButton({ children }: Props) {
  return <Button>{children}</Button>;
}

export default CircleButton;
