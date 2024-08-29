import mongoose, { Schema }  from "mongoose";

const userScheman = new Schema({
    username :{
        type:String,
        unique: true,
        require:[true, "username required"],
        lowercase:true
    },
    email:{
        type:String,
        unique: true,
        require:[true, "username required"],
        lowercase:true
    },
    password:{
        type:String,
        lowercase:true,
        min:[6,"minimun six letters required"],
        required:[true, "password is required"]

    }
}, {timestamps:true})

export const User = mongoose.model("User", userScheman)