import { useHistoryIntervalContext } from '@/contexts/history/useHistoryIntervalContext';
import { BASE_ANIMATION_DURATION_SECONDS } from '@/utils/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
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
  const startYearRef = useRef<HTMLSpanElement>(null);
  const endYearRef = useRef<HTMLSpanElement>(null);
  const { currentHistoryInterval } = useHistoryIntervalContext();
  const prevHistoryInterval = useRef(currentHistoryInterval);

  useGSAP(
    () => {
      if (!currentHistoryInterval || !prevHistoryInterval.current) return;
      if (!startYearRef.current || !endYearRef.current) return;

      const { startYear: oldStartYear, endYear: oldEndYear } =
        prevHistoryInterval.current;

      const { startYear: newStartYear, endYear: newEndYear } =
        currentHistoryInterval;

      const updateYear = (
        yearEl: HTMLSpanElement,
        startYear: number,
        endYear: number,
      ) => {
        gsap.to(startYearRef.current, {
          duration: BASE_ANIMATION_DURATION_SECONDS,
          onUpdate: function () {
            const year = startYear + (endYear - startYear) * this.progress();
            yearEl.textContent = Math.trunc(year).toString();
          },
        });
      };

      updateYear(startYearRef.current, oldStartYear, newStartYear);
      updateYear(endYearRef.current, oldEndYear, newEndYear);
    },
    { dependencies: [currentHistoryInterval] },
  );

  if (!currentHistoryInterval) return null;

  const { startYear, endYear } = currentHistoryInterval;

  return (
    <Container>
      <Title>
        Исторические <br /> даты
      </Title>

      <LargeDates>
        <Date ref={startYearRef} color="var(--color-iris)">
          {startYear}
        </Date>

        <Circle></Circle>

        <Date ref={endYearRef} color="var(--color-purple)">
          {endYear}
        </Date>
      </LargeDates>

      <ChangeCategoryButtons />
    </Container>
  );
}

export default HistoricalDatesUpper;
