import React, { useState, useEffect } from "react";
import "./blog.css";
import axios from "axios";

export default function Blogs() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://resume-bay-server-01.vercel.app/todos') // ส่งคำขอ HTTP ไปยัง API ของ back-end ที่ endpoint '/api/todos'
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log("hello this error is .....", error);
      });
  }, []);

  return (
    <div className="blogs">
      <h3 className="">Experience</h3>
      <div className="blogs-items">
        {items.map((item, index) => (
          <div className="blogs-items-lists" key={index}>
            <p className="name">NAME: {item.name}</p>
            <p>DESCRIPTION : {item.description}</p>
            <p>TOOLS : {item.tools}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
