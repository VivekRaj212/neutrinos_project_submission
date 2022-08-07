const mongoose= require("mongoose");

// Defining Schema
const userSchema= new mongoose.Schema({

    name: {type: String, required: true},
    username: {type:String,required: true, unique: true},
    gender: {type:String,required: true}

},

{timestamps:true}
)

// Model
const UserModel= mongoose.model("user",userSchema);

module.exports= UserModel;