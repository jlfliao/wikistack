const express = require('express');
const { addPage } = require('../views');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('get success');
});

router.post('/', (req, res) => {
	res.send('post success');
});

router.get('/add', (req, res) => {
	res.send(addPage());
});

module.exports = router;
