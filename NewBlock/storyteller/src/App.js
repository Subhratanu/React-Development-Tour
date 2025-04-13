import {useState} from "react";
import './App.css';
import Cards from './Components/Cards';
import mockSampleData from "./Mockdata/mockSampleData.json"
function App() {
  //using state variable -> Re Render our Applications
  // useState() is a function/ React Hook
  // useState() returns an Array consist of primary value & function
  const [value,setValue] = useState(10);
  const incrementLogic=()=>{
    setValue(value+1);
    console.log("Increment Logic called: ",value);
  }

  const decrementLogic=()=>{
    setValue(value-1);
    console.log("Decrement Logic called: ",value);
  }
  return (
    <div>
      <h1> This is my First ever React Application</h1>
      <div className="cart-func">
      <button className="btn-primary" onClick={decrementLogic}>Decrement(-)</button>
      <h3>{value}</h3>
      <button className="btn-primary" onClick={incrementLogic}>Increment(+)</button>
      </div>
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