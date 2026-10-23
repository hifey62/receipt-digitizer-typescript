import express from "express"
import "dotenv/config"
import { env } from "./config/env.js";
const app = express();
const PORT = env.PORT


app.get("/health" , (req, res)=>{
    res.send("<h1>CHeck passed</h1>")
})

app.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`)
})