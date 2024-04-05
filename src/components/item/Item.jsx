import React from "react";
import './item.css'
const Item = (props) => {
  return (
    <div className="item">
      
        <img className="item-img-style" src={props.img}  alt="No images" />
      <div className="item-text">
        <p>{props.name}</p> 
        <p>${props.price}</p>
      </div>
    </div>
  );
};
export default Item;
