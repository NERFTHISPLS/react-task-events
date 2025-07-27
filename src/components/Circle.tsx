import { useHistoryIntervalContext } from '@/contexts/history/useHistoryIntervalContext';
import {
  BASE_ANGLE,
  BASE_ANIMATION_DURATION_SECONDS,
  CATEGORY_TYPE_TO_LABEL,
  CIRCLE_DIAMETER,
} from '@/utils/constants';
import {
  calcCircleDotCoordinatesByAngle,
  calcDotsAngles,
  findHistoryIntervalIndexByCategory,
  radiansToDegrees,
} from '@/utils/helpers';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
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
  transform: translate(-50%, -50%);
  height: ${(props) => `${props.$diameter}px`};
  width: ${(props) => `${props.$diameter}px`};
  border: 1px solid var(--color-dark-blue-10);
  border-radius: 50%;
`;

export function Circle() {
  const circleRef = useRef<HTMLDivElement>(null);
  const [animationEnded, setAnimationEnded] = useState(false);

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

  const rotationAngle = BASE_ANGLE - angles[currentHistoryIntervalIndex];

  const categoryLabel =
    CATEGORY_TYPE_TO_LABEL[currentHistoryInterval?.category || 'science'];

  useGSAP(
    () => {
      if (!circleRef.current) return;

      setAnimationEnded(false);

      const angle = radiansToDegrees(rotationAngle);
      const ease = 'power2.inOut';

      gsap.to(circleRef.current, {
        rotation: -angle,
        duration: BASE_ANIMATION_DURATION_SECONDS,
        ease,
      });

      gsap.to('.btn', {
        rotation: angle,
        duration: BASE_ANIMATION_DURATION_SECONDS,
        ease,
        onComplete: () => {
          setAnimationEnded(true);
        },
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
          className={`btn ${currentHistoryIntervalIndex === i ? 'active' : ''}`}
          $position={calcCircleDotCoordinatesByAngle(angle, radius)}
          $orderNum={(i + 1).toString()}
          $labelText={
            animationEnded && currentHistoryIntervalIndex === i
              ? categoryLabel
              : ''
          }
          onClick={() => setCurrentHistoryIntervalByIndex(i)}
        ></DotButton>
      ))}
    </StyledCircle>
  );
}
export default Circle;
