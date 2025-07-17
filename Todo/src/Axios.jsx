import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((e) => {
        setProducts(e.data.products);
      });
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h2 style={{ textAlign: 'center' }}>Product List</h2>
      {
        products.map((item, idx) => {
          return (
            <h3
              key={idx}
              style={{
                backgroundColor: '#fff',
                padding: '10px 15px',
                margin: '10px auto',
                maxWidth: '400px',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
              }}
            >
              {item.title} - ${item.price}
            </h3>
          );
        })
      }
    </div>
  );
};

export default Axios;
