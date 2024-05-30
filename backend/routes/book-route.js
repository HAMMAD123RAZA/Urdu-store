import express from 'express';
import multer from 'multer';
import { createBook, deleteBook, findoneBook, getBook, updateBook } from '../controllers/BookControllers.js';

const router = express.Router();
const storage=multer.diskStorage({
    destination:'uploads/',
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    }
})

const upload = multer({ storage });

router.get('/book', getBook);
router.post('/book', upload.single('image'), createBook);
router.put('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);
router.get('/book/:id', findoneBook);

export default router;



// const storage = multer.diskStorage({
//   destination: 'uploads/',
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });