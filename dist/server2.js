'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Routes for Service "Helpdesk"
app.get('/helpdesk', function (req, res) {
  res.status(200).send({ message: '/helpdesk route is Ok' });
});

app.get('/helpdesk/:id', function (req, res) {
  res.status(200).send({ message: '/helpdesk/' + req.params.id + ' route is ok' });
});

// Start the Server
app.listen(3002, function (err) {
  if (err) console.error('Cant start Server', err);
  console.info('Helpdesk Server Started.');
});