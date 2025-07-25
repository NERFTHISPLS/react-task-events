import { TimelineEvent } from '@/types';
import styled from 'styled-components';

interface Props {
  event: TimelineEvent;
}

const ListItem = styled.li`
  max-width: 32rem;

  h3 {
    margin-bottom: 1rem;
    font-weight: normal;
    font-size: 2.5rem;
    color: var(--color-blue);
  }
`;

function EventsListItem({ event }: Props) {
  return (
    <ListItem>
      <h3>{event.year}</h3>
      <span>{event.text}</span>
    </ListItem>
  );
}

export default EventsListItem;
