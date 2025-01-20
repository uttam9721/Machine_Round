import React from 'react';
import FAQItem from './FAQItem';

const FAQComp = () => {
  const faqs = [
    {
      question: "What is JSON?",
      answer: "JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate."
    },
    {
      question: "How do I format data in JSON?",
      answer: "Data in JSON is formatted as key-value pairs enclosed in curly braces {}. Arrays are enclosed in square brackets []."
    },
    {
      question: "What are some common uses of JSON?",
      answer: "JSON is commonly used for transmitting data between a server and a web application, configuring settings, and storing structured data."
    },
    {
      question: "What data types are supported in JSON?",
      answer: "JSON supports strings, numbers, objects, arrays, booleans, and null."
    },
    {
      question: "Can comments be added to JSON?",
      answer: "No, JSON does not support comments. However, you can include explanatory keys to provide context."
    }
  ];

  return (
    <>
      {faqs.map((faq, index) => (
        // <div key={index}>
        //   <h3>{faq.question}</h3>
        //   <p>{faq.answer}</p>
        // </div>
        <FAQItem faq={faq} index={index}/>
      ))}
    </>
  );
};

export default FAQComp;
