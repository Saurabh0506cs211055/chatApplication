import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRouter from "./router/auth.routes.js"
dotenv.config();
const App = express();

App.use(express.json());
App.use(cookieParser());
mongoose.set("strictQuery",true);

const connect = async()=>{
  try{
  await mongoose.connect(process.env.Mongodb)
  console.log("connected to mongodb");
  }catch(error){
  console.log(error)
  }
}

App.use("/api/auth",authRouter)

App.listen(9090,()=>{
connect();
console.log("app is listening");
})