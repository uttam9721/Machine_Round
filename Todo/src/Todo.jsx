import React from 'react'
import { useState } from 'react';

const Todo = () => {
  const [value,setValue] = useState("");
  const [val,setVal] = useState("");
  const [data,setData ] = useState([]);
  console.log(value);
  
const handlerChange=(e)=>{
  e?.preventDefault();
  if (value.trim()==="" || val.trim()==="")  return;
  setData([...data,{desc:value,cgpa:val}]);
  setValue("");
  setVal("");
  
}


const deleteItem=(e)=>{
    const update = data.filter((_,curr)=>curr!==e);
    setData(update)
  }
  return (
    <div className='todo'>
      <h1>Todo practice daily</h1>
      <form onSubmit={handlerChange}>
        <input type="text" 
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        name="" id=""  
        placeholder='write description here....'/>
        <input type="text" 
        value={val}
        onChange={(e)=>setVal(e.target.value)}
        name="" id=""  
        placeholder='write CGPA here....'/>
        <button className='btn'>Add</button>
      </form>
      {data.map((item,idx)=>{
        return(
          <div key={idx}>
          {item.desc}-{item.cgpa}
          <button onClick={()=>deleteItem(idx)}>🗑️</button>
        </div>
        )
      })}
    </div>
  )
}

export default Todo
