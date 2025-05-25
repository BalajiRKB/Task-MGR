const express=require("express");
const router=express.Router();
const TaskModel=require("./taskmodel.js");

router.get('/task',async (req,res)=>{
    try{

        const tasks=await TaskModel.find();
        res.status(200).json(tasks);
    }
    catch(err){
        res.status(500).json({message:"Error fetching Tasks",error: err})
    }
});

router.post('/task',async(req,res)=>{
    try{
        const {task,status}=req.body;

        const newtask=new TaskModel({
            task,
            status
        });

        savedtask=await newtask.save();
        res.status(201).json(savedtask);
    }
    catch(err){
        res.status(500).json({message:"Error on creating Task",error:err});  
    }
})

router.patch("/task/status/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const {status}=req.body;

        const updatedTask = await TaskModel.findByIdAndUpdate(
            id,
            { status },
            { new: true }
          );
      
          if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
          }
      
          res.json(updatedTask);
        } catch (error) {
          res.status(500).json({ message: "Error updating task status", error });
        }    
})

router.delete("task/:id",async(req,res)=>{
    try{
        const {id}=req.params;

        const deletetask =await TaskModel.findByIdAndDelete(id);

        res.status(200).json({message:"Deleted successfully"})
    }
    catch(err){
        res.status(500).json({message:"Error Deleting task",error:err})
    }
})

module.exports=router;