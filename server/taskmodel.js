const mongoose=require("mongoose");

const task=new mongoose.Schema(
{
    task:{type:String,required:true},
    status:{type:Boolean,default:false},
},
{timestamp:true}
);

const TaskModel=mongoose.model("Task",task);
module.exports=TaskModel;