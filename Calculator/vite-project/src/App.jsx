import React, { useState } from 'react'

const App = () => {
  const [value,setValue] = useState("");
  // console.log(value)
  const arr = [
  'C', '←', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=', 
];

  const handlerSubmit=(e)=>{
      e?.preventDefault();
      try {
        const ans =eval(value);
        setValue(ans);
        
      } catch (error) {
        alert("Input invalid")
        setValue("");
      }
  }

  const handler=(e)=>{
    const id = e.target.id;
    console.log(id);
    if(id==='C'){
      setValue("");
    }else if(id==='='){
      handlerSubmit(e);
    }else{
      setValue((val)=>val+id);
    }

  }
  return (
    <div className='app'>
      <form onSubmit={handlerSubmit}>
        <input type="text"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        placeholder='type any number here.....'
        name="" id="" />
      </form>
      <div className="container"
      onClick={handler}
      >
        {arr.map((item,idx)=>{
          return(
            <button
            className='cell'
            key={idx}
            id={item}
            >{item}</button>
          )
        })}
      </div>
    </div>
  )
}

export default App
