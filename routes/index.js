const express = require('express');
const router = express.Router();
const package = require('../package.json');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Welcome to Contoso!',
    version: package.version
  });
});

module.exports = router;