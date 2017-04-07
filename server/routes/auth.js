import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();
const newsPath = path.join(__dirname,'../storage/news.json');

router.post('/', (req, res) => {
  fs.readFile(
    path.join(__dirname,'../storage/auth-data.json'),
    'utf8',
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const authData = JSON.parse(data);
        const {login, password} = req.body;
        res.send(
          authData.some(
            (item) => {
              return item.login === login && item.password === password
            }
          )
        );
      };
    }
  );
});

export default router;