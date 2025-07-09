
import React from 'react'
import {Data} from './Data'
import FAQItems from './FAQItems';
const FAQComp = () => {

  return (
    <div>
     {Data.map((faq,idx)=>{
        return(
            <div>
                <FAQItems faq={faq} idx={idx} />
            </div>
        )
     })}
    </div>
  )
}

export default FAQComp
