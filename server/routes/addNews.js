import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();

router.post('/', (req, res) => {
  fs.readFile(path.join(__dirname,'../storage/news.json'), 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const news = JSON.parse(data);
      news.push(req.body);
      const jsonNews = JSON.stringify(news);
      fs.writeFile(path.join(__dirname,'../storage/news.json'), jsonNews);
      res.status(200).json();
    };
  });
});

export default router;