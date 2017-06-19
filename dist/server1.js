'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Routes for Service "Orders"
app.get('/', function (req, res) {
  res.status(200).send({ message: 'Hello from Default service' });
});

// Start the Server
app.listen(3001, function (err) {
  if (err) console.error('Cant start Server 1 ' + err);
  console.info('Default Server 1 Started.');
});