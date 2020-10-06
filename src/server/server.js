import express from 'express';
import React from 'react';
import dotenv from 'dotenv';
import webpack from 'webpack';
import { renderToString } from 'react-dom/server';
import routes from './routes/routes.js';

dotenv.config();
const app = express();

const { PORT, URL, ENV } = process.env;

if (ENV === 'development') {
  console.log('Running on development');
  const webpackConfig = require('../../webpack.config.js');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
}


const setResponse = (html) => {
  return `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <link rel="stylesheet" href="/build/app.css">
                      <link rel="stylesheet" href="https://use.typekit.net/zse2lqq.css">
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>The MTB Shop</title>
                  </head>
                  <body>
                      <div id="app">${html}</div>
                      <script src="/build/app.js"> </script>
                  </body>
              </html>
              `;
};

app.use(express.json());

const renderApp = () => {
  const html = (response = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </StaticRouter>
    </Provider>
  ));
};

app.get('/', (req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
