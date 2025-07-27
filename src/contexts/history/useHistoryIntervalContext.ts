import { HistoryInterval } from '@/types';
import { createContext, useContext } from 'react';

interface HistoryIntervalsContextState {
  historyIntervals: HistoryInterval[];
  currentHistoryInterval: HistoryInterval | null;
  setCurrentHistoryIntervalByIndex: (index: number) => void;
  setNextHistoryInterval: (index: number) => void;
  setPrevHistoryInterval: (index: number) => void;
}

export const HistoryIntervalsContext =
  createContext<HistoryIntervalsContextState>({
    historyIntervals: [],
    currentHistoryInterval: null,
    setCurrentHistoryIntervalByIndex: () => {},
    setNextHistoryInterval: () => {},
    setPrevHistoryInterval: () => {},
  });

export function useHistoryIntervalContext() {
  const context = useContext(HistoryIntervalsContext);

  return context;
}
