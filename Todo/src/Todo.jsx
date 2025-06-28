import React, { useState } from 'react'

const Todo = () => {

    const [value,setValue]= useState("");
    const [data,setData]= useState([]);


    const handlerChange=(e)=>{
      e.preventDefault();
      setData([...data,value])
      // console.log(...data)
      setValue("");
    }



  return (
    <div className='todo'>
      <form onSubmit={handlerChange}>
      <input type="text"
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      placeholder='write Description here.'/>
        <button className='btn'>Add</button>
        {/* <button className='btn'>Delete</button> */}
      </form>
      {data.map((item, idx) => (
  <div key={idx}>
    <p>{item}
      <button className='ll'>delete</button>
    </p>
    
  </div>
  ))}
    </div>
  )
}

export default Todo
