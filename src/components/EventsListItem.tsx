import { TimelineEvent } from '@/types';
import styled from 'styled-components';

const ListItem = styled.li`
  max-width: 32rem;
`;

interface Props {
  event: TimelineEvent;
}

function EventsListItem({ event }: Props) {
  return (
    <ListItem>
      <h3>{event.year}</h3>
      <span>{event.text}</span>
    </ListItem>
  );
}

export default EventsListItem;
