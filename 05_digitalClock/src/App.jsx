import React,{useState} from 'react'
import './App.css';

const App = () => {
  const curTime = new Date().toLocaleTimeString();
  const [time,setTime]=useState(curTime )
  
  const update=()=>{
    const curTime = new Date().toLocaleTimeString();
    setTime(curTime)
  }
  setInterval(()=>{
    update()
  },1000)
  return (
    <div>
       <div className="time-container">
        <h1 className="time-display">{time}</h1>
      </div>
     
    </div>
  )
}

export default App
