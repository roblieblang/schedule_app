const express = require('express');
const bodyParser = require('body-parser');
const chronoUsers = require('./groupThreeRoutes/usersInformation.js');
var cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/usersInformation', chronoUsers);

app.listen(3301, () => {
  console.log('Server is now listening at port 3301');
});