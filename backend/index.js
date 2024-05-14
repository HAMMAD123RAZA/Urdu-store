import express from "express";
import mongoose from "mongoose";
import bookRoute from "./routes/book-route.js";
import cors from "cors"
import userRoute from "./routes/user-route.js"
const app = express();

app.use(express.json())
app.get("/", (req, res) => {
  res.send("home");
});
app.use(cors())

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "urduBookStore",
  })
  .then(() => {
    console.log("db connected"); 
  })
  .catch((err) => {
    console.log(err, "something wrong in db");
  });

// routes
app.use("/book", bookRoute);
app.use("/user",userRoute)

app.listen(4040, () => {
  console.log("server started");
});
