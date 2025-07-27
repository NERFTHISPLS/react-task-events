export interface HistoryEvent {
  id: string;
  year: number;
  text: string;
}

export interface HistoryInterval {
  category: CategoryKey;
  startYear: number;
  endYear: number;
  events: HistoryEvent[];
}

export type CategoryKey =
  | 'science'
  | 'technology'
  | 'culture'
  | 'cooking'
  | 'sports'
  | 'nature';

export type CategoryLabel =
  | 'Наука'
  | 'Технологии'
  | 'Культура'
  | 'Кулинария'
  | 'Спорт'
  | 'Природа';
