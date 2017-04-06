import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile(
    path.join(__dirname,'../storage/tags.json'),
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