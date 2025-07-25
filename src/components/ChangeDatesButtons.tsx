import ChevronLeft from '@/ui/ChevronLeft';
import ChevronRight from '@/ui/ChevronRight';
import CircleButton from '@/ui/CircleButton';
import styled from 'styled-components';

const Container = styled.div`
  align-self: center;
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

function ChangeDatesButtons() {
  return (
    <Container>
      <Span>01/06</Span>

      <Row>
        <CircleButton>
          <ChevronLeft size={20} />
        </CircleButton>

        <CircleButton>
          <ChevronRight size={20} />
        </CircleButton>
      </Row>
    </Container>
  );
}

export default ChangeDatesButtons;
