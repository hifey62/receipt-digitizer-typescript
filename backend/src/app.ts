import express from "express" ;
import { healthRouter } from "./routes/health.routes.js";
import cors from 'cors'
import { errorHandler } from "./middleware/errorHandler.js";
export const app = express();
app.use(cors())
app.use(express.json())
app.use("/health", healthRouter)
app.use((req , res)=>{
    res.status(404).json({message : "ROute not available"})
})
app.use(errorHandler)

