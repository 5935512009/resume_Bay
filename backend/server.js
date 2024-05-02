// bay-resume-back-end/index.js

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
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:5PWZZLV.i_u5eqT@cluster0.xn0erow.mongodb.net/resumetodolist?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Define Schema
const todoSchema = new mongoose.Schema({
  id: String,
  description: String
});

// Define Model
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

// Start server
const PORT = process.env.PORT || 4001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
