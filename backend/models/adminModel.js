
const mongoose= require("mongoose");

// Defining Schema
const adminSchema= new mongoose.Schema({

    name: {type: String, required: true},
    email: {type:String,required: true},
    password: {type:String,required:true},
    isAdmin: {type: Boolean,default: false,}

},
{timestamps:true}

)

// Model
const AdminModel= mongoose.model("admin",adminSchema);

module.exports= AdminModel;