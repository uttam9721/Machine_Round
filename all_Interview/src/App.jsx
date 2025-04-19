import React, { useEffect, useState } from 'react'
import Calculator from './components/Calculator';
import Practice from './components/Practice';
import ProgressBar from './components/ProgressBar';

const App = () => {
  const [progress,setProgress]=useState(0);

  useEffect(()=>{
    const time = setInterval(()=>{
      if(progress<100){
        setProgress((p)=>p+1);
      }
    },20);
    return()=>{
      clearInterval(time)
    }

  },[progress])
  return (
    <div className='App'>
      {/* <Calculator /> */}
      {/* <Practice /> */}
      <ProgressBar 
      progress={progress}
      color={'lightgreen'}
      />
      <ProgressBar 
      progress={progress}
      color={'yellow'}
      />
      <ProgressBar 
      progress={progress}
      color={'red'}
      />
    </div>
  )
}

export default App
