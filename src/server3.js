import express from 'express';

const app = express();

// Routes for Service "Orders"
app.get('/orders', (req, res) => {
  res.status(200).send({ message: '/orders route is Ok' });
});

app.get('/orders/:id', (req, res) => {
  res.status(200).send({ message: `/orders/${req.params.id} route is Ok` });
});

// Start the Server
app.listen(3003, (err) => {
  if (err) console.error(`Cant start Server 1 ${err}`);
  console.info('Orders Server Started.');
});
