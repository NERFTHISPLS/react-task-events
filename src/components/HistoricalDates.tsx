import { timelineData } from '@/data/swiperData';
import styled from 'styled-components';
import HistoricalDatesSlider from './HistoricalDatesSlider';
import HistoricalDatesUpper from './HistoricalDatesUpper';

const Section = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  border-left: 1px solid var(--color-dark-blue-10);
  border-right: 1px solid var(--color-dark-blue-10);
  font-size: 2rem;

  &::before {
    content: '';
    position: absolute;
    background-color: var(--color-dark-blue-10);
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 1px;
  }
`;

function HistoricalDates() {
  const timeline = timelineData[0];

  return (
    <Section>
      <HistoricalDatesUpper />
      <HistoricalDatesSlider events={timeline.events} />
    </Section>
  );
}

export default HistoricalDates;
