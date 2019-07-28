const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/hello-express', { target: 'http://localhost:3001/' }));
};
