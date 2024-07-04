const server = require('./dist/index').default;

exports.todoApp = (req, res) => {
  server.ready(err => {
    if (err) throw err;
    server.server.emit('request', req, res);
  });
};
