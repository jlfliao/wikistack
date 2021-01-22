const express = require('express');
const { addPage } = require('../views');
const router = express.Router();

const { Page } = require('../models');

// router.post('/', (req, res) => {
//   res.json(req.body);
// });

router.post('/', async (req, res, next) => {
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  console.log(req.body.title);
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.get('/', (req, res) => {
  res.send('get success');
});

router.get('/add', (req, res) => {
  res.send(addPage());
});

module.exports = router;
