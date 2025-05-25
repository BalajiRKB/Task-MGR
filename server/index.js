const express =require("express");
const app=express();
const {dbconnect}=require("./db.js");

dbconnect();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Task-MGR's Server is running...");
});

app.use('/api',require('./routes.js'))
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});
