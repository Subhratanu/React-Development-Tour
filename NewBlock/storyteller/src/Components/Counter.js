import {useState} from "react";

const Counter = ()=>{
   //using state variable -> Re Render our Applications
  // useState() is a function/ React Hook
  // useState() returns an Array consist of primary value & function
  const [value,setValue] = useState(10);
  const incrementLogic=()=>{
    setValue(value+1);
  }
  const decrementLogic=()=>{
    setValue(value-1);
  }

  return(
    <div className="cart-func">
      <button className="btn-primary" onClick={decrementLogic}>Decrement(-)</button>
      <h3>{value}</h3>
      <button className="btn-primary" onClick={incrementLogic}>Increment(+)</button>
    </div>
  )
}

export default Counter;
