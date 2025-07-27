import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: var(--color-blue);
  box-shadow: 0 0 15px var(--color-blue);

  transition: all 0.1s;

  &:hover {
    background-color: var(--color-light-grey);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

function SwiperCircleButton({
  className = '',
  disabled = false,
  onClick = () => {},
  children,
}: Props) {
  return (
    <Button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
}

export default SwiperCircleButton;
