import express,{Request,Response} from "express"
import * as dotenv from 'dotenv';
dotenv.config();

const PORT= process.env.PORT 

const app=  express();

app.get("/health",(req,res)=>{
    res.send("the app is running successfully")
})

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}......` )
})
