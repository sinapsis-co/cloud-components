/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
const app = express();
const port = 8080;

const basePath = process.env.BASE_PATH;

app.get(`${basePath}/`, (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ response: '/ - Hello World! Your ECS Cluster with Fargate is ready to use!' });
});
app.get(`${basePath}/first`, (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ response: '/first - Hello World! Your ECS Cluster with Fargate is ready to use!' });
});
app.get(`${basePath}/another`, (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ response: '/another - Hello World! Your ECS Cluster with Fargate is ready to use!' });
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console, no-undef
  console.log(`App listening at http://localhost:${port}`);
});
