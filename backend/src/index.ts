import express from "express"

const app = express();
const PORT = Number(process.env.PORT) || 3000


app.get("/health" , (req, res)=>{
    res.send("<h1>CHeck passed</h1>")
})

app.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`)
})