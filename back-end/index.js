require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connection = require("./db");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order")

const app = express();

// database connection  
connection();

// middlewares

app.use(express.json({limit: '50mb'}));
app.use(cors());


//route
app.use("/users",authRoutes);
app.use("/products",productRoutes);
app.use("/orders",orderRoutes);


app.listen(process.env.Port, () => {
    console.log(`Server is running at port ${process.env.Port}`);
  });
