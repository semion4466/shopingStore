import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// init express:
const app = express();

// Dotenv:
dotenv.config();

mongoose.set("strictQuery", true);

// mongoDB connection:
mongoose.connect(process.env.MONGO_CONNECTION, () => {
  try {
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
});

// exprees use:
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// body-parser use:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// cors use:
app.use(cors());

//Routers:
import productRouter from "../backend/src/routers/product.js";
import cartRouter from "../backend/src/routers/cart.js";
import orderRouter from "../backend/src/routers/order.js";
app.use("/", productRouter);
app.use("/", cartRouter);
app.use("/", orderRouter);

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
