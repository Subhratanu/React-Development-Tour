import './App.css';
import Counter from './Components/Counter';
import Cardrows from './Components/Cardrows';
import Accordion from './Components/Accordion';
import InternetStatus from './Components/internetStatus';

function App() {
  return (
    <div>
      <h1> This is my First ever React Application</h1>
      <InternetStatus/>
      <Counter/>
      <Accordion/>
      <Cardrows/>
    </div>
  );
}
export default App; 