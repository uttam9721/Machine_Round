// // <<<<<<< HEAD
// // import React from 'react'
// // import { useState } from 'react';
// // =======
// // // // import React, { useState } from 'react'

// // // // const Todo = () => {

// // // //     const [value,setValue]= useState("");
// // // //     const [data,setData]= useState([]);


// // // //     const handlerChange=(e)=>{
// // // //       e.preventDefault();
// // // //       if(value.trim()==="") return;
// // // //       setData([...data,value])
// // // //       // console.log(...data)
// // // //       setValue("");
// // // //     }

// // // //   const deleteItem = (e) => {
// // // //   const updatedData = data.filter((_, curr) => curr !== e);
// // // //   setData(updatedData);
// // // // };



// // // //   return (
// // // //     <div className='todo'>
// // // //       <form onSubmit={handlerChange}>
// // // //       <input type="text"
// // // //       value={value}
// // // //       onChange={(e)=>setValue(e.target.value)}
// // // //       placeholder='write Description here.'/>
// // // //         <button className='btn'>Add</button>
// // // //         {/* <button className='btn'>Delete</button> */}
// // // //       </form>
// // // //       {data.map((item, idx) => (
// // // //   <div key={idx}>
// // // //     <p>{item}
// // // //       <button className='ll' onClick={()=>deleteItem(idx)}>delete</button>
// // // //     </p>
    
// // // //   </div>
// // // //   ))}
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Todo




// import React, { useState } from 'react';

// const Todo = () => {
//   const [value, setValue] = useState('');
//   const [val, setVal] = useState('');
//   const [data, setData] = useState([]);
//   const [editIndex, setEditIndex] = useState(null); // 🔧 for editing

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (value.trim() === '' || val.trim() === '') return;

//     if (editIndex !== null) {
//       // 🔁 Editing existing item
//       const updated = [...data];
//       updated[editIndex] = { desc: value, cgpa: val };
//       setData(updated);
//       setEditIndex(null);
//     } else {
//       // ➕ Adding new item
//       setData([...data, { desc: value, cgpa: val }]);
//     }

//     setValue('');
//     setVal('');
//   };

//   const deleteItem = (index) => {
//     const updated = data.filter((_, i) => i !== index);
//     setData(updated);
//     // Reset edit if the deleted item is being edited
//     if (editIndex === index) {
//       setEditIndex(null);
//       setValue('');
//       setVal('');
//     }
//   };

//   const editItem = (index) => {
//     const item = data[index];
//     setValue(item.desc);
//     setVal(item.cgpa);
//     setEditIndex(index);
//   };

//   return (
//     <div className='todo'>
//       <h1>Todo Practice Daily</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           placeholder='Write description here...'
//         />
//         <input
//           type="text"
//           value={val}
//           onChange={(e) => setVal(e.target.value)}
//           placeholder='Write CGPA here...'
//         />
//         <button className='btn' type="submit">
//           {editIndex !== null ? 'Update' : 'Add'}
//         </button>
//       </form>

//       {data.map((item, idx) => (
//         <div key={idx}>
//           {item.desc} - {item.cgpa}
//           <button onClick={() => deleteItem(idx)}>🗑️</button>
//           <button onClick={() => editItem(idx)}>✏️</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Todo;



// // import React, { useState } from 'react'
// // >>>>>>> e2e28d2 (searchbar)

// // const Todo = () => {
// //   const [value ,setValue]=useState("")
// //   const [data,setData]=useState([])
// //   // console.log(value);
// //   // value=>get
// //   // setValue=>set



// //   const handler=(e)=>{
// //     e.preventDefault()
// //     if(value.trim()==="") return;
// //     setData([...data,value])
// //     setValue("")
// //   }
// //   const deleteItem=(e)=>{
// //     const update=data.filter((_,curr)=>curr!==e)
// //     // setValue(update);
// //     setData(update);
// //   }
// //   return (
// //     <div>
// //       <form onSubmit={handler}>
// //         <input type="text"
// //         placeholder='write desc here...'
// //         value={value}
// //         onChange={(p)=>setValue(p.target.value)}
// //         />
// //         <button>Add</button>
// //       </form>
// //       {data.map((item,idx)=>{
// //         return(
// //           <div key={idx}>
// //           {item} {" -------- "}
// //           <button onClick={()=>deleteItem(idx)}>delete</button>
// //           </div>
// //         )
// //       })}
// //     </div>
// //   )
// // }

// // export default Todo



// // import React, { useState } from 'react'

// // const Todo = () => {
// //   const [value,setValue]=useState("");
// //   const [data,setData]=useState([]);

// //   console.log(value);
// //   const submitHandler=(e)=>{
// //     e?.preventDefault();
// //     if(value.trim()==="") return;
// //     setData([...data,value]);
// //     setValue("")
// //   }

// //   const deleteItem=((e)=>{
// //     const update = data.filter((_,curr)=>curr!==e);
// //     setData(update)
// //   })
  
// //   return (
// //     <div className='App'>
// //       <h1>Todo App</h1>
// //       <form  onSubmit={submitHandler}>
// //         <input type="text" 
// //         name="" id="" 
// //         value={value}
// //         onChange={(e)=>setValue(e.target.value)}
// //         placeholder='Enter the description here' />
// //         <button className='btn'>Add</button>
// //       </form>
// //       <div>{
// //         data.map((item,idx)=>{
// //           return(
// //           <div key={idx}>
// //             {item}
// //             <button
// //             onClick={()=>deleteItem(idx)}
// //             className='btn'>&#128465;</button>
// //           </div>
// //           )
// //         })
// //         }</div>
// //     </div>
// //   )
// // }

// // export default Todo







import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (!input.trim()) return;
    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = input;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, input]);
    }
    setInput('');
  };

  const handleEdit = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div style={styles.container}>
      <h2>Todo App (React CRUD)</h2>
      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.button}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>
            <span>{todo}</span>
            <div>
              <button onClick={() => handleEdit(index)} style={styles.smallBtn}>Edit</button>
              <button onClick={() => handleDelete(index)} style={styles.smallBtn}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '500px',
    margin: 'auto',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    width: '60%',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginTop: '20px',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    alignItems: 'center',
  },
  smallBtn: {
    marginLeft: '5px',
    padding: '5px 10px',
  },
};

export default App;
