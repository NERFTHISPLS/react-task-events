import { DEVICE } from '@/utils/constants';
import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 7.8rem;
  font-size: 5.6rem;
  font-weight: 700;
  padding-top: 5rem;

  &::before {
    content: '';
    background-image: linear-gradient(var(--color-blue), var(--color-purple));
    width: 5px;
    height: 100%;
  }

  @media ${DEVICE.laptop} {
    font-size: 4.2rem;

    &::before {
      height: 75%;
    }
  }

  @media ${DEVICE.tablet} {
    padding-left: 8rem;
    padding-top: 0;
    font-size: 3rem;

    &::before {
      display: none;
    }
  }

  @media ${DEVICE.tabletS} {
    padding-left: 4rem;
  }
`;
