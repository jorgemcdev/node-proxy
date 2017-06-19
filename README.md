# node-proxy
Node-proxy is a sample implementation of node-http-proxy, an HTTP programmable proxying library that supports websockets. It is suitable for implementing components such as reverse proxies and load balancers.

This code can be used as a easy way to split a monolithic App in specialized services using multiples servers. This basic implementation of node-http-proxy can be useful only for developmet mode a Micro-services Architecture.

## How to test

### Start the servers
Shell 1
```
$ npm run server1
```
Shell 2
```
$ npm run server2
```
Shell 3
```
$ npm run server3
```

### Start the proxy
Shell 4
```
$ npm run proxy
```
Sample end points for proxy:

Redirect to server 1
http://localhost:3000

Redirect to server 2
http://localhost:3000/helpdesk
http://localhost:3000/helpdesk/:id

Redirect to server 3
http://localhost:3000/orders
http://localhost:3000/orders/:id

## Configure proxy
proxy.js
```javascript
// Add you services, serviceName: Host:Port
const Service = {
  default: 'http://localhost:3001',
  helpdesk: 'http://localhost:3002',
  orders: 'http://localhost:3003',
};
```

## Run Tests
```
$ npm run test

```
file: test/proxy.test.js

## Links
https://github.com/nodejitsu/node-http-proxy

https://www.nginx.com/blog/introduction-to-microservices/

http://www.dwmkerr.com/learn-docker-by-building-a-microservice/
