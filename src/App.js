import './App.css';
import { ScoreProvider } from './context/score';
import Router from './rooter/rooter';

function App() {
  return (
    <ScoreProvider>
      <Router />
    </ScoreProvider>
  );
}

export default App;
