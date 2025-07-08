// import React, { useState } from 'react'

// const App = () => {
//   const [value,setValue] = useState("");
//   // console.log(value)
//   const arr = [
//   'C', '←', '%', '/',
//   '7', '8', '9', '*',
//   '4', '5', '6', '-',
//   '1', '2', '3', '+',
//   '0', '.', '=', 
// ];

//   const handlerSubmit=(e)=>{
//       e?.preventDefault();
//       try {
//         const ans =eval(value);
//         setValue(ans);
        
//       } catch (error) {
//         alert("Input invalid")
//         setValue("");
//       }
//   }

//   const handler=(e)=>{
//     const id = e.target.id;
//     console.log(id);
//     if(id==='C'){
//       setValue("");
//     }else if(id==='='){
//       handlerSubmit(e);
//     }else{
//       setValue((val)=>val+id);
//     }

//   }
//   return (
//     <div className='app'>
//       <form onSubmit={handlerSubmit}>
//         <input type="text"
//         value={value}
//         onChange={(e)=>setValue(e.target.value)}
//         placeholder='type any number here.....'
//          />
//       </form>
//       <div className="container"
//       onClick={handler}
//       >
//         {arr.map((item,idx)=>{
//           return(
//             <button
//             className='cell'
//             key={idx}
//             id={item}
//             >{item}</button>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default App

// src/data.js

// data.js



// App.js
import React, { useEffect, useState } from 'react';
import { user } from './data'; // ✅ imported array from data.js

const App = () => {
  
  const [users, setUsers] = useState([]);
const user = [
  {
    id: 1,
    name: "Uttam Kumar",
    email: "uttam@example.com"
  },
  {
    id: 2,
    name: "Raj Patel",
    email: "raj@example.com"
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya@example.com"
  }
];


  useEffect(() => {
    // ✅ Directly use the imported user array
    setUsers(user);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Local Users</h1>
      <ul>
        {user.map((item,index) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
