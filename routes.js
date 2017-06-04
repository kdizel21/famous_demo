var express = require('express');
var router = express.Router();
var db = require('./queries');

router.get('/api/entries', db.getAllEntries);
router.get('/api/entries/:id', db.getSingleEntry);
router.post('/api/entries', db.createEntry);
router.put('/api/entries/:id', db.updateEntry);
router.delete('/api/entries/:id', db.removeEntry);

router.get('/', function (req, res) {
  res.render('./index')
})

module.exports = router;
