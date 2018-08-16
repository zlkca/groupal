const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../internals/webpack/webpack.dev.babel');
function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath,
    silent: true,
    stats: 'errors-only',
  });
}

module.exports = function setupRoute(server) {
  // Install a `/` route that returns server status
  const router = server.loopback.Router();
  // router.get('/', server.loopback.status());

  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(
    compiler,
    webpackConfig.output.publicPath,
  );

  router.use(middleware);
  router.use(webpackHotMiddleware(compiler));
  const fs = middleware.fileSystem;
  router.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
  server.use(router);
};
