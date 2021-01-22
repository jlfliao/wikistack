const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const { db } = require('./models');
const layout = require('./views/layout.js');
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
} = require('./views/index.js');
const wikiRouter = require('./routes/wiki.js');
const usersRouter = require('./routes/users.js');

db.authenticate().then(() => {
  console.log('connected to database');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());

app.use('/wiki', wikiRouter);

const init = async () => {
  await db.sync({ force: true });

  console.log('database synced');

  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
};

init();
