import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware to handle CORS
app.use(cors({
  origin: ['https://resume-bay-full-stack.vercel.app','https://resume-bay-full-stack-5935512009s-projects.vercel.app','https://resume-bay-seven.vercel.app','http://localhost:3000'], // Allow requests from specific origin
  methods: ['GET','POST'], // Allow only GET requests
  credentials: true // Allow credentials such as cookies to be sent along with requests
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

app.get('/todos/:id',(req,res)=>{
  const id = req.params.id
  Todo.findById({_id:id})
  .then(post => res.json(post))
  .catch(err => console.log(err))
})

app.post('/todos/create',(req,res)=>{
  Todo.create(req.body)
    .then(post => res.json(post))
    .catch(err => console.log(err))
})

app.put('/todos/update/:id', (req,res)=>{
  const id = req.params.id;
  Todo.findByIdAndUpdate({_id:id},{
    name: req.body.name,
    description: req.body.description,
    tools: req.body.tools
  }).then(todo => res.json(todo))
  .catch(err => console.log(err))
})

app.get('/api/test', (req, res) => {
  res.send('This is test part');
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
