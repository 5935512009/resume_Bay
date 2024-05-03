// bay-resume-back-end/index.js

// เปลี่ยนรูปแบบ type เป็น module
import express from "express";

const app = express()

app.use("/",(req,res)=>{
  res.send("server is running");
});
const PORT =5001;
app.listen(PORT, console.log(`server is running ${PORT}`));