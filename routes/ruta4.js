const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Esta es la ruta 4');
});

router.get('/params', (req, res) => {
  const name = req.query.name || 'Anonimo';
  res.send(`Bienvenido, ${name}!`);
});

module.exports = router;