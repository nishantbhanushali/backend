import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
    content :{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:[
        {
        type:mongoose.Schema.Types.ObjectId,
        user:"Subtodo"
    },
]


},{timestamps:true}
)

export const Todo = mongoose.model("Todo", todoSchema)