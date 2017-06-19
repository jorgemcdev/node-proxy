import express from 'express';

const app = express();

// Routes for Service "Orders"
app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello from Default service' });
});

// Start the Server
app.listen(3001, (err) => {
  if (err) console.error(`Cant start Server 1 ${err}`);
  console.info('Default Server 1 Started.');
});
