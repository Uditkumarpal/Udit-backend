import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
 

const mongodb=async()=>{
    try{
      const connectioninstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      console.log(`\n Mongodb connected !! DB HOST :${
        connectioninstance.connection.host
      }`);
    }catch(error){
        console.log("mongodb connection error",error);
        process.exit(1)
    }
}

export default mongodb