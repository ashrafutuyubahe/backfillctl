import express,{Request,Response} from "express"
import * as dotenv from 'dotenv';
dotenv.config();

const PORT= process.env.PORT 

const app=  express();

app.get("/health",(req,res)=>{
    res.send("the app is running successfully")
})

app.get("/",(req,res)=>{
    
 
return res.status(200).json({message:"server is running successfu   lly"})
})
app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}......` )
})

export  default app