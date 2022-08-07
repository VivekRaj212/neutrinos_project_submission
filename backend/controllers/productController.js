const productModel = require("../models/productModels");

const newProduct = async (req, res,) => {
  const savedProduct = new productModel(req.body);

  try {
    const productlist = await savedProduct.save();
    res.status(200).json(productlist);
  } catch (err) {
    
    res.json(err);
  }
};


const updateProduct= async (req,res)=> {

         try {

          const updatedHotel= await productModel.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true});
          console.log(updatedHotel);
          res.status(200).json(updatedHotel);
         }

         catch (err) {

             
             res.json(err);
             
         }

}

const deleteProduct= async (req,res)=> {

    try {

      await productModel.findByIdAndDelete(req.params.id);
     res.status(200).json("Hotel listing deleted successfully");
    }

    catch (error) {

        res.json(error);

    }

}

const getSingleProduct= async (req,res)=> {

    try {

     const oneHotel= await productModel.findById(req.params.id);
     res.status(200).json(oneHotel);
    }

    catch (err) {

        res.json(err);

    }

}
const getAllProduct= async (req,res,)=> {

    try {

     const hotel= await productModel.find();
     res.status(200).json(hotel);
    }

    catch (err) {

        res.json(error);

    }

}


module.exports= {newProduct,updateProduct,deleteProduct,getSingleProduct,getAllProduct};