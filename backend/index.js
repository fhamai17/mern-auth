
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import bodyParser from 'body-parser';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`Connect to mongo`)
}).catch((err)=>{
    console.log(err)
});

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})