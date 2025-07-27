import { useHistoryIntervalContext } from '@/contexts/history/useHistoryIntervalContext';
import { HistoryEvent } from '@/types';
import ChevronLeft from '@/ui/ChevronLeft';
import ChevronRight from '@/ui/ChevronRight';
import SwiperCircleButton from '@/ui/SwiperCircleButton';
import {
  BASE_ANIMATION_DURATION_SECONDS,
  DEVICE,
  SWIPER_ITEMS_PER_VIEW,
  SWIPER_ITEMS_PER_VIEW_MOBILE,
  SWIPER_ITEMS_PER_VIEW_TABLET,
  SWIPER_SPACE_BETWEEN_ITEMS,
  SWIPER_SPACE_BETWEEN_ITEMS_MOBILE,
} from '@/utils/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import EventsListItem from './EventsListItem';

interface SwiperProps {
  $events: HistoryEvent[];
}

const StyledSwiper = styled(Swiper)<SwiperProps>`
  cursor: ${(props) =>
    props.$events.length > SWIPER_ITEMS_PER_VIEW ? 'grab' : 'auto'};

  .swiper-pagination {
    display: none;
    position: relative;
    margin-top: 2rem;
    bottom: auto;
    top: auto;
  }

  .swiper-pagination-bullet {
    background: var(--color-dark-blue);
  }

  @media ${DEVICE.tablet} {
    padding-top: 1rem;
    border-top: 1px solid var(--color-dark-blue-10);

    .swiper-pagination {
      display: block;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-left: 8rem;
  padding-right: 3.5rem;

  @media ${DEVICE.tabletS} {
    font-size: 1.6rem;
    flex: 1;
    padding-left: 4rem;
    padding-right: 3.5rem;
  }
`;

function HistoricalDatesSlider() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { currentHistoryInterval } = useHistoryIntervalContext();
  const isTablet = useMediaQuery({ query: DEVICE.tablet });
  const isMobile = useMediaQuery({ query: DEVICE.mobileM });

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.to(containerRef.current, {
        opacity: 0,
        duration: BASE_ANIMATION_DURATION_SECONDS,
        onComplete: () => {
          gsap.fromTo(
            containerRef.current,
            { opacity: 0 },
            {
              opacity: 1,
              duration: BASE_ANIMATION_DURATION_SECONDS,
            },
          );
        },
      });
    },
    { dependencies: [currentHistoryInterval] },
  );

  if (!currentHistoryInterval) return null;

  const { events } = currentHistoryInterval;

  return (
    <Container ref={containerRef}>
      <SwiperCircleButton className="btn-prev">
        <ChevronLeft />
      </SwiperCircleButton>

      <StyledSwiper
        style={{ width: 'auto' }}
        modules={[Navigation, Pagination]}
        $events={events}
        spaceBetween={
          isTablet
            ? SWIPER_SPACE_BETWEEN_ITEMS
            : SWIPER_SPACE_BETWEEN_ITEMS_MOBILE
        }
        pagination={{
          clickable: true,
        }}
        slidesPerView={
          isMobile
            ? SWIPER_ITEMS_PER_VIEW_MOBILE
            : isTablet
              ? SWIPER_ITEMS_PER_VIEW_TABLET
              : SWIPER_ITEMS_PER_VIEW
        }
        navigation={{
          prevEl: '.btn-prev',
          nextEl: '.btn-next',
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventsListItem event={event} />
          </SwiperSlide>
        ))}
      </StyledSwiper>

      <SwiperCircleButton className="btn-next">
        <ChevronRight />
      </SwiperCircleButton>
    </Container>
  );
}

export default HistoricalDatesSlider;
