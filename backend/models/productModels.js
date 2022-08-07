const mongoose= require("mongoose");
const productSchema = new mongoose.Schema(
  {
    ProductName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
   info: {

      type: String,
      required: true,

   },
image: {

    type: [String],

},
isAdmin:{
  type: Boolean,
  default: false

}

},
  { timestamps: true }
);

const ProductModel= mongoose.model("Room", productSchema);
module.exports= ProductModel;