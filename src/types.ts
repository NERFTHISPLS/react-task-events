type EventCategory =
  | 'science'
  | 'technology'
  | 'culture'
  | 'politics'
  | 'sports'
  | 'nature';

export interface TimelineEvent {
  id: string;
  year: number;
  text: string;
}

export interface TimePeriod {
  category: EventCategory;
  startYear: number;
  endYear: number;
  events: TimelineEvent[];
}
