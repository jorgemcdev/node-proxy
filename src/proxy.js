const express = require('express');
const httpProxy = require('http-proxy');

const proxy = express();
const apiProxy = httpProxy.createProxyServer();

// Add you services, serviceName: Host:Port
const Service = {
  default: 'http://localhost:3001',
  helpdesk: 'http://localhost:3002',
  orders: 'http://localhost:3003',
};

// Redirect to Service: Default
proxy.get('/', (req, res) => {
  console.info('Redirecting to Default Server srv#1');
  apiProxy.web(req, res, { target: Service.default });
});

// Redirect to Service: Orders
proxy.all('/orders*', (req, res) => {
  console.info('Redirecting to Orders Server srv#2');
  apiProxy.web(req, res, { target: Service.orders });
});

// Redirect to Service: Helpdesk
proxy.all('/helpdesk*', (req, res) => {
  console.info('Redirecting to Helpdesk Server srv#3');
  apiProxy.web(req, res, { target: Service.helpdesk });
});

// Start the Http Proxy
proxy.listen(3000, (err) => {
  if (err) console.error('Error Starting httpProxy');
  console.info('httpProxy Started on Port 3000');
});

export default proxy;
