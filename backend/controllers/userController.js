
const usersModel= require("../models/userModel");

const addUsers=async (req,res)=> {


    const {name,username,gender}= req.body;

    try {

        const collect= new usersModel({
            name: name,
            username: username,
            gender: gender,
            
           })
    
           const data= await collect.save();
           res.status(200).json(data);

    }

    catch (err) {


        
        res.status(401).send(err);
    }




}



module.exports= addUsers;

