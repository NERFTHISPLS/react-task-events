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
