import React, { useEffect, useState } from 'react'
import './App.css';
const App = () => {

    const [principle,setPrinciple]=useState(0);
    const [interest,setInterest] = useState(0);
    const [years,setYears] = useState(0);

    const handlerChange = (e) => {
        console.log(e.target.id,e.target.value);
        const id = e.target.id;
        const value = parseInt(e.target.value)
            if (id ==='principle') {
                setPrinciple(value); 
            }else if(id==='interest'){
                setInterest(value);
            }
        }
    }

    useEffect(()=>{
        calculateEMI();

    },[principle,interest,year])

  return (
    <div className='loan-calc'>
      <h1>Mortage Calculator</h1>
      <div className="inputes">
        <p>Principle</p>
        <input
        onChange={handlerChange}
        type="number" id='principle'/>

        <p>Interest</p>
        <input
         onChange={handlerChange}
        type="number" id='interest' />

        <p>year</p>
        <input
         onChange={handlerChange}
        type="number" id='year' />
      </div>
      <div className="output">
        Your EMI is 2000
      </div>
    </div>
  )


export default App
