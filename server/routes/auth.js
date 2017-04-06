import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();
const newsPath = path.join(__dirname,'../storage/news.json');

router.post('/', (req, res) => {
  fs.readFile(
    path.join(__dirname,'../storage/auth.json'),
    'utf8',
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data || "[]");
      };
    }
  );
});

export default router;