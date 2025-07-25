import { useHistoryIntervalContext } from '@/contexts/history/useHistoryIntervalContext';
import styled from 'styled-components';
import ChangeCategoryButtons from './ChangeCategoryButtons';
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
  const { currentHistoryInterval } = useHistoryIntervalContext();

  if (!currentHistoryInterval) return null;

  const { startYear, endYear } = currentHistoryInterval;

  return (
    <Container>
      <Title>
        Исторические <br /> даты
      </Title>

      <LargeDates>
        <Date color="var(--color-iris)">{startYear}</Date>
        <Circle></Circle>
        <Date color="var(--color-purple)">{endYear}</Date>
      </LargeDates>

      <ChangeCategoryButtons />
    </Container>
  );
}

export default HistoricalDatesUpper;
