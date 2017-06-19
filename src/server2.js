import express from 'express';

const app = express();

// Routes for Service "Helpdesk"
app.get('/helpdesk', (req, res) => {
  res.status(200).send({ message: '/helpdesk route is Ok' });
});

app.get('/helpdesk/:id', (req, res) => {
  res.status(200).send({ message: `/helpdesk/${req.params.id} route is ok` });
});

// Start the Server
app.listen(3002, (err) => {
  if (err) console.error('Cant start Server', err);
  console.info('Helpdesk Server Started.');
});
