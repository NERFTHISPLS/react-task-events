export interface HistoryEvent {
  id: string;
  year: number;
  text: string;
}

export interface HistoryInterval {
  category: Category;
  startYear: number;
  endYear: number;
  events: HistoryEvent[];
}

type Category =
  | 'science'
  | 'technology'
  | 'culture'
  | 'politics'
  | 'sports'
  | 'nature';
