import { useHistoryIntervalContext } from '@/contexts/history/useHistoryIntervalContext';
import { CIRCLE_DIAMETER } from '@/utils/constants';
import {
  calcCircleDotCoordinatesByAngle,
  calcDotsAngles,
} from '@/utils/helpers';
import styled from 'styled-components';
import { DotButton } from './DotButton';

interface CircleProps {
  $diameter: number;
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

export function Circle() {
  const { historyIntervals } = useHistoryIntervalContext();
  const radius = CIRCLE_DIAMETER / 2;
  const angles = calcDotsAngles(historyIntervals.length);

  return (
    <StyledCircle $diameter={CIRCLE_DIAMETER}>
      {angles.map((angle, i) => (
        <DotButton
          key={angle}
          $position={calcCircleDotCoordinatesByAngle(angle, radius)}
          $text={(i + 1).toString()}
        ></DotButton>
      ))}
    </StyledCircle>
  );
}
export default Circle;
