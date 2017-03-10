/*eslint no-console: "off"*/
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const compression = require('compression');

const connection = require('./config/database.config');

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(connection);
mongoose.Promise = global.Promise;

app.use(compression());

app
  .use(express.static('public'))
  .use(bodyParser.json())
  .use('/api', require('./routes/api'))
  .use((err, req, res, next) => {
    console.log(err);
    res.status(422).send({error: err.message});
  });
app.listen(PORT, () => console.log(`listening on ${PORT}`));
