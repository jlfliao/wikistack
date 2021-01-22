const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const { db } = require('./modles');
const layout = require('./views/layout.js');
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
} = require('./views/index.js');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send(layout(''));
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
