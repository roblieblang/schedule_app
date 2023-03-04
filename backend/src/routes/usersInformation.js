const express = require('express');
const client = require('../connectionToDatabase');

const router = express.Router();

//Example of running query:
//  http://localhost:3301/usersInformation/users/chronotype/results?uid=1234abcd
// YOu can change the UID by replacing '1234acbd'
router.get('/users/chronotype/results', (req, res) => {
    const uid = req.query.uid;
    client.query(
      `SELECT * FROM chronotypes WHERE id IN (SELECT chronotype_id FROM users WHERE uid = $1)`,
      [uid],
      (err, result) => {
        if (!err) {
          res.send(result.rows);
        }
      }
    );
  });

module.exports = router;