import mongoose from "mongoose";

const { Schema, model } = mongoose;

const bookSchema = new Schema({
  name: String,
  title: String,
  price: Number,
  category: String,
  image: String
});
    
const BookModel = model("bookModel", bookSchema);

export default BookModel;
