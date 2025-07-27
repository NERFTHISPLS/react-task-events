import { DEVICE } from '@/utils/constants';
import styled from 'styled-components';
import HistoricalDatesSlider from './HistoricalDatesSlider';
import HistoricalDatesUpper from './HistoricalDatesUpper';

const Section = styled.section`
  position: relative;
  height: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
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

  @media ${DEVICE.laptopL} {
    max-width: 1260px;
  }

  @media ${DEVICE.laptop} {
    max-width: 1100px;
    gap: 5rem;
  }

  @media ${DEVICE.laptopS} {
    max-width: 900px;
  }

  @media ${DEVICE.tablet} {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &::before {
      display: none;
    }
  }

  @media ${DEVICE.tabletS} {
    max-width: 540px;
    gap: 6rem;
  }
`;

function HistoricalDates() {
  return (
    <Section>
      <HistoricalDatesUpper />
      <HistoricalDatesSlider />
    </Section>
  );
}

export default HistoricalDates;
