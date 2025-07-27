import { useHistoryIntervalContext } from '@/contexts/history/useHistoryIntervalContext';
import { CIRCLE_DIAMETER } from '@/utils/constants';
import {
  calcCircleDotCoordinatesByAngle,
  calcDotsAngles,
} from '@/utils/helpers';
import styled from 'styled-components';

interface CircleProps {
  $diameter: number;
}

interface DotButtonsProps {
  $position: {
    x: number;
    y: number;
  };
}

const StyledCircle = styled.div<CircleProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: ${(props) => `${props.$diameter}px`};
  width: ${(props) => `${props.$diameter}px`};
  border: 1px solid var(--color-dark-blue-10);
  border-radius: 50%;
`;

const DotButton = styled.button<DotButtonsProps>`
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
`;

export function Circle() {
  const { historyIntervals } = useHistoryIntervalContext();
  const radius = CIRCLE_DIAMETER / 2;
  const angles = calcDotsAngles(historyIntervals.length);

  return (
    <StyledCircle $diameter={CIRCLE_DIAMETER}>
      {angles.map((angle) => (
        <DotButton
          key={angle}
          $position={calcCircleDotCoordinatesByAngle(angle, radius)}
        ></DotButton>
      ))}
    </StyledCircle>
  );
}
export default Circle;
