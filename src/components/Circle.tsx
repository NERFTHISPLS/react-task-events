import { useHistoryIntervalContext } from '@/contexts/history/useHistoryIntervalContext';
import { CIRCLE_DIAMETER } from '@/utils/constants';
import {
  calcCircleDotCoordinatesByAngle,
  calcDotsAngles,
  findHistoryIntervalIndexByCategory,
  radiansToDegrees,
} from '@/utils/helpers';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import styled from 'styled-components';
import { DotButton } from './DotButton';

interface CircleProps {
  $diameter: number;
  $rotationAngle: number;
}

const StyledCircle = styled.div<CircleProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
    rotate(${(props) => `${props.$rotationAngle}rad`});
  height: ${(props) => `${props.$diameter}px`};
  width: ${(props) => `${props.$diameter}px`};
  border: 1px solid var(--color-dark-blue-10);
  border-radius: 50%;
`;

export function Circle() {
  const circleRef = useRef<HTMLDivElement>(null);

  const {
    historyIntervals,
    currentHistoryInterval,
    setCurrentHistoryIntervalByIndex,
  } = useHistoryIntervalContext();

  const radius = CIRCLE_DIAMETER / 2;
  const angles = calcDotsAngles(historyIntervals.length);

  const currentHistoryIntervalIndex = findHistoryIntervalIndexByCategory(
    currentHistoryInterval,
    historyIntervals,
  );

  const targetActiveAngleIndex = 1;
  const rotationAngle =
    angles[targetActiveAngleIndex] - angles[currentHistoryIntervalIndex];

  useGSAP(
    () => {
      if (!circleRef) return;

      gsap.to(circleRef.current, {
        rotation: -radiansToDegrees(rotationAngle),
        duration: 0.8,
        ease: 'power2.inOut',
        transformOrigin: 'center center',
      });
    },
    { dependencies: [currentHistoryIntervalIndex] },
  );

  return (
    <StyledCircle
      ref={circleRef}
      $diameter={CIRCLE_DIAMETER}
      $rotationAngle={-rotationAngle}
    >
      {angles.map((angle, i) => (
        <DotButton
          key={angle}
          className={currentHistoryIntervalIndex === i ? 'active' : ''}
          $position={calcCircleDotCoordinatesByAngle(angle, radius)}
          $text={(i + 1).toString()}
          $rotationAngle={rotationAngle}
          onClick={() => setCurrentHistoryIntervalByIndex(i)}
        ></DotButton>
      ))}
    </StyledCircle>
  );
}
export default Circle;
