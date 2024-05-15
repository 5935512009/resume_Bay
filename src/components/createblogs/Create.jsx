import React from "react";
import "./create.css";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Create() {
    const [name,setName] = useState()
    const [description,setDescription] = useState()
    const [tools,setTools] = useState()
    const navigate = useNavigate()
    const date = new Date();
    console.log(date);
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('https://resume-bay-server-01.vercel.app/todos/create',{name,description,tools})
        .then(res => {
                // console.log(res);
                alert("Create success");
                navigate('/Blogs');

            })
        .catch(err=> console.log(err))
    }
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <div className="create-form">
          <h2>Create Blog</h2>
          <div className="create-form-input">
            <label>Title</label>
            <input 
                type="text" 
                placeholder="Create your Blog"
                onChange={(e)=> setName(e.target.value)}   
            />
          </div>
          <div className="create-form-input">
            <label>Description</label>
            <input 
                type="text" 
                placeholder="Create your description"  
                onChange={(e)=> setDescription(e.target.value)}
            />
          </div>
          <div className="create-form-input">
            <label>Tools</label>
            <input 
                type="text" 
                placeholder="Create your tools"  
                onChange={(e)=> setTools(e.target.value)}
            />
          </div>
        </div>
        <button className="submit">Submit</button>
        <Link to='/Blogs'><button className="reset">Cancel</button></Link>
      </form>
    </div>
  );
}
