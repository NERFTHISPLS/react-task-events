import { useHistoryIntervalContext } from '@/contexts/history/useHistoryIntervalContext';
import { HistoryEvent } from '@/types';
import ChevronLeft from '@/ui/ChevronLeft';
import ChevronRight from '@/ui/ChevronRight';
import SwiperCircleButton from '@/ui/SwiperCircleButton';
import {
  SWIPER_ITEMS_PER_VIEW,
  SWIPER_SPACE_BETWEEN_ITEMS,
} from '@/utils/constants';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import EventsListItem from './EventsListItem';

interface SwiperProps {
  $events: HistoryEvent[];
}

const StyledSwiper = styled(Swiper)<SwiperProps>`
  cursor: ${(props) =>
    props.$events.length > SWIPER_ITEMS_PER_VIEW ? 'grab' : 'auto'};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-left: 8rem;
  padding-right: 3.5rem;
`;

function HistoricalDatesSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const { currentHistoryInterval } = useHistoryIntervalContext();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (!currentHistoryInterval) return null;

  const { events } = currentHistoryInterval;

  return (
    <Container>
      {!isBeginning && (
        <SwiperCircleButton onClick={() => swiperRef.current?.slidePrev()}>
          <ChevronLeft />
        </SwiperCircleButton>
      )}

      <StyledSwiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        $events={events}
        spaceBetween={SWIPER_SPACE_BETWEEN_ITEMS}
        slidesPerView={SWIPER_ITEMS_PER_VIEW}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventsListItem event={event} />
          </SwiperSlide>
        ))}
      </StyledSwiper>

      {!isEnd && (
        <SwiperCircleButton onClick={() => swiperRef.current?.slideNext()}>
          <ChevronRight />
        </SwiperCircleButton>
      )}
    </Container>
  );
}

export default HistoricalDatesSlider;
