const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Esta es la ruta 1');
});

router.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/sample.txt'));
});

router.get('/download', (req, res) => {
  res.download(path.join(__dirname, '../public/sample.txt'), 'sample.txt', (err) => {
    if (err) {
      console.error('Error al descargar el archivo:', err);
      res.sendStatus(500);
    }
  });
});

module.exports = router;
