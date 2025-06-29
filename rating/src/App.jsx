import React, { useState } from 'react'

const App = () => {
  const [rating,setRating] =useState()
  const [hover,setHover]=useState()
  const arr = new Array(5).fill(0);
  console.log(rating);
  console.log(hover);

  
  return (
    <div className='app'>
      <h1>Rating System</h1>
      {arr.map((item,idx)=>{
        return(
          <span
          className={hover==0 && idx<rating||idx<hover?"colored":"unColor"}
          onMouseEnter={()=>setHover(idx+1)}
          onMouseLeave={()=>setHover(0)}
          key={idx}
          onClick={()=>setRating(idx+1)}
          >&#9733;</span>
        )
      })}
    </div>
  )
}

export default App
