import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
function App() {
  return (
    <div>
      <h1> This is my First ever React Application</h1>
      {
        // Calling the Cards component
      }
      <div className="cards">
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      {Cards()}
      </div>
      
    </div>
  );
}

export default App;