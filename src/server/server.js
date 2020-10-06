import express from 'express';
import React from 'react';
import dotenv from 'dotenv';
import webpack from 'webpack';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import helmet from 'helmet';

import routes from './routes/routes.js';
import initialState from './utils/mock/initialState.js';
import getManifest from './utils/middlewares/getManifest';

import AdminRoute from '../frontend/components/Admin/AdminRoute.jsx';
import PublicRoute from '../frontend/components/Public/PublicRoute.jsx';
import reducer from '../frontend/redux/reducers.js';

dotenv.config();
const app = express();

app.use(express.json());

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
  app.use(getManifest);
  app.use(express.static(__dirname + '/public'));
  app.use(helmet({ contentSecurityPolicy: false }));
  app.disable('x-powered-by');
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest
    ? '/build/' + manifest['main.css']
    : '/assets/app.css';
  const mainBuild = manifest
    ? '/build/' + manifest['main.js']
    : '/assets/app.js';

  return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <link rel="stylesheet" type="text/css" href="${mainStyles}" >
                <link rel="stylesheet" href="https://use.typekit.net/zse2lqq.css">

                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>The MTB Shop</title>
            </head>
            <body>
                <div id="app">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(
                      preloadedState
                    ).replace(/</g, '\\u003c')}
                </script>

                <script src="${mainBuild}"></script>
            </body>
        </html>
              `;
};

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Switch>
          {routes.map((route, i) =>
            route.adminRoute ? (
              <AdminRoute {...route} key={i} />
            ) : (
              <PublicRoute {...route} key={i} />
            )
          )}
        </Switch>
      </StaticRouter>
    </Provider>
  );

  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.get('*', renderApp);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
