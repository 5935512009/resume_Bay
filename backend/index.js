import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Allow requests from specific origin with specific methods and credentials
app.use(cors({
  origin: "https://resume-bay-server-01.vercel.app",
  methods: "GET",
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const todoSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  tools: String
});

const Todo = mongoose.model('Todo', todoSchema, 'todolistcollection');

app.get('/', async (req, res) => {
  res.json("Hello, My name is Bay");
});

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/test', (req, res) => {
  res.send('This is test part');
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
