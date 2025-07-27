import styled from 'styled-components';

interface DotButtonsProps {
  $position: {
    x: number;
    y: number;
  };
  $text: string;
  onClick?: () => void;
}

export const DotButton = styled.button<DotButtonsProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${(props) => `${props.$position.y}px`};
  left: ${(props) => `${props.$position.x}px`};
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border: none;
  outline: none;
  background-color: var(--color-dark-blue);
  border-radius: 50%;
  transition:
    padding 0.3s ease-out,
    background-color 0.3s ease-out,
    border 0.3s ease-out;

  &:hover,
  &:active,
  &.active {
    border: 1px solid var(--color-dark-blue-50);
    padding: 2.8rem;
    background-color: var(--color-white);

    &::before {
      content: '${(props) => props.$text}';
      font-size: 2rem;
    }
  }
`;
