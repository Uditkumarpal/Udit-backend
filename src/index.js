//require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import mongodb from "./db/indux.js";

dotenv.config({
    path: './env'
})


mongodb()
.then(()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log("Server is running on port 3000",`${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongodb connection failed |||",err)})
/*import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import express from "express";
const app = express()
(async()=>{
    try{
        await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) 
        app.on("error",(error)=>{
            console.log("error",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
             console.log(`server is running on port,${process.env.PORT}`)
        })

    }catch(error){
        console.log("error:",error)
        throw err
    }
})()*/