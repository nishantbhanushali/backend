import mongoose, { Mongoose } from "mongoose";

let categorySchema = new Schema({
    name:{
        type:String,
        required : true
        
    }
}, {timestamps:true})

export  const Category  = mongoose.model("Category", categorySchema)