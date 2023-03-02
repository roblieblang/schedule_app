const express = require('express');
const getGoogleAccessToken = require("../handlers/auth0TokenHandler.js");
const router = express.Router();


// http://localhost:3301/gapi-token/:userId
// YOu can change the UID by replacing '1234acbd'

router.get('/gapi-token/:userId', (req, res) => {
  const userId = req.params.userId;
  getGoogleAccessToken(userId).then(results => {
    res.json(results);
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;