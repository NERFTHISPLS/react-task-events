import styled from 'styled-components';

export const LargeDates = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7rem;
  font-size: 20rem;
  font-weight: 700;

  &::before {
    content: '';
    position: absolute;
    background-color: var(--color-dark-blue-10);
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
  }
`;
