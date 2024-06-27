const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Esta es la ruta 3');
});

router.get('/status', (req, res) => {
  res.sendStatus(418); // I'm a teapot
});

router.get('/jsonp', (req, res) => {
  res.jsonp({ message: 'Hola como estas' });
});

module.exports = router;
