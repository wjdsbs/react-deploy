const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'http://43.203.225.165:8080',
      changeOrigin: true,
    }),
  );
};
