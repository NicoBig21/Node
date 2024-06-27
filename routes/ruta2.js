const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Esta es la ruta 2');
});

router.get('/redirect', (req, res) => {
  res.redirect('/');
});

router.get('/render', (req, res) => {
  res.render('index', { title: 'Página Renderizada', message: 'Hola desde render()' });
});

module.exports = router;
