import React, { useState, useEffect } from 'react';
import './blog.css';
import axios from 'axios';

export default function Blogs() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/todos') // ส่งคำขอ HTTP ไปยัง API ของ back-end ที่ endpoint '/api/todos'
      .then(res => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log('hello this error is .....',error);
      });
      
  }, []);

  return (
    <div>
      <h3>Items</h3>
      {items.map((item, index) => (
        <div key={index}>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
