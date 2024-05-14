// import bookModel from "../model/bookModel.js";

import BookModel from "../model/bookModel.js";


const getBook = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).json(books);
  } catch (error) {
    console.log(error, "error");
    res.status(500).json(error);
  }
};

export default getBook;
