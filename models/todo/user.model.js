import mongoose  from "mongoose";

const userScheman = new mongoose.Schema({
    username : {
        typeof : String,
        unique:true,
        required: true
    },
    password:{
        typeof: String,
        min :[6, "messages contain minimun 6 letters"]
    },

},{timestamps:true}
)

export const User = mongoose.model("User", userScheman)