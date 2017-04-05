import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import getNews from './routes/getNews';
import addNews from './routes/addNews';

let app = express();

app.use(bodyParser.json());


//-----routes-------------------------------------------------------------------
app.use('/api/getNews', getNews);
app.use('/api/addNews', addNews);
//-----end-routes---------------------------------------------------------------

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.puplicPath,
  noInfo: true,
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, () => console.log('running http://localhost:3000'));
