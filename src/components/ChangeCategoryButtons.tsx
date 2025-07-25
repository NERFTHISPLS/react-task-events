import { useHistoryIntervalContext } from '@/contexts/history/useHistoryIntervalContext';
import ChevronLeft from '@/ui/ChevronLeft';
import ChevronRight from '@/ui/ChevronRight';
import CircleButton from '@/ui/CircleButton';
import { CHEVRON_SIZE_NORMAL } from '@/utils/constants';
import {
  findHistoryIntervalIndexByCategory,
  formatIntervalNumber,
} from '@/utils/helpers';
import styled from 'styled-components';

const Container = styled.div`
  align-self: center;
  padding-left: 8rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  gap: 1.8rem;
`;

const Span = styled.span`
  font-size: 1.8rem;
`;

function ChangeCategoryButtons() {
  const {
    historyIntervals,
    currentHistoryInterval,
    setPrevHistoryInterval,
    setNextHistoryInterval,
  } = useHistoryIntervalContext();

  const intervalIndex = findHistoryIntervalIndexByCategory(
    currentHistoryInterval,
    historyIntervals,
  );
  const formattedIntervalNumber = formatIntervalNumber(intervalIndex + 1);
  const formattedTotalIntervals = formatIntervalNumber(historyIntervals.length);

  return (
    <Container>
      <Span>
        {formattedIntervalNumber}/{formattedTotalIntervals}
      </Span>

      <Row>
        <CircleButton
          disabled={intervalIndex === 0}
          onClick={() => setPrevHistoryInterval(intervalIndex)}
        >
          <ChevronLeft size={CHEVRON_SIZE_NORMAL} />
        </CircleButton>

        <CircleButton
          disabled={intervalIndex === historyIntervals.length - 1}
          onClick={() => setNextHistoryInterval(intervalIndex)}
        >
          <ChevronRight size={CHEVRON_SIZE_NORMAL} />
        </CircleButton>
      </Row>
    </Container>
  );
}

export default ChangeCategoryButtons;
