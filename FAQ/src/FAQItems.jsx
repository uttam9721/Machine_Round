import React, { useEffect, useState } from 'react'

const FAQItems = ({ faq, idx }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (idx === -1) {
      setIsShow(true);
    }
  }, [idx]); // Optional: include idx in dependencies for clarity

  const handleClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    
    <div className='faq-box'>
      <div className='que' onClick={handleClick}>
        <button>{isShow ? 'v' : '>'}</button>
        <div>{faq.question}</div>
      </div>
      {isShow && <div>{faq.answer}</div>}
    </div>
  );
};

export default FAQItems;
