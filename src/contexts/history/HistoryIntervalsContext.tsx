import { historyIntervalsData } from '@/data/historyIntervalsData';
import { HistoryInterval } from '@/types';
import { ReactNode, useState } from 'react';
import { HistoryIntervalsContext } from './useHistoryIntervalContext';

interface Props {
  children: ReactNode;
}

function HistoryIntervalsProvider({ children }: Props) {
  const historyIntervals = historyIntervalsData; // for dev purposes, change it for real data in the future
  const [currentHistoryInterval, setCurrentHistoryInterval] = useState(
    () => historyIntervals[0],
  );

  function setCurrentHistoryIntervalByIndex(index: number) {
    const target = historyIntervals.find((_, i) => i === index);

    if (!target) {
      throw new Error("Can't find history interval by index");
    }

    setCurrentHistoryInterval(target);
  }

  function setNextHistoryInterval(index: number) {
    const nextIndex = index + 1;
    if (nextIndex === historyIntervals.length) return;

    const historyInterval = getHistoryIntervalByIndex(
      historyIntervals,
      index + 1,
    );
    setCurrentHistoryInterval(historyInterval);
  }

  function setPrevHistoryInterval(index: number) {
    if (index === 0) return;

    const historyInterval = getHistoryIntervalByIndex(
      historyIntervals,
      index - 1,
    );
    setCurrentHistoryInterval(historyInterval);
  }

  return (
    <HistoryIntervalsContext.Provider
      value={{
        historyIntervals,
        currentHistoryInterval,
        setCurrentHistoryIntervalByIndex,
        setNextHistoryInterval,
        setPrevHistoryInterval,
      }}
    >
      {children}
    </HistoryIntervalsContext.Provider>
  );
}

function getHistoryIntervalByIndex(
  historyIntervals: HistoryInterval[],
  index: number,
) {
  return historyIntervals[index];
}

export default HistoryIntervalsProvider;
