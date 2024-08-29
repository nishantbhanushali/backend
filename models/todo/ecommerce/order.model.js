import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    name :{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required : true,
 },
    price:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum :["PENDING", "CANCELLED", "DELIVERED"],
        default:"PENDING"

    }

    },{timestamps})

export const Order = mongoose.model("Order", orderSchema)