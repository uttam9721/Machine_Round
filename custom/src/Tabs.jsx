import React, { useEffect } from 'react'

const Tabs = (props) => {
    const {children}=props;
    useEffect(()=>{
        // console.log(children);
        React.Children.forEach(children,(element)=>{
            console.log(element);
            
        })
        
    },[props])

  return (
    <div>
     <h1> Hello</h1>
    </div>
  )
}

export default Tabs
