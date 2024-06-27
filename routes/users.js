const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Respondiendo a /users');
});

module.exports = router;
