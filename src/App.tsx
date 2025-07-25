import styled from 'styled-components';
import HistoricalDates from './components/HistoricalDates';
import GlobalStyles from './styles/GlobalStyles';

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <HistoricalDates />
      <GlobalStyles />
    </Container>
  );
}

export default App;
