const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Esta es la ruta 4');
});

router.get('/status', (req, res) => {
  res.sendStatus(418); // I'm a teapot
});

router.get('/vista', (req, res) => {
  res.render('index', { title: 'Página Ejemplo', message: 'Hola desde la vista renderizada.' });
});

module.exports = router;