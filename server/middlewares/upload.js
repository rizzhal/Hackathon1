import multer from "multer";
import path from "path";

const MAX_RESUME_SIZE = 5 * 1024 * 1024
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {fileSize: MAX_RESUME_SIZE, files:1},
    destination: (req , file, cb) => {
        cb(null , "uploads/");
    },
    fileFilter: (req , file , cb) => {
        const isPDF = 
            file.mimetype === 'application/pdf' || file.originalname.toLowerCase().endsWith('.pdf');
            cb(isPDF ? null : new multer.MulterError('LIMIT_UNEXPECTED_FILE' , 'resume') , isPDF)
    } 
})

export default upload;