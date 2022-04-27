import './App.css';
import Main from './pages/Main';
import { Data } from './contexts/HeroContext';

const App = () => {
  return (
    <div className="App">
      <Data>
        <Main />
      </Data>

    </div>
  );
}

export default App;
