import styled from 'styled-components';
import EventsListItem from './EventsListItem';

const List = styled.ol`
  padding-left: 8rem;
  padding-right: 3.5rem;
  display: flex;
  gap: 8rem;
`;

function HistoricalDatesSlider() {
  return (
    <List>
      <EventsListItem />
      <EventsListItem />
    </List>
  );
}

export default HistoricalDatesSlider;
