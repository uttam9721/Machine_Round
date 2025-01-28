import React,{useState} from 'react'

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
      <h1>{time}</h1>
     
    </div>
  )
}

export default App
