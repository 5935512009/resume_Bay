import React, { useState, useEffect } from "react";
import "./blog.css";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
export default function Blogs() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {id} = useParams();
  // const navigate = useNavigate();
  console.log('id is '+id)
  useEffect(() => {
    axios
      .get("https://resume-bay-server-01.vercel.app/todos") // ส่งคำขอ HTTP ไปยัง API ของ back-end ที่ endpoint '/api/todos'
      .then((res) => {
        setItems(res.data);
        //console.log(res.data);
      })
      .catch((error) => {
        console.log("hello this error is .....", error);
        setError(error);
      })
      .finally(setLoading(false));
  }, []);
//  const handleDelete =(id)=>{
//   axios.delete('https://resume-bay-server-01.vercel.app/todos/delete/' + id )
//   .then(res => {
//     console.log(res);
//     alert("Delete complete");
//     window.location.reload();
//     //navigate('/Blogs');
//     })
//   .catch(err => {console.log(err)
//     console.log(id)
//    })
//  }
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="blogs">
      <h3>Experience</h3>
      {/* <Link to="/create" className="blogs-link">
        Add +
      </Link> */}
      <div className="blogs-items">
        {items.map((item, index) => (
          <div className="blogs-items-lists" key={index}>
            <p className="name">NAME: {item.name}</p>
            <p>DESCRIPTION : {item.description}</p>
            <p>TOOLS : {item.tools}</p>
            {/* <div className="blogs-items-button">
              <Link to={`/UpdateBlogs/${item._id}`} className="link-update">
                Update
              </Link>
              <button onClick={()=>handleDelete(item._id)} className="link-delete">
                Delete
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
