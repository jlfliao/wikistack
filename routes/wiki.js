const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('get success');
});

router.post('/', (req, res) => {
  res.send('post success');
});

router.get('/add', (req, res) => {
  res.send('get/add success');
});

module.exports = router;
