const express= require("express");
const {newProduct,updateProduct,deleteProduct,getSingleProduct,getAllProduct} = require("../controllers/productController");
const router= express.Router();

router.post("/add", newProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", newProduct);
router.get("/oneProduct",getSingleProduct);
router.get("/allProduct",getAllProduct);



module.exports= router;