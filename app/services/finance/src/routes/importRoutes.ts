import { Router } from 'express';
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'uploads/' });

// TODO: Implement controllers
router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully', file: req.file });
});

export default router;
