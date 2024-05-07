
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`Connect to mongo`)
}).catch((err)=>{
    console.log(err)
});

const app = express()
const port = 3000

app.use('/api/user', userRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})