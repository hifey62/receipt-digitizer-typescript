import "dotenv/config"
import { env } from "./config/env.js";
import { app } from "./app.js";

const PORT = env.PORT



app.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`)
})