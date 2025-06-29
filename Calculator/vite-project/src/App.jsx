import React, { useState } from 'react';
import './App.css'; // Link to external CSS

const App = () => {
  const [value, setValue] = useState("");

  const arr = [
    'C', '←', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=', 
  ];

  const handlerSubmit = (e) => {
    e?.preventDefault();
    try {
      const ans = eval(value);
      setValue(ans);
    } catch (error) {
      alert("Input invalid");
      setValue("");
    }
  };

  const handler = (e) => {
    const id = e.target.id;
    if (id === 'C') {
      setValue("");
    } else if (id === '=') {
      handlerSubmit(e);
    } else if (id === '←') {
      setValue(value.slice(0, -1));
    } else {
      setValue((val) => val + id);
    }
  };

  return (
    <div className='app'>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Type any number...'
        />
      </form>
      <div className="container" onClick={handler}>
        {arr.map((item, idx) => (
          <button className='cell' key={idx} id={item}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
