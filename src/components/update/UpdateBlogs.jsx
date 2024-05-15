import React, { useState,useEffect } from 'react'
import './updateBlogs.css'
import { Link,useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
export default function UpdateBlogs() {
    const {id} = useParams();
    const [name,setName] = useState()
    const [description,setDescription] = useState()
    const [tools,setTools] = useState()
    const navigate = useNavigate()
    useEffect(()=>{
      const fetchData = async()=>{
        try{
          const res = await axios.get("https://resume-bay-server-01.vercel.app/todos/" + id);
          // console.log(res);
          setName(res.data.name)
          setDescription(res.data.description)
          setTools(res.data.tools)
        }
        catch(err){
          console.log(err);
        }
      }
      fetchData();
    }, [id])
    const handleUpdate = (e) =>{
        e.preventDefault()
       axios.put("https://resume-bay-server-01.vercel.app/todos/update/" + id , {name,description,tools})
       .then(res =>{
        //  console.log(res);
         alert('update success');
         navigate('/Blogs');
       })
       .catch(err => console.log(err))
    }
  return (
    <div className="update">
    <form onSubmit={handleUpdate}>
      <div className="update-form">
        <h2>Update Blog</h2>
        <div className="update-form-input">
          <label>Title</label>
          <input 
              type="text" 
              placeholder="update your Blog"
              value={name}
              onChange={(e)=> setName(e.target.value)}   
          />
        </div>
        <div className="update-form-input">
          <label>Description</label>
          <input 
              type="text" 
              placeholder="update your description"  
              value={description}
              onChange={(e)=> setDescription(e.target.value)}
          />
        </div>
        <div className="update-form-input">
          <label>Tools</label>
          <input 
              type="text" 
              placeholder="update your tools"  
              value={tools}
              onChange={(e)=> setTools(e.target.value)}
          />
        </div>
      </div>
      <button className="submit">Submit</button>
      <Link to='/Blogs'><button className="reset">Cancel</button></Link>
    </form>
  </div>
  )
}
