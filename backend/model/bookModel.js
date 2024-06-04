import mongoose from "mongoose";

const { Schema, model } = mongoose;

const bookSchema = new Schema({
  name: String,
  title: String,
  price: Number,
  category: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const BookModel = model("bookModel", bookSchema);

export default BookModel;