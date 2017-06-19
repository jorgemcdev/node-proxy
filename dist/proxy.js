'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var express = require('express');
var httpProxy = require('http-proxy');

var proxy = express();
var apiProxy = httpProxy.createProxyServer();

// Add you services, serviceName: Host:Port
var Service = {
  default: 'http://localhost:3001',
  helpdesk: 'http://localhost:3002',
  orders: 'http://localhost:3003'
};

// Redirect to Service: Default
proxy.get('/', function (req, res) {
  console.info('Redirecting to Default Server srv#1');
  apiProxy.web(req, res, { target: Service.default });
});

// Redirect to Service: Orders
proxy.all('/orders*', function (req, res) {
  console.info('Redirecting to Orders Server srv#2');
  apiProxy.web(req, res, { target: Service.orders });
});

// Redirect to Service: Helpdesk
proxy.all('/helpdesk*', function (req, res) {
  console.info('Redirecting to Helpdesk Server srv#3');
  apiProxy.web(req, res, { target: Service.helpdesk });
});

// Start the Http Proxy
proxy.listen(3000, function (err) {
  if (err) console.error('Error Starting httpProxy');
  console.info('httpProxy Started on Port 3000');
});

exports.default = proxy;