import styled from 'styled-components';
import ChangeDatesButtons from './ChangeDatesButtons';
import { Circle } from './Circle';
import { LargeDates } from './LargeDates';
import { Title } from './Title';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

const Date = styled.span`
  color: ${(props) => props.color};
`;

function HistoricalDatesUpper() {
  return (
    <Container>
      <Title>
        Исторические <br /> даты
      </Title>

      <LargeDates>
        <Date color="var(--color-iris)">2015</Date>
        <Circle></Circle>
        <Date color="var(--color-purple)">2022</Date>
      </LargeDates>

      <ChangeDatesButtons />
    </Container>
  );
}

export default HistoricalDatesUpper;
