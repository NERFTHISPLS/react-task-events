import styled from 'styled-components';

interface DotButtonsProps {
  $position: {
    x: number;
    y: number;
  };
  $text: string;
  $rotationAngle: number;
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

  &:hover,
  &:active,
  &.active {
    border: 1px solid var(--color-dark-blue-50);
    padding: 2.8rem;
    background-color: var(--color-white);

    &::before {
      content: '${(props) => props.$text}';
      font-size: 2rem;
      transform: rotate(${(props) => `${props.$rotationAngle}rad`});
    }
  }
`;
