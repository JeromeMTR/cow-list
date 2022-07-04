const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())

app.get('/api/cows', (req, res) => {
  db.get((err, result) => {
    if (err) {
      res.status(500).end();
    }
    res.status(200).json(result)
  })
})

app.post('/api/cows', (req, res) => {
  console.log(req.body)
  db.post(req.body, (err) => {
    if (err) {
      res.status(500).end()
    }
    res.status(201).end();
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
