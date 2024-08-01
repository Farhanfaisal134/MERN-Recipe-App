import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express'
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'
const app = express();
import dotenv from "dotenv"
dotenv.config()

app.use(bodyParser.json())
app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

// userRouter
app.use('/api', userRouter)
// recipeRouter
app.use('/api', recipeRouter)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongoDB")
  })
  .catch((err) => {
    console.log(err)
  })

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
