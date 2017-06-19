'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Routes for Service "Orders"
app.get('/orders', function (req, res) {
  res.status(200).send({ message: '/orders route is Ok' });
});

app.get('/orders/:id', function (req, res) {
  res.status(200).send({ message: '/orders/' + req.params.id + ' route is Ok' });
});

// Start the Server
app.listen(3003, function (err) {
  if (err) console.error('Cant start Server 1 ' + err);
  console.info('Orders Server Started.');
});