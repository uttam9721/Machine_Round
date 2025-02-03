import React, { useState } from 'react'
import './App.css'
const Todos = () => {
    const [initial, setInitial] = useState();
    const [data, setData] = useState([])

    const getInput = (event) =>{
        console.log(event.target.value);
        setInitial(event.target.value)
    }
    const getData = () =>{
        console.log(initial);
        let store = [...data, initial]
        setData(store)
        setInitial("")
    }
    const deleteTask = (index) =>{
        console.log(index);
        let filterData = data.filter((curElem, id)=>{
            return id != index                          
        })
        setData(filterData)
    }
    console.log(data);
  return (
     <>
        <div className='container'>
            <div className='inputTask'>
                <input type='text' placeholder='Enter Your Task' value={initial} onChange={getInput}/>
                <button onClick={getData}>Add</button>
            </div>
            {data.map((curVal, index)=>{
                return (
                    <>
                        <div className='taskData'>
                            <p>{curVal}</p>
                            {/* <i id='deleteIcon'  class="fa-solid fa-trash"></i> */}
                            <span id='deleteIcon' onClick={()=>deleteTask(index)} class="material-symbols-outlined">delete</span>
                        </div>
                    </>
                )
            })}
        </div>
     </>
  )
}

export default Todos;
