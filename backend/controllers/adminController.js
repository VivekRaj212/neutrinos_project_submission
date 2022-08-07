const adminModel= require("../models/adminModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const register=async (req,res)=> { 

    const {name,email,password}= req.body
    
     try {
       

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);


       const collect= new adminModel({
        name: name,
        email: email,
        password: hashPassword
       })

       const data= await collect.save();
       res.status(200).json(data);

      

     }

     catch (err) {

        console.log(error);

     }

};


const login = async (req, res) => {
    try {
      const { email, password} = req.body;
      if (email && password) {
        const user = await adminModel.findOne({ email: email });
            
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password);
  
          if (email === user.email && isMatch) {
            //Generatejwt token
            const token = jwt.sign(
              { UserID: user._id,isAdmin: user.isAdmin},
                process.env.JWT_SECRET_KEY,
              { expiresIn: "5d" }
            );

            const {password,isAdmin,...otherDetails}=user._doc;
            res.cookie("get-token",token,{
 
                httpOnly: true,    // It doesn't allow any client script to reach here

            }).status(200).json({...otherDetails})
          } else {
            res.send({
              status: "failed",
              message: "Email or password is incorrect",
            });
          }
        } else {
          res.send({
            status: "failed",
            message: "This email is not registered with us",
          });
        }
      } else {
        res.send({ status: "failed", message: "All fields are required" });
      }
    } catch (err) {
      
      console.log(err);
      
    }
  };

  module.exports={register,login};