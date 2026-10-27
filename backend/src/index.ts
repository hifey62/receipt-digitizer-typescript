import "dotenv/config"
import { env } from "./config/env.js";
import { app } from "./app.js";
import cors from 'cors'


const PORT = env.PORT



app.use(cors())
app.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`)
})