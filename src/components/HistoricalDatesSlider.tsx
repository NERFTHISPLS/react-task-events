import { TimelineEvent } from '@/types';
import {
  SWIPER_ITEMS_PER_VIEW,
  SWIPER_SPACE_BETWEEN_ITEMS,
} from '@/utils/constants';
import styled from 'styled-components';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import EventsListItem from './EventsListItem';

interface Props {
  events: TimelineEvent[];
}

interface ContainerProps {
  $events: TimelineEvent[];
}

const Container = styled.ol<ContainerProps>`
  padding-left: 8rem;
  padding-right: 3.5rem;

  cursor: ${(props) =>
    props.$events.length > SWIPER_ITEMS_PER_VIEW ? 'grab' : 'auto'};
`;

function HistoricalDatesSlider({ events }: Props) {
  return (
    <Container $events={events}>
      <Swiper
        spaceBetween={SWIPER_SPACE_BETWEEN_ITEMS}
        slidesPerView={SWIPER_ITEMS_PER_VIEW}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventsListItem event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default HistoricalDatesSlider;
