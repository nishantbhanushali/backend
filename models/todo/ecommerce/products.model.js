import mongoose, { Schema } from "mongoose";


const  productSchema  = new Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
        },
    image:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
        default:0,
        stocks:Number,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    reviews:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"

    },


}, {timestamps})


export const  Product = mongoose.model("Product", productSchema)