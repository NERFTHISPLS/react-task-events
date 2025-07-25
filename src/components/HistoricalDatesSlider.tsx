import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import EventsListItem from './EventsListItem';

const Container = styled.ol`
  padding-left: 8rem;
  padding-right: 3.5rem;
  cursor: grab;
`;

function HistoricalDatesSlider() {
  return (
    <Container>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <EventsListItem />
        </SwiperSlide>

        <SwiperSlide>
          <EventsListItem />
        </SwiperSlide>

        <SwiperSlide>
          <EventsListItem />
        </SwiperSlide>

        <SwiperSlide>
          <EventsListItem />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default HistoricalDatesSlider;
