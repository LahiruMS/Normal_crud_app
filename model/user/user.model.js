const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name:{
            type: string,
            required: true,
            trim:true,
        },
        lname:{
            type: string,
            required: true,
            trim:true,
        },
        email:{
            type: string,
            required: true,
            trim: true,
            unique: true,
        },
        city:{
            type: string,
        },
        age:{
            type:Number,
        }
    }
)

const User = mongoose.model("User",userSchema)

module.exports = User