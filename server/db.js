const mongoose=require("mongoose");
require("dotenv").config();

const dbconnect=async()=>{

    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
    }
    catch(err){
        console.error(err);
    }
}

module.exports={dbconnect};