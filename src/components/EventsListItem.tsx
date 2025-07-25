import styled from 'styled-components';

const ListItem = styled.li`
  max-width: 32rem;
`;

function EventsListItem() {
  return (
    <ListItem>
      <h3>2015</h3>
      <span>
        13 сентября — частное солнечное затмение, видимое в Южной Африке и части
        Антарктиды
      </span>
    </ListItem>
  );
}

export default EventsListItem;
