import React, { useEffect, useState } from 'react'
import './App.css'
const FAQI = ({son,index}) => {
  const [isShow,setIsShow] = useState(false);

  useEffect(()=>{
    if(index==-1){
      setIsShow(true);
    }
  })
  const handleClick=()=>{
    setIsShow(!isShow);
  }
  return (
    <div className='faq-box'>
        <div className="que" onClick={handleClick}>
        <button>button</button>
      <div>{son.question}</div>
        </div>
        {isShow && <div className="ans">{son.answer}</div>}
    </div>
  )
}

export default FAQI
