import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  border-left: 1px solid var(--color-dark-blue-10);
  border-right: 1px solid var(--color-dark-blue-10);
  font-size: 2rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: var(--color-dark-blue-10);
    z-index: -1;
  }

  &::before {
    top: 45%;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
  }

  &::after {
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 1px;
  }
`;

function HistoricalDates() {
  return <Section>Hello world</Section>;
}

export default HistoricalDates;
