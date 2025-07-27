import { HistoryInterval } from '@/types';

export function formatIntervalNumber(intervalNum: number) {
  return intervalNum.toString().padStart(2, '0');
}

export function findHistoryIntervalIndexByCategory(
  curInterval: HistoryInterval | null,
  intervals: HistoryInterval[],
) {
  const index = intervals.findIndex(
    (item) => item.category === curInterval?.category,
  );

  if (index === -1) {
    throw new Error('History interval was not find');
  }

  return index;
}

export function calcCircleDotCoordinatesByAngle(
  angle: number, // radians
  circleRadius: number,
) {
  const center = { x: circleRadius, y: circleRadius };

  const x = center.x + circleRadius * Math.cos(angle);
  const y = center.y - circleRadius * Math.sin(angle);

  return { x, y };
}

export function calcDotsAngles(dotsNumber: number) {
  const baseAngle = (2 * Math.PI) / dotsNumber;

  return Array.from({ length: dotsNumber }, (_, i) => i * baseAngle);
}

export function radiansToDegrees(rad: number) {
  return (rad * 180) / Math.PI;
}
