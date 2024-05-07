// เปลี่ยนรูปแบบ type เป็น module
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// เรัยกใช้งานไฟล์ .env
dotenv.config();

const app = express();
app.use(cors(
  {
    origin:["https://resume-bay-server-01-1vdk1ur5f-5935512009s-projects.vercel.app"],
    methods:["GET"],
    credentials:true
  }
));
app.use(express.json());

// Connect to MongoDB *** process.env.MONGO_URL ไปดูไฟล์ .env ที่ MONGO_URL
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Define Schema
const todoSchema = new mongoose.Schema({
  id: String,
  name:String,
  description: String,
  tools:String
});

// Define Model ตรงส่วนนี้จะต้องเลือก collection ด้วยว่าจะไปใช้อันใหนในที่นี้ใช้ todolistcollection
const Todo = mongoose.model('Todo', todoSchema, 'todolistcollection');

// Define API endpoint to get todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/api/test',(req,res)=>{
    res.send('This is test part');
})

// Start server   *** process.env.PORT ไปดูไฟล์ .env ที่ PORT
const PORT = process.env.PORT || 4001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});