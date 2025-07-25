import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  border: 1px solid var(--color-dark-blue-50);
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

function CircleButton({
  disabled = false,
  onClick = () => {},
  children,
}: Props) {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
}

export default CircleButton;
