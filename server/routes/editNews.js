import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();
const newsPath = path.join(__dirname,'../storage/news.json');

router.post('/', (req, res) => {
  fs.readFile(
    newsPath,
    'utf8',
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const news = JSON.parse(data);
        let article = news.find(item => item.id === req.body.id);
        article = Object.assign(article, req.body);
        const jsonNews = JSON.stringify(news);
        fs.writeFile(
          newsPath,
          jsonNews,
          () => res.status(200).json()
        );
      };
    }
  );
});

export default router;