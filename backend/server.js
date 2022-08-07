const express= require("express");
require("dotenv").config();
const app= express();
const connectdb= require("./config/connectdb");
const cors= require("cors");
const adminRoutes= require("./routes/adminRoutes");
const usersRoutes= require("./routes/userRoutes");
const productRoutes= require("./routes/productRoutes");
const port= process.env.PORT;
const MONGO_URL= process.env.MONGO_URL;
const cookieParser= require("cookie-parser");
//cors policy
app.use(cors());

app.use(cookieParser());
// JSON
app.use(express.json());


app.use("/api/admin",adminRoutes);
app.use("/api/users",usersRoutes);
app.use("/api/products",productRoutes);




app.listen(port,()=> {

      connectdb(MONGO_URL)
      console.log(`Server running at http://localhost:${port}`)

})