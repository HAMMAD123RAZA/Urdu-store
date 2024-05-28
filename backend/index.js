import express from "express";
import mongoose from "mongoose";
import bookRoute from "./routes/book-route.js";
import cors from "cors";
import userRoute from "./routes/user-route.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

mongoose
  .connect("mongodb://127.0.0.1:27017/urduBookStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

// routes
app.use("/", bookRoute);
app.use("/user", userRoute);

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
