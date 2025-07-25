import HistoricalDates from './components/HistoricalDates';
import HistoryIntervalsProvider from './contexts/history/HistoryIntervalsContext';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <HistoryIntervalsProvider>
        <HistoricalDates />
      </HistoryIntervalsProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
