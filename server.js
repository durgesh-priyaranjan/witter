/* eslint no-console:0 */
require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const Twitter = require('twitter');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('./webpack.config');
const App = require('./js/App').default;

const StaticRouter = ReactRouter.StaticRouter;
const port = 8080;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);

const server = express();

const compiler = webpack(config);
server.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);
server.use(webpackHotMiddleware(compiler));

server.use('/public', express.static('./public'));

var client = new Twitter({
  consumer_key: 'J8VWY6ArNU7raujIrMrEB6Yk9',
  consumer_secret: 'YVhUnup2pPcD8fLCSAX3bmwpi6VeinNpyRzdC0vTuVbTFeCJwV',
  access_token_key: '591636649-aN6JvaN0SmRK9WtKUMGkUFW5xqCMxKZpWvwAOpYf',
  access_token_secret: 'OdFyUZTLj6xJTP58ubZTvHTyRfyXiN5K0son5UUvKEmMx'
});

server.get('/tweets-search/:search', (req, res) => {
  client.get('search/tweets', {q: req.params.search}, function(error, tweets, response) {
    if(error){
      res.status(500).json({ error: error });
    } else {
      res.json(tweets);
    }
  });
});

server.get('/tweet-specific/:id', (req, res) => {
  // 916965897671270400
  client.get('statuses/show/' + req.params.id, function(error, tweets, response) {
    if(error){
      res.status(500).json({ error: error });
    } else {
      res.json(tweets);
    }
  });
});

server.use((req, res) => {
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App))
  );

  if (context.url) {
    res.redirect(context.url);
  }

  res.write(template({ body }));
  res.end();
});

console.log(`listening on ${port}`);
server.listen(port);
