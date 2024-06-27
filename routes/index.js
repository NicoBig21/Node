const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

router.get('/json', (req, res) => {
  res.json({ message: 'Esta es una respuesta JSON' });
});

module.exports = router;
