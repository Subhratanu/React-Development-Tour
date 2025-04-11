import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import mockSampleData from "./Mockdata/mockSampleData.json"
function App() {
  console.log(mockSampleData);
  console.log(mockSampleData.users);
  return (
    <div>
      <h1> This is my First ever React Application</h1>
      {
        // Calling the Cards component
      }
      <div className="cards">
      
      {
        // Why we have put {} because we are going to write Javascript inside JSX

        //Conditional Rendering using Ternary Operator

        mockSampleData.users.length?
        mockSampleData.users.map((item)=>{
          return <Cards key={item.id} data={item}/>
        }):<h1 style={{color:"#FF0550"}}>NO User Details found at this moment!!!</h1>
      }
      </div>
      
    </div>
  );
}

export default App;