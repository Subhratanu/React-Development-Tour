import { useEffect, useState } from 'react';
import Cards from './Cards'
import Shimmer from './Shimmer';

const Cardrows=()=>{
    const [mockSampleApiData,setMockSampleApiData]=useState(null);
    // Fetching API data
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async ()=>{
        try{
            const collection=await fetch("https://dummyjson.com/users");
            const data=await collection.json();
            setMockSampleApiData(data);
        }
        catch(err){
            console.log(err);
        }
        
    }
    if(mockSampleApiData===null) return <Shimmer/>
    return(
      <div className="cards">
      
      {
        // Why we have put {} because we are going to write Javascript inside JSX

        //Conditional Rendering using Ternary Operator

        mockSampleApiData.users.length?
        mockSampleApiData.users.map((item)=>{
          return <Cards key={item.id} data={item}/>
        }):<h1 style={{color:"#FF0550"}}>NO User Details found at this moment!!!</h1>
      }
      </div>
    )
}

export default Cardrows;