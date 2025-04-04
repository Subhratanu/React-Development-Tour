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

        mockSampleData.users.map((item)=>{
          console.log("Hello I'm from MAP: "+item.firstName+" "+item.lastName);
          return <Cards name={`${item.firstName} ${item.lastName}`} imgPath={item.image}/>
        })
      }
      </div>
      
    </div>
  );
}

export default App;