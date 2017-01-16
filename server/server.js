const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const port = 1337;
const app = express();

app.listen(port);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));

app.post('/input', (req, res) => {
  console.log(req.body);
});