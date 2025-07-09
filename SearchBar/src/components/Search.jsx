import React, { useState } from 'react';
import {Data} from './Data'
const Search = () => {
  const [value,setValue]=useState("")
  const [store,setStore] =useState(Data)
  // console.log(value);

 const filterOut= store.filter((currValue)=>{
    return currValue.name.toLowerCase().includes(value) || currValue.brand.toLowerCase().includes(value)
  })
  
  return (
    <div className="container">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search here..."
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      />
      <div className="type">
        <h3>Name</h3>
        <h3>Brand</h3>
        <h3>Images</h3>
      </div>
      {
        filterOut.map((cur)=>{
          return(
            <div className='itemList'>
              <p>{cur.name}</p>
              <p>{cur.brand}</p>
              {/* <p></p> */}
              <img src={cur.img} alt="" />
            </div>
          )
        })
      }
    </div>
  );
};

export default Search;
