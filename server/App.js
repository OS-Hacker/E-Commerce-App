import express from "express";
import  dotenv  from "dotenv";
import { connectdb } from "./db/Connectdb.js";
import UserRouter from "./router/UserRouter.js";
import cors from 'cors'
import CategoryRoute from "./router/CategoryRouter.js";
import productRouter from "./router/ProductRoute.js";

const App = express();
dotenv.config();

// middleware
App.use(cors())
App.use(express.json())

// Routers
App.use(UserRouter)
App.use(CategoryRoute)
App.use(productRouter)

// DB connection 
connectdb()

// create server
App.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`));











