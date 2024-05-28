import BookModel from "../model/bookModel.js";

export const createBook = async (req, res) => {
  try {
    const book = new BookModel({
      name: req.body.name,
      title: req.body.title,
      price: req.body.price,
      category: req.body.category,
      image: req.file ? `/uploads/${req.file.filename}` : null
    });

    const savedBook = await book.save();
    res.status(200).json(savedBook);
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ error: "Internal Server Error", details: error });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(book);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ error: "Internal Server Error", details: error });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ error: "Internal Server Error", details: error });
  }
};

export const findoneBook = async (req, res) => {
  try {
    const book = await BookModel.findById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    console.error("Error finding book:", error);
    res.status(500).json({ error: "Internal Server Error", details: error });
  }
};

export const getBook = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error getting books:", error);
    res.status(500).json({ error: "Internal Server Error", details: error });
  }
};