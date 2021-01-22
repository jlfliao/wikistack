const express = require('express');
const { addPage, main } = require('../views');
const router = express.Router();

const { Page } = require('../models');

router.get('/', (req, res) => {
  res.send(main());
});

router.get('/add', (req, res) => {
  console.log('router.get/add');
  res.send(addPage());
});

// router.get('/:slug', async (req, res, next) => {
//   try {
//     const page = await Page.findOne({
//       where: {
//         slug: req.params.slug,
//       },
//     });
//     console.log(page);
//   } catch (error) {
//     next(error);
//   }
// });

router.post('/', async (req, res, next) => {
  console.log('router.post/add');
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });

    console.log('Record created:', page);
    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
