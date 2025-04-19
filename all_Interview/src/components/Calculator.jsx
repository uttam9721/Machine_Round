import React, { useState } from 'react';

const Calculator = () => {
  const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*', '=', 'C'];

  const [value,setValue]=useState('');

  const handleChange=(e)=>{
    setValue(e.target.value)

  }
//   console.log(value)

const handleClick=(e)=>{
    const id = e.target.id;
    if(id==='C'){
        setValue('')
    }else if(id === '='){
        handleSubmit(e);
    }else{
        setValue((val)=>val+id);
    }
}
const handleSubmit=(e)=>{
    e.preventDefault()
    try {
        const ans = eval(value)
        setValue(ans)
    } catch (error) {
        alert("Invalid input")
        
    }
}
  return (
    <div>
      <h1>Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input 
        value={value}
        type="text"
         onChange={handleChange}/>
      </form>
      <div className='container'
      onClick={handleClick}
      >
        {arr.map((item, index) => (
          <button key={index} id={item} className="cell">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
